'use client';

import { useEffect, useRef, useCallback } from 'react';

/**
 * Lightweight parallax hook using CSS transforms and requestAnimationFrame.
 * Applies a translateY transform to elements with [data-parallax-speed].
 * Respects prefers-reduced-motion.
 */
export function useParallax() {
  const ticking = useRef(false);

  const updateParallax = useCallback(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-parallax-speed]');
    const scrollY = window.scrollY;

    elements.forEach((el) => {
      const speed = parseFloat(el.dataset.parallaxSpeed || '0.3');
      const rect = el.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      const offset = (scrollY - elementTop) * speed;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    });

    ticking.current = false;
  }, []);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial call
    updateParallax();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [updateParallax]);
}
