import { NextRequest, NextResponse } from 'next/server';
import { createContact, findContactByEmail, addTagsToContact } from '@/lib/ghl';
import { prisma } from '@/lib/prisma';
import { GHL_TAGS } from '@/lib/constants';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      locationId,
      firstName,
      lastName,
      email,
      phone,
      smsConsent,
      vehicleYear,
      vehicleMake,
      vehicleModel,
      source,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'First name, last name, and email are required' },
        { status: 400 }
      );
    }

    // Check if contact already exists in GHL
    const existingContact = await findContactByEmail(email);
    
    const tags = [
      GHL_TAGS.CUSTOMER_NEW,
      GHL_TAGS.SOURCE_WEBSITE,
      'TDC-LEAD-INSPECTION',
      'Website - Schedule Inspection',
    ];

    const customFields = {
      vehicle_year: vehicleYear || '',
      vehicle_make: vehicleMake || '',
      vehicle_model: vehicleModel || '',
      lead_source: source || 'Website',
      sms_consent: smsConsent ? 'Yes' : 'No',
    };

    let ghlContactId: string | null = null;

    if (existingContact) {
      // Add tags to existing contact
      ghlContactId = existingContact.id;
      await addTagsToContact(existingContact.id, tags);
    } else {
      // Create new contact in GHL
      const newContact = await createContact({
        firstName,
        lastName,
        email,
        phone: phone || undefined,
        tags,
        customFields,
      });
      
      if (newContact) {
        ghlContactId = newContact.id;
      }
    }

    // Store submission in database
    try {
      await prisma.contactSubmission.create({
        data: {
          name: `${firstName} ${lastName}`,
          email,
          phone: phone || null,
          message: `Vehicle: ${vehicleYear} ${vehicleMake} ${vehicleModel}`,
          source: source || 'Website - Schedule Inspection Form',
          ghlContactId,
          syncedToGhl: !!ghlContactId,
        },
      });
    } catch (dbError) {
      console.error('Database error storing submission:', dbError);
      // Continue even if DB fails - the GHL submission is more important
    }

    return NextResponse.json({
      success: true,
      message: 'Lead submitted successfully',
      contactId: ghlContactId,
    });
  } catch (error) {
    console.error('Error submitting lead to GHL:', error);
    return NextResponse.json(
      { error: 'Failed to submit lead' },
      { status: 500 }
    );
  }
}
