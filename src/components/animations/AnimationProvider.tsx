'use client';

import { useEffect, useRef, useCallback } from 'react';

/**
 * Global animation provider that initializes:
 * - Parallax scrolling on [data-parallax-speed] elements
 * - Scroll-triggered reveal animations on [data-animate] elements
 * - Cursor-reactive effects on [data-cursor-reactive] elements
 * 
 * All effects respect prefers-reduced-motion.
 */
export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const ticking = useRef(false);
  const mousePos = useRef({ x: 0, y: 0 });

  // Parallax effect handler
  const updateParallax = useCallback(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-parallax-speed]');

    elements.forEach((el) => {
      const speed = parseFloat(el.dataset.parallaxSpeed || '0.3');
      const rect = el.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const offset = (elementCenter - viewportCenter) * speed * -0.5;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
      el.style.willChange = 'transform';
    });

    ticking.current = false;
  }, []);

  // Cursor-reactive elements
  const updateCursorEffects = useCallback(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-cursor-reactive]');
    const { x, y } = mousePos.current;

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (x - centerX) / rect.width;
      const deltaY = (y - centerY) / rect.height;
      
      const intensity = parseFloat(el.dataset.cursorIntensity || '10');
      el.style.transform = `perspective(1000px) rotateY(${deltaX * intensity}deg) rotateX(${-deltaY * intensity}deg)`;
    });
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    // Scroll handler for parallax
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(updateParallax);
      }
    };

    // Mouse handler for cursor effects
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      requestAnimationFrame(updateCursorEffects);
    };

    // Scroll-triggered reveal animations for [data-animate] elements
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.animateDelay || '0';
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add('is-visible');
            revealObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Function to observe all [data-animate] elements
    const observeAnimateElements = () => {
      document.querySelectorAll('[data-animate]').forEach((el) => {
        // Only observe if not already visible
        if (!el.classList.contains('is-visible')) {
          revealObserver.observe(el);
        }
      });
    };

    // Initial observation
    observeAnimateElements();

    // Use MutationObserver to catch dynamically added elements (e.g. Next.js navigation)
    const mutationObserver = new MutationObserver((mutations) => {
      let hasNewNodes = false;
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          hasNewNodes = true;
        }
      });
      if (hasNewNodes) {
        // Re-observe after a short delay to allow DOM to settle
        requestAnimationFrame(observeAnimateElements);
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Initial parallax call
    updateParallax();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      revealObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [updateParallax, updateCursorEffects]);

  return <>{children}</>;
}
