// Texas Dent Company - Constants
// =============================================================================

// Company Info
export const COMPANY = {
  name: 'Texas Dent Company',
  legalName: 'Wilson Solutions Inc. DBA Texas Dent Company',
  phone: '469-966-7937',
  email: 'estimates@texasdentcompany.com',
  supportEmail: 'support@texasdentcompany.com',
  website: 'https://www.texasdentcompany.com',
  hours: {
    weekdays: 'Mon-Fri 9-5',
    saturday: 'Sat 10-1',
    sunday: 'Sun Closed',
  },
  social: {
    facebook: 'https://www.facebook.com/texasdentcompany',
    instagram: 'https://www.instagram.com/texasdentcompany',
    google: 'https://g.page/texas-dent-company',
  },
};

// Locations
export const LOCATIONS = {
  frisco: {
    id: 'frisco',
    name: 'Frisco (Home Office)',
    slug: 'frisco',
    address: '122 Rose Lane, Suite 801',
    city: 'Frisco',
    state: 'TX',
    zip: '75036',
    phone: '469-966-7937',
    email: 'estimates@texasdentcompany.com',
    hours: {
      weekdays: 'Mon-Fri 9-5',
      saturday: 'Sat 10-1',
      sunday: 'Sun Closed',
    },
    serviceRadius: '~25-mile radius in North Texas',
    servingAreas: ['Frisco', 'Plano', 'McKinney', 'Allen', 'The Colony', 'Prosper', 'Celina', 'Little Elm', 'Lewisville', 'Carrollton', 'Richardson', 'Dallas'],
    googleMapsUrl: 'https://maps.google.com/?q=122+Rose+Lane+Suite+801+Frisco+TX+75036',
  },
  odessa: {
    id: 'odessa',
    name: 'Odessa (Satellite Shop)',
    slug: 'odessa',
    address: '4111 S County Rd 1297',
    city: 'Odessa',
    state: 'TX',
    zip: '79765',
    phone: '469-966-7937',
    email: 'estimates@texasdentcompany.com',
    hours: {
      weekdays: 'Mon-Fri 9-5',
      saturday: 'Sat 10-1',
      sunday: 'Sun Closed',
    },
    serviceRadius: 'Serving West Texas',
    servingAreas: ['Odessa', 'Midland', 'Fort Stockton', 'Big Spring', 'Pecos', 'Crane'],
    googleMapsUrl: 'https://maps.google.com/?q=4111+S+County+Rd+1297+Odessa+TX+79765',
  },
};

// Navigation Links
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about', children: [
    { label: 'Our Story', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ]},
  { label: 'Locations', href: '/frisco', children: [
    { label: 'Frisco (Home Office)', href: '/frisco' },
    { label: 'Odessa (Satellite)', href: '/odessa' },
  ]},
  { label: 'FAQs', href: '/faqs' },
  { label: 'Blog', href: '/blog' },
  { label: 'Partner Program', href: '/partner-program' },
];

// Referral Status Mapping (GHL Pipeline Stages)
export const REFERRAL_STATUS_MAP = {
  NEW_LEAD: { label: 'New Lead', color: 'bg-blue-100 text-blue-800' },
  LEAD: { label: 'Lead', color: 'bg-blue-200 text-blue-900' },
  PROSPECT: { label: 'Prospect', color: 'bg-yellow-100 text-yellow-800' },
  DAMAGE_ASSESSMENT: { label: 'Damage Assessment', color: 'bg-orange-100 text-orange-800' },
  REPAIR_SCHEDULED: { label: 'Repair Scheduled', color: 'bg-purple-100 text-purple-800' },
  IN_PROGRESS: { label: 'In Progress', color: 'bg-indigo-100 text-indigo-800' },
  COMPLETED: { label: 'Completed', color: 'bg-green-100 text-green-800' },
  LOST: { label: 'Lost', color: 'bg-gray-100 text-gray-800' },
};

// GHL Tag Prefixes (Based on InfusionSoft naming convention)
export const GHL_TAG_PREFIXES = {
  PARTNER: 'TDC-PARTNER',
  REFERRAL: 'TDC-REFERRAL',
  CUSTOMER: 'TDC-CUSTOMER',
  STATUS: 'Status',
  ACTIVITY: 'Activity',
  PROFILE: 'Profile',
  TRIGGER: 'Trigger',
};

// Pre-defined GHL Tags
export const GHL_TAGS = {
  // Partner Tags
  PARTNER_ACTIVE: 'TDC-PARTNER-ACTIVE',
  PARTNER_INACTIVE: 'TDC-PARTNER-INACTIVE',
  PARTNER_PENDING: 'TDC-PARTNER-PENDING',
  
  // Referral Tags
  REFERRAL_LEAD: 'TDC-REFERRAL-LEAD',
  REFERRAL_PROSPECT: 'TDC-REFERRAL-PROSPECT',
  REFERRAL_BOOKED: 'TDC-REFERRAL-BOOKED',
  REFERRAL_COMPLETED: 'TDC-REFERRAL-COMPLETED',
  
  // Customer Tags
  CUSTOMER_NEW: 'TDC-CUSTOMER-NEW',
  CUSTOMER_ACTIVE: 'TDC-CUSTOMER-ACTIVE',
  CUSTOMER_COMPLETED: 'TDC-CUSTOMER-COMPLETED',
  
  // Source Tags
  SOURCE_WEBSITE: 'Source - Website',
  SOURCE_CLAIM_HELP: 'Source - Claim Help Page',
  SOURCE_QUALITY: 'Source - Quality Page',
  SOURCE_PARTNER: 'Source - Partner Referral',
};

// Services
export const SERVICES = [
  {
    title: 'Professional Hail Inspection',
    description: 'Comprehensive 30-45 minute lighting-based hail inspection with full documentation.',
    icon: 'Search',
    features: [
      'Full lighting-based panel inspection',
      'Damage explanation and repair options',
      'PDR vs conventional assessment',
      'Timeline expectations',
      'Claims education',
    ],
  },
  {
    title: 'Paintless Dent Repair (PDR)',
    description: 'Premium PDR-first repair philosophy that preserves your factory finish.',
    icon: 'Wrench',
    features: [
      'Preserves factory paint and finish',
      'Faster repair timelines',
      'Stronger long-term durability',
      'No body filler or repainting',
      'OEM-compliant repairs',
    ],
  },
  {
    title: 'Insurance Claims Support',
    description: 'We guide you through the repair-side of the insurance process.',
    icon: 'FileText',
    features: [
      'Repair-side claims coordination',
      'Documentation and estimate submission',
      'Supplement management',
      'You file the claim, we handle repairs',
    ],
  },
  {
    title: 'Rental Coordination',
    description: 'Full rental vehicle coordination while your car is being repaired.',
    icon: 'Car',
    features: [
      '18+ vehicle rental fleet',
      'Sedans, trucks, and SUVs available',
      'Insurance rental verification',
      'Enterprise coordination',
    ],
  },
];

// Stats
export const STATS = [
  { value: '500+', label: '5-Star Reviews' },
  { value: 'A+', label: 'BBB Rating' },
  { value: '15+', label: 'Years Experience' },
  { value: '1000s', label: 'Vehicles Repaired' },
];

// Trust Badges
export const TRUST_BADGES = [
  'Over 500 5-Star Reviews',
  'Warranty on All Repairs',
  '100% Satisfaction Guaranteed',
  'A+ Rating on BBB',
];

// Process Steps
export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'File Your Claim',
    description: 'You file it. We guide you through what to expect.',
  },
  {
    step: 2,
    title: 'Schedule Your Inspection',
    description: 'Book your 30-45 minute professional lighting-based assessment.',
  },
  {
    step: 3,
    title: 'We Document and Submit',
    description: 'Thorough documentation prepared and submitted to your carrier.',
  },
  {
    step: 4,
    title: 'Drop Off For Repair',
    description: 'We handle the repair. You get your vehicle back right.',
  },
];
