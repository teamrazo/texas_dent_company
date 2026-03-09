import { Metadata } from 'next';
import { CheckCircle, AlertTriangle, Shield, Clock, Car, FileText } from 'lucide-react';
import { ContactForm } from '@/components/forms';
import { ProcessSteps, CTA } from '@/components/sections';
import { TRUST_BADGES, LOCATIONS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Claim Help | Not Sure Where to Start?',
  description:
    'Not sure where to start with hail damage? Start with a 30-45 minute professional hail inspection so you know exactly what to do next.',
};

export default function ClaimHelpPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary to-background">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="heading-1 text-foreground">
                Not Sure Where To Start With <span className="text-primary">Hail Damage</span>?
              </h1>
              <p className="body-large text-muted-foreground">
                Start with a 30-45 minute professional hail inspection so you know exactly what to do next.
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
              <h2 className="heading-3 text-foreground mb-2">Get Your Free Inspection</h2>
              <p className="text-muted-foreground mb-6">
                Start with a professional assessment and know exactly what to do next.
              </p>
              <ContactForm source="claim-help" buttonText="Schedule Inspection" />
            </div>
          </div>
        </div>
      </section>

      {/* How Process Works */}
      <ProcessSteps
        title="How The Process Works"
        subtitle="Frisco and Odessa"
      />

      {/* How Insurance Actually Works */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-2 text-foreground mb-4">How Insurance Actually Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-secondary rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="heading-4 text-foreground mb-3">Initial Estimate vs. Supplements</h3>
              <p className="text-muted-foreground text-sm">
                Your carrier provides an initial estimate. After our inspection, we document additional 
                damage and submit supplements (standard for most hail claims).
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="heading-4 text-foreground mb-3">Coverage Decisions</h3>
              <p className="text-muted-foreground text-sm">
                Your insurance carrier determines coverage. We provide professional documentation; 
                final decisions rest with the carrier.
              </p>
            </div>

            <div className="bg-secondary rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="heading-4 text-foreground mb-3">Why Early Documentation Matters</h3>
              <p className="text-muted-foreground text-sm">
                Timely, thorough documentation ensures nothing is missed and helps your carrier 
                process the claim efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What The Inspection Covers */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-foreground mb-8 text-center">
              What The 30 To 45 Minute Inspection Covers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Full lighting-based panel inspection',
                'Damage explanation and repair options (PDR vs conventional)',
                'Timeline expectations for planning',
                'Claims education and next steps',
                'Rental options discussion (18+ vehicle fleet available)',
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

      {/* Who We're Not For */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-foreground mb-4 text-center">Who We're Not For</h2>
            <p className="text-muted-foreground text-center mb-8">
              We believe in honest communication. Texas Dent Company may not be the right fit if you are:
            </p>
            <div className="space-y-4">
              {[
                'Drivers seeking cash-back or deductible rebates',
                'Shoppers prioritizing lowest price only',
                'Anyone demanding "fastest and cheapest" repairs over long-term quality',
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

      {/* Rental Options */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <Car className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="heading-2 text-foreground mb-4">Vehicle Rental Options</h2>
            <p className="text-muted-foreground mb-8">
              We coordinate rental logistics per your policy. If rental is not covered, our 18+ vehicle 
              fleet is available including:
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
        description="Schedule your professional hail inspection today."
      />
    </>
  );
}
