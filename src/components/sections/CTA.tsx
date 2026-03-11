import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
          <div className="flex justify-center pt-4">
            <Link href={ctaLink}>
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto text-lg px-8 uppercase tracking-wide"
              >
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
