import Link from 'next/link';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Location } from '@/types';

interface LocationCardProps {
  location: typeof import('@/lib/constants').LOCATIONS.frisco;
  showLink?: boolean;
}

export function LocationCard({ location, showLink = true }: LocationCardProps) {
  return (
    <div className="bg-background rounded-xl p-6 md:p-8 shadow-sm border border-border">
      <h3 className="heading-3 text-foreground mb-4">{location.name}</h3>
      
      <div className="space-y-4 mb-6">
        <a
          href={location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
        >
          <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
          <span>
            {location.address}<br />
            {location.city}, {location.state} {location.zip}
          </span>
        </a>
        
        <a
          href={`tel:${location.phone}`}
          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
        >
          <Phone className="h-5 w-5 flex-shrink-0" />
          <span>{location.phone}</span>
        </a>
        
        <div className="flex items-start gap-3 text-muted-foreground">
          <Clock className="h-5 w-5 mt-1 flex-shrink-0" />
          <span>
            {location.hours.weekdays}<br />
            {location.hours.saturday}<br />
            {location.hours.sunday}
          </span>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        {location.serviceRadius}
      </p>

      <div className="mb-6">
        <p className="text-sm font-medium text-foreground mb-2">Serving:</p>
        <div className="flex flex-wrap gap-2">
          {location.servingAreas.slice(0, 6).map((area) => (
            <span
              key={area}
              className="px-2 py-1 bg-secondary text-sm text-muted-foreground rounded"
            >
              {area}
            </span>
          ))}
          {location.servingAreas.length > 6 && (
            <span className="px-2 py-1 text-sm text-muted-foreground">
              +{location.servingAreas.length - 6} more
            </span>
          )}
        </div>
      </div>

      {showLink && (
        <Link href={`/${location.slug}`}>
          <Button variant="outline" className="w-full">
            View Location Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      )}
    </div>
  );
}
