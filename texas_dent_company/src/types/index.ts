// Texas Dent Company - Type Definitions
// =============================================================================

export type UserRole = 'CUSTOMER' | 'PARTNER' | 'ADMIN';

export interface User {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  phone: string | null;
  role: UserRole;
  ghlContactId: string | null;
  partnerId: string | null;
}

export type ReferralStatus = 
  | 'NEW_LEAD'
  | 'LEAD'
  | 'PROSPECT'
  | 'DAMAGE_ASSESSMENT'
  | 'REPAIR_SCHEDULED'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'LOST';

export interface Referral {
  id: string;
  partnerId: string;
  customerId: string | null;
  ghlOpportunityId: string | null;
  status: ReferralStatus;
  commissionAmount: number | null;
  commissionPaid: boolean;
  paidAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface PartnerStats {
  totalReferrals: number;
  leads: number;
  prospects: number;
  damageAssessments: number;
  repairsScheduled: number;
  inProgress: number;
  completed: number;
  lost: number;
  earnedCommissions: number;
  pendingPayout: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  location?: 'frisco' | 'odessa';
  message?: string;
  source?: string;
  affiliateCode?: string;
}

// GHL Integration Types
export interface GHLContact {
  id: string;
  email: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  tags?: string[];
  customField?: Record<string, string>;
}

export interface GHLOpportunity {
  id: string;
  name: string;
  status: string;
  pipelineStageId: string;
  monetaryValue?: number;
  contactId: string;
}

// Tag Types based on InfusionSoft naming convention
export type TagCategory = 
  | 'Trigger'
  | 'Status'
  | 'Activity'
  | 'Profile'
  | 'Reporting';

export interface GHLTag {
  category: TagCategory;
  name: string;
  fullName: string;
}

// Location Data
export interface Location {
  id: string;
  name: string;
  slug: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  serviceRadius: string;
  servingAreas: string[];
  googleMapsUrl: string;
}

// FAQ Item
export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

// Service Item
export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
  features?: string[];
}

// Team Member
export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
}

// Testimonial
export interface Testimonial {
  name: string;
  location?: string;
  rating: number;
  text: string;
  date?: string;
}
