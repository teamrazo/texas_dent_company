'use client';

import { useScrollReveal } from '@/hooks';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'reveal' | 'reveal-left' | 'reveal-right' | 'reveal-scale' | 'reveal-rotate' | 'stagger-children';
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  animation = 'reveal',
  as: Component = 'div',
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(animation, isVisible && 'visible', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  );
}
