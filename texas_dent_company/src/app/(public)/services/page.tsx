import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle, Shield, Clock, Wrench, FileText, Car, 
  Sparkles, Search, Star, ArrowRight, Phone 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CTA } from '@/components/sections';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Services | Professional Hail Damage Repair | Texas Dent Company',
  description: 'Professional hail damage repair services including PDR, insurance claims support, rental coordination, and complimentary detailing. Serving Frisco, Odessa, and all of Texas.',
};

const services = [
  {
    icon: Search,
    title: 'Professional Hail Inspection',
    description: 'Comprehensive 30-45 minute lighting-based hail inspection with full documentation.',
    features: [
      'Full lighting-based panel inspection',
      'Damage explanation and repair options',
      'PDR vs conventional assessment',
      'Timeline expectations',
      'Claims education and guidance',
    ],
  },
  {
    icon: Wrench,
    title: 'Paintless Dent Repair (PDR)',
    description: 'Premium PDR-first repair philosophy that preserves your factory finish and vehicle value.',
    features: [
      'Preserves factory paint and finish',
      'Faster repair timelines',
      'Stronger long-term durability',
      'No body filler or repainting',
      'OEM-compliant repairs',
    ],
  },
  {
    icon: FileText,
    title: 'Insurance Claims Support',
    description: 'We guide you through the repair-side of the insurance process from start to finish.',
    features: [
      'Repair-side claims coordination',
      'Documentation and estimate submission',
      'Supplement management',
      'Carrier communication',
      'You file the claim, we handle repairs',
    ],
  },
  {
    icon: Car,
    title: 'Rental Coordination',
    description: 'Full rental vehicle coordination while your car is being repaired.',
    features: [
      '18+ vehicle rental fleet',
      'Sedans, trucks, and SUVs available',
      'Insurance rental verification',
      'Enterprise coordination',
      'Newer, well-maintained vehicles',
    ],
  },
];

const addedValueServices = [
  {
    icon: Sparkles,
    title: 'Complimentary Vehicle Detail',
    description: 'Full interior and exterior detail on repaired vehicles. Your car comes back cleaner than before.',
  },
  {
    icon: Shield,
    title: 'Rock Chip Repair',
    description: 'Complimentary rock chip repair when windshield replacement is not covered. Helps prevent spreading.',
  },
  {
    icon: Star,
    title: 'Minor Dent Cleanup',
    description: 'Minor unrelated dents and dings cleaned up when feasible for a more complete final result.',
  },
];

const valuePillars = [
  {
    title: 'Elite Technician Experience',
    description: 'All technicians have 10-15+ years of experience with thousands of vehicles repaired per technician. Internationally recruited talent with advanced PDR skillsets.',
  },
  {
    title: 'PDR First Philosophy',
    description: 'We prioritize paintless dent repair to preserve your factory paint, ensure faster timelines, and maintain long-term durability. When PDR is not appropriate, we use OEM parts and partner with trusted paint facilities.',
  },
  {
    title: 'Claims Expertise',
    description: 'Our estimating expertise allows us to write complete, accurate initial estimates, identify overlooked procedures, and submit supplements when justified. All within insurance guidelines.',
  },
  {
    title: 'Concierge Experience',
    description: 'We reduce disruption to your life with vehicle pickup and dropoff, clear scheduling and timelines, and proactive communication throughout repairs.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-background py-16 md:py-24">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="heading-1 text-foreground">
                Professional Hail Damage Repair Services
              </h1>
              <p className="body-large text-muted-foreground">
                Texas Dent Company is a premium, professional paintless dent repair 
                organization. We compete on quality of repair, professional execution, 
                customer experience, and claims knowledge - not price or shortcuts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                    Schedule Inspection <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <a href={`tel:${COMPANY.phone}`}>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8">
                    <Phone className="h-5 w-5 mr-2" />
                    {COMPANY.phone}
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/gallery/headliner-work.png"
                alt="Professional PDR technician at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Pillars */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-2 text-foreground mb-4">Our Value Framework</h2>
            <p className="body-large text-muted-foreground">
              Everything we offer supports professional-grade repairs, claims expertise, 
              customer convenience, and trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valuePillars.map((pillar, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="heading-4 text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-2 text-foreground mb-4">Our Services</h2>
            <p className="body-large text-muted-foreground">
              Comprehensive hail damage repair from inspection to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="heading-3">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Added Value Services */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-2 text-foreground mb-4">Added Value Services</h2>
            <p className="body-large text-muted-foreground">
              Extra services that enhance your final result and customer experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addedValueServices.map((service, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="heading-4 text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-foreground mb-6">What Sets Us Apart</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="heading-4 text-foreground mb-1">600+ Five-Star Reviews</h3>
                    <p className="text-muted-foreground text-sm">
                      Trusted by thousands of Texas customers across Google, Facebook, and BBB.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="heading-4 text-foreground mb-1">A+ BBB Rating</h3>
                    <p className="text-muted-foreground text-sm">
                      Recognized for our commitment to quality and customer satisfaction.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="heading-4 text-foreground mb-1">Lifetime Warranty</h3>
                    <p className="text-muted-foreground text-sm">
                      We stand behind our work with a lifetime warranty on repaired dents.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="heading-4 text-foreground mb-1">Trusted by Fleets</h3>
                    <p className="text-muted-foreground text-sm">
                      Trusted by school districts and government fleets for professional service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/gallery/rentals.jpg"
                alt="Texas Dent Company rental fleet"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deductible Note */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <Card className="bg-gradient-to-br from-primary/5 to-background border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="heading-2 text-foreground mb-4">Our Approach to Deductibles</h2>
                <p className="body-large text-muted-foreground mb-6">
                  Insurance deductibles are often unavoidable. Our approach focuses on proper 
                  estimating, identifying approved procedures, and passing along legitimate 
                  cost savings where allowed.
                </p>
                <p className="text-foreground font-medium">
                  We do not pay customers cash, provide rebates or kickbacks, or misrepresent 
                  repairs to insurance. Our goal is to minimize out-of-pocket costs without 
                  compromising integrity or quality.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <CTA />
    </>
  );
}
