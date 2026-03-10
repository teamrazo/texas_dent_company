'use client';

import Image from 'next/image';
import { Car } from 'lucide-react';

const rentalVehicles = [
  {
    name: 'Kia Telluride',
    type: 'SUV',
    image: '/images/rentals/tdc-rental-telluride.jpg',
  },
  {
    name: 'Kia Sorento',
    type: 'SUV',
    image: '/images/rentals/tdc-rental-sorento.jpg',
  },
  {
    name: 'Nissan Frontier',
    type: 'Truck',
    image: '/images/rentals/tdc-rental-frontier.jpg',
  },
];

export function RentalSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#BD3728] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            While We Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Rental Vehicle <span className="text-[#BD3728]">Options</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            18+ vehicles available for our customers. If your insurance covers rental, we coordinate everything for you.
          </p>
        </div>

        {/* Rental Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {rentalVehicles.map((vehicle, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2 ${
                index === 1 ? 'sm:-translate-y-4' : ''
              }`}
            >
              <div className="relative h-44 sm:h-52 overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-[#BD3728] mb-1">
                  <Car className="w-4 h-4" />
                  <span className="text-sm font-medium uppercase tracking-wide">{vehicle.type}</span>
                </div>
                <h3 className="font-bold text-black">{vehicle.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Rental coordination included with your repair. We handle the logistics.
        </p>
      </div>
    </section>
  );
}

export default RentalSection;
