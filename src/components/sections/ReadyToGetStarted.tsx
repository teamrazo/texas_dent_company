'use client';

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
      className="relative overflow-hidden bg-black py-24 text-white"
    >
      {/* Parallax decorative blurs */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#BD3728]/5 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#BD3728]/5 blur-3xl" />
      
      {/* Content */}
      <div className={`relative container mx-auto px-4 text-center reveal-scale ${sectionRef.isVisible ? 'visible' : ''}`}>
        <p className="mb-4 font-semibold text-sm uppercase tracking-[0.2em] text-[#BD3728]" style={{ fontFamily: 'var(--font-montserrat)' }}>
          WHERE TEXAS GOES FOR DENT REPAIR
        </p>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
          Ready To <span className="text-[#BD3728]">Get Started</span>?
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Structured process. Clear communication. Professional standards.
        </p>
        
        <button 
          onClick={onOpenLeadForm}
          className="cta-glow inline-flex items-center gap-2 px-8 py-4 bg-[#BD3728] text-white font-bold rounded hover:bg-[#a32f22] uppercase tracking-wide text-lg"
        >
          <FileText className="h-5 w-5" />
          SCHEDULE YOUR INSPECTION
        </button>
      </div>
    </section>
  );
}
