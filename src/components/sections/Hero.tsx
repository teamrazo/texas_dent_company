import Link from 'next/link';
import { Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY, TRUST_BADGES } from '@/lib/constants';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  showPhone?: boolean;
  showBadges?: boolean;
  backgroundImage?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  ctaText = 'Get Started',
  ctaLink = '/contact',
  showPhone = true,
  showBadges = true,
  backgroundImage,
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-secondary to-background py-16 md:py-24 lg:py-32">
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="container-xl relative">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {subtitle && (
            <p className="text-primary font-semibold text-sm md:text-base uppercase tracking-wide">
              {subtitle}
            </p>
          )}
          <h1 className="heading-1 text-foreground">{title}</h1>
          {description && (
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}

          {/* Trust Badges */}
          {showBadges && (
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4">
              {TRUST_BADGES.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Link href={ctaLink}>
              <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                {ctaText}
              </Button>
            </Link>
            {showPhone && (
              <a href={`tel:${COMPANY.phone}`}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8">
                  <Phone className="h-5 w-5 mr-2" />
                  {COMPANY.phone}
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
