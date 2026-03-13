'use client';

import Image from 'next/image';
import { Wrench, Shield, Award, CheckCircle } from 'lucide-react';

const facilityFeatures = [
  {
    icon: Wrench,
    title: 'Professional Equipment',
    description: 'Industry-leading PDR tools and lighting systems',
  },
  {
    icon: Shield,
    title: 'Climate Controlled',
    description: 'Optimal conditions for precision repairs',
  },
  {
    icon: Award,
    title: 'Quality Standards',
    description: 'Multi-step QC process before delivery',
  },
  {
    icon: CheckCircle,
    title: 'Clean Environment',
    description: 'Professional, organized workspace',
  },
];

const facilityImages = [
  {
    src: '/images/facility/bmw-shop.webp',
    alt: 'BMW in shop with hexagon lighting',
    priority: true,
  },
  {
    src: '/images/facility/tesla-in-shop.png',
    alt: 'Tesla in shop bay',
    priority: false,
  },
  {
    src: '/images/facility/landrover.webp',
    alt: 'Land Rover Defender professional repair',
    priority: false,
  },
];

export function FacilitySection() {
  return (
    <section className="py-16 sm:py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#BD3728] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Where The Magic Happens
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
            State-Of-The-Art <span className="text-[#BD3728]">Facility</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Purpose-built for precision dent repair with professional-grade tools, specialized lighting systems, and climate-controlled bays.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-12">
          {/* Main Large Image */}
          <div className="md:col-span-8 relative h-72 sm:h-96 rounded-2xl overflow-hidden group">
            <Image
              src={facilityImages[0].src}
              alt={facilityImages[0].alt}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              priority={facilityImages[0].priority}
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-semibold">Professional Lighting System</p>
              <p className="text-white/70 text-sm">Hexagon LED panels for precision damage assessment</p>
            </div>
          </div>

          {/* Stacked Images */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="relative h-44 sm:h-[calc(50%-0.5rem)] rounded-2xl overflow-hidden group">
              <Image
                src={facilityImages[1].src}
                alt={facilityImages[1].alt}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-44 sm:h-[calc(50%-0.5rem)] rounded-2xl overflow-hidden group">
              <Image
                src={facilityImages[2].src}
                alt={facilityImages[2].alt}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {facilityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 text-center hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-[#BD3728]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-[#BD3728]" />
              </div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FacilitySection;
