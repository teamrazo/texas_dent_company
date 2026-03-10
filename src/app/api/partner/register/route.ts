import { NextRequest, NextResponse } from 'next/server';
import { registerPartner } from '@/lib/ghl';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Register partner in GHL
    const result = await registerPartner({
      name,
      email,
      phone,
    });

    if (!result) {
      console.error('Failed to register partner in GHL');
      // Still return success - user can still be created in our system
    }

    return NextResponse.json({
      success: true,
      message: 'Partner registered successfully',
      affiliateId: result?.affiliateId,
      ghlContactId: result?.contactId,
    });
  } catch (error) {
    console.error('Partner registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
