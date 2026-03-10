import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, XCircle, AlertTriangle, Shield, Wrench, Car, FileText, Star, ThumbsUp, Award, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/forms';
import { TRUST_BADGES, LOCATIONS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Quality Standards | Had A Rushed Repair Before?',
  description:
    'Had a rushed or frustrating hail repair before? Start with a structured 30-45 minute inspection and see the difference professional standards make.',
};

export default function QualityPage() {
  const trustBadges = [
    { icon: Star, label: 'Over 500 5-Star Reviews' },
    { icon: Shield, label: 'Warranty on All Repairs' },
    { icon: ThumbsUp, label: '100% Satisfaction Guaranteed' },
    { icon: Award, label: 'A+ Rating on BBB' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60">
          <div className="absolute inset-0 bg-[url('/images/gallery/shop-interior.jpg')] bg-cover bg-center opacity-30" />
        </div>
        
        <div className="container-xl relative z-10 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#BD3728] uppercase tracking-[0.2em] text-sm font-medium mb-6">
              Quality Standards
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Had A Rushed Or Frustrating <span className="text-[#BD3728]">Hail Repair</span> Before?
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              See the difference professional standards make with a structured 30-45 minute inspection.
            </p>
            
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#BD3728] text-white font-semibold rounded hover:bg-[#a32f22] transition-colors uppercase tracking-wide">
                <FileText className="h-5 w-5" />
                Schedule Your Inspection
              </button>
            </Link>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded">
                  <badge.icon className="h-6 w-6 text-[#BD3728] mb-2" />
                  <span className="text-white text-sm text-center">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Goes Wrong */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'var(--font-montserrat)' }}>
              What Goes <span className="text-[#BD3728]">Wrong</span> In Hail Repair
            </h2>
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
                <div key={index} className="flex items-start gap-4 bg-[#F5F5F5] rounded p-6">
                  <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Incentive Risk */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <AlertTriangle className="h-12 w-12 text-orange-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Why Incentive-Based Repairs <span className="text-[#BD3728]">Create Risk</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Incentive-driven models prioritize volume over craftsmanship, squeezing repair budgets 
              and compromising long-term quality.
            </p>
            <div className="bg-white/10 rounded p-6 border border-[#BD3728]">
              <p className="text-lg text-white font-medium">
                We prioritize professional outcomes: No incentives. No shortcuts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center" style={{ fontFamily: 'var(--font-montserrat)' }}>
              What <span className="text-[#BD3728]">Professional Standards</span> Look Like
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Thorough, honest repair work with experienced technicians and a structured process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Multi-step quality control',
                'Documented workflow from start to finish',
                'Experienced PDR technicians (15+ years)',
                'Proper lighting and inspection tools',
                'Clear communication at every step',
                'Final QC review before delivery',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-[#F5F5F5] rounded p-4">
                  <CheckCircle className="h-5 w-5 text-[#BD3728] flex-shrink-0" />
                  <span className="text-gray-900">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Inspection Covers */}
      <section className="py-16 md:py-20 bg-[#F5F5F5]">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'var(--font-montserrat)' }}>
              What The <span className="text-[#BD3728]">Inspection</span> Covers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Full lighting-based panel inspection',
                'Damage explanation and repair options',
                'PDR vs conventional assessment',
                'Timeline expectations',
                'Claims education',
                'Rental options discussion',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded p-4 border border-gray-200">
                  <CheckCircle className="h-5 w-5 text-[#BD3728] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-900">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <Wrench className="h-12 w-12 text-[#BD3728] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
              State-Of-The-Art <span className="text-[#BD3728]">Facility</span>
            </h2>
            <p className="text-gray-600">
              Purpose-built for precision dent repair with proper lighting, tools, and workspace 
              to deliver quality results.
            </p>
          </div>
        </div>
      </section>

      {/* Why Texas Dent Company */}
      <section className="py-16 md:py-20 bg-[#F5F5F5]">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Why <span className="text-[#BD3728]">Texas Dent Company</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Trusted by fleets, school districts, and thousands of individual owners',
                'PDR-First Philosophy (preserve factory finish)',
                'Transparent pricing, professional outcomes',
                'Long-term quality over quick fixes',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded p-4 border border-gray-200">
                  <Shield className="h-5 w-5 text-[#BD3728] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-900">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We're Not For */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Who We're <span className="text-[#BD3728]">Not</span> For
            </h2>
            <div className="space-y-4 text-left">
              {[
                'Shoppers prioritizing cash-back rebates or lowest price',
                'Those seeking the "fastest and cheapest" repair',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/5 rounded p-4">
                  <AlertTriangle className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rental */}
      <section className="py-16 md:py-20 bg-[#F5F5F5]">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <Car className="h-12 w-12 text-[#BD3728] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Need A Vehicle While Yours Is <span className="text-[#BD3728]">Being Repaired</span>?
            </h2>
            <p className="text-gray-600 mb-8">
              Verify rental coverage with your carrier. Our 18+ vehicle fleet is available.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['Nissan Frontier', 'Kia Telluride', 'Kia Sorento'].map((vehicle, index) => (
                <div key={index} className="bg-white rounded p-4 border border-gray-200">
                  <p className="font-semibold text-gray-900">{vehicle}</p>
                  <p className="text-sm text-gray-500">{index === 0 ? 'Truck' : 'SUV'}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Service <span className="text-[#BD3728]">Areas</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border border-gray-200 rounded p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Frisco Location
              </h3>
              <div className="flex items-start gap-2 text-gray-600 mb-2">
                <MapPin className="h-5 w-5 text-[#BD3728] flex-shrink-0 mt-0.5" />
                <div>
                  <p>{LOCATIONS.frisco.address}</p>
                  <p>{LOCATIONS.frisco.city}, {LOCATIONS.frisco.state} {LOCATIONS.frisco.zip}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3">{LOCATIONS.frisco.serviceRadius}</p>
            </div>
            
            <div className="border border-gray-200 rounded p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Odessa Location
              </h3>
              <div className="flex items-start gap-2 text-gray-600 mb-2">
                <MapPin className="h-5 w-5 text-[#BD3728] flex-shrink-0 mt-0.5" />
                <div>
                  <p>{LOCATIONS.odessa.address}</p>
                  <p>{LOCATIONS.odessa.city}, {LOCATIONS.odessa.state} {LOCATIONS.odessa.zip}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3">Serving {LOCATIONS.odessa.servingAreas.join(', ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[#BD3728] uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Ready To Start?
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
              See The Difference <span className="text-[#BD3728]">Professional Standards</span> Make
            </h2>
            
            <p className="text-gray-600 mb-8">
              Schedule your inspection today.
            </p>
            
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#BD3728] text-white font-semibold rounded hover:bg-[#a32f22] transition-colors uppercase tracking-wide">
                <FileText className="h-5 w-5" />
                Schedule Your Inspection
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
