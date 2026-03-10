import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { mapOpportunityStage } from '@/lib/ghl';

const GHL_BASE_URL = process.env.GHL_BASE_URL || 'https://rest.gohighlevel.com/v1';
const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

interface GHLOpportunity {
  id: string;
  name: string;
  status: string;
  pipelineStageId?: string;
  monetaryValue?: number;
  contact?: {
    id: string;
    email?: string;
    name?: string;
  };
}

// Fetch opportunities from GHL
async function fetchGHLOpportunities(): Promise<GHLOpportunity[]> {
  if (!GHL_API_KEY) {
    console.error('GHL_API_KEY not configured');
    return [];
  }

  try {
    const response = await fetch(`${GHL_BASE_URL}/opportunities/?locationId=${GHL_LOCATION_ID}`, {
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch opportunities from GHL:', response.status);
      return [];
    }

    const data = await response.json();
    return data.opportunities || [];
  } catch (error) {
    console.error('Error fetching GHL opportunities:', error);
    return [];
  }
}

// POST - Sync opportunities for a partner
export async function POST() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get the partner user
    const partner = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        referrals: true,
      },
    });

    if (!partner) {
      return NextResponse.json(
        { error: 'Partner not found' },
        { status: 404 }
      );
    }

    // Fetch opportunities from GHL
    const ghlOpportunities = await fetchGHLOpportunities();

    // Create a map of GHL contact IDs from partner's referrals
    const referralsByContactId = new Map(
      partner.referrals
        .filter(r => r.ghlContactId)
        .map(r => [r.ghlContactId!, r])
    );

    let updatedCount = 0;
    const updates: Array<{ id: string; status: string; opportunityValue: number | null }> = [];

    // Match opportunities with referrals
    for (const opp of ghlOpportunities) {
      if (opp.contact?.id && referralsByContactId.has(opp.contact.id)) {
        const referral = referralsByContactId.get(opp.contact.id)!;
        
        // Map GHL stage to our status
        const newStatus = mapOpportunityStage(opp.status);
        const opportunityValue = opp.monetaryValue || null;

        // Check if update is needed
        if (referral.status !== newStatus || 
            referral.opportunityValue !== opportunityValue || 
            referral.ghlOpportunityId !== opp.id) {
          
          updates.push({
            id: referral.id,
            status: newStatus,
            opportunityValue,
          });

          // Update referral
          await prisma.referral.update({
            where: { id: referral.id },
            data: {
              ghlOpportunityId: opp.id,
              status: newStatus,
              opportunityValue,
              lastSyncedAt: new Date(),
              // Calculate commission if completed
              commissionAmount: newStatus === 'COMPLETED' && opportunityValue
                ? opportunityValue * (referral.commissionRate || 0.10)
                : referral.commissionAmount,
            },
          });

          updatedCount++;
        }
      }
    }

    // Log the sync
    await prisma.gHLSyncLog.create({
      data: {
        syncType: 'OPPORTUNITIES',
        status: 'SUCCESS',
        recordsProcessed: updatedCount,
        completedAt: new Date(),
      },
    });

    // Calculate stats
    const totalReferrals = partner.referrals.length;
    const completedReferrals = partner.referrals.filter(r => r.status === 'COMPLETED').length + 
      updates.filter(u => u.status === 'COMPLETED').length;
    const activeReferrals = totalReferrals - completedReferrals - 
      partner.referrals.filter(r => r.status === 'LOST').length;
    const conversionRate = totalReferrals > 0 
      ? Math.round((completedReferrals / totalReferrals) * 100) 
      : 0;

    return NextResponse.json({
      success: true,
      message: `Synced ${updatedCount} opportunities`,
      stats: {
        totalReferrals,
        activeReferrals,
        completedReferrals,
        conversionRate,
        updatedCount,
      },
    });
  } catch (error) {
    console.error('Error syncing opportunities:', error);
    
    // Log the error
    await prisma.gHLSyncLog.create({
      data: {
        syncType: 'OPPORTUNITIES',
        status: 'FAILED',
        errorMessage: error instanceof Error ? error.message : 'Unknown error',
        completedAt: new Date(),
      },
    });

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET - Get current sync status and stats
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get the partner user with referrals
    const partner = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        referrals: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!partner) {
      return NextResponse.json(
        { error: 'Partner not found' },
        { status: 404 }
      );
    }

    // Calculate stats
    const totalReferrals = partner.referrals.length;
    const completedReferrals = partner.referrals.filter(r => r.status === 'COMPLETED').length;
    const lostReferrals = partner.referrals.filter(r => r.status === 'LOST').length;
    const activeReferrals = totalReferrals - completedReferrals - lostReferrals;
    const conversionRate = totalReferrals > 0 
      ? Math.round((completedReferrals / totalReferrals) * 100) 
      : 0;

    // Get last sync
    const lastSync = await prisma.gHLSyncLog.findFirst({
      where: { syncType: 'OPPORTUNITIES' },
      orderBy: { startedAt: 'desc' },
    });

    return NextResponse.json({
      stats: {
        totalReferrals,
        activeReferrals,
        completedReferrals,
        lostReferrals,
        conversionRate,
      },
      referrals: partner.referrals,
      lastSync: lastSync ? {
        status: lastSync.status,
        recordsProcessed: lastSync.recordsProcessed,
        syncedAt: lastSync.completedAt || lastSync.startedAt,
      } : null,
    });
  } catch (error) {
    console.error('Error getting opportunity stats:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
