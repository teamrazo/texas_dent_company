import Link from 'next/link';
import { Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { COMPANY, LOCATIONS, NAV_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container-xl py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Hours & Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Clock className="h-4 w-4" />
              <span>{COMPANY.hours.weekdays} | {COMPANY.hours.saturday} | {COMPANY.hours.sunday}</span>
            </div>
            <a 
              href={`tel:${COMPANY.phone}`} 
              className="inline-flex items-center gap-2 text-[#BD3728] font-semibold text-sm hover:text-[#d94a3c] transition-colors"
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phone}
            </a>
            <div className="flex gap-4 pt-2">
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Frisco Location */}
          <div className="space-y-3">
            <h4 className="text-[#BD3728] uppercase font-semibold tracking-wide text-sm">
              Frisco
            </h4>
            <a
              href={LOCATIONS.frisco.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#BD3728]" />
              <span>
                {LOCATIONS.frisco.address}<br />
                {LOCATIONS.frisco.city}, {LOCATIONS.frisco.state} {LOCATIONS.frisco.zip}
              </span>
            </a>
            <p className="text-gray-500 text-sm">
              Serving North Texas (~25-mile radius)
            </p>
          </div>

          {/* Odessa Location */}
          <div className="space-y-3">
            <h4 className="text-[#BD3728] uppercase font-semibold tracking-wide text-sm">
              Odessa
            </h4>
            <a
              href={LOCATIONS.odessa.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#BD3728]" />
              <span>
                {LOCATIONS.odessa.address}<br />
                {LOCATIONS.odessa.city}, {LOCATIONS.odessa.state} {LOCATIONS.odessa.zip}
              </span>
            </a>
            <p className="text-gray-500 text-sm">
              Serving Midland, Fort Stockton, Big Spring & surrounding areas
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {currentYear} {COMPANY.legalName}. All rights reserved.
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
