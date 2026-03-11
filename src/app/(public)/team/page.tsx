import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CTA } from '@/components/sections';
import { teamMembers } from '@/lib/team-data';

export const metadata: Metadata = {
  title: 'Our Team | Texas Dent Company',
  description: 'Meet the dedicated professionals at Texas Dent Company. Our team of experienced PDR technicians and claims specialists are committed to delivering exceptional hail damage repair.',
};

export default function TeamPage() {
  // Separate leadership (first 2) from rest of team
  const leadership = teamMembers.slice(0, 2);
  const claimsSpecialists = teamMembers.filter(m => m.role.includes('Claim Specialist')).slice(0, 3);
  const operationsTeam = teamMembers.filter(m => 
    !m.role.includes('Owner') && 
    !claimsSpecialists.some(cs => cs.slug === m.slug)
  );

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
            {leadership.map((member) => (
              <Link key={member.slug} href={`/${member.slug}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center gap-1 text-white text-sm font-medium">
                        View Profile <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="heading-3 text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.shortBio}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        {member.phone}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        {member.email}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Claims Specialists */}
          <h2 className="heading-2 text-foreground mb-12 text-center">Claims Specialists</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {claimsSpecialists.map((member) => (
              <Link key={member.slug} href={`/${member.slug}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group h-full">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center gap-1 text-white text-sm font-medium">
                        View Profile <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="heading-4 text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.shortBio}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Operations Team */}
          <h2 className="heading-2 text-foreground mb-12 text-center">Operations Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {operationsTeam.map((member) => (
              <Link key={member.slug} href={`/${member.slug}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group h-full">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center gap-1 text-white text-sm font-medium">
                        View Profile <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-1 text-sm">{member.name}</h3>
                    <p className="text-primary text-xs font-medium">{member.role}</p>
                  </CardContent>
                </Card>
              </Link>
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
