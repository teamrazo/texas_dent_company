import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { mapOpportunityStage } from '@/lib/ghl';

// Verify webhook signature
function verifyWebhookSignature(payload: string, signature: string): boolean {
  const secret = process.env.GHL_WEBHOOK_SECRET;
  if (!secret) return false;
  
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

export async function POST(request: NextRequest) {
  try {
    const payload = await request.text();
    const signature = request.headers.get('x-ghl-signature') || '';
    
    // Verify signature in production
    if (process.env.NODE_ENV === 'production') {
      if (!verifyWebhookSignature(payload, signature)) {
        console.error('Invalid webhook signature');
        return NextResponse.json(
          { error: 'Invalid signature' },
          { status: 401 }
        );
      }
    }
    
    const data = JSON.parse(payload);
    const eventType = data.type || data.event;
    
    console.log('GHL Webhook received:', eventType, data);
    
    // Handle different webhook events
    switch (eventType) {
      case 'contact.created':
        await handleContactCreated(data);
        break;
      
      case 'contact.updated':
        await handleContactUpdated(data);
        break;
      
      case 'opportunity.created':
        await handleOpportunityCreated(data);
        break;
      
      case 'opportunity.stageChanged':
        await handleOpportunityStageChanged(data);
        break;
      
      case 'opportunity.deleted':
        await handleOpportunityDeleted(data);
        break;
      
      default:
        console.log('Unhandled webhook event:', eventType);
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handler functions - to be implemented with database operations

async function handleContactCreated(data: Record<string, unknown>) {
  // TODO: Create or update user in database
  // TODO: Check if contact has partner tags
  console.log('Contact created:', data.contactId);
}

async function handleContactUpdated(data: Record<string, unknown>) {
  // TODO: Update user in database
  // TODO: Sync tags and custom fields
  console.log('Contact updated:', data.contactId);
}

async function handleOpportunityCreated(data: Record<string, unknown>) {
  // TODO: Create referral record if associated with partner
  // TODO: Track affiliate attribution
  console.log('Opportunity created:', data.opportunityId);
}

async function handleOpportunityStageChanged(data: Record<string, unknown>) {
  // TODO: Update referral status
  // TODO: Calculate commissions on completion
  const newStage = data.stage as string;
  const internalStatus = mapOpportunityStage(newStage);
  console.log('Opportunity stage changed:', data.opportunityId, 'to', internalStatus);
}

async function handleOpportunityDeleted(data: Record<string, unknown>) {
  // TODO: Update referral status to LOST
  console.log('Opportunity deleted:', data.opportunityId);
}
