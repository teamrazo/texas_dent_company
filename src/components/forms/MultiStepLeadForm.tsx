'use client';

import { useState } from 'react';
import { X, ArrowRight, Loader2, ClipboardList, Car } from 'lucide-react';

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  smsConsent: boolean;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
}

const GHL_LOCATION_ID = 'mrLiSKIyavxWAoO6OuWk';

export function MultiStepLeadForm({ isOpen, onClose }: LeadFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    smsConsent: false,
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateStep1 = () => {
    if (!formData.firstName.trim()) {
      setError('First name is required');
      return false;
    }
    if (!formData.lastName.trim()) {
      setError('Last name is required');
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Valid email is required');
      return false;
    }
    setError('');
    return true;
  };

  const validateStep2 = () => {
    if (!formData.vehicleYear.trim()) {
      setError('Vehicle year is required');
      return false;
    }
    if (!formData.vehicleMake.trim()) {
      setError('Vehicle make is required');
      return false;
    }
    if (!formData.vehicleModel.trim()) {
      setError('Vehicle model is required');
      return false;
    }
    setError('');
    return true;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep2()) return;
    
    setIsSubmitting(true);
    setError('');

    try {
      // Submit to GoHighLevel via our API route
      const response = await fetch('/api/ghl/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          locationId: GHL_LOCATION_ID,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          smsConsent: formData.smsConsent,
          vehicleYear: formData.vehicleYear,
          vehicleMake: formData.vehicleMake,
          vehicleModel: formData.vehicleModel,
          source: 'Website - Schedule Inspection Form',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSuccess(true);
      
      // Reset and close after success
      setTimeout(() => {
        setIsSuccess(false);
        setStep(1);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          smsConsent: false,
          vehicleYear: '',
          vehicleMake: '',
          vehicleModel: '',
        });
        onClose();
      }, 3000);
    } catch (err) {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  // Generate year options
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

  // Common vehicle makes
  const makes = [
    'Acura', 'Audi', 'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 
    'Dodge', 'Ford', 'GMC', 'Honda', 'Hyundai', 'Infiniti', 'Jeep', 'Kia', 
    'Lexus', 'Lincoln', 'Mazda', 'Mercedes-Benz', 'Nissan', 'Porsche', 'Ram', 
    'Subaru', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo', 'Other'
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#BD3728] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {step === 1 ? (
              <ClipboardList className="h-6 w-6 text-white" />
            ) : (
              <Car className="h-6 w-6 text-white" />
            )}
            <div>
              <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-montserrat)' }}>
                {isSuccess ? 'Request Received!' : 'Schedule Your Inspection'}
              </h3>
              {!isSuccess && (
                <p className="text-white/80 text-sm">Step {step} of 2</p>
              )}
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Close form"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Progress Bar */}
        {!isSuccess && (
          <div className="h-1 bg-gray-200">
            <div 
              className="h-full bg-[#BD3728] transition-all duration-300"
              style={{ width: step === 1 ? '50%' : '100%' }}
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
              <p className="text-gray-600">
                We&apos;ve received your inspection request. Our team will contact you shortly to confirm your appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={step === 2 ? handleSubmit : (e) => { e.preventDefault(); handleNextStep(); }}>
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}

              {step === 1 && (
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm mb-4">
                    Enter your contact information to get started.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lead-first-name" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="lead-first-name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter First Name"
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#BD3728] focus:border-transparent outline-none transition-all text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lead-last-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lead-last-name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter Last Name"
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#BD3728] focus:border-transparent outline-none transition-all text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lead-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="lead-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter Your Best Email"
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#BD3728] focus:border-transparent outline-none transition-all text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="lead-phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="lead-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(xxx) xxx-xxxx"
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#BD3728] focus:border-transparent outline-none transition-all text-sm"
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="sms-consent"
                      name="smsConsent"
                      checked={formData.smsConsent}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-[#BD3728] border-gray-300 rounded focus:ring-[#BD3728]"
                    />
                    <label htmlFor="sms-consent" className="text-xs text-gray-500">
                      I agree to receive SMS messages about my inspection and appointment updates.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="cta-glow w-full py-3 bg-[#BD3728] text-white font-semibold rounded-md hover:bg-[#a32f22] transition-colors flex items-center justify-center gap-2 uppercase tracking-wide"
                  >
                    Next: Vehicle Info
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm mb-4">
                    Tell us about your vehicle.
                  </p>

                  <div>
                    <label htmlFor="vehicle-year" className="block text-sm font-medium text-gray-700 mb-1">
                      Vehicle Year *
                    </label>
                    <select
                      id="vehicle-year"
                      name="vehicleYear"
                      value={formData.vehicleYear}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#BD3728] focus:border-transparent outline-none transition-all text-sm"
                      required
                    >
                      <option value="">Select Year</option>
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="vehicle-make" className="block text-sm font-medium text-gray-700 mb-1">
                      Vehicle Make *
                    </label>
                    <select
                      id="vehicle-make"
                      name="vehicleMake"
                      value={formData.vehicleMake}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#BD3728] focus:border-transparent outline-none transition-all text-sm"
                      required
                    >
                      <option value="">Select Make</option>
                      {makes.map(make => (
                        <option key={make} value={make}>{make}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="vehicle-model" className="block text-sm font-medium text-gray-700 mb-1">
                      Vehicle Model *
                    </label>
                    <input
                      type="text"
                      id="vehicle-model"
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleInputChange}
                      placeholder="e.g., Camry, F-150, Model 3"
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#BD3728] focus:border-transparent outline-none transition-all text-sm"
                      required
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 py-3 border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cta-glow flex-1 py-3 bg-[#BD3728] text-white font-semibold rounded-md hover:bg-[#a32f22] transition-colors flex items-center justify-center gap-2 uppercase tracking-wide disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Request Inspection
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
