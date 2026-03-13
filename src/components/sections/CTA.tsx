import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTAProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'primary' | 'dark';
}

export function CTA({
  title = 'Ready to Get Started?',
  description = 'Schedule your professional hail inspection today. We handle the repair side so you can get back on the road.',
  ctaText = 'Schedule Inspection',
  ctaLink = '/contact',
  variant = 'primary',
}: CTAProps) {
  const isDark = variant === 'dark';

  return (
    <section className={`py-16 md:py-24 relative overflow-hidden ${isDark ? 'bg-black' : 'bg-primary'}`}>
      {/* Subtle animated gradient orbs for dark variant */}
      {isDark && (
        <>
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#BD3728]/5 blur-3xl animate-float" />
          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#BD3728]/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </>
      )}
      <div className="container-xl relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Logo */}
          <div className="w-16 h-16 mx-auto mb-2 relative">
            <Image
              src="/images/logo/Texas-Dent-Logo-Updated.png"
              alt="Texas Dent Company Logo"
              fill
              className="object-contain"
            />
          </div>
          <h2 className={`heading-2 ${isDark ? 'text-white' : 'text-primary-foreground'}`}>{title}</h2>
          <p className={`body-large ${isDark ? 'text-gray-400' : 'text-primary-foreground/90'}`}>{description}</p>
          <div className="flex justify-center pt-4">
            <Link href={ctaLink}>
              {isDark ? (
                <button className="cta-glow inline-flex items-center gap-2 px-8 py-4 bg-[#BD3728] text-white font-bold rounded uppercase tracking-wide text-lg">
                  {ctaText}
                  <ArrowRight className="ml-1 h-5 w-5" />
                </button>
              ) : (
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto text-lg px-8 uppercase tracking-wide"
                >
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              )}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
