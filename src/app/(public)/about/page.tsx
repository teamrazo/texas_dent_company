import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Shield, Star, Users, ArrowRight, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CTA } from '@/components/sections';
import { LOCATIONS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us | Texas Dent Company',
  description: 'Family-owned hail damage repair company founded in 2017. Learn about our mission, values, and commitment to professional PDR services across Texas.',
};

const milestones = [
  { year: '2017', title: 'Founded', description: 'Texas Dent Company founded by Cody and Kailey Wilson in Dallas, TX.' },
  { year: '2020', title: 'Growth', description: 'Expanded team and served thousands of customers across North Texas.' },
  { year: '2023', title: 'Frisco HQ', description: 'Moved headquarters to Frisco, TX to better serve the DFW metro.' },
  { year: '2024', title: 'Odessa', description: 'Opened satellite location in Odessa, TX to serve West Texas.' },
  { year: '2026', title: 'Today', description: '600+ 5-star reviews, A+ BBB rating, and growing across Texas.' },
];

const values = [
  {
    title: 'Quality First',
    description: 'We never rush repairs. Proper PDR requires time, access, and precision to restore panels correctly. We prioritize quality results over quick turnarounds.',
  },
  {
    title: 'Education Over Sales',
    description: 'We do not hard-close. We educate customers on how deductibles work, how PDR impacts value, and why complete repairs beat shortcuts.',
  },
  {
    title: 'Process-Driven',
    description: 'Multi-step quality control, documented workflows, and final verification before every delivery. We are system-driven, not personality-driven.',
  },
  {
    title: 'Integrity Always',
    description: 'We work with your insurance on the repair side, not against it. No cash incentives, no shortcuts, no misrepresentation.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-background py-16 md:py-24">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="heading-1 text-foreground">
                A High-Trust, Process-Driven Hail Repair Partner
              </h1>
              <p className="body-large text-muted-foreground">
                Texas Dent Company is not positioned as a generic "dent repair shop." 
                We are a high-trust, process-driven hail damage repair partner specializing 
                in Paintless Dent Repair (PDR), repair-side insurance coordination, and 
                vehicle value preservation.
              </p>
              <p className="text-muted-foreground">
                You file the claim. We handle the repair side: inspection, documentation, 
                repair coordination, and rentals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/team">
                  <Button size="lg" variant="glow" className="w-full sm:w-auto text-lg px-8 uppercase tracking-wide">
                    Meet Our Team <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/locations/frisco-shop.jpg"
                alt="Texas Dent Company Frisco Location"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 text-foreground mb-8 text-center">Our Story</h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                In 2017, Cody Wilson co-founded Texas Dent Company with a passion for providing 
                high-quality paintless dent repair (PDR) services. As a Texas native and proud 
                father of two beautiful children, Cody built a strong foundation for the company 
                focused on quality, integrity, and customer education.
              </p>
              <p>
                His wife Kailey Wilson, also a Texas native, brought her fascination with storm 
                restoration and her childhood dreams of storm chasing into a thriving business. 
                Together, they translated that passion into a company that combines Texas 
                resilience with unmatched expertise to help homeowners and businesses recover 
                from hail storms.
              </p>
              <p>
                Over the years, Texas Dent Company has assembled a skilled team that has helped 
                the company grow and serve thousands of customers across Texas. Although the 
                home office is based in Frisco (serving the DFW metro), they have been fortunate 
                to assist customers all over the state with their repair needs, including a 
                satellite shop in Odessa serving West Texas.
              </p>
              <p className="font-medium text-foreground">
                Our goal is to be the go-to company for anyone in Texas in need of professional 
                PDR services - built on process, documentation, and quality verification rather 
                than just promises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-xl">
          <h2 className="heading-2 text-foreground mb-12 text-center">Our Journey</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="w-20 flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                  </div>
                  <div className="flex-1 pb-8 border-l-2 border-primary/20 pl-6 relative">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary"></div>
                    <h3 className="heading-4 text-foreground mb-1">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-2 text-foreground mb-4">Our Values</h2>
            <p className="body-large text-muted-foreground">
              These principles guide everything we do at Texas Dent Company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="heading-4 text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Sell */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 text-foreground mb-6">What We Actually Deliver</h2>
            <p className="body-large text-muted-foreground mb-8">
              We do not "sell dent removal." We deliver:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {[
                'Claims clarity',
                'Professional repair-side guidance',
                'Process control and communication',
                'Vehicle value protection',
                'Reduced customer stress',
                'Clean, documented, verified repair delivery',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-xl">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations - Matching home page ServiceAreaWithMaps style */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#BD3728] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Our Locations
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Service <span className="text-[#BD3728]">Areas</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Frisco */}
            <div className="card-hover group rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm overflow-hidden">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#BD3728] uppercase tracking-wide mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  Frisco
                </h3>
                <div className="flex items-start gap-2 text-gray-700 mb-2">
                  <MapPin className="h-4 w-4 text-[#BD3728] flex-shrink-0 mt-1" />
                  <div className="text-sm">
                    <p className="font-medium">{LOCATIONS.frisco.address}</p>
                    <p>{LOCATIONS.frisco.city}, {LOCATIONS.frisco.state} {LOCATIONS.frisco.zip}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">Serving North Texas (approximately 25-mile radius)</p>
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-gray-100">
                <iframe
                  src="https://i.pinimg.com/474x/96/f3/93/96f3931fc4e5e3e767fe16b0aaa0586a.jpg"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Frisco location map" className="absolute inset-0"
                />
              </div>
              <div className="flex items-center justify-between">
                <a href="https://maps.app.goo.gl/vW3ESUUQqNNuU3Uh9" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#BD3728] font-semibold text-sm hover:text-[#a32f22] transition-colors">
                  Maps <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <Link href="/frisco" className="text-[#BD3728] font-medium text-sm hover:text-[#a32f22] transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Odessa */}
            <div className="card-hover group rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm overflow-hidden">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#BD3728] uppercase tracking-wide mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  Odessa
                </h3>
                <div className="flex items-start gap-2 text-gray-700 mb-2">
                  <MapPin className="h-4 w-4 text-[#BD3728] flex-shrink-0 mt-1" />
                  <div className="text-sm">
                    <p className="font-medium">{LOCATIONS.odessa.address}</p>
                    <p>{LOCATIONS.odessa.city}, {LOCATIONS.odessa.state} {LOCATIONS.odessa.zip}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">Serving Midland, Fort Stockton, Big Spring, Pecos, Crane</p>
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-gray-100">
                <iframe
                  src="https://i.pinimg.com/474x/a3/3e/49/a33e49a9e0585b6c8c7b15da0883e2f6.jpg"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Odessa location map" className="absolute inset-0"
                />
              </div>
              <div className="flex items-center justify-between">
                <a href="https://maps.app.goo.gl/98iPqSTQtAaCYudx7" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#BD3728] font-semibold text-sm hover:text-[#a32f22] transition-colors">
                  Maps <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <Link href="/odessa" className="text-[#BD3728] font-medium text-sm hover:text-[#a32f22] transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">600+</div>
              <div className="text-primary-foreground/80">5-Star Reviews</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">A+</div>
              <div className="text-primary-foreground/80">BBB Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1000s</div>
              <div className="text-primary-foreground/80">Vehicles Repaired</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2</div>
              <div className="text-primary-foreground/80">Texas Locations</div>
            </div>
          </div>
        </div>
      </section>

      <CTA variant="dark" />
    </>
  );
}