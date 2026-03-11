'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TeamMember } from '@/lib/team-data';

interface TeamMemberProfileProps {
  member: TeamMember;
}

export function TeamMemberProfile({ member }: TeamMemberProfileProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-background py-12 md:py-20">
        <div className="container-xl">
          <Link 
            href="/team" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Team
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Photo */}
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            
            {/* Info */}
            <div className="space-y-6">
              <div>
                <h1 className="heading-1 text-foreground mb-2">{member.name}</h1>
                <p className="text-xl text-primary font-semibold">{member.role}</p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href={`tel:${member.phone.replace(/-/g, '')}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  {member.phone}
                </a>
                <a 
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  {member.email}
                </a>
              </div>
              
              {/* Bio */}
              <div className="prose prose-lg max-w-none">
                {member.fullBio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {/* Expertise */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      <CheckCircle className="h-3.5 w-3.5" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HighLevel Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="heading-2 text-foreground mb-4">
                Get in Touch with {member.name.split(' ')[0]}
              </h2>
              <p className="body-large text-muted-foreground">
                Have questions about hail damage repair or want to schedule an inspection? 
                Fill out the form below and {member.name.split(' ')[0]} will get back to you shortly.
              </p>
            </div>
            
            <Card className="shadow-lg border-2 border-border">
              <CardContent className="p-0">
                {/* HighLevel iframe form */}
                <div className="relative w-full" style={{ minHeight: '600px' }}>
                  <iframe 
                    src={`https://api.leadconnectorhq.com/widget/form/${member.ghlFormId || 'PLACEHOLDER_FORM_ID'}`}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      minHeight: '600px',
                      border: 'none',
                    }}
                    id={`inline-${member.ghlFormId || 'PLACEHOLDER_FORM_ID'}`}
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name={`${member.name} Contact Form`}
                    data-height="600"
                    data-layout-iframe-id={`inline-${member.ghlFormId || 'PLACEHOLDER_FORM_ID'}`}
                    data-form-id={member.ghlFormId || 'PLACEHOLDER_FORM_ID'}
                    title={`${member.name} Contact Form`}
                  />
                </div>
                
                {/* Placeholder message for development */}
                <div className="p-6 bg-gray-50 border-t border-gray-200 text-center text-sm text-muted-foreground">
                  <p>
                    <strong>Note:</strong> Replace the form ID with your actual HighLevel form ID.
                    <br />
                    Update the <code className="bg-gray-200 px-1 rounded">ghlFormId</code> in <code className="bg-gray-200 px-1 rounded">src/lib/team-data.ts</code>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="heading-2 text-white">
              Ready to Get <span className="text-[#BD3728]">Started?</span>
            </h2>
            <p className="body-large text-gray-300">
              Schedule your free professional hail inspection today. 
              We handle the repair side so you can get back on the road.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="cta-glow w-full sm:w-auto text-lg px-8 bg-[#BD3728] hover:bg-[#a32f22] uppercase tracking-wide"
                >
                  Schedule Inspection
                </Button>
              </Link>
              <Link href="/team">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-lg px-8 border-white text-white hover:bg-white hover:text-black"
                >
                  Meet The Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
