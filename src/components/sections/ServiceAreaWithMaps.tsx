'use client';

import { MapPin, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks';
import { LOCATIONS } from '@/lib/constants';

export function ServiceAreaWithMaps() {
  const sectionRef = useScrollReveal();

  const locations = [
    {
      name: 'Frisco',
      address: LOCATIONS.frisco.address,
      city: `${LOCATIONS.frisco.city}, ${LOCATIONS.frisco.state} ${LOCATIONS.frisco.zip}`,
      subtitle: 'Serving North Texas (approximately 25-mile radius)',
      mapEmbed: 'https://images1.loopnet.com/i2/tRYL72HMC1ydPWtWnXZy2SF1haPDUKGExsfzqdn502E/110/122-Rose-Ln-Frisco-TX-Primary-Photo-1-Large.jpg',
      mapsLink: LOCATIONS.frisco.googleMapsUrl || 'https://maps.app.goo.gl/hSgXAppY9CtthMLw6',
    },
    {
      name: 'Odessa',
      address: LOCATIONS.odessa.address,
      city: `${LOCATIONS.odessa.city}, ${LOCATIONS.odessa.state} ${LOCATIONS.odessa.zip}`,
      subtitle: 'Serving Midland, Fort Stockton, Big Spring, Pecos, Crane',
      mapEmbed: 'https://pbs.twimg.com/media/G33zuiTWYAAma3D.jpg',
      mapsLink: LOCATIONS.odessa.googleMapsUrl || 'https://maps.app.goo.gl/tJCLNN9bFYieLKV68',
    },
  ];

  return (
    <section 
      ref={sectionRef.ref}
      className="py-14 md:py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 reveal ${sectionRef.isVisible ? 'visible' : ''}`}>
          <p className="text-[#BD3728] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Our Locations
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Service <span className="text-[#BD3728]">Areas</span>
          </h2>
        </div>

        {/* Location Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto stagger-children ${sectionRef.isVisible ? 'visible' : ''}`}>
          {locations.map((location) => (
            <div 
              key={location.name}
              className="card-hover group rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm overflow-hidden"
            >
              {/* Location Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#BD3728] uppercase tracking-wide mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  {location.name}
                </h3>
                <div className="flex items-start gap-2 text-gray-700 mb-2">
                  <MapPin className="h-4 w-4 text-[#BD3728] flex-shrink-0 mt-1" />
                  <div className="text-sm">
                    <p className="font-medium">{location.address}</p>
                    <p>{location.city}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{location.subtitle}</p>
              </div>

              {/* Map Embed */}
              <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-gray-100">
                <iframe
                  src={location.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${location.name} location map`}
                  className="absolute inset-0"
                />
              </div>

              {/* Maps Link */}
              <a
                href={location.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#BD3728] font-semibold text-sm hover:text-[#a32f22] transition-colors"
              >
                Maps
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
