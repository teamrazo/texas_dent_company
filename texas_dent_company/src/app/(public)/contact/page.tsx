import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
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
      <section className="bg-gradient-to-br from-secondary to-background py-16 md:py-24">
        <div className="container-xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 text-foreground mb-6">Contact Us</h1>
            <p className="body-large text-muted-foreground">
              Ready to schedule your free hail inspection? Have questions about the 
              repair process? Our team is here to help. Reach out by phone, email, 
              or fill out the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="heading-4 text-foreground mb-2">Call or Text</h3>
                <a 
                  href={`tel:${COMPANY.phone}`} 
                  className="text-lg text-primary font-semibold hover:underline"
                >
                  {COMPANY.phone}
                </a>
                <p className="text-muted-foreground text-sm mt-2">
                  Mon-Fri 9-5 | Sat 10-1
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="heading-4 text-foreground mb-2">Email</h3>
                <a 
                  href={`mailto:${COMPANY.email}`} 
                  className="text-lg text-primary font-semibold hover:underline"
                >
                  {COMPANY.email}
                </a>
                <p className="text-muted-foreground text-sm mt-2">
                  We respond within 24 hours
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <h3 className="heading-4 text-foreground mb-2">Social Media</h3>
                <div className="flex justify-center gap-4">
                  <a 
                    href={COMPANY.social.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Facebook
                  </a>
                  <a 
                    href={COMPANY.social.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Instagram
                  </a>
                </div>
                <p className="text-muted-foreground text-sm mt-2">
                  Follow us for updates
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2 text-foreground mb-6">Schedule Your Free Inspection</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form and one of our team members will contact you to 
                schedule your free professional hail inspection. We typically respond 
                within a few hours during business hours.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="heading-4 text-foreground mb-2">What to Expect</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 30-45 minute comprehensive inspection</li>
                    <li>• Damage documentation and explanation</li>
                    <li>• Repair options and timeline discussion</li>
                    <li>• Insurance process guidance</li>
                    <li>• No obligation - completely free</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-xl p-6 md:p-8">
              <h3 className="heading-3 text-foreground mb-2">Get in Touch</h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we will contact you shortly.
              </p>
              <ContactForm source="contact-page" buttonText="Send Message" />
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-xl">
          <h2 className="heading-2 text-foreground mb-12 text-center">Our Locations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Frisco */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <CardTitle>Frisco, TX (Home Office)</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground">{LOCATIONS.frisco.address}</p>
                    <p className="text-foreground">{LOCATIONS.frisco.city}, {LOCATIONS.frisco.state} {LOCATIONS.frisco.zip}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href={`tel:${LOCATIONS.frisco.phone}`} className="text-foreground hover:text-primary">
                    {LOCATIONS.frisco.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground text-sm">
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
              </CardContent>
            </Card>

            {/* Odessa */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <CardTitle>Odessa, TX (Satellite Shop)</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground">{LOCATIONS.odessa.address}</p>
                    <p className="text-foreground">{LOCATIONS.odessa.city}, {LOCATIONS.odessa.state} {LOCATIONS.odessa.zip}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href={`tel:${LOCATIONS.odessa.phone}`} className="text-foreground hover:text-primary">
                    {LOCATIONS.odessa.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground text-sm">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
