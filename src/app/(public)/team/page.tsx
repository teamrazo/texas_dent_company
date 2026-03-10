import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CTA } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Our Team | Texas Dent Company',
  description: 'Meet the dedicated professionals at Texas Dent Company. Our team of experienced PDR technicians and claims specialists are committed to delivering exceptional hail damage repair.',
};

const teamMembers = [
  {
    name: 'Cody Wilson',
    role: 'Owner',
    slug: 'cody-wilson',
    image: '/images/team/cody-wilson.jpg',
    phone: '469-966-7937',
    email: 'cwilson@texasdentcompany.com',
    shortBio: 'Texas native and proud father of Easton and Remi. Co-founded Texas Dent Company in 2017.',
  },
  {
    name: 'Kailey Wilson',
    role: 'Owner',
    slug: 'kailey-wilson',
    image: '/images/team/kailey-wilson.jpg',
    phone: '469-883-4084',
    email: 'kailey@texasdentcompany.com',
    shortBio: 'Mother of two and Texas native. Passionate about storm restoration and helping families recover.',
  },
  {
    name: 'Fritz Torres',
    role: 'Auto Hail Claim Specialist',
    slug: 'fritz-torres',
    image: '/images/team/fritz-torres.jpg',
    phone: '469-888-8635',
    email: 'ftorres@texasdentcompany.com',
    shortBio: 'God-fearing Christian with 20+ years in customer service and 10+ years in the PDR industry.',
  },
  {
    name: 'Willian Soares',
    role: 'Auto Hail Claim Specialist',
    slug: 'willian-soares',
    image: '/images/team/willian-soares.jpg',
    phone: '469-888-8674',
    email: 'wsoares@texasdentcompany.com',
    shortBio: 'Technician with passion for learning from industry experts. Fluent in English, Spanish, and Portuguese.',
  },
  {
    name: 'Roy Harbin',
    role: 'Auto Hail Claim Specialist',
    slug: 'roy-harbin',
    image: '/images/team/roy-harbin.jpg',
    phone: '432-535-4048',
    email: 'roy@texasdentcompany.com',
    shortBio: 'Extensive experience in customer service and PDR auto repair across Texas.',
  },
  {
    name: 'Nicole Muro',
    role: 'Administrative Assistant',
    slug: 'nicole-muro',
    image: '/images/team/nicole-muro.jpg',
    phone: '469-966-7937',
    email: 'estimates@texasdentcompany.com',
    shortBio: 'Specializes in insurance-claim processes and customer support.',
  },
  {
    name: 'Kelly Flanery',
    role: 'Shop Coordinator',
    slug: 'kelly-flanery',
    image: '/images/team/kelly-flanery.jpg',
    phone: '469-966-7937',
    email: 'estimates@texasdentcompany.com',
    shortBio: 'Former baseball player turned coordinator. Ensures smooth shop operations.',
  },
  {
    name: 'Nelson Hsaio',
    role: 'Shop Coordinator & Claims Specialist',
    slug: 'nelson-hsaio',
    image: '/images/team/nelson-hsaio.jpg',
    phone: '469-966-7937',
    email: 'estimates@texasdentcompany.com',
    shortBio: 'Six+ years in customer service. Dedicated to excellent client experiences.',
  },
  {
    name: 'Tim Toshbekov',
    role: 'Shop Coordinator and R&I Specialist',
    slug: 'tim-toshbekov',
    image: '/images/team/tim-toshbekov.jpg',
    phone: '469-966-7937',
    email: 'estimates@texasdentcompany.com',
    shortBio: 'Four+ years in automotive repair. Expert in remove and install procedures.',
  },
  {
    name: 'Laurie Denton',
    role: 'Administrative Coordinator',
    slug: 'laurie-denton',
    image: '/images/team/laurie-denton.jpg',
    phone: '469-966-7937',
    email: 'estimates@texasdentcompany.com',
    shortBio: 'Sets high standards through customer service expertise and attention to detail.',
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-background py-16 md:py-24">
        <div className="container-xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 text-foreground mb-6">Meet Our Team</h1>
            <p className="body-large text-muted-foreground">
              Our dedicated team of professionals brings decades of combined experience 
              in paintless dent repair, insurance claims, and customer service. We are 
              committed to delivering exceptional results and making the hail repair 
              process as smooth as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <h2 className="heading-2 text-foreground mb-12 text-center">Leadership</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {teamMembers.slice(0, 2).map((member) => (
              <Card key={member.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="heading-3 text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.shortBio}</p>
                  
                  <div className="space-y-2 mb-4">
                    <a 
                      href={`tel:${member.phone.replace(/-/g, '')}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      {member.phone}
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      {member.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Claims Specialists */}
          <h2 className="heading-2 text-foreground mb-12 text-center">Claims Specialists</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {teamMembers.slice(2, 5).map((member) => (
              <Card key={member.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="heading-4 text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.shortBio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Operations Team */}
          <h2 className="heading-2 text-foreground mb-12 text-center">Operations Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.slice(5).map((member) => (
              <Card key={member.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-1 text-sm">{member.name}</h3>
                  <p className="text-primary text-xs font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 text-foreground mb-4">Our Values</h2>
            <p className="body-large text-muted-foreground">
              What drives us every day at Texas Dent Company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="heading-4 text-foreground mb-2">Quality First</h3>
              <p className="text-muted-foreground text-sm">
                We never rush repairs. Proper PDR requires time, access, and precision 
                to restore panels correctly.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="heading-4 text-foreground mb-2">Integrity</h3>
              <p className="text-muted-foreground text-sm">
                We educate, not hard-sell. We explain how deductibles work, how PDR 
                impacts value, and why complete repairs beat shortcuts.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="heading-4 text-foreground mb-2">Family Values</h3>
              <p className="text-muted-foreground text-sm">
                We are a family-owned business that treats every customer like family. 
                Your trust matters to us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
