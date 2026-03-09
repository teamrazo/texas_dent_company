import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft, ArrowRight, Tag, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { COMPANY } from '@/lib/constants';

// Blog post data
const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  content: string;
}> = {
  'hail-claim-process': {
    title: 'The Complete Process at Texas Dent Company: From First Contact to Final Pickup',
    excerpt: 'Walk through the entire process of getting your car repaired for hail damage with Texas Dent Company.',
    image: '/images/gallery/headliner-work.png',
    author: 'Kailey Wilson',
    date: 'March 29, 2024',
    category: 'Hail Claims',
    content: `
## First Contact with Texas Dent Company

When you first contact Texas Dent Company, whether through our website, a phone call, or a team member who knocks on your door after a storm, our goal is to understand your situation and provide clear guidance.

We will:
- Verify if you have comprehensive insurance coverage
- Explain how the claims process works
- Answer any questions about PDR and conventional repair
- Schedule a professional inspection at your convenience

## The Professional Inspection (30-45 Minutes)

During your inspection, our trained specialists use professional lighting and tools to:

1. **Document all hail damage** on your vehicle's panels
2. **Explain what we find** in clear, understandable terms
3. **Discuss repair options** - PDR vs. conventional repair
4. **Provide timeline expectations** based on damage severity
5. **Answer questions about insurance** and the claims process

This inspection is thorough and educational. We want you to understand exactly what happened to your vehicle and what repair options are available.

## Filing Your Claim

**You file the claim. We guide you through what to expect.**

We recommend filing your claim through your insurance company's mobile app for the fastest processing. Our team can help you understand:
- What information to provide
- What to expect during the adjuster's inspection
- How initial estimates work
- Why supplements may be necessary

## Documentation and Estimate Submission

After your inspection, we:
- Prepare complete, accurate documentation
- Submit estimates to your insurance carrier
- Communicate with adjusters as needed
- Submit supplements for additional damage discovered during repair

Our estimating expertise helps ensure nothing is missed and your vehicle is repaired properly.

## Drop Off and Rental Coordination

When it is time for repair:
- **Schedule your drop-off** at a convenient time
- **Rental coordination** - We verify your coverage and help arrange a rental vehicle
- **18+ vehicle fleet** - If you need a rental from us, we have sedans, trucks, and SUVs available

## The Repair Process

During repairs:
- Our experienced technicians work methodically through each panel
- **PDR-first philosophy** preserves your factory finish when possible
- **Multi-step quality control** at each phase of repair
- Communication updates keep you informed

We do not rush. Proper PDR requires time and precision.

## Final Quality Check and Delivery

Before you pick up your vehicle:
- **Final QC inspection** verifies all work meets our standards
- **Complimentary detail** - interior and exterior cleaning
- **Walk-around review** - we show you the completed work
- **Warranty documentation** provided

## Payment and Pickup

- Payment confirmed before vehicle release
- We accept check, cashier's check, cash, and approved electronic payments
- Your deductible is your responsibility (we do not offer cash incentives)
- You drive away in your restored vehicle!

---

**Ready to get started?** [Schedule your free inspection](/contact) or call us at ${COMPANY.phone}.
    `,
  },
  'repair-timeline': {
    title: 'Auto Hail Repair Timeline: 3 Important Factors',
    excerpt: 'When your car is in our facility for hail damage repair, three main factors determine how long the process will take.',
    image: '/images/blog/repair-timeline.jpg',
    author: 'Kailey Wilson',
    date: 'March 29, 2024',
    category: 'Hail Claims',
    content: `
## Factor 1: Insurance Approval

The first factor is the speed at which we receive approval from your insurance company to start repairs.

**What affects approval timing:**
- How quickly you file your claim
- Insurance company workload (especially after major storms)
- Whether additional inspection is needed
- Supplement approvals for discovered damage

**What you can do:**
- File your claim promptly after the storm
- Respond quickly to insurance requests
- Provide accurate information

## Factor 2: Damage Severity

The extent of hail damage directly impacts repair time.

**Minor damage:**
- Few panels affected
- Small, shallow dents
- Can often be completed in 1-3 days

**Moderate damage:**
- Multiple panels with dents
- Mix of sizes and depths
- Typically 3-5 days

**Severe damage:**
- Most or all panels affected
- Large, deep dents
- May require conventional repair on some panels
- Can take a week or more

Our technicians take the time needed to do the job right. Rushing leads to poor results.

## Factor 3: Parts Availability

If your vehicle needs parts (glass, trim, moldings, etc.):
- OEM parts may need to be ordered
- Some parts have longer lead times
- Supply chain issues can cause delays

We use OEM (Original Equipment Manufacturer) parts to maintain your vehicle's value and quality.

## Our Commitment to Quality

**We do not rush repairs.** Here is why:

- Rushing often leads to missed damage
- Incomplete repairs affect panel appearance
- Shortcuts can cause future problems
- Professional PDR requires time and precision

When repaired correctly, most hail damage can be removed with no visible signs of repair. That is our standard.

## How to Get the Fastest Turnaround

1. **File your claim quickly** after the storm
2. **Schedule your inspection promptly**
3. **Drop off when scheduled** - delays push back your spot
4. **Respond to any requests** from us or your insurance
5. **Be flexible** if parts or approvals take extra time

---

**Questions about your repair timeline?** [Contact us](/contact) or call ${COMPANY.phone}.
    `,
  },
  'frisco-location': {
    title: 'Frisco Location | Auto Hail Repair',
    excerpt: 'We have moved from our Carrollton location. Now, we are located at 122 Rose Ln Suite 801, Frisco, TX 75036.',
    image: '/images/locations/frisco-shop.jpg',
    author: 'Kailey Wilson',
    date: 'May 7, 2024',
    category: 'TDC Locations',
    content: `
## Welcome to Our New Frisco Home Office

Texas Dent Company has moved! We are now located at:

**122 Rose Lane, Suite 801**  
**Frisco, TX 75036**

This new location allows us to better serve the growing DFW metro area with the same customer service and quality of repair we have offered since 2017.

## What to Expect at Our Frisco Location

- **Professional inspection bays** with proper lighting
- **Comfortable waiting area** for customers
- **Rental vehicle fleet** on-site
- **Experienced team** ready to serve you

## Areas We Serve from Frisco

Our Frisco location serves customers throughout North Texas, including:

- Frisco
- Plano
- McKinney
- Allen
- The Colony
- Prosper
- Celina
- Little Elm
- Lewisville
- Carrollton
- Richardson
- Dallas
- And surrounding areas within approximately 25 miles

## Schedule Your Visit

We are open:
- **Monday - Friday:** 9:00 AM - 5:00 PM
- **Saturday:** 10:00 AM - 1:00 PM
- **Sunday:** Closed

**Phone:** ${COMPANY.phone}  
**Email:** estimates@texasdentcompany.com

[Schedule your free inspection](/contact) today!

## Easy to Find

Located in Frisco near Rose Lane, our shop is easily accessible from:
- Highway 121
- Dallas North Tollway
- Highway 380

Look for the Texas Dent Company signage and our fleet of rental vehicles out front.

---

**Ready to get your hail damage repaired?** [Contact us](/contact) to schedule your appointment.
    `,
  },
  'tyler-location': {
    title: 'Tyler Location | Auto Hail Repair',
    excerpt: 'We have been helping Tyler residents get rid of the dents the storm from February 14th caused on their cars.',
    image: '/images/locations/tyler-location.jpg',
    author: 'Kailey Wilson',
    date: 'April 5, 2024',
    category: 'TDC Locations',
    content: `
## Serving Tyler After the Storm

Following the February 14th hailstorm, Texas Dent Company mobilized to help Tyler residents repair their vehicles. We understand how stressful hail damage can be, and we are here to help.

## Professional Hail Repair in East Texas

Our team brought the same quality and service Tyler residents deserve:

- **PDR-first approach** to preserve your factory finish
- **Insurance claims guidance** to navigate the process
- **Professional documentation** for accurate estimates
- **Quality results** backed by our warranty

## Why Tyler Residents Choose Texas Dent Company

1. **Experience:** Our technicians have repaired thousands of vehicles
2. **Quality:** We do not rush - proper repairs take proper time
3. **Integrity:** No cash incentives or shortcuts
4. **Communication:** We keep you informed throughout the process

## Book Your Appointment

If your vehicle was damaged in the Tyler area storms, do not wait to get it inspected. Delaying can:
- Make claims more complicated
- Allow minor damage to worsen
- Affect your vehicle's value

## Contact Us

Even though Tyler is outside our permanent locations, we often serve areas affected by major hail events.

**Phone:** ${COMPANY.phone}  
**Email:** estimates@texasdentcompany.com

[Contact us](/contact) to discuss your Tyler area hail damage repair needs.

---

**Our permanent locations:**
- **Frisco, TX** (Home Office) - Serving DFW Metro
- **Odessa, TX** (Satellite Shop) - Serving West Texas
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | Texas Dent Company Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  const otherPosts = Object.entries(blogPosts)
    .filter(([key]) => key !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-background py-12">
        <div className="container-xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              <Tag className="h-3 w-3 mr-1" />
              {post.category}
            </Badge>
            <h1 className="heading-1 text-foreground mb-6">{post.title}</h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {post.date}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container-xl">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-secondary">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-2 text-foreground mb-4">Ready to Get Started?</h2>
            <p className="body-large text-muted-foreground mb-6">
              Schedule your free professional hail inspection today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8">
                  Schedule Inspection <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <a href={`tel:${COMPANY.phone}`}>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Phone className="h-5 w-5 mr-2" />
                  {COMPANY.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="py-16">
          <div className="container-xl">
            <h2 className="heading-2 text-foreground mb-8">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherPosts.map(([postSlug, postData]) => (
                <Card key={postSlug} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={postData.image}
                      alt={postData.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-5">
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {postData.category}
                    </Badge>
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                      {postData.title}
                    </h3>
                    <Link href={`/blog/${postSlug}`}>
                      <Button variant="link" className="p-0 h-auto text-primary">
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

// Simple markdown to HTML converter
function formatMarkdown(content: string): string {
  return content
    .replace(/^## (.*$)/gim, '<h2 class="heading-3 mt-8 mb-4">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="heading-4 mt-6 mb-3">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul class="list-disc pl-6 my-4 space-y-2">$&</ul>')
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    .replace(/^---$/gim, '<hr class="my-8 border-border" />')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/^(.+)$/gim, (match) => {
      if (match.startsWith('<')) return match;
      return `<p class="mb-4">${match}</p>`;
    });
}
