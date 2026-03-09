import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'John M.',
    location: 'Frisco, TX',
    rating: 5,
    text: 'Texas Dent Company did an amazing job on my hail-damaged truck. The process was smooth, they handled everything with my insurance, and the results were perfect. Highly recommend!',
  },
  {
    name: 'Sarah K.',
    location: 'Plano, TX',
    rating: 5,
    text: 'Professional from start to finish. They explained everything clearly, kept me updated throughout the repair, and my car looks brand new. The rental coordination was a huge help too.',
  },
  {
    name: 'Michael R.',
    location: 'McKinney, TX',
    rating: 5,
    text: 'After a bad experience with another shop, I was hesitant. Texas Dent Company restored my faith. Quality work, honest communication, and they stand behind their repairs.',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-2 text-foreground mb-4">What Our Customers Say</h2>
          <p className="body-large text-muted-foreground">
            Over 500 5-star reviews from satisfied customers across Texas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 shadow-sm border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
              <div className="text-sm">
                <span className="font-semibold text-foreground">{testimonial.name}</span>
                <span className="text-muted-foreground"> - {testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
