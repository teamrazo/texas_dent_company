import { STATS } from '@/lib/constants';

export function Stats() {
  return (
    <section className="py-12 bg-primary">
      <div className="container-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
