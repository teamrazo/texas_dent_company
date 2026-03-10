import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Mail, Phone, MapPin, Clock, Star, Shield, ThumbsUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { COMPANY, LOCATIONS, TRUST_BADGES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Request Received',
  description: 'Your inspection request has been received. We will contact you shortly to confirm your appointment.',
};

export default function ConfirmationPage() {
  const trustBadges = [
    { icon: Star, label: 'Over 500 5-Star Reviews' },
    { icon: Shield, label: 'Warranty on All Repairs' },
    { icon: ThumbsUp, label: '100% Satisfaction Guaranteed' },
    { icon: Award, label: 'A+ Rating on BBB' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60">
          <div className="absolute inset-0 bg-[url('/images/gallery/shop-interior.jpg')] bg-cover bg-center opacity-30" />
        </div>
        
        <div className="container-xl relative z-10 py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10" />
            </div>
            
            <p className="text-[#BD3728] uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Request Received
            </p>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
              We Got It. <span className="text-[#BD3728]">You're In.</span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8">
              Your inspection request has been received. Lock in your time slot now. 
              Slots fill fast after storm events.
            </p>

            <p className="text-[#BD3728] font-semibold">
              No phone call required. Pick your date and time online.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-[#F5F5F5] border-b border-gray-200">
        <div className="container-xl">
          <div className="flex flex-wrap justify-center gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <badge.icon className="h-5 w-5 text-[#BD3728]" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center" style={{ fontFamily: 'var(--font-montserrat)' }}>
              What Happens <span className="text-[#BD3728]">Next</span>
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Here's how we'll take it from here.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Check Your Email */}
              <div className="bg-[#F5F5F5] rounded p-6">
                <div className="w-12 h-12 rounded-full bg-[#BD3728]/10 text-[#BD3728] flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  Check Your Email
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  A confirmation is headed your way. If you've already gotten an estimate, 
                  forward it to us and we'll have it ready before your inspection.
                </p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-[#BD3728] font-medium hover:underline"
                >
                  {COMPANY.email}
                </a>
              </div>

              {/* Watch For Our Call */}
              <div className="bg-[#F5F5F5] rounded p-6">
                <div className="w-12 h-12 rounded-full bg-[#BD3728]/10 text-[#BD3728] flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  Watch For Our Call/Text
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  We'll send a text to confirm your request. Our team follows up within one 
                  business day to lock in your appointment. Call us if you need someone right away.
                </p>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-[#BD3728] font-medium hover:underline"
                >
                  Call / Text {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 md:py-20 bg-[#F5F5F5]">
        <div className="container-xl">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frisco */}
              <div className="bg-white rounded p-6 border border-gray-200">
                <h3 className="text-[#BD3728] uppercase font-semibold tracking-wide text-sm mb-4">
                  Frisco
                </h3>
                <div className="space-y-3">
                  <a
                    href={LOCATIONS.frisco.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-gray-600 hover:text-[#BD3728] transition-colors text-sm"
                  >
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-[#BD3728]" />
                    <span>
                      {LOCATIONS.frisco.address}<br />
                      {LOCATIONS.frisco.city}, {LOCATIONS.frisco.state} {LOCATIONS.frisco.zip}
                    </span>
                  </a>
                  <p className="text-gray-500 text-sm">
                    {LOCATIONS.frisco.serviceRadius}
                  </p>
                </div>
              </div>

              {/* Odessa */}
              <div className="bg-white rounded p-6 border border-gray-200">
                <h3 className="text-[#BD3728] uppercase font-semibold tracking-wide text-sm mb-4">
                  Odessa
                </h3>
                <div className="space-y-3">
                  <a
                    href={LOCATIONS.odessa.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-gray-600 hover:text-[#BD3728] transition-colors text-sm"
                  >
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-[#BD3728]" />
                    <span>
                      {LOCATIONS.odessa.address}<br />
                      {LOCATIONS.odessa.city}, {LOCATIONS.odessa.state} {LOCATIONS.odessa.zip}
                    </span>
                  </a>
                  <p className="text-gray-500 text-sm">
                    Serving {LOCATIONS.odessa.servingAreas.join(', ')}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 text-gray-600">
                <Clock className="h-5 w-5 text-[#BD3728]" />
                <span>
                  {COMPANY.hours.weekdays} | {COMPANY.hours.saturday} | {COMPANY.hours.sunday}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 bg-white">
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
