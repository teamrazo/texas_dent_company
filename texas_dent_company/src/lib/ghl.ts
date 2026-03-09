// Texas Dent Company - GoHighLevel Integration
// =============================================================================

import { GHL_TAGS } from './constants';

const GHL_BASE_URL = process.env.GHL_BASE_URL || 'https://rest.gohighlevel.com/v1';
const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

// =============================================================================
// Tag Naming Convention (Based on InfusionSoft Best Practices)
// =============================================================================
// Categories:
// - Trigger: Temporary tags that trigger automations (remove after use)
// - Status: Where contact is in a process (temporary, one at a time)
// - Activity: What the person has done (permanent)
// - Profile: Demographics and psychographics (permanent)
// - Reporting: Tags solely for reporting purposes
//
// Nomenclature Examples:
// - Trigger - Partner Registration - Start
// - Status - Partner Pipeline - Active
// - Activity - Partner Program - Registered
// - Profile - Partner - Type - Affiliate
// - TDC-PARTNER-ACTIVE (simplified for GHL)
// =============================================================================

interface GHLApiResponse<T> {
  contact?: T;
  contacts?: T[];
  opportunity?: T;
  opportunities?: T[];
}

interface GHLContact {
  id: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  tags?: string[];
  customField?: Record<string, string>;
}

interface CreateContactParams {
  email: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  tags?: string[];
  source?: string;
  customField?: Record<string, string>;
}

// =============================================================================
// API Helper Functions
// =============================================================================

async function ghlFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T | null> {
  if (!GHL_API_KEY) {
    console.error('GHL_API_KEY is not configured');
    return null;
  }

  try {
    const response = await fetch(`${GHL_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`GHL API Error: ${response.status} - ${errorText}`);
      return null;
    }

    return response.json();
  } catch (error) {
    console.error('GHL API Fetch Error:', error);
    return null;
  }
}

// =============================================================================
// Contact Functions
// =============================================================================

/**
 * Search for a contact by email
 */
export async function findContactByEmail(email: string): Promise<GHLContact | null> {
  const result = await ghlFetch<GHLApiResponse<GHLContact>>(
    `/contacts/lookup?email=${encodeURIComponent(email)}`
  );
  
  if (result?.contacts && result.contacts.length > 0) {
    return result.contacts[0];
  }
  
  return null;
}

/**
 * Create a new contact in GHL
 */
export async function createContact(params: CreateContactParams): Promise<GHLContact | null> {
  const result = await ghlFetch<GHLApiResponse<GHLContact>>('/contacts/', {
    method: 'POST',
    body: JSON.stringify({
      locationId: GHL_LOCATION_ID,
      email: params.email,
      phone: params.phone,
      firstName: params.firstName,
      lastName: params.lastName,
      name: params.name,
      tags: params.tags || [],
      source: params.source || 'Website',
      customField: params.customField,
    }),
  });
  
  return result?.contact || null;
}

/**
 * Update an existing contact
 */
export async function updateContact(
  contactId: string,
  params: Partial<CreateContactParams>
): Promise<GHLContact | null> {
  const result = await ghlFetch<GHLApiResponse<GHLContact>>(`/contacts/${contactId}`, {
    method: 'PUT',
    body: JSON.stringify(params),
  });
  
  return result?.contact || null;
}

/**
 * Add tags to a contact
 */
export async function addTagsToContact(
  contactId: string,
  tags: string[]
): Promise<boolean> {
  const result = await ghlFetch<{ success: boolean }>(`/contacts/${contactId}/tags`, {
    method: 'POST',
    body: JSON.stringify({ tags }),
  });
  
  return result?.success ?? false;
}

/**
 * Remove tags from a contact
 */
export async function removeTagsFromContact(
  contactId: string,
  tags: string[]
): Promise<boolean> {
  const result = await ghlFetch<{ success: boolean }>(`/contacts/${contactId}/tags`, {
    method: 'DELETE',
    body: JSON.stringify({ tags }),
  });
  
  return result?.success ?? false;
}

// =============================================================================
// Partner Registration Functions
// =============================================================================

/**
 * Register a new partner in GHL
 * - Check if contact exists
 * - Create if not
 * - Apply partner tags
 * - Generate affiliate ID
 */
export async function registerPartner(params: {
  email: string;
  phone?: string;
  name: string;
}): Promise<{ contactId: string; affiliateId: string } | null> {
  try {
    // Check if contact already exists
    let contact = await findContactByEmail(params.email);
    
    // Generate affiliate ID
    const affiliateId = generateAffiliateId(params.email);
    
    const partnerTags = [
      GHL_TAGS.PARTNER_ACTIVE,
      GHL_TAGS.SOURCE_WEBSITE,
      'Activity - Partner Program - Registered',
    ];
    
    if (contact) {
      // Contact exists, add partner tags
      await addTagsToContact(contact.id, partnerTags);
      
      // Update with affiliate ID
      await updateContact(contact.id, {
        customField: {
          affiliate_id: affiliateId,
        },
      });
    } else {
      // Create new contact
      const nameParts = params.name.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';
      
      contact = await createContact({
        email: params.email,
        phone: params.phone,
        firstName,
        lastName,
        name: params.name,
        tags: partnerTags,
        source: 'Partner Registration',
        customField: {
          affiliate_id: affiliateId,
        },
      });
    }
    
    if (!contact) {
      return null;
    }
    
    return {
      contactId: contact.id,
      affiliateId,
    };
  } catch (error) {
    console.error('Error registering partner in GHL:', error);
    return null;
  }
}

/**
 * Generate a unique affiliate ID from email
 */
function generateAffiliateId(email: string): string {
  const prefix = 'TDC';
  const hash = email
    .toLowerCase()
    .split('')
    .reduce((acc, char) => ((acc << 5) - acc + char.charCodeAt(0)) | 0, 0);
  const uniqueId = Math.abs(hash).toString(36).toUpperCase().slice(0, 6);
  const timestamp = Date.now().toString(36).toUpperCase().slice(-4);
  return `${prefix}-${uniqueId}${timestamp}`;
}

// =============================================================================
// Contact Form Submission
// =============================================================================

/**
 * Submit a contact form to GHL
 */
export async function submitContactForm(params: {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  source: string;
  location?: string;
  affiliateCode?: string;
}): Promise<{ success: boolean; contactId?: string }> {
  try {
    // Check if contact already exists
    let contact = await findContactByEmail(params.email);
    
    const tags = [
      GHL_TAGS.CUSTOMER_NEW,
      GHL_TAGS.SOURCE_WEBSITE,
      `Source - ${params.source}`,
    ];
    
    if (params.location) {
      tags.push(`Location - ${params.location.charAt(0).toUpperCase() + params.location.slice(1)}`);
    }
    
    if (params.affiliateCode) {
      tags.push(GHL_TAGS.SOURCE_PARTNER);
      tags.push(`Affiliate - ${params.affiliateCode}`);
    }
    
    const nameParts = params.name.split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    
    if (contact) {
      // Update existing contact
      await addTagsToContact(contact.id, tags);
    } else {
      // Create new contact
      contact = await createContact({
        email: params.email,
        phone: params.phone,
        firstName,
        lastName,
        name: params.name,
        tags,
        source: params.source,
        customField: {
          message: params.message || '',
          preferred_location: params.location || '',
          affiliate_code: params.affiliateCode || '',
        },
      });
    }
    
    return {
      success: true,
      contactId: contact?.id,
    };
  } catch (error) {
    console.error('Error submitting contact form to GHL:', error);
    return { success: false };
  }
}

// =============================================================================
// Opportunity Stage Mapping
// =============================================================================

export const OPPORTUNITY_STAGE_MAP: Record<string, string> = {
  'new_lead': 'NEW_LEAD',
  'lead': 'LEAD',
  'appointment_scheduled': 'PROSPECT',
  'prospect': 'PROSPECT',
  'damage_assessment': 'DAMAGE_ASSESSMENT',
  'estimate_sent': 'DAMAGE_ASSESSMENT',
  'repair_scheduled': 'REPAIR_SCHEDULED',
  'in_repair': 'IN_PROGRESS',
  'in_progress': 'IN_PROGRESS',
  'completed': 'COMPLETED',
  'delivered': 'COMPLETED',
  'lost': 'LOST',
  'cancelled': 'LOST',
};

/**
 * Map GHL opportunity stage to internal referral status
 */
export function mapOpportunityStage(ghlStage: string): string {
  const normalizedStage = ghlStage.toLowerCase().replace(/[\s-]/g, '_');
  return OPPORTUNITY_STAGE_MAP[normalizedStage] || 'NEW_LEAD';
}
