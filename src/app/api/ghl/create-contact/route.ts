import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { createContact, findContactByEmail, addTagsToContact } from '@/lib/ghl';
import { GHL_TAGS } from '@/lib/constants';

export async function POST(request: Request) {
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
    });

    if (!partner) {
      return NextResponse.json(
        { error: 'Partner not found' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const { name, email, phone, source } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Check if contact already exists in GHL
    let ghlContact = await findContactByEmail(email);
    
    // Parse name
    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Tags to apply
    const tags = [
      GHL_TAGS.CUSTOMER_NEW,
      GHL_TAGS.SOURCE_PARTNER,
      `Affiliate - ${partner.partnerId || partner.id}`,
      'TDC-REFERRAL-LEAD',
    ];

    if (ghlContact) {
      // Contact exists, add tags
      await addTagsToContact(ghlContact.id, tags);
    } else {
      // Create new contact in GHL
      ghlContact = await createContact({
        email,
        phone,
        firstName,
        lastName,
        name,
        tags,
        source: source || 'Partner Referral',
        customField: {
          affiliate_id: partner.partnerId || partner.id,
          referral_partner_name: partner.name || '',
          referral_partner_email: partner.email || '',
        },
      });
    }

    if (!ghlContact) {
      return NextResponse.json(
        { error: 'Failed to create contact in GHL' },
        { status: 500 }
      );
    }

    // Create referral record in database
    const referral = await prisma.referral.create({
      data: {
        partnerId: partner.id,
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        ghlContactId: ghlContact.id,
        status: 'NEW_LEAD',
        source: source || 'Manual Entry',
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Contact created successfully in GHL',
      referral: {
        id: referral.id,
        ghlContactId: ghlContact.id,
        status: referral.status,
      },
    });
  } catch (error) {
    console.error('Error creating GHL contact:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
