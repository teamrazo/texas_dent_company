import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'FAQs | Paintless Dent Repair Questions | Texas Dent Company',
  description: 'Frequently asked questions about paintless dent repair, hail damage claims, insurance process, and our repair services. Get answers from Texas Dent Company experts.',
};

const faqCategories = [
  {
    title: 'General PDR Questions',
    id: 'general',
    faqs: [
      {
        question: 'What is Paintless Dent Repair (PDR)?',
        answer: 'Paintless Dent Repair (PDR) is a repair method that removes dents by carefully massaging the metal back into its original shape without repainting. This preserves the factory finish, maintains vehicle value, and avoids unnecessary body filler or paint work.',
      },
      {
        question: 'Is PDR as good as traditional body shop repair?',
        answer: 'When performed correctly, PDR restores panels to their original condition without altering factory paint. Traditional body repair often involves fillers and repainting, which can reduce vehicle value. PDR is the preferred repair method whenever damage qualifies.',
      },
      {
        question: 'Can all hail damage be repaired with PDR?',
        answer: 'Not all hail damage qualifies for PDR. Factors such as metal stretch, sharp impacts, panel access, prior repairs, and paint damage determine repairability. Some vehicles require a combination of PDR and conventional repair.',
      },
      {
        question: 'How does PDR work?',
        answer: 'Tools access the dent\'s backside to push and massage metal back into shape. Technicians use special lighting and reflection for precise dent identification. The process leverages metal\'s natural memory to restore panels without paint damage.',
      },
      {
        question: 'Is PDR cheaper than traditional repair?',
        answer: 'Yes, PDR is typically more affordable because it avoids painting and body fillers. The cost depends on dent size, location, and depth, but it generally costs less and takes less time than conventional repair methods.',
      },
      {
        question: 'Why is PDR better than conventional repair?',
        answer: 'PDR preserves your factory paint, offers faster repair times, and maintains your vehicle\'s resale value because there is no repainting or body filler involved. It is the preferred method whenever damage qualifies.',
      },
    ],
  },
  {
    title: 'Insurance & Claims',
    id: 'insurance',
    faqs: [
      {
        question: 'Do I have to use the insurance company\'s recommended shop?',
        answer: 'No. In Texas, you have the legal right to choose your repair facility. Insurance companies may recommend preferred shops, but the final decision is always yours.',
      },
      {
        question: 'What is a DRP (Direct Repair Program), and is it best for me?',
        answer: 'A Direct Repair Program (DRP) is a partnership between an insurance company and a repair facility. In these programs, insurance companies send high volume work to the shop, and in return the shop agrees to discounted labor rates. While DRPs may reduce costs for the insurance company, they are not always in the customer\'s best interest. Texas Dent Company operates independently and is not restricted by DRP pricing or volume requirements, allowing us to focus on the best repair method for your vehicle.',
      },
      {
        question: 'What is an initial estimate?',
        answer: 'The initial estimate is the first inspection used to determine repair scope and cost. It is typically completed by the insurance company and/or repair facility and submitted to insurance as the starting point for the claim.',
      },
      {
        question: 'Why does my final repair cost differ from the initial estimate?',
        answer: 'The initial estimate is not always complete. Additional damage may be discovered during repair, parts prices may change, or additional procedures may be required. These changes are documented through supplements submitted to insurance.',
      },
      {
        question: 'What is a supplement?',
        answer: 'A supplement is an update to the original estimate that accounts for additional damage, procedures, parts, or labor required to complete the repair properly. Supplements are common and necessary in hail repair.',
      },
      {
        question: 'Will my insurance rates go up if I file a hail claim?',
        answer: 'Hail damage is often considered an "act of God." Rates may rise across a zipcode due to weather claims, but typically not based on individual policies. However, this varies by insurer and policy.',
      },
      {
        question: 'How do I file a claim?',
        answer: 'Contact your insurer directly. Use their mobile app for efficiency. Our claims specialists can assist and guide you through the repair-side process.',
      },
      {
        question: 'How do I know what coverages I have?',
        answer: 'Review your policy documents or contact your insurer directly for clarification. Our team can help verify coverage for vehicle damage and rentals.',
      },
      {
        question: 'How long do I have to file a claim?',
        answer: 'File promptly and check your policy for specific deadlines. Delays may raise questions about whether damage occurred after the incident was reported.',
      },
    ],
  },
  {
    title: 'Repair Process & Timing',
    id: 'process',
    faqs: [
      {
        question: 'How long does hail repair take?',
        answer: 'Repair time varies based on vehicle size, damage severity, panel access, and parts availability. While some repairs can be completed quickly, complex hail damage often requires multiple days to ensure proper quality.',
      },
      {
        question: 'Why can\'t repairs be partially completed?',
        answer: 'Partial or incomplete repairs often lead to poor results, inconsistent panel appearance, and future issues. Professional PDR requires full access, proper sequencing, and completion of all affected areas to meet quality standards.',
      },
      {
        question: 'Will my vehicle need paint or body work?',
        answer: 'Some hail-damaged vehicles require paint or conventional repair in addition to PDR. This is determined after inspection and during repair if additional damage is discovered.',
      },
      {
        question: 'Will my car look new again?',
        answer: 'When repaired correctly, most hail damage can be removed with no visible signs of repair. Texas Dent Company focuses on professional-quality results rather than shortcuts.',
      },
      {
        question: 'Why does Texas Dent Company not rush repairs?',
        answer: 'Rushing repairs often leads to lower-quality results, missed damage, or unnecessary conventional repairs. Proper PDR requires time, access, and precision to restore panels correctly.',
      },
    ],
  },
  {
    title: 'Costs, Deductibles & Payments',
    id: 'costs',
    faqs: [
      {
        question: 'Do I have to pay my deductible?',
        answer: 'Yes. Your deductible is determined by your insurance policy and is the policyholder\'s responsibility.',
      },
      {
        question: 'Do you offer cash incentives or pay deductibles?',
        answer: 'No. Texas Dent Company does not offer cash incentives or deductible reimbursement. We focus on delivering professional-quality repairs and customer service without compromising standards.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'Accepted payment methods include check, cashier\'s check, cash, and approved electronic payment options. Payment must be confirmed before vehicle release.',
      },
    ],
  },
  {
    title: 'Rentals & Transportation',
    id: 'rentals',
    faqs: [
      {
        question: 'Will insurance cover a rental car?',
        answer: 'Rental coverage depends on your individual insurance policy. Coverage is verified before rental arrangements are made.',
      },
      {
        question: 'What happens if my rental coverage runs out?',
        answer: 'If rental coverage is exhausted, the customer is responsible for additional rental costs unless otherwise approved.',
      },
      {
        question: 'Do you have your own rental vehicles?',
        answer: 'Yes, we have an 18+ vehicle rental fleet including sedans, trucks, and SUVs. We also coordinate with Enterprise and other rental providers based on your insurance coverage.',
      },
    ],
  },
  {
    title: 'Quality, Warranty & Value',
    id: 'quality',
    faqs: [
      {
        question: 'Is your work guaranteed?',
        answer: 'Yes. Texas Dent Company stands behind the quality of its repairs with a lifetime warranty on repaired dents. Warranty details are provided at delivery.',
      },
      {
        question: 'Will hail damage affect my vehicle\'s value?',
        answer: 'Unrepaired hail damage and unnecessary repainting can negatively affect vehicle value. Proper PDR preserves the factory finish and helps maintain resale value when damage qualifies.',
      },
      {
        question: 'Does this go on my Carfax?',
        answer: 'Minor PDR work usually is not recorded on Carfax. However, insurance claims may appear in vehicle history reports depending on the reporting practices of your insurer.',
      },
      {
        question: 'Do you use aftermarket parts?',
        answer: 'We use OEM (Original Equipment Manufacturer) parts. Since PDR repairs panels directly, parts replacement is often not needed. When parts are required, we use OEM parts that match factory originals.',
      },
    ],
  },
  {
    title: 'Texas Dent Company Specific',
    id: 'tdc',
    faqs: [
      {
        question: 'What makes Texas Dent Company different?',
        answer: 'Texas Dent Company focuses on professional-quality repairs, claims education, and concierge-level customer service. We prioritize quality and transparency over volume or shortcuts. We are a high-trust, process-driven hail damage repair partner with multi-step quality control before every delivery.',
      },
      {
        question: 'How do referrals work?',
        answer: 'Satisfied customers are encouraged to refer others. We have a structured referral and affiliate program where you can earn up to $300 in your first month and $200 each month after by helping friends and family get their vehicles repaired.',
      },
      {
        question: 'Where are you located?',
        answer: 'Our home office is in Frisco, TX (122 Rose Lane, Suite 801) serving the DFW metro area. We also have a satellite shop in Odessa, TX (4111 S County Rd 1297) serving West Texas.',
      },
    ],
  },
];

export default function FAQsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-background py-16 md:py-24">
        <div className="container-xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 text-foreground mb-6">Frequently Asked Questions</h1>
            <p className="body-large text-muted-foreground">
              Get answers to common questions about paintless dent repair, hail damage 
              claims, insurance processes, and our repair services.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 border-b border-border sticky top-[73px] bg-background z-40">
        <div className="container-xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {faqCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="px-4 py-2 text-sm font-medium rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 md:py-24">
        <div className="container-xl max-w-4xl">
          {faqCategories.map((category) => (
            <div key={category.id} id={category.id} className="mb-16 scroll-mt-32">
              <h2 className="heading-2 text-foreground mb-8 pb-4 border-b border-border">
                {category.title}
              </h2>
              <div className="space-y-6">
                {category.faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="heading-4 text-foreground mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-2 text-foreground mb-4">Still Have Questions?</h2>
            <p className="body-large text-muted-foreground mb-8">
              Our team is here to help. Contact us for personalized guidance on your 
              specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8">
                  Contact Us <ArrowRight className="h-5 w-5 ml-2" />
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
    </>
  );
}
