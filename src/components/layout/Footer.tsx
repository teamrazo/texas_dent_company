import Link from 'next/link';
import { Phone, Clock } from 'lucide-react';
import { COMPANY, LOCATIONS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pb-16 sm:pb-0">
      <div className="container mx-auto px-4 py-10">
        {/* Main Footer Content - 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: Hours & Phone */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Clock className="h-4 w-4" />
              <span>Mon-Fri 9-5 | Sat 10-1 | Sun Closed</span>
            </div>
            <a 
              href={`tel:${COMPANY.phone.replace(/[^0-9]/g, '')}`} 
              className="inline-flex items-center gap-2 text-[#BD3728] font-semibold text-lg hover:text-[#d94a3c] transition-colors"
            >
              <Phone className="h-5 w-5" />
              {COMPANY.phone}
            </a>
          </div>

          {/* Column 2: Frisco */}
          <div className="space-y-2">
            <h4 className="text-[#BD3728] uppercase font-semibold tracking-wide text-sm" style={{ fontFamily: 'var(--font-montserrat)' }}>
              FRISCO
            </h4>
            <p className="text-gray-400 text-sm">
              {LOCATIONS.frisco.address}
            </p>
            <p className="text-gray-400 text-sm">
              {LOCATIONS.frisco.city}, {LOCATIONS.frisco.state} {LOCATIONS.frisco.zip}
            </p>
            <p className="text-gray-500 text-sm">
              Serving North Texas (~25-mile radius)
            </p>
          </div>

          {/* Column 3: Odessa */}
          <div className="space-y-2">
            <h4 className="text-[#BD3728] uppercase font-semibold tracking-wide text-sm" style={{ fontFamily: 'var(--font-montserrat)' }}>
              ODESSA
            </h4>
            <p className="text-gray-400 text-sm">
              {LOCATIONS.odessa.address}
            </p>
            <p className="text-gray-400 text-sm">
              {LOCATIONS.odessa.city}, {LOCATIONS.odessa.state} {LOCATIONS.odessa.zip}
            </p>
            <p className="text-gray-500 text-sm">
              Serving Midland, Fort Stockton, Big Spring, Pecos, Crane
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Wilson Solutions Inc. DBA Texas Dent Company. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
