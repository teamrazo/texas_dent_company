import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from '@/components/forms';
import { CTA } from '@/components/sections';
import { LOCATIONS, COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Odessa Hail Repair | Texas Dent Company West Texas',
  description: 'Texas Dent Company Odessa location serving West Texas. Professional hail damage repair, PDR services, and insurance claims support in Odessa, Midland, and the Permian Basin.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'Texas Dent Company - Odessa',
  description: 'Professional hail damage repair and paintless dent repair services in Odessa, TX serving West Texas.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4111 S County Rd 1297',
    addressLocality: 'Odessa',
    addressRegion: 'TX',
    postalCode: '79765',
    addressCountry: 'US',
  },
  telephone: '+1-469-966-7937',
  email: 'estimates@texasdentcompany.com',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '13:00',
    },
  ],
};

const location = LOCATIONS.odessa;

export default function OdessaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-background py-16 md:py-24">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <MapPin className="h-4 w-4" />
                Satellite Shop
              </div>
              <h1 className="heading-1 text-foreground">
                Odessa, TX Hail Damage Repair
              </h1>
              <p className="body-large text-muted-foreground">
                Our Odessa satellite shop brings the same quality repair and customer 
                service to West Texas. Serving the Permian Basin region including 
                Odessa, Midland, and surrounding communities.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-foreground">{location.address}, {location.city}, {location.state} {location.zip}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href={`tel:${location.phone}`} className="text-foreground hover:text-primary transition-colors">
                    {location.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href={`mailto:${location.email}`} className="text-foreground hover:text-primary transition-colors">
                    {location.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-foreground">{location.hours.weekdays} | {location.hours.saturday}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                    <MapPin className="h-5 w-5 mr-2" />
                    Get Directions
                  </Button>
                </a>
                <a href="https://g.page/r/CS_oWio0NnHdEBM/review" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8">
                    <Star className="h-5 w-5 mr-2" />
                    Leave a Review
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="heading-3 text-foreground mb-2">Odessa Location</h3>
                <p className="text-muted-foreground">4111 S County Rd 1297</p>
                <p className="text-muted-foreground">Odessa, TX 79765</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-2 text-foreground mb-4">Serving West Texas</h2>
            <p className="body-large text-muted-foreground">
              Our Odessa location serves customers throughout the Permian Basin and West Texas region.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {location.servingAreas.map((area, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Odessa */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-foreground mb-6">West Texas Deserves Quality Repair</h2>
              <p className="body-large text-muted-foreground mb-6">
                When hailstorms hit West Texas, you deserve the same professional 
                repair quality available in the metroplex. Our Odessa location brings 
                Texas Dent Company's standards to the Permian Basin.
              </p>
              
              <div className="space-y-4">
                {[
                  'Same experienced technicians',
                  'Same PDR-first philosophy',
                  'Same insurance claims support',
                  'Same quality standards',
                  'Same lifetime warranty',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="heading-4 text-foreground mb-2">Local Expertise</h3>
                  <p className="text-muted-foreground text-sm">
                    Our Odessa team understands the unique needs of West Texas 
                    customers and the challenges of Permian Basin weather.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="heading-4 text-foreground mb-2">Fleet Services</h3>
                  <p className="text-muted-foreground text-sm">
                    We work with oil and gas companies, fleet operators, and 
                    businesses throughout West Texas.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="heading-4 text-foreground mb-2">Coordination with Frisco HQ</h3>
                  <p className="text-muted-foreground text-sm">
                    Full support from our Frisco home office for claims processing, 
                    parts ordering, and quality oversight.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-2 text-foreground mb-4">Services at Our Odessa Location</h2>
            <p className="body-large text-muted-foreground">
              Full-service hail damage repair for West Texas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Professional Hail Inspection', desc: 'Comprehensive 30-45 minute lighting-based inspection with full documentation.' },
              { title: 'Paintless Dent Repair', desc: 'PDR-first philosophy that preserves your factory finish and vehicle value.' },
              { title: 'Insurance Claims Support', desc: 'We guide you through the repair-side of the insurance process.' },
              { title: 'Rental Coordination', desc: 'Rental vehicle coordination while your vehicle is being repaired.' },
              { title: 'Complimentary Detail', desc: 'Full interior and exterior detail included with repairs.' },
              { title: 'Lifetime Warranty', desc: 'We stand behind our work with a lifetime warranty on repairs.' },
            ].map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="heading-4 text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2 text-foreground mb-6">Schedule Your Odessa Inspection</h2>
              <p className="body-large text-muted-foreground mb-8">
                Ready to get started? Fill out the form and one of our team members 
                will contact you to schedule your free professional hail inspection.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-background rounded-xl">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Free Inspection</h3>
                    <p className="text-muted-foreground text-sm">No cost, no obligation 30-45 minute assessment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-background rounded-xl">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Claims Guidance</h3>
                    <p className="text-muted-foreground text-sm">We help you understand the repair-side process</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-background rounded-xl">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">West Texas Team</h3>
                    <p className="text-muted-foreground text-sm">Local team ready to serve the Permian Basin</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-xl p-6 md:p-8 shadow-lg border border-border">
              <h3 className="heading-3 text-foreground mb-2">Request Your Inspection</h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we will be in touch shortly.
              </p>
              <ContactForm source="odessa-page" buttonText="Schedule Inspection" />
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
