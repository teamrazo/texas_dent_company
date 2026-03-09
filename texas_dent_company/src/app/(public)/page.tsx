import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Shield, Clock, Users, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Hero, ProcessSteps, Services, Stats, Testimonials, CTA, LocationCard } from '@/components/sections';
import { ContactForm } from '@/components/forms';
import { COMPANY, LOCATIONS, TRUST_BADGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Texas Dent Company | Professional Hail Damage Repair in Frisco & Odessa',
  description:
    'Got Hail? You came to the BEST place. Top-rated hail damage repair shop with 500+ 5-star reviews. Insurance approved, free pickup and dropoff, lifetime warranty.',
};

// JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Texas Dent Company',
  description: 'Professional hail damage repair specialists serving North Texas and West Texas.',
  url: 'https://www.texasdentcompany.com',
  telephone: '+1-469-966-7937',
  email: 'estimates@texasdentcompany.com',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '122 Rose Lane, Suite 801',
      addressLocality: 'Frisco',
      addressRegion: 'TX',
      postalCode: '75036',
      addressCountry: 'US',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '4111 S County Rd 1297',
      addressLocality: 'Odessa',
      addressRegion: 'TX',
      postalCode: '79765',
      addressCountry: 'US',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '500',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '13:00',
    },
  ],
  priceRange: '$$',
  image: 'https://m.bbb.org/prod/ProfileImages/2026/4637c26f-f03d-4f1f-81d2-e5426f421fca.jpeg',
  sameAs: [
    'https://www.facebook.com/texasdentcompany',
    'https://www.instagram.com/texasdentcompany',
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary to-background py-16 md:py-24 lg:py-32">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="heading-1 text-foreground">
                Got Hail? You Came to the{' '}
                <span className="text-primary">BEST</span> Place.
              </h1>
              <p className="body-large text-muted-foreground">
                Professional hail damage repair with a PDR-first philosophy. 
                You file the claim. We handle the repair side: inspection, documentation, 
                repair coordination, and rentals.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {TRUST_BADGES.map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{badge}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                    Schedule Inspection
                  </Button>
                </Link>
                <a href={`tel:${COMPANY.phone}`}>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8">
                    <Phone className="h-5 w-5 mr-2" />
                    {COMPANY.phone}
                  </Button>
                </a>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-background rounded-xl p-6 md:p-8 shadow-lg border border-border">
              <h2 className="heading-3 text-foreground mb-2">Get Your Free Inspection</h2>
              <p className="text-muted-foreground mb-6">
                Start with a professional 30-45 minute hail inspection
              </p>
              <ContactForm source="homepage" buttonText="Request Inspection" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Value Propositions */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-2 text-foreground mb-4">Why Choose Texas Dent Company?</h2>
            <p className="body-large text-muted-foreground">
              We are a high-trust, process-driven hail damage repair partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="heading-4 text-foreground mb-2">Approved By All Insurances</h3>
              <p className="text-muted-foreground text-sm">
                We work directly with your insurance on the repair side, making the process seamless.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="heading-4 text-foreground mb-2">Lifetime Warranty</h3>
              <p className="text-muted-foreground text-sm">
                We stand behind our work with a lifetime warranty on all qualified repairs.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="heading-4 text-foreground mb-2">Free Pickup & Dropoff</h3>
              <p className="text-muted-foreground text-sm">
                Concierge-level service with vehicle pickup and dropoff when appropriate.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="heading-4 text-foreground mb-2">Rental Vehicles</h3>
              <p className="text-muted-foreground text-sm">
                18+ vehicle fleet including sedans, trucks, and SUVs that fit your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* Services */}
      <Services />

      {/* Testimonials */}
      <Testimonials />

      {/* Locations */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-2 text-foreground mb-4">Our Locations</h2>
            <p className="body-large text-muted-foreground">
              Serving North Texas and West Texas with professional hail repair services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <LocationCard location={LOCATIONS.frisco} />
            <LocationCard location={LOCATIONS.odessa} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  );
}
