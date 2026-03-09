import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY, LOCATIONS, TRUST_BADGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Request Received',
  description: 'Your inspection request has been received. We will contact you shortly to confirm your appointment.',
};

export default function ConfirmationPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary to-background">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10" />
            </div>
            <h1 className="heading-1 text-foreground mb-4">
              We Got It. You're In.
            </h1>
            <p className="body-large text-muted-foreground mb-8">
              Your inspection request has been received. Lock in your time slot now. 
              Slots fill fast after storm events.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {TRUST_BADGES.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            <p className="text-primary font-semibold">
              No phone call required. Pick your date and time online.
            </p>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-foreground mb-8 text-center">What Happens Next</h2>
            <p className="text-muted-foreground text-center mb-12">
              Here's how we'll take it from here.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Check Your Email */}
              <div className="bg-secondary rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="heading-4 text-foreground mb-3">Check Your Email</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  A confirmation is headed your way. If you've already gotten an estimate, 
                  forward it to us and we'll have it ready before your inspection.
                </p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-primary font-medium hover:underline"
                >
                  {COMPANY.email}
                </a>
              </div>

              {/* Watch For Our Call */}
              <div className="bg-secondary rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="heading-4 text-foreground mb-3">Watch For Our Call/Text</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  We'll send a text to confirm your request. Our team follows up within one 
                  business day to lock in your appointment. Call us if you need someone right away.
                </p>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-primary font-medium hover:underline"
                >
                  Call / Text {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-xl">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frisco */}
              <div className="bg-background rounded-xl p-6 border border-border">
                <h3 className="heading-4 text-foreground mb-4">Frisco</h3>
                <div className="space-y-3">
                  <a
                    href={LOCATIONS.frisco.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>
                      {LOCATIONS.frisco.address}<br />
                      {LOCATIONS.frisco.city}, {LOCATIONS.frisco.state} {LOCATIONS.frisco.zip}
                    </span>
                  </a>
                  <p className="text-muted-foreground text-sm">
                    {LOCATIONS.frisco.serviceRadius}
                  </p>
                </div>
              </div>

              {/* Odessa */}
              <div className="bg-background rounded-xl p-6 border border-border">
                <h3 className="heading-4 text-foreground mb-4">Odessa</h3>
                <div className="space-y-3">
                  <a
                    href={LOCATIONS.odessa.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span>
                      {LOCATIONS.odessa.address}<br />
                      {LOCATIONS.odessa.city}, {LOCATIONS.odessa.state} {LOCATIONS.odessa.zip}
                    </span>
                  </a>
                  <p className="text-muted-foreground text-sm">
                    Serving {LOCATIONS.odessa.servingAreas.join(', ')}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span>
                  {COMPANY.hours.weekdays} | {COMPANY.hours.saturday} | {COMPANY.hours.sunday}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12">
        <div className="container-xl text-center">
          <Link href="/">
            <Button variant="outline" size="lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
