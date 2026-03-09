import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, DollarSign, Users, Heart, ArrowRight, MessageSquare, Mail, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Partner & Referral Program | Texas Dent Company',
  description: 'Join our referral and affiliate program. Earn up to $300 in your first month by helping friends and family get their hail-damaged cars repaired.',
};

const benefits = [
  {
    icon: DollarSign,
    title: 'Earn Up to $300 First Month',
    description: 'Get rewarded for helping friends and family get their vehicles repaired after hail storms.',
  },
  {
    icon: Users,
    title: 'No Experience Needed',
    description: 'No business experience or hard selling required. Just share your link and help someone out.',
  },
  {
    icon: Heart,
    title: 'Support Local',
    description: 'Help Texans recover from hail damage while supporting a local, family-owned business.',
  },
];

const steps = [
  {
    number: '1',
    title: 'Register',
    description: 'Sign up at partner.texasdentcompany.com with your name, email, and phone.',
  },
  {
    number: '2',
    title: 'Log In',
    description: 'Access your member area with your personal link and ready-made marketing materials.',
  },
  {
    number: '3',
    title: 'Share Your Link',
    description: 'Text friends, post on social media, or email your network with your unique link.',
  },
  {
    number: '4',
    title: 'Get Paid',
    description: 'Earn money when people you refer complete their repairs through your link.',
  },
];

const outreachIdeas = [
  {
    icon: MessageSquare,
    title: 'Text Message',
    example: 'Hey! Texas Dent Company fixed my hail damage fast. They are amazing - and you can use my link to book an estimate.',
  },
  {
    icon: Share2,
    title: 'Social Media Post',
    example: 'Need your car looking new again? Texas Dent Company fixed mine after the hailstorm! Use my link to book - they will take care of you.',
  },
  {
    icon: Mail,
    title: 'Email',
    example: 'Hey friend, Texas Dent Company repaired my hail damage and they did an incredible job. Use my link to schedule and save time.',
  },
];

export default function PartnerProgramPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-background py-16 md:py-24">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="h-4 w-4" />
                Texans Helping Texans
              </div>
              <h1 className="heading-1 text-foreground">
                Join Our Referral & Partner Program
              </h1>
              <p className="body-large text-muted-foreground">
                Earn up to $300 in your first month and $200 each month after - just 
                by helping friends and family get their hail-damaged cars repaired.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="https://partner.texasdentcompany.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                    Register Now <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </a>
                <Link href="/portal/dashboard">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8">
                    Partner Login
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-background rounded-xl p-8 shadow-lg border border-border">
              <h2 className="heading-3 text-foreground mb-6">Quick Start</h2>
              <div className="space-y-4">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-2 text-foreground mb-4">Why Join Our Program?</h2>
            <p className="body-large text-muted-foreground">
              No business experience needed. No hard selling. Just share your link, 
              help someone out, and earn money when they book their repair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="heading-4 text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-2 text-foreground mb-4">How to Share Your Link</h2>
            <p className="body-large text-muted-foreground">
              You can share your link anywhere. Here are some ideas to get started.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {outreachIdeas.map((idea, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
                    <idea.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="heading-4">{idea.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm italic">
                    "{idea.example}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Example */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-background border-primary/20">
              <CardContent className="p-8 md:p-12">
                <h2 className="heading-2 text-foreground mb-6 text-center">Example: How Fast You Can Earn</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
                  <div className="p-4">
                    <div className="text-4xl font-bold text-primary mb-2">3</div>
                    <p className="text-muted-foreground">Friends You Tell This Week</p>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl font-bold text-primary mb-2">2</div>
                    <p className="text-muted-foreground">Book Their Hail Repairs</p>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl font-bold text-primary mb-2">$600</div>
                    <p className="text-muted-foreground">You Earn This Month</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-lg text-foreground font-medium mb-4">
                    Just for helping out friends and family!
                  </p>
                  <a href="https://partner.texasdentcompany.com" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="text-lg px-8">
                      Start Earning Today <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-2 text-foreground mb-4">Quick Tips for Success</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {[
                { title: 'Start with people you know', desc: 'Text your friends, family, or coworkers who had hail damage.' },
                { title: 'Share your story', desc: 'Tell them how fast or easy your repair was - people trust real stories.' },
                { title: 'Use the templates', desc: 'Do not worry about writing your own posts - we have made them for you!' },
                { title: 'Post once a week', desc: 'Stay consistent - it only takes a minute to share.' },
                { title: 'Check your dashboard', desc: 'Log in anytime to see your clicks, referrals, and earnings.' },
              ].map((tip, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-xl">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">{tip.title}</h3>
                    <p className="text-muted-foreground text-sm">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-xl text-center">
          <h2 className="heading-2 mb-4">Ready to Get Started?</h2>
          <p className="body-large opacity-90 mb-8 max-w-2xl mx-auto">
            You do not have to be a marketer to do this. You just need to share your 
            story and your link. It is easy. It is local. It is Texas. 🤠
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://partner.texasdentcompany.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Register Now <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </a>
            <a href="https://members.texasdentcompany.com/login" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Partner Login
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
