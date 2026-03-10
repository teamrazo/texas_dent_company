import { Metadata } from 'next';
import { HomePageContent } from '@/components/pages/HomePageContent';

export const metadata: Metadata = {
  title: 'Texas Dent Company | Professional Hail Damage Repair in Frisco & Odessa',
  description:
    'Got Hail? You came to the BEST place. Top-rated hail damage repair shop with 500+ 5-star reviews. Insurance approved, free pickup and dropoff, lifetime warranty.',
};

// JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Texas Dent Company',
  description: 'Professional hail damage repair specialists serving North Texas and West Texas.',
  url: 'https://www.texasdentcompany.com',
  telephone: '+1-469-966-7937',
  email: 'estimates@texasdentcompany.com',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '122 Rose Lane, Suite 801',
      addressLocality: 'Frisco',
      addressRegion: 'TX',
      postalCode: '75036',
      addressCountry: 'US',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '4111 S County Rd 1297',
      addressLocality: 'Odessa',
      addressRegion: 'TX',
      postalCode: '79765',
      addressCountry: 'US',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '500',
  },
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
  priceRange: '$$',
  image: 'https://m.bbb.org/prod/ProfileImages/2026/4637c26f-f03d-4f1f-81d2-e5426f421fca.jpeg',
  sameAs: [
    'https://www.facebook.com/texasdentcompany',
    'https://www.instagram.com/texasdentcompany',
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageContent />
    </>
  );
}
