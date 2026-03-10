import { NextRequest, NextResponse } from 'next/server';
import { submitContactForm } from '@/lib/ghl';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, location, message, source, affiliateCode } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Submit to GHL
    const result = await submitContactForm({
      name,
      email,
      phone,
      message,
      source: source || 'website',
      location,
      affiliateCode,
    });

    if (!result.success) {
      console.error('Failed to submit to GHL');
      // Still return success to user - we can handle GHL failures separately
    }

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
