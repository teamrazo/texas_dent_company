import { PROCESS_STEPS } from '@/lib/constants';

interface ProcessStepsProps {
  title?: string;
  subtitle?: string;
}

export function ProcessSteps({
  title = 'How The Process Works',
  subtitle = 'Simple, structured, and stress-free',
}: ProcessStepsProps) {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-2 text-foreground mb-4">{title}</h2>
          <p className="body-large text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <div key={step.step} className="relative">
              <div className="bg-background rounded-xl p-6 h-full shadow-sm border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="heading-4 text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {/* Connector line for desktop */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
