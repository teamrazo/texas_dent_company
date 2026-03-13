'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, Shield, ThumbsUp, Award, FileText } from 'lucide-react';
import { BeforeAfterGallery } from '@/components/sections/BeforeAfterGallery';
import { FacilitySection } from '@/components/sections/FacilitySection';
import { RentalSection } from '@/components/sections/RentalSection';
import { ReadyToGetStarted } from '@/components/sections/ReadyToGetStarted';
import { ServiceAreaWithMaps } from '@/components/sections/ServiceAreaWithMaps';
import { MultiStepLeadForm } from '@/components/forms/MultiStepLeadForm';
import { useScrollReveal } from '@/hooks';

export function HomePageContent() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

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

  // Scroll reveal hooks for different sections
  const processSection = useScrollReveal();
  const qualitySection = useScrollReveal();

  return (
    <>
      {/* Multi-Step Lead Form Modal */}
      <MultiStepLeadForm 
        isOpen={isLeadFormOpen} 
        onClose={() => setIsLeadFormOpen(false)} 
      />

      {/* Hero Section - Dark with background image and 3-stop gradient overlay */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-black overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <Image
            src="/images/facility/tesla-in-shop.png"
            alt="Texas Dent Company Shop"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Gradient Overlay Layer - 3-stop gradient per specs */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/20 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            {/* Tagline */}
            <p className="text-[#BD3728] uppercase tracking-[0.2em] text-sm font-semibold mb-6 animate-hero-tagline" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Where Texas Goes For Dent Repair
            </p>
            
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-hero-heading" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Professional Hail Repair In{' '}
              <span className="text-[#BD3728]">North Texas</span> And{' '}
              <span className="text-[#BD3728]">West Texas</span>
            </h1>
            
            {/* Subtext */}
            <p className="text-white/90 text-base md:text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed animate-hero-subtext">
              Structured process. Clear communication. Start with a 30–45 minute professional hail inspection.
            </p>
            
            {/* CTA Button - Primary Hero CTA */}
            <div className="animate-hero-cta mb-12">
              <button 
                onClick={() => setIsLeadFormOpen(true)}
                className="cta-glow inline-flex items-center gap-2 px-8 py-4 bg-[#BD3728] text-white font-bold rounded hover:bg-[#a32f22] uppercase tracking-wide text-base md:text-lg"
              >
                <FileText className="h-5 w-5" />
                SCHEDULE YOUR INSPECTION
              </button>
            </div>
            
            {/* Trust Badges - Glassmorphic */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 animate-hero-badges">
              {trustBadges.map((badge, index) => (
                <div 
                  key={index} 
                  className="trust-badge-hover flex flex-col items-center p-3 md:p-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg cursor-default"
                >
                  <badge.icon className="h-5 w-5 md:h-6 md:w-6 text-[#BD3728] mb-2 icon-hover" />
                  <span className="text-white text-xs md:text-sm text-center font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section 
        ref={processSection.ref}
        className="py-14 md:py-20 bg-[#F5F5F5]"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 reveal ${processSection.isVisible ? 'visible' : ''}`}>
            <p className="text-[#BD3728] font-semibold text-sm uppercase tracking-[0.2em] mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Simple & Transparent
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
              You File. We <span className="text-[#BD3728]">Handle The Rest</span>.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Steps */}
            <div className={`space-y-4 stagger-children ${processSection.isVisible ? 'visible' : ''}`}>
              {processSteps.map((step) => (
                <div key={step.number} className="card-hover flex gap-4 items-start bg-white p-4 md:p-5 rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#BD3728] text-white flex items-center justify-center font-bold text-sm md:text-base">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-sm md:text-base mb-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
              
              {/* Secondary CTA - only 2 CTAs on homepage */}
              <div className="pt-4">
                <button 
                  onClick={() => setIsLeadFormOpen(true)}
                  className="cta-glow inline-flex items-center gap-2 px-6 py-3 bg-[#BD3728] text-white font-semibold rounded hover:bg-[#a32f22] uppercase tracking-wide text-sm"
                >
                  <FileText className="h-4 w-4" />
                  SCHEDULE YOUR INSPECTION
                </button>
              </div>
            </div>
            
            {/* Image - Asymmetrical layout (7/5 split visually) */}
            <div className={`reveal-right ${processSection.isVisible ? 'visible' : ''}`}>
              <div className="image-container relative h-[350px] md:h-[450px] shadow-xl rounded-2xl overflow-hidden">
                <Image 
                  src="/images/facility/landrover.webp" 
                  alt="Land Rover Defender in shop - professional hail inspection"
                  fill
                  className="object-cover image-hover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery - Asymmetrical Design */}
      <BeforeAfterGallery />

      {/* Facility Section - Asymmetrical 8/4 Layout */}
      <FacilitySection />

      {/* Rental Section - 3-Card Grid */}
      <RentalSection />

      {/* Quality Standards Section */}
      <section 
        ref={qualitySection.ref}
        className="py-16 md:py-20 bg-black text-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/facility/shop-bmw-1.webp"
            alt="Shop background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-3xl mx-auto text-center reveal-scale ${qualitySection.isVisible ? 'visible' : ''}`}>
            <p className="text-[#BD3728] font-semibold text-sm uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Quality Matters
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Not All Hail Repair Is Executed To The{' '}
              <span className="text-[#BD3728]">Same Standard</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              We use a PDR-first philosophy to preserve your factory finish. Our 15+ year technicians 
              work under professional lighting with no rushed timelines, no incentive-driven shortcuts, 
              and no compromises. Every repair is documented and verified before your vehicle leaves the shop.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas with Maps */}
      <ServiceAreaWithMaps />

      {/* Ready To Get Started Section */}
      <ReadyToGetStarted onOpenLeadForm={() => setIsLeadFormOpen(true)} />
    </>
  );
}
