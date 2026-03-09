import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY } from '@/lib/constants';

interface CTAProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export function CTA({
  title = 'Ready to Get Started?',
  description = 'Schedule your professional hail inspection today. We handle the repair side so you can get back on the road.',
  ctaText = 'Schedule Inspection',
  ctaLink = '/contact',
}: CTAProps) {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container-xl">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="heading-2 text-primary-foreground">{title}</h2>
          <p className="body-large text-primary-foreground/90">{description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href={ctaLink}>
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto text-lg px-8"
              >
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href={`tel:${COMPANY.phone}`}>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Phone className="h-5 w-5 mr-2" />
                {COMPANY.phone}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
