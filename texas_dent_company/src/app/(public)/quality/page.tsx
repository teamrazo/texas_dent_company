import { Metadata } from 'next';
import { CheckCircle, XCircle, AlertTriangle, Shield, Wrench, Car } from 'lucide-react';
import { ContactForm } from '@/components/forms';
import { ProcessSteps, CTA } from '@/components/sections';
import { TRUST_BADGES, LOCATIONS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Quality Standards | Had A Rushed Repair Before?',
  description:
    'Had a rushed or frustrating hail repair before? Start with a structured 30-45 minute inspection and see the difference professional standards make.',
};

export default function QualityPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary to-background">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="heading-1 text-foreground">
                Had A Rushed Or Frustrating <span className="text-primary">Hail Repair</span> Before?
              </h1>
              <p className="body-large text-muted-foreground">
                Start with a structured 30-45 minute inspection and see the difference professional standards make.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4">
                {TRUST_BADGES.map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-background rounded-xl p-6 md:p-8 shadow-lg border border-border">
              <h2 className="heading-3 text-foreground mb-2">Schedule Your Inspection</h2>
              <p className="text-muted-foreground mb-6">
                Experience the difference of professional standards.
              </p>
              <ContactForm source="quality-page" buttonText="Schedule Inspection" />
            </div>
          </div>
        </div>
      </section>

      {/* How Process Works */}
      <ProcessSteps />

      {/* What Goes Wrong */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-foreground mb-8 text-center">What Goes Wrong In Hail Repair</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Rushed inspections',
                  description: 'Quick walk-arounds that miss damage on multiple panels, leading to incomplete claims.',
                },
                {
                  title: 'Incomplete documentation',
                  description: 'Insufficient photo evidence and measurement data.',
                },
                {
                  title: 'Incentive-driven shortcuts',
                  description: 'Prioritizing volume and rebates over craftsmanship.',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-secondary rounded-xl p-6">
                  <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="heading-4 text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Incentive Risk */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <AlertTriangle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h2 className="heading-2 text-foreground mb-4">Why Incentive-Based Repairs Create Risk</h2>
            <p className="text-muted-foreground mb-8">
              Incentive-driven models prioritize volume over craftsmanship, squeezing repair budgets 
              and compromising long-term quality.
            </p>
            <div className="bg-background rounded-xl p-6 border border-primary">
              <p className="text-lg text-foreground font-medium">
                We prioritize professional outcomes: No incentives. No shortcuts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-foreground mb-8 text-center">What Professional Standards Look Like</h2>
            <p className="text-muted-foreground text-center mb-8">
              Thorough, honest repair work with experienced technicians and a structured process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Multi-step quality control',
                'Documented workflow from start to finish',
                'Experienced PDR technicians (15+ years)',
                'Proper lighting and inspection tools',
                'Clear communication at every step',
                'Final QC review before delivery',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-secondary rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Inspection Covers */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-foreground mb-8 text-center">
              What The 30 To 45 Minute Inspection Covers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Full lighting-based panel inspection',
                'Damage explanation and repair options',
                'PDR vs conventional assessment',
                'Timeline expectations',
                'Claims education',
                'Rental options discussion',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-background rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="heading-2 text-foreground mb-4">State-Of-The-Art Facility</h2>
            <p className="text-muted-foreground">
              Purpose-built for precision dent repair with proper lighting, tools, and workspace 
              to deliver quality results.
            </p>
          </div>
        </div>
      </section>

      {/* Why Texas Dent Company */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-foreground mb-8 text-center">Why Texas Dent Company</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Trusted by fleets, school districts, and thousands of individual owners',
                'PDR-First Philosophy (preserve factory finish)',
                'Transparent pricing, professional outcomes',
                'Long-term quality over quick fixes',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-background rounded-lg p-4">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We're Not For */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-foreground mb-4 text-center">Who We're Not For</h2>
            <div className="space-y-4">
              {[
                'Shoppers prioritizing cash-back rebates or lowest price',
                'Those seeking the "fastest and cheapest" repair',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-secondary rounded-lg p-4">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rental */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <Car className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="heading-2 text-foreground mb-4">Need A Vehicle While Yours Is Being Repaired?</h2>
            <p className="text-muted-foreground mb-6">
              Verify rental coverage with your carrier. Our 18+ vehicle fleet is available.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-background rounded-xl p-4 border border-border">
                <p className="font-semibold text-foreground">Nissan Frontier</p>
                <p className="text-sm text-muted-foreground">Truck</p>
              </div>
              <div className="bg-background rounded-xl p-4 border border-border">
                <p className="font-semibold text-foreground">Kia Telluride</p>
                <p className="text-sm text-muted-foreground">SUV</p>
              </div>
              <div className="bg-background rounded-xl p-4 border border-border">
                <p className="font-semibold text-foreground">Kia Sorento</p>
                <p className="text-sm text-muted-foreground">SUV</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <h2 className="heading-2 text-foreground mb-8 text-center">Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-secondary rounded-xl p-6">
              <h3 className="heading-4 text-foreground mb-2">Frisco</h3>
              <p className="text-muted-foreground text-sm mb-2">
                {LOCATIONS.frisco.address}<br />
                {LOCATIONS.frisco.city}, {LOCATIONS.frisco.state} {LOCATIONS.frisco.zip}
              </p>
              <p className="text-muted-foreground text-sm">
                {LOCATIONS.frisco.serviceRadius}
              </p>
            </div>
            <div className="bg-secondary rounded-xl p-6">
              <h3 className="heading-4 text-foreground mb-2">Odessa</h3>
              <p className="text-muted-foreground text-sm mb-2">
                {LOCATIONS.odessa.address}<br />
                {LOCATIONS.odessa.city}, {LOCATIONS.odessa.state} {LOCATIONS.odessa.zip}
              </p>
              <p className="text-muted-foreground text-sm">
                Serving {LOCATIONS.odessa.servingAreas.join(', ')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready To Start?"
        description="See the difference professional standards make."
      />
    </>
  );
}
