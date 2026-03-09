'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { COMPANY, NAV_LINKS } from '@/lib/constants';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-primary-foreground">
        <div className="container-xl py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span>{COMPANY.hours.weekdays} | {COMPANY.hours.saturday}</span>
          </div>
          <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 hover:underline font-medium">
            <Phone className="h-4 w-4" />
            {COMPANY.phone}
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-xl h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Texas Dent Company
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block">Professional Hail Damage Repair</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <div key={link.href} className="relative">
              {link.children ? (
                <div
                  className="relative"
                  onMouseEnter={() => setLocationOpen(true)}
                  onMouseLeave={() => setLocationOpen(false)}
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors py-2">
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {locationOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-background border border-border rounded-lg shadow-lg py-2 min-w-[150px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
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
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${COMPANY.phone}`} className="md:hidden">
            <Button variant="outline" size="sm">
              <Phone className="h-4 w-4" />
            </Button>
          </a>
          <Link href="/contact">
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <nav className="flex flex-col gap-4 mt-8">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  {link.children ? (
                    <div className="space-y-2">
                      <span className="text-lg font-semibold text-foreground">{link.label}</span>
                      <div className="pl-4 space-y-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block text-muted-foreground hover:text-primary"
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
                      className="block text-lg font-semibold text-foreground hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 text-primary font-medium">
                  <Phone className="h-5 w-5" />
                  {COMPANY.phone}
                </a>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full" size="lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
