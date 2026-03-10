import { Search, Wrench, FileText, Car } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="h-8 w-8" />,
  Wrench: <Wrench className="h-8 w-8" />,
  FileText: <FileText className="h-8 w-8" />,
  Car: <Car className="h-8 w-8" />,
};

interface ServicesProps {
  title?: string;
  subtitle?: string;
}

export function Services({
  title = 'Our Services',
  subtitle = 'Professional hail damage repair and insurance coordination',
}: ServicesProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-2 text-foreground mb-4">{title}</h2>
          <p className="body-large text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                {service.icon && iconMap[service.icon]}
              </div>
              <h3 className="heading-3 text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              {service.features && (
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
