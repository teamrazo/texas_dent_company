import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// GET - Fetch user's payment method
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { paymentMethod: true },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Mask sensitive data for ACH
    let paymentMethod = user.paymentMethod;
    if (paymentMethod?.type === 'ACH' && paymentMethod.achAccountNumber) {
      paymentMethod = {
        ...paymentMethod,
        achAccountNumber: '****' + paymentMethod.achAccountNumber.slice(-4),
        achRoutingNumber: '****' + (paymentMethod.achRoutingNumber?.slice(-4) || ''),
      };
    }

    return NextResponse.json({ paymentMethod });
  } catch (error) {
    console.error('Error fetching payment method:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Create or update payment method
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const { type, achAccountNumber, achRoutingNumber, achAccountHolder, venmoUsername, cashappCashtag, zelleEmailOrPhone } = body;

    // Validate type
    if (!['ACH', 'VENMO', 'CASHAPP', 'ZELLE'].includes(type)) {
      return NextResponse.json(
        { error: 'Invalid payment method type' },
        { status: 400 }
      );
    }

    // Validate required fields based on type
    if (type === 'ACH' && (!achAccountNumber || !achRoutingNumber || !achAccountHolder)) {
      return NextResponse.json(
        { error: 'ACH requires account number, routing number, and account holder name' },
        { status: 400 }
      );
    }
    if (type === 'VENMO' && !venmoUsername) {
      return NextResponse.json(
        { error: 'Venmo requires username or phone' },
        { status: 400 }
      );
    }
    if (type === 'CASHAPP' && !cashappCashtag) {
      return NextResponse.json(
        { error: 'Cash App requires $Cashtag' },
        { status: 400 }
      );
    }
    if (type === 'ZELLE' && !zelleEmailOrPhone) {
      return NextResponse.json(
        { error: 'Zelle requires email or phone' },
        { status: 400 }
      );
    }

    // Upsert payment method
    const paymentMethod = await prisma.paymentMethod.upsert({
      where: { userId: user.id },
      update: {
        type,
        achAccountNumber: type === 'ACH' ? achAccountNumber : null,
        achRoutingNumber: type === 'ACH' ? achRoutingNumber : null,
        achAccountHolder: type === 'ACH' ? achAccountHolder : null,
        venmoUsername: type === 'VENMO' ? venmoUsername : null,
        cashappCashtag: type === 'CASHAPP' ? cashappCashtag : null,
        zelleEmailOrPhone: type === 'ZELLE' ? zelleEmailOrPhone : null,
        isVerified: false, // Reset verification when updated
      },
      create: {
        userId: user.id,
        type,
        achAccountNumber: type === 'ACH' ? achAccountNumber : null,
        achRoutingNumber: type === 'ACH' ? achRoutingNumber : null,
        achAccountHolder: type === 'ACH' ? achAccountHolder : null,
        venmoUsername: type === 'VENMO' ? venmoUsername : null,
        cashappCashtag: type === 'CASHAPP' ? cashappCashtag : null,
        zelleEmailOrPhone: type === 'ZELLE' ? zelleEmailOrPhone : null,
      },
    });

    // Mask sensitive data before returning
    let maskedPaymentMethod = paymentMethod;
    if (paymentMethod.type === 'ACH' && paymentMethod.achAccountNumber) {
      maskedPaymentMethod = {
        ...paymentMethod,
        achAccountNumber: '****' + paymentMethod.achAccountNumber.slice(-4),
        achRoutingNumber: '****' + (paymentMethod.achRoutingNumber?.slice(-4) || ''),
      };
    }

    return NextResponse.json({
      message: 'Payment method saved successfully',
      paymentMethod: maskedPaymentMethod,
    });
  } catch (error) {
    console.error('Error saving payment method:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
