import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle, Shield, Clock, Wrench, FileText, Car, 
  Sparkles, Search, Star, ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BeforeAfterGallery } from '@/components/sections/BeforeAfterGallery';
import { ServicesPageClient } from '@/components/pages/ServicesPageClient';

export const metadata: Metadata = {
  title: 'Services | Professional Hail Damage Repair | Texas Dent Company',
  description: 'Professional hail damage repair services including PDR, insurance claims support, rental coordination, and complimentary detailing. Serving Frisco, Odessa, and all of Texas.',
};

const services = [
  {
    icon: Search,
    title: 'Professional Hail Inspection',
    description: 'Comprehensive 30-45 minute lighting-based hail inspection with full documentation.',
    features: [
      'Full lighting-based panel inspection',
      'Damage explanation and repair options',
      'PDR vs conventional assessment',
      'Timeline expectations',
      'Claims education and guidance',
    ],
  },
  {
    icon: Wrench,
    title: 'Paintless Dent Repair (PDR)',
    description: 'Premium PDR-first repair philosophy that preserves your factory finish and vehicle value.',
    features: [
      'Preserves factory paint and finish',
      'Faster repair timelines',
      'Stronger long-term durability',
      'No body filler or repainting',
      'OEM-compliant repairs',
    ],
  },
  {
    icon: FileText,
    title: 'Insurance Claims Support',
    description: 'We guide you through the repair-side of the insurance process from start to finish.',
    features: [
      'Repair-side claims coordination',
      'Documentation and estimate submission',
      'Supplement management',
      'Carrier communication',
      'You file the claim, we handle repairs',
    ],
  },
  {
    icon: Car,
    title: 'Rental Coordination',
    description: 'Full rental vehicle coordination while your car is being repaired.',
    features: [
      '18+ vehicle rental fleet',
      'Sedans, trucks, and SUVs available',
      'Insurance rental verification',
      'Enterprise coordination',
      'Newer, well-maintained vehicles',
    ],
  },
];

const addedValueServices = [
  {
    icon: Sparkles,
    title: 'Complimentary Vehicle Detail',
    description: 'Full interior and exterior detail on repaired vehicles. Your car comes back cleaner than before.',
  },
  {
    icon: Shield,
    title: 'Rock Chip Repair',
    description: 'Complimentary rock chip repair when windshield replacement is not covered. Helps prevent spreading.',
  },
  {
    icon: Star,
    title: 'Minor Dent Cleanup',
    description: 'Minor unrelated dents and dings cleaned up when feasible for a more complete final result.',
  },
];

const valuePillars = [
  {
    title: 'Elite Technician Experience',
    description: 'All technicians have 10-15+ years of experience with thousands of vehicles repaired per technician. Internationally recruited talent with advanced PDR skillsets.',
  },
  {
    title: 'PDR First Philosophy',
    description: 'We prioritize paintless dent repair to preserve your factory paint, ensure faster timelines, and maintain long-term durability. When PDR is not appropriate, we use OEM parts and partner with trusted paint facilities.',
  },
  {
    title: 'Claims Expertise',
    description: 'Our estimating expertise allows us to write complete, accurate initial estimates, identify overlooked procedures, and submit supplements when justified. All within insurance guidelines.',
  },
  {
    title: 'Concierge Experience',
    description: 'We reduce disruption to your life with vehicle pickup and dropoff, clear scheduling and timelines, and proactive communication throughout repairs.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 parallax-hero" data-parallax-speed="0.3">
          <Image
            src="/images/facility/tdc-hero-kia.webp"
            alt="Texas Dent Company Kia in professional shop"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#BD3728] uppercase tracking-[0.2em] text-sm font-semibold mb-4">
              Premium PDR Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 heading-glow" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Professional Hail Damage <span className="text-shimmer">Repair Services</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Texas Dent Company is a premium, professional paintless dent repair 
              organization. We compete on quality of repair, professional execution, 
              customer experience, and claims knowledge - not price or shortcuts.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <button className="cta-glow inline-flex items-center gap-2 px-8 py-4 bg-[#BD3728] text-white font-bold rounded uppercase tracking-wide">
                  Schedule Inspection <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Pillars */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#BD3728] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Our <span className="text-[#BD3728]">Value</span> Framework
            </h2>
            <p className="text-gray-600">
              Everything we offer supports professional-grade repairs, claims expertise, 
              customer convenience, and trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valuePillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-black mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#BD3728] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Our <span className="text-[#BD3728]">Services</span>
            </h2>
            <p className="text-gray-600">
              Comprehensive hail damage repair from inspection to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow h-full">
                <div className="w-14 h-14 rounded-xl bg-[#BD3728]/10 flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-[#BD3728]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#BD3728] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <BeforeAfterGallery />

      {/* Added Value Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#BD3728] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Extra Value
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Added Value <span className="text-[#BD3728]">Services</span>
            </h2>
            <p className="text-gray-600">
              Extra services that enhance your final result and customer experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addedValueServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full bg-[#BD3728]/10 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-[#BD3728]" />
                </div>
                <h3 className="font-bold text-black mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#BD3728] uppercase tracking-[0.2em] text-sm font-semibold mb-4">
                Trusted By Thousands
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-montserrat)' }}>
                What Sets Us <span className="text-[#BD3728]">Apart</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#BD3728]/20 flex items-center justify-center flex-shrink-0">
                    <Star className="h-6 w-6 text-[#BD3728]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">600+ Five-Star Reviews</h3>
                    <p className="text-gray-400 text-sm">
                      Trusted by thousands of Texas customers across Google, Facebook, and BBB.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#BD3728]/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-[#BD3728]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">A+ BBB Rating</h3>
                    <p className="text-gray-400 text-sm">
                      Recognized for our commitment to quality and customer satisfaction.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#BD3728]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#BD3728]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Lifetime Warranty</h3>
                    <p className="text-gray-400 text-sm">
                      We stand behind our work with a lifetime warranty on repaired dents.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#BD3728]/20 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-[#BD3728]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Trusted by Fleets</h3>
                    <p className="text-gray-400 text-sm">
                      Trusted by school districts and government fleets for professional service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-2xl overflow-hidden image-container">
              <Image
                src="/images/facility/gwagon.webp"
                alt="Mercedes G-Wagon in Texas Dent Company shop"
                fill
                className="object-cover object-center image-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deductible Note */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl border-2 border-[#BD3728]/20 p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Our Approach to <span className="text-[#BD3728]">Deductibles</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Insurance deductibles are often unavoidable. Our approach focuses on proper 
                estimating, identifying approved procedures, and passing along legitimate 
                cost savings where allowed.
              </p>
              <p className="text-black font-medium">
                We do not pay customers cash, provide rebates or kickbacks, or misrepresent 
                repairs to insurance. Our goal is to minimize out-of-pocket costs without 
                compromising integrity or quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 relative">
              <Image
                src="/images/logo/Texas-Dent-Logo-Updated.png"
                alt="Texas Dent Company Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[#BD3728] uppercase tracking-[0.2em] text-sm font-semibold mb-4">
              Ready To Get Started?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Schedule Your <span className="text-[#BD3728]">Free Inspection</span>
            </h2>
            <p className="text-gray-600 mb-8">
              30-45 minute comprehensive inspection. No obligation.
            </p>
            <Link href="/contact">
              <button className="cta-glow inline-flex items-center gap-2 px-8 py-4 bg-[#BD3728] text-white font-bold rounded uppercase tracking-wide text-lg">
                <FileText className="h-5 w-5" />
                Schedule Your Inspection
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client-side animations */}
      <ServicesPageClient />
    </>
  );
}
