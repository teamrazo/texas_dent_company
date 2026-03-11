'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Phone, ChevronDown, Clock, User, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { COMPANY, NAV_LINKS } from '@/lib/constants';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Hello Bar - Phone & Hours */}
      <div className="bg-black text-white">
        <div className="container-xl h-10 flex items-center justify-between">
          {/* Hours of Operation */}
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-[#BD3728]" />
            <span className="hidden sm:inline">{COMPANY.hours.weekdays} | {COMPANY.hours.saturday}</span>
            <span className="sm:hidden text-xs">Mon-Fri: 8AM-5PM</span>
          </div>

          {/* Phone Number Button */}
          <a 
            href={`tel:${COMPANY.phone}`} 
            className="cta-glow inline-flex items-center gap-2 px-4 py-1.5 bg-[#BD3728] text-white text-sm font-semibold rounded uppercase tracking-wide"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{COMPANY.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="container-xl h-16 flex items-center justify-between">
          {/* Full Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/Texas-Dent-Logo-Updated.png"
              alt="Texas Dent Company"
              width={180}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.href} 
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.children ? (
                  <div className="relative">
                    <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#BD3728] transition-colors py-2">
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {openDropdown === link.href && (
                      <div className="absolute top-full left-0 mt-0 bg-white border border-gray-200 rounded shadow-lg py-2 min-w-[180px] z-50">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#BD3728] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-[#BD3728] transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Login Icons & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* User Account / Login Icons - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/portal/dashboard"
                className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-[#BD3728] transition-colors"
              >
                <User className="h-5 w-5" />
                <span className="hidden lg:inline">My Account</span>
              </Link>
              <Link
                href="/login"
                className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-[#BD3728] transition-colors"
              >
                <LogIn className="h-5 w-5" />
                <span className="hidden lg:inline">Login</span>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="lg:hidden" asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-white">
                <nav className="flex flex-col gap-4 mt-8">
                  {NAV_LINKS.map((link) => (
                    <div key={link.href}>
                      {link.children ? (
                        <div className="space-y-2">
                          <span className="text-lg font-semibold text-gray-900">{link.label}</span>
                          <div className="pl-4 space-y-2">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block text-gray-600 hover:text-[#BD3728]"
                                onClick={() => setIsOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className="block text-lg font-semibold text-gray-900 hover:text-[#BD3728]"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  {/* Mobile Account Links */}
                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <Link
                      href="/portal/dashboard"
                      className="flex items-center gap-2 text-gray-700 hover:text-[#BD3728]"
                      onClick={() => setIsOpen(false)}
                    >
                      <User className="h-5 w-5" />
                      My Account
                    </Link>
                    <Link
                      href="/login"
                      className="flex items-center gap-2 text-gray-700 hover:text-[#BD3728]"
                      onClick={() => setIsOpen(false)}
                    >
                      <LogIn className="h-5 w-5" />
                      Login
                    </Link>
                  </div>

                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{COMPANY.hours.weekdays}</span>
                    </div>
                    <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 text-[#BD3728] font-semibold">
                      <Phone className="h-5 w-5" />
                      {COMPANY.phone}
                    </a>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <Button className="w-full" size="lg">
                        Schedule Inspection
                      </Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
