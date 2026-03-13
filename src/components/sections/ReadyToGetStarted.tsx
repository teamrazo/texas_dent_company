'use client';

import Image from 'next/image';
import { FileText } from 'lucide-react';
import { useScrollReveal } from '@/hooks';

interface ReadyToGetStartedProps {
  onOpenLeadForm: () => void;
}

export function ReadyToGetStarted({ onOpenLeadForm }: ReadyToGetStartedProps) {
  const sectionRef = useScrollReveal();

  return (
    <section 
      ref={sectionRef.ref}
      className="relative overflow-hidden bg-gradient-animated py-24 text-white"
    >
      {/* Animated mesh gradient orbs */}
      <div className="bg-mesh-orb w-[500px] h-[500px] bg-[#BD3728] -left-32 -top-32" />
      <div className="bg-mesh-orb w-[400px] h-[400px] bg-[#BD3728] -right-20 -bottom-20" style={{ animationDelay: '-7s' }} />
      
      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 text-center reveal-scale ${sectionRef.isVisible ? 'visible' : ''}`}>
        {/* Logo */}
        <div className="w-16 h-16 mx-auto mb-6 relative">
          <Image
            src="/images/logo/Texas-Dent-Logo-Updated.png"
            alt="Texas Dent Company Logo"
            fill
            className="object-contain"
          />
        </div>
        
        <p className="mb-4 font-semibold text-sm uppercase tracking-[0.2em] text-[#BD3728]" style={{ fontFamily: 'var(--font-montserrat)' }}>
          WHERE TEXAS GOES FOR DENT REPAIR
        </p>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 heading-glow" style={{ fontFamily: 'var(--font-montserrat)' }}>
          Ready To <span className="text-shimmer">Get Started</span>?
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Structured process. Clear communication. Professional standards.
        </p>
        
        <button 
          onClick={onOpenLeadForm}
          className="cta-glow btn-magnetic btn-ripple inline-flex items-center gap-2 px-8 py-4 bg-[#BD3728] text-white font-bold rounded hover:bg-[#a32f22] uppercase tracking-wide text-lg"
        >
          <FileText className="h-5 w-5" />
          SCHEDULE YOUR INSPECTION
        </button>
      </div>
    </section>
  );
}
