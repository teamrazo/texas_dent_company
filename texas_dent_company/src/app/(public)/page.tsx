import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Shield, ThumbsUp, Award, FileText, MapPin } from 'lucide-react';
import { BeforeAfterGallery } from '@/components/sections/BeforeAfterGallery';
import { FacilitySection } from '@/components/sections/FacilitySection';
import { RentalSection } from '@/components/sections/RentalSection';
import { LOCATIONS } from '@/lib/constants';

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section - Dark with background image */}
      <section className="relative min-h-[650px] flex items-center bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/facility/tesla-in-shop.png"
            alt="Texas Dent Company Shop"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            {/* Tagline */}
            <p className="text-[#BD3728] uppercase tracking-[0.2em] text-sm font-semibold mb-6">
              Where Texas Goes For Dent Repair
            </p>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Professional Hail Repair In{' '}
              <span className="text-[#BD3728]">North Texas</span> And{' '}
              <span className="text-[#BD3728]">West Texas</span>
            </h1>
            
            {/* Subtext */}
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Structured process. Clear communication. Start with a 30–45 minute professional hail inspection.
            </p>
            
            {/* CTA Button */}
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#BD3728] text-white font-bold rounded hover:bg-[#a32f22] transition-colors uppercase tracking-wide text-lg">
                <FileText className="h-5 w-5" />
                Schedule Your Inspection
              </button>
            </Link>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl">
                  <badge.icon className="h-6 w-6 text-[#BD3728] mb-2" />
                  <span className="text-white text-sm text-center font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#BD3728] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Simple & Transparent
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
              How The <span className="text-[#BD3728]">Process</span> Works
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Steps */}
            <div className="space-y-6">
              {processSteps.map((step) => (
                <div key={step.number} className="flex gap-4 items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#BD3728] text-white flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
              
              <div className="pt-4">
                <Link href="/contact">
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#BD3728] text-white font-semibold rounded hover:bg-[#a32f22] transition-colors uppercase tracking-wide text-sm">
                    <FileText className="h-4 w-4" />
                    Schedule Your Inspection
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/facility/shop-bmw-2.webp" 
                alt="Professional hail inspection"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <BeforeAfterGallery />

      {/* Facility Section */}
      <FacilitySection />

      {/* Rental Section */}
      <RentalSection />

      {/* Quality Standards Section */}
      <section className="py-16 md:py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/facility/shop-bmw-1.webp"
            alt="Shop background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#BD3728] font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Quality Matters
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Not All Hail Repair Is Executed To The{' '}
              <span className="text-[#BD3728]">Same Standard</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We use a PDR-first philosophy to preserve your factory finish. Our 15+ year technicians 
              work under professional lighting with no rushed timelines, no incentive-driven shortcuts, 
              and no compromises. Every repair is documented and verified before your vehicle leaves the shop.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#BD3728] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Convenient Locations
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Service <span className="text-[#BD3728]">Areas</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Frisco Location */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-xl text-[#BD3728] mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Frisco
              </h3>
              <div className="flex items-start gap-3 text-gray-700 mb-4">
                <MapPin className="h-5 w-5 text-[#BD3728] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">{LOCATIONS.frisco.address}</p>
                  <p>{LOCATIONS.frisco.city}, {LOCATIONS.frisco.state} {LOCATIONS.frisco.zip}</p>
                </div>
              </div>
              <p className="text-sm text-black font-semibold mb-1">25-mile service radius</p>
              <p className="text-sm text-gray-500">
                Serving North Texas: Plano, McKinney, Allen, The Colony and surrounding areas
              </p>
            </div>
            
            {/* Odessa Location */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-xl text-[#BD3728] mb-4 uppercase tracking-wide" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Odessa
              </h3>
              <div className="flex items-start gap-3 text-gray-700 mb-4">
                <MapPin className="h-5 w-5 text-[#BD3728] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">{LOCATIONS.odessa.address}</p>
                  <p>{LOCATIONS.odessa.city}, {LOCATIONS.odessa.state} {LOCATIONS.odessa.zip}</p>
                </div>
              </div>
              <p className="text-sm text-black font-semibold mb-1">Regional service coverage</p>
              <p className="text-sm text-gray-500">
                Serving Midland, Big Spring, Pecos, Crane, Fort Stockton & surrounding areas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Logo */}
            <div className="w-20 h-20 bg-[#BD3728] rounded-lg flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
              TD
            </div>
            
            <p className="text-[#BD3728] uppercase tracking-[0.2em] text-sm font-semibold mb-4">
              Where Texas Goes For Dent Repair
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Schedule Your <span className="text-[#BD3728]">30–45 Minute</span> Inspection
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg">
              Structured process. Clear communication. Professional standards.
            </p>
            
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#BD3728] text-white font-bold rounded hover:bg-[#a32f22] transition-colors uppercase tracking-wide text-lg">
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
