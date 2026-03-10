import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, AlertTriangle, Shield, Clock, Car, FileText, Star, ThumbsUp, Award, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/forms';
import { TRUST_BADGES, LOCATIONS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Claim Help | Not Sure Where to Start?',
  description:
    'Not sure where to start with hail damage? Start with a 30-45 minute professional hail inspection so you know exactly what to do next.',
};

export default function ClaimHelpPage() {
  const trustBadges = [
    { icon: Star, label: 'Over 500 5-Star Reviews' },
    { icon: Shield, label: 'Warranty on All Repairs' },
    { icon: ThumbsUp, label: '100% Satisfaction Guaranteed' },
    { icon: Award, label: 'A+ Rating on BBB' },
  ];

  const processSteps = [
    { number: 1, title: 'File Your Claim', description: 'You file it. We guide you through what to expect.' },
    { number: 2, title: 'Schedule Your Inspection', description: 'Book your 30–45 minute professional lighting-based assessment.' },
    { number: 3, title: 'We Document & Submit', description: 'Thorough documentation prepared and submitted to your carrier.' },
    { number: 4, title: 'Drop Off For Repair', description: 'We handle the repair. You get your vehicle back right.' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60">
          <div className="absolute inset-0 bg-[url('/images/gallery/shop-interior.jpg')] bg-cover bg-center opacity-30" />
        </div>
        
        <div className="container-xl relative z-10 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#BD3728] uppercase tracking-[0.2em] text-sm font-medium mb-6">
              Not Sure Where To Start?
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Start With A <span className="text-[#BD3728]">Professional Inspection</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              30-45 minute professional hail inspection so you know exactly what to do next.
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

      {/* Process Steps */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
              How The <span className="text-[#BD3728]">Process</span> Works
            </h2>
            <p className="text-gray-600">Frisco and Odessa</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {processSteps.map((step) => (
              <div key={step.number} className="flex gap-4 items-start p-4 bg-[#F5F5F5] rounded">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#BD3728] text-white flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Insurance Works */}
      <section className="py-16 md:py-20 bg-[#F5F5F5]">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-montserrat)' }}>
              How Insurance <span className="text-[#BD3728]">Actually</span> Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded p-6 border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-[#BD3728]/10 text-[#BD3728] flex items-center justify-center mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Initial Estimate vs. Supplements
              </h3>
              <p className="text-gray-600 text-sm">
                Your carrier provides an initial estimate. After our inspection, we document additional 
                damage and submit supplements (standard for most hail claims).
              </p>
            </div>

            <div className="bg-white rounded p-6 border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-[#BD3728]/10 text-[#BD3728] flex items-center justify-center mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Coverage Decisions
              </h3>
              <p className="text-gray-600 text-sm">
                Your insurance carrier determines coverage. We provide professional documentation; 
                final decisions rest with the carrier.
              </p>
            </div>

            <div className="bg-white rounded p-6 border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-[#BD3728]/10 text-[#BD3728] flex items-center justify-center mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Why Early Documentation Matters
              </h3>
              <p className="text-gray-600 text-sm">
                Timely, thorough documentation ensures nothing is missed and helps your carrier 
                process the claim efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Inspection Covers */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'var(--font-montserrat)' }}>
              What The <span className="text-[#BD3728]">Inspection</span> Covers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Full lighting-based panel inspection',
                'Damage explanation and repair options (PDR vs conventional)',
                'Timeline expectations for planning',
                'Claims education and next steps',
                'Rental options discussion (18+ vehicle fleet available)',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-[#F5F5F5] rounded p-4">
                  <CheckCircle className="h-5 w-5 text-[#BD3728] mt-0.5 flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Who We're <span className="text-[#BD3728]">Not</span> For
            </h2>
            <p className="text-gray-400 mb-8">
              We believe in honest communication. Texas Dent Company may not be the right fit if you are:
            </p>
            <div className="space-y-4 text-left">
              {[
                'Drivers seeking cash-back or deductible rebates',
                'Shoppers prioritizing lowest price only',
                'Anyone demanding "fastest and cheapest" repairs over long-term quality',
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

      {/* Rental Options */}
      <section className="py-16 md:py-20 bg-[#F5F5F5]">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
              <span className="text-[#BD3728]">Rental</span> Coordination
            </h2>
            <p className="text-gray-600">
              We coordinate rental logistics per your policy. Our 18+ vehicle fleet includes:
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {['Kia Telluride', 'Kia Sorento', 'Nissan Frontier'].map((vehicle, index) => (
              <div key={index} className="bg-white rounded p-4 text-center border border-gray-200">
                <p className="font-semibold text-gray-900">{vehicle}</p>
                <p className="text-gray-500 text-sm">{index === 2 ? 'Truck' : 'SUV'}</p>
              </div>
            ))}
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
              Schedule Your <span className="text-[#BD3728]">Free Inspection</span>
            </h2>
            
            <p className="text-gray-600 mb-8">
              Professional assessment. Clear communication. No obligation.
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
