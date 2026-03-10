import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Texas Dent Company | Professional Hail Damage Repair',
    template: '%s | Texas Dent Company',
  },
  description:
    'Texas Dent Company is a professional hail damage repair specialist serving Frisco, Odessa, and surrounding areas. PDR-first philosophy, insurance coordination, and 500+ 5-star reviews.',
  keywords: [
    'hail damage repair',
    'paintless dent repair',
    'PDR',
    'Texas dent repair',
    'Frisco hail repair',
    'Odessa hail repair',
    'auto hail damage',
    'insurance claim help',
  ],
  authors: [{ name: 'Texas Dent Company' }],
  creator: 'Texas Dent Company',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.texasdentcompany.com',
    siteName: 'Texas Dent Company',
    title: 'Texas Dent Company | Professional Hail Damage Repair',
    description:
      'Professional hail damage repair specialists serving North Texas and West Texas. Over 500 5-star reviews, A+ BBB rating.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Texas Dent Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Texas Dent Company | Professional Hail Damage Repair',
    description:
      'Professional hail damage repair specialists serving North Texas and West Texas.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
