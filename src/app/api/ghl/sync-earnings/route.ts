import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// GET - Get earnings data for partner
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get the partner user with referrals and payouts
    const partner = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        referrals: {
          orderBy: { createdAt: 'desc' },
        },
        payouts: {
          orderBy: { requestedAt: 'desc' },
        },
      },
    });

    if (!partner) {
      return NextResponse.json(
        { error: 'Partner not found' },
        { status: 404 }
      );
    }

    // Calculate earnings from completed referrals
    const completedReferrals = partner.referrals.filter(
      r => r.status === 'COMPLETED' && r.commissionAmount
    );

    const totalEarned = completedReferrals.reduce(
      (sum, r) => sum + (r.commissionAmount || 0), 0
    );

    // Pending commissions (completed but not paid)
    const pendingCommissions = completedReferrals
      .filter(r => !r.commissionPaid)
      .reduce((sum, r) => sum + (r.commissionAmount || 0), 0);

    // Total paid out
    const totalPaidOut = partner.payouts
      .filter(p => p.status === 'COMPLETED')
      .reduce((sum, p) => sum + p.amount, 0);

    // Last payout
    const lastPayout = partner.payouts.find(p => p.status === 'COMPLETED');

    // Calculate monthly earnings (last 6 months)
    const now = new Date();
    const monthlyEarnings: Array<{ month: string; year: number; amount: number }> = [];
    
    for (let i = 0; i < 6; i++) {
      const month = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const monthEnd = new Date(now.getFullYear(), now.getMonth() - i + 1, 0);
      
      const monthCommissions = completedReferrals
        .filter(r => {
          const completedDate = r.paidAt || r.updatedAt;
          return completedDate >= month && completedDate <= monthEnd;
        })
        .reduce((sum, r) => sum + (r.commissionAmount || 0), 0);

      monthlyEarnings.push({
        month: month.toLocaleString('default', { month: 'short' }),
        year: month.getFullYear(),
        amount: monthCommissions,
      });
    }

    // Calculate conversion rate and average commission
    const totalReferrals = partner.referrals.length;
    const conversionRate = totalReferrals > 0
      ? Math.round((completedReferrals.length / totalReferrals) * 100)
      : 0;
    const averageCommission = completedReferrals.length > 0
      ? totalEarned / completedReferrals.length
      : 0;

    // Build transactions list
    const transactions = [
      // Commissions
      ...completedReferrals.map(r => ({
        id: r.id,
        type: 'commission' as const,
        description: `Commission - ${r.customerName || 'Referral'}`,
        amount: r.commissionAmount || 0,
        status: r.commissionPaid ? 'completed' : 'pending',
        date: r.updatedAt.toISOString().split('T')[0],
        referralName: r.customerName || '',
      })),
      // Payouts
      ...partner.payouts.map(p => ({
        id: p.id,
        type: 'payout' as const,
        description: `Payout - ${p.paymentMethod}`,
        amount: -p.amount, // Negative for payouts
        status: p.status.toLowerCase(),
        date: (p.completedAt || p.requestedAt).toISOString().split('T')[0],
        referralName: '',
      })),
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return NextResponse.json({
      earnings: {
        totalEarned,
        pendingPayout: pendingCommissions,
        totalPaidOut,
        lastPayout: lastPayout ? {
          amount: lastPayout.amount,
          date: lastPayout.completedAt?.toISOString().split('T')[0] || '',
        } : null,
        lifetimeReferrals: totalReferrals,
        conversionRate,
        averageCommission,
      },
      monthlyEarnings: monthlyEarnings.reverse(),
      transactions,
      payouts: partner.payouts,
    });
  } catch (error) {
    console.error('Error getting earnings data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Calculate and update commission amounts for all referrals
export async function POST() {
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
        referrals: true,
      },
    });

    if (!partner) {
      return NextResponse.json(
        { error: 'Partner not found' },
        { status: 404 }
      );
    }

    // Update commission amounts for referrals with opportunity values
    let updatedCount = 0;
    for (const referral of partner.referrals) {
      if (referral.opportunityValue && !referral.commissionAmount) {
        const commission = referral.opportunityValue * (referral.commissionRate || 0.10);
        
        await prisma.referral.update({
          where: { id: referral.id },
          data: {
            commissionAmount: commission,
          },
        });
        
        updatedCount++;
      }
    }

    // Log the sync
    await prisma.gHLSyncLog.create({
      data: {
        syncType: 'EARNINGS',
        status: 'SUCCESS',
        recordsProcessed: updatedCount,
        completedAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      message: `Updated ${updatedCount} commission amounts`,
    });
  } catch (error) {
    console.error('Error syncing earnings:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
