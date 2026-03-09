import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { COMPANY, LOCATIONS, NAV_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Texas Dent Company
            </h3>
            <p className="text-gray-400 text-sm">
              Professional hail damage repair specialists serving North Texas and West Texas. 
              We handle the repair side, you get your vehicle back right.
            </p>
            <div className="flex gap-4">
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

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.filter(l => !l.children).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/claim-help" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Claim Help
                </Link>
              </li>
              <li>
                <Link href="/quality" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Quality Standards
                </Link>
              </li>
            </ul>
          </div>

          {/* Frisco Location */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Frisco Location
            </h4>
            <div className="space-y-3">
              <a
                href={LOCATIONS.frisco.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>
                  {LOCATIONS.frisco.address}<br />
                  {LOCATIONS.frisco.city}, {LOCATIONS.frisco.state} {LOCATIONS.frisco.zip}
                </span>
              </a>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                {COMPANY.phone}
              </a>
              <p className="text-gray-400 text-sm">
                {COMPANY.hours.weekdays}<br />
                {COMPANY.hours.saturday}<br />
                {COMPANY.hours.sunday}
              </p>
            </div>
          </div>

          {/* Odessa Location */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Odessa Location
            </h4>
            <div className="space-y-3">
              <a
                href={LOCATIONS.odessa.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>
                  {LOCATIONS.odessa.address}<br />
                  {LOCATIONS.odessa.city}, {LOCATIONS.odessa.state} {LOCATIONS.odessa.zip}
                </span>
              </a>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                {COMPANY.phone}
              </a>
              <p className="text-gray-400 text-sm">
                Serving Midland, Fort Stockton,<br />
                Big Spring, Pecos, Crane
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} {COMPANY.legalName}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
