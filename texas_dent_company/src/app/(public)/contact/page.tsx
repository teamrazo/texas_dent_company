import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, MessageSquare, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/forms';
import { COMPANY, LOCATIONS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us | Texas Dent Company',
  description: 'Contact Texas Dent Company for professional hail damage repair. Schedule your free inspection at our Frisco or Odessa locations. Call 469-966-7937 or email estimates@texasdentcompany.com.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/facility/office-reception.webp"
            alt="Texas Dent Company Office"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[#BD3728] uppercase tracking-[0.2em] text-sm font-semibold mb-4">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Contact <span className="text-[#BD3728]">Us</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Ready to schedule your free hail inspection? Have questions about the 
              repair process? Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#BD3728]/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-7 w-7 text-[#BD3728]" />
              </div>
              <h3 className="font-bold text-black mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>Call or Text</h3>
              <a 
                href={`tel:${COMPANY.phone}`} 
                className="text-lg text-[#BD3728] font-semibold hover:underline"
              >
                {COMPANY.phone}
              </a>
              <p className="text-gray-500 text-sm mt-2">
                Mon-Fri 9-5 | Sat 10-1
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#BD3728]/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-7 w-7 text-[#BD3728]" />
              </div>
              <h3 className="font-bold text-black mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>Email</h3>
              <a 
                href={`mailto:${COMPANY.email}`} 
                className="text-lg text-[#BD3728] font-semibold hover:underline"
              >
                {COMPANY.email}
              </a>
              <p className="text-gray-500 text-sm mt-2">
                We respond within 24 hours
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#BD3728]/10 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-7 w-7 text-[#BD3728]" />
              </div>
              <h3 className="font-bold text-black mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>Social Media</h3>
              <div className="flex justify-center gap-4">
                <a 
                  href={COMPANY.social.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#BD3728] hover:underline font-medium"
                >
                  Facebook
                </a>
                <a 
                  href={COMPANY.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#BD3728] hover:underline font-medium"
                >
                  Instagram
                </a>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Follow us for updates
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#BD3728] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
                Free Inspection
              </p>
              <h2 className="text-3xl font-bold text-black mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Schedule Your <span className="text-[#BD3728]">Inspection</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and one of our team members will contact you to 
                schedule your free professional hail inspection. We typically respond 
                within a few hours during business hours.
              </p>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-black mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>What to Expect</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#BD3728] font-bold">•</span>
                    30-45 minute comprehensive inspection
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BD3728] font-bold">•</span>
                    Damage documentation and explanation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BD3728] font-bold">•</span>
                    Repair options and timeline discussion
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BD3728] font-bold">•</span>
                    Insurance process guidance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#BD3728] font-bold">•</span>
                    No obligation - completely free
                  </li>
                </ul>
              </div>

              {/* Office Photo */}
              <div className="mt-8 relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/facility/office-reception.webp"
                  alt="Texas Dent Company Office Reception"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-medium">Our Frisco Office</p>
                  <p className="text-white/70 text-sm">Professional, welcoming environment</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-black mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>Get in Touch</h3>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we will contact you shortly.
              </p>
              <ContactForm source="contact-page" buttonText="Send Message" />
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#BD3728] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Visit Us
            </p>
            <h2 className="text-3xl font-bold text-black" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Our <span className="text-[#BD3728]">Locations</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Frisco */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#BD3728]"></div>
                <h3 className="font-bold text-xl text-black" style={{ fontFamily: 'var(--font-montserrat)' }}>Frisco, TX (Home Office)</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#BD3728] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-800">{LOCATIONS.frisco.address}</p>
                    <p className="text-gray-800">{LOCATIONS.frisco.city}, {LOCATIONS.frisco.state} {LOCATIONS.frisco.zip}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#BD3728]" />
                  <a href={`tel:${LOCATIONS.frisco.phone}`} className="text-gray-800 hover:text-[#BD3728]">
                    {LOCATIONS.frisco.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[#BD3728]" />
                  <span className="text-gray-600 text-sm">
                    {LOCATIONS.frisco.hours.weekdays} | {LOCATIONS.frisco.hours.saturday}
                  </span>
                </div>
                <div className="pt-4 flex gap-3">
                  <a href={LOCATIONS.frisco.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm">Get Directions</Button>
                  </a>
                  <Link href="/frisco">
                    <Button variant="outline" size="sm">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Odessa */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#BD3728]"></div>
                <h3 className="font-bold text-xl text-black" style={{ fontFamily: 'var(--font-montserrat)' }}>Odessa, TX (Satellite Shop)</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#BD3728] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-800">{LOCATIONS.odessa.address}</p>
                    <p className="text-gray-800">{LOCATIONS.odessa.city}, {LOCATIONS.odessa.state} {LOCATIONS.odessa.zip}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#BD3728]" />
                  <a href={`tel:${LOCATIONS.odessa.phone}`} className="text-gray-800 hover:text-[#BD3728]">
                    {LOCATIONS.odessa.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[#BD3728]" />
                  <span className="text-gray-600 text-sm">
                    {LOCATIONS.odessa.hours.weekdays} | {LOCATIONS.odessa.hours.saturday}
                  </span>
                </div>
                <div className="pt-4 flex gap-3">
                  <a href={LOCATIONS.odessa.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm">Get Directions</Button>
                  </a>
                  <Link href="/odessa">
                    <Button variant="outline" size="sm">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
