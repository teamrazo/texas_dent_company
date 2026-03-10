'use client';

import Image from 'next/image';
import { useState } from 'react';

interface BeforeAfterPair {
  id: string;
  vehicle: string;
  before: string;
  after: string;
}

const beforeAfterPairs: BeforeAfterPair[] = [
  {
    id: 'lincoln',
    vehicle: 'Lincoln',
    before: '/images/before-after/before-lincoln.jpeg',
    after: '/images/before-after/after-lincoln.jpeg',
  },
  {
    id: 'bmw',
    vehicle: 'BMW',
    before: '/images/before-after/before-bmw.jpeg',
    after: '/images/before-after/after-bmw.jpeg',
  },
  {
    id: 'benz',
    vehicle: 'Mercedes-Benz',
    before: '/images/before-after/before-benz.jpeg',
    after: '/images/before-after/after-benz.jpeg',
  },
  {
    id: 'gwagon',
    vehicle: 'G-Wagon',
    before: '/images/before-after/before-gwagon.jpeg',
    after: '/images/before-after/after-gwagon.jpeg',
  },
  {
    id: 'landrover',
    vehicle: 'Land Rover',
    before: '/images/before-after/before-landrover.jpeg',
    after: '/images/before-after/after-landrover.jpeg',
  },
];

function BeforeAfterCard({ pair }: { pair: BeforeAfterPair }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Before Image (default) */}
      <div className={`relative h-64 sm:h-72 md:h-80 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <Image
          src={pair.before}
          alt={`${pair.vehicle} - Before Repair`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <span className="text-white font-semibold text-sm uppercase tracking-wider">Before</span>
          <p className="text-white/80 text-xs mt-1">Hover to see after</p>
        </div>
      </div>

      {/* After Image (on hover) */}
      <div className={`absolute inset-0 h-64 sm:h-72 md:h-80 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <Image
          src={pair.after}
          alt={`${pair.vehicle} - After Repair`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <span className="text-[#BD3728] font-semibold text-sm uppercase tracking-wider">After</span>
          <p className="text-white/80 text-xs mt-1">Professional PDR repair</p>
        </div>
      </div>

      {/* Vehicle Label */}
      <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded-full">
        <span className="text-white text-sm font-medium">{pair.vehicle}</span>
      </div>
    </div>
  );
}

export function BeforeAfterGallery() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#BD3728] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Our Results
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Before & After <span className="text-[#BD3728]">Gallery</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hover over each image to see the professional PDR transformation. Our technicians restore vehicles to their factory finish without repainting.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beforeAfterPairs.map((pair) => (
            <BeforeAfterCard key={pair.id} pair={pair} />
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Over <span className="text-[#BD3728] font-semibold">500+ vehicles</span> restored to factory condition
          </p>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfterGallery;
