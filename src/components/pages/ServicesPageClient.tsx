'use client';

import { useParallax } from '@/hooks';
import { useEffect } from 'react';

/**
 * Client-side animations for the Services page.
 * Handles parallax, scroll-triggered reveals, and intersection-based effects.
 */
export function ServicesPageClient() {
  useParallax();

  useEffect(() => {
    // Scroll-triggered reveal for service cards, value pillars, etc.
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all animatable sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('scroll-animate');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
