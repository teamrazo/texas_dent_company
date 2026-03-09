# Texas Dent Company - Web Application

A production-grade Next.js 15 application for Texas Dent Company, featuring professional hail damage repair services, partner portal, and GoHighLevel (GHL) integration.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Authentication**: NextAuth.js (Email + Google OAuth)
- **Database**: PostgreSQL with Prisma ORM
- **CRM Integration**: GoHighLevel (GHL) API
- **Deployment**: Vercel Pro + Cloudflare DNS/WAF

## 📁 Project Structure

```
texas_dent_company/
├── prisma/                 # Database schema
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   ├── (auth)/        # Authentication pages (login, signup)
│   │   ├── (public)/      # Public website pages
│   │   ├── api/           # API routes
│   │   ├── portal/        # Partner portal (protected)
│   │   └── customer-portal/ # Customer portal (protected)
│   ├── components/
│   │   ├── forms/         # Form components
│   │   ├── layout/        # Header, Footer
│   │   ├── portal/        # Portal-specific components
│   │   ├── sections/      # Page sections (Hero, CTA, etc.)
│   │   └── ui/            # shadcn/ui components
│   ├── config/            # Configuration files
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions and integrations
│   ├── styles/            # Global styles
│   └── types/             # TypeScript type definitions
├── .env.local             # Local environment variables
├── .env.example           # Environment variable template
├── .env.staging           # Staging environment
├── .env.production        # Production environment template
└── vercel.json            # Vercel configuration
```

## 🛠 Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database (or use a cloud provider like Supabase, Neon, etc.)

### 1. Clone and Install

```bash
git clone <repository-url>
cd texas_dent_company
npm install
```

### 2. Environment Variables

Copy the example environment file and fill in your values:

```bash
cp .env.example .env.local
```

#### Required Environment Variables

```env
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Texas Dent Company"
NEXT_PUBLIC_COMPANY_PHONE="469-966-7937"
NEXT_PUBLIC_COMPANY_EMAIL="estimates@texasdentcompany.com"

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key  # Generate with: openssl rand -base64 32

# Google OAuth (from Google Cloud Console)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Email Provider (for magic links)
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-email@example.com
EMAIL_SERVER_PASSWORD=your-email-password
EMAIL_FROM=noreply@texasdentcompany.com

# Database (PostgreSQL)
DATABASE_URL="postgresql://user:password@localhost:5432/texas_dent_company?schema=public"

# GoHighLevel Integration
GHL_API_KEY=your-ghl-api-key
GHL_LOCATION_ID=your-ghl-location-id
GHL_BASE_URL=https://rest.gohighlevel.com/v1
GHL_WEBHOOK_SECRET=your-webhook-secret
```

### 3. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# (Optional) Seed database
npx prisma db seed
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🎨 Design System

### Colors

| Variable | HSL Value | Usage |
|----------|-----------|-------|
| Primary | hsl(6 65% 45%) | Brand red |
| Background | hsl(0 0% 100%) | White background |
| Foreground | hsl(0 0% 0%) | Black text |
| Secondary | hsl(0 0% 96%) | Light gray background |
| Muted | hsl(0 0% 42%) | Muted text |

### Typography

- **Headlines**: Montserrat (600, 700 weight)
- **Body**: Inter (400, 500 weight)

### Components

- Rounded-xl containers
- shadcn/ui component library
- No em dashes in copy

## 🔐 Authentication

The application uses NextAuth.js with two providers:

1. **Google OAuth**: Quick sign-in with Google account
2. **Email Magic Links**: Passwordless authentication via email

### Protected Routes

- `/portal/*` - Partner Portal (requires authentication)
- `/customer-portal/*` - Customer Portal (requires authentication)

## 📊 GoHighLevel Integration

### Tag Naming Convention

Based on InfusionSoft best practices:

| Category | Format | Example |
|----------|--------|---------|
| Partner | TDC-PARTNER-{status} | TDC-PARTNER-ACTIVE |
| Referral | TDC-REFERRAL-{status} | TDC-REFERRAL-LEAD |
| Customer | TDC-CUSTOMER-{status} | TDC-CUSTOMER-NEW |
| Source | Source - {origin} | Source - Website |

### Pipeline Stage Mapping

| GHL Stage | Internal Status |
|-----------|-----------------|
| New Lead | NEW_LEAD |
| Appointment Scheduled | PROSPECT |
| Damage Assessment | DAMAGE_ASSESSMENT |
| Repair Scheduled | REPAIR_SCHEDULED |
| In Progress | IN_PROGRESS |
| Completed | COMPLETED |

### Webhook Endpoints

```
POST /api/webhooks/ghl
```

Handles:
- contact.created
- contact.updated
- opportunity.created
- opportunity.stageChanged
- opportunity.deleted

## 🚀 Deployment to Vercel

### 1. Connect Repository

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your Git repository
4. Select "Next.js" as framework

### 2. Configure Environment Variables

In Vercel project settings, add all environment variables from `.env.production`:

- `NEXTAUTH_URL` - Your production URL (https://www.texasdentcompany.com)
- `NEXTAUTH_SECRET` - Generate a new secret for production
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`
- `DATABASE_URL` - Production database connection string
- `GHL_API_KEY` / `GHL_LOCATION_ID`
- All other required variables

### 3. Domain Configuration

1. Add custom domain in Vercel settings
2. Configure DNS in Cloudflare:
   - Add CNAME record pointing to Vercel
   - Enable Cloudflare WAF for additional security

### 4. Deploy

```bash
# Production
git push origin main

# Preview deployments happen automatically on PR branches
```

## 🔒 Security Features

- Content Security Policy (CSP) headers
- Rate limiting on API endpoints
- CSRF protection via NextAuth
- Secure cookies in production
- XSS protection headers
- Frame denial (X-Frame-Options)

## 📱 Pages

### Public Pages
- `/` - Homepage
- `/about` - About Us
- `/services` - Services
- `/faqs` - Frequently Asked Questions
- `/contact` - Contact Form
- `/blog` - Blog (placeholder)
- `/frisco` - Frisco Location
- `/odessa` - Odessa Location
- `/claim-help` - Insurance Claim Help Landing Page
- `/quality` - Quality Standards Landing Page
- `/confirmation` - Form Submission Confirmation

### Authenticated Pages
- `/login` - Sign In
- `/signup` - Partner Registration
- `/portal/dashboard` - Partner Dashboard

## 🧪 Development Commands

```bash
# Development
npm run dev

# Build
npm run build

# Start production server
npm start

# Lint
npm run lint

# Type check
npx tsc --noEmit

# Prisma commands
npx prisma studio      # Open database GUI
npx prisma migrate dev # Run migrations
npx prisma generate    # Generate client
```

## 📄 License

Copyright © 2026 Wilson Solutions Inc. DBA Texas Dent Company. All rights reserved.

## 📞 Support

- **Email**: estimates@texasdentcompany.com
- **Phone**: (469) 966-7937
- **Hours**: Mon-Fri 9-5 | Sat 10-1
