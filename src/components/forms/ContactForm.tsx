'use client';

import { useState, Suspense, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  location: z.enum(['frisco', 'odessa', '']).optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  source?: string;
  showLocation?: boolean;
  showMessage?: boolean;
  buttonText?: string;
  redirectTo?: string;
}

function ContactFormInner({
  source = 'website',
  showLocation = true,
  showMessage = false,
  buttonText = 'Schedule Inspection',
  redirectTo = '/confirmation',
}: ContactFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [affiliateCode, setAffiliateCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ref = searchParams?.get('ref') || searchParams?.get('affiliate') || '';
    setAffiliateCode(ref);
  }, [searchParams]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          source,
          affiliateCode,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      toast.success('Request received! We will contact you shortly.');
      reset();
      router.push(redirectTo);
    } catch (error) {
      toast.error('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          placeholder="John Smith"
          {...register('name')}
          className={errors.name ? 'border-destructive' : ''}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register('email')}
          className={errors.email ? 'border-destructive' : ''}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(469) 555-1234"
          {...register('phone')}
        />
      </div>

      {showLocation && (
        <div className="space-y-2">
          <Label htmlFor="location">Preferred Location</Label>
          <select
            id="location"
            {...register('location')}
            className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="">Select a location</option>
            <option value="frisco">Frisco (North Texas)</option>
            <option value="odessa">Odessa (West Texas)</option>
          </select>
        </div>
      )}

      {showMessage && (
        <div className="space-y-2">
          <Label htmlFor="message">Message (Optional)</Label>
          <textarea
            id="message"
            rows={4}
            placeholder="Tell us about your hail damage or any questions you have..."
            {...register('message')}
            className="flex w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
          />
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          buttonText
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        By submitting this form, you agree to be contacted about your hail damage repair.
      </p>
    </form>
  );
}

function ContactFormFallback() {
  return (
    <div className="space-y-4">
      <div className="h-10 bg-secondary rounded-xl animate-pulse" />
      <div className="h-10 bg-secondary rounded-xl animate-pulse" />
      <div className="h-10 bg-secondary rounded-xl animate-pulse" />
      <div className="h-12 bg-primary/20 rounded-xl animate-pulse" />
    </div>
  );
}

export function ContactForm(props: ContactFormProps) {
  return (
    <Suspense fallback={<ContactFormFallback />}>
      <ContactFormInner {...props} />
    </Suspense>
  );
}
