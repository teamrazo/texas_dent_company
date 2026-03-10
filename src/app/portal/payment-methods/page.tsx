'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {
  CreditCard,
  Wallet,
  Building2,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Loader2,
  Save,
  Shield,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

type PaymentMethodType = 'ACH' | 'VENMO' | 'CASHAPP' | 'ZELLE';

interface PaymentMethodData {
  type: PaymentMethodType;
  achAccountNumber?: string;
  achRoutingNumber?: string;
  achAccountHolder?: string;
  venmoUsername?: string;
  cashappCashtag?: string;
  zelleEmailOrPhone?: string;
  isVerified?: boolean;
}

const paymentOptions = [
  {
    value: 'ACH' as PaymentMethodType,
    label: 'ACH Bank Transfer',
    description: 'Direct deposit to your bank account',
    icon: Building2,
  },
  {
    value: 'VENMO' as PaymentMethodType,
    label: 'Venmo',
    description: 'Fast payment to your Venmo account',
    icon: Wallet,
  },
  {
    value: 'CASHAPP' as PaymentMethodType,
    label: 'Cash App',
    description: 'Instant transfer to Cash App',
    icon: DollarSign,
  },
  {
    value: 'ZELLE' as PaymentMethodType,
    label: 'Zelle',
    description: 'Send money with Zelle',
    icon: CreditCard,
  },
];

export default function PaymentMethodsPage() {
  const { data: session } = useSession();
  const [selectedType, setSelectedType] = useState<PaymentMethodType>('ACH');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [existingMethod, setExistingMethod] = useState<PaymentMethodData | null>(null);
  
  // Form fields
  const [achAccountNumber, setAchAccountNumber] = useState('');
  const [achRoutingNumber, setAchRoutingNumber] = useState('');
  const [achAccountHolder, setAchAccountHolder] = useState('');
  const [venmoUsername, setVenmoUsername] = useState('');
  const [cashappCashtag, setCashappCashtag] = useState('');
  const [zelleEmailOrPhone, setZelleEmailOrPhone] = useState('');

  // Fetch existing payment method
  useEffect(() => {
    const fetchPaymentMethod = async () => {
      try {
        const response = await fetch('/api/payment-methods');
        if (response.ok) {
          const data = await response.json();
          if (data.paymentMethod) {
            setExistingMethod(data.paymentMethod);
            setSelectedType(data.paymentMethod.type);
            
            // Populate fields
            if (data.paymentMethod.type === 'ACH') {
              setAchAccountNumber(data.paymentMethod.achAccountNumber || '');
              setAchRoutingNumber(data.paymentMethod.achRoutingNumber || '');
              setAchAccountHolder(data.paymentMethod.achAccountHolder || '');
            } else if (data.paymentMethod.type === 'VENMO') {
              setVenmoUsername(data.paymentMethod.venmoUsername || '');
            } else if (data.paymentMethod.type === 'CASHAPP') {
              setCashappCashtag(data.paymentMethod.cashappCashtag || '');
            } else if (data.paymentMethod.type === 'ZELLE') {
              setZelleEmailOrPhone(data.paymentMethod.zelleEmailOrPhone || '');
            }
          }
        }
      } catch (error) {
        console.error('Error fetching payment method:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPaymentMethod();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    
    try {
      const payload: PaymentMethodData = {
        type: selectedType,
      };

      // Validate and add type-specific fields
      if (selectedType === 'ACH') {
        if (!achAccountNumber || !achRoutingNumber || !achAccountHolder) {
          toast.error('Please fill in all ACH fields');
          setIsSaving(false);
          return;
        }
        payload.achAccountNumber = achAccountNumber;
        payload.achRoutingNumber = achRoutingNumber;
        payload.achAccountHolder = achAccountHolder;
      } else if (selectedType === 'VENMO') {
        if (!venmoUsername) {
          toast.error('Please enter your Venmo username or phone');
          setIsSaving(false);
          return;
        }
        payload.venmoUsername = venmoUsername;
      } else if (selectedType === 'CASHAPP') {
        if (!cashappCashtag) {
          toast.error('Please enter your $Cashtag');
          setIsSaving(false);
          return;
        }
        payload.cashappCashtag = cashappCashtag;
      } else if (selectedType === 'ZELLE') {
        if (!zelleEmailOrPhone) {
          toast.error('Please enter your Zelle email or phone');
          setIsSaving(false);
          return;
        }
        payload.zelleEmailOrPhone = zelleEmailOrPhone;
      }

      const response = await fetch('/api/payment-methods', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        setExistingMethod(data.paymentMethod);
        toast.success('Payment method saved successfully!');
      } else {
        const error = await response.json();
        toast.error(error.message || 'Failed to save payment method');
      }
    } catch (error) {
      console.error('Error saving payment method:', error);
      toast.error('An error occurred while saving');
    } finally {
      setIsSaving(false);
    }
  };

  const renderFormFields = () => {
    switch (selectedType) {
      case 'ACH':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="accountHolder">Account Holder Name</Label>
              <Input
                id="accountHolder"
                placeholder="Full name on the account"
                value={achAccountHolder}
                onChange={(e) => setAchAccountHolder(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="routingNumber">Routing Number</Label>
              <Input
                id="routingNumber"
                placeholder="9-digit routing number"
                value={achRoutingNumber}
                onChange={(e) => setAchRoutingNumber(e.target.value.replace(/\D/g, '').slice(0, 9))}
                maxLength={9}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="accountNumber">Account Number</Label>
              <Input
                id="accountNumber"
                placeholder="Your bank account number"
                value={achAccountNumber}
                onChange={(e) => setAchAccountNumber(e.target.value.replace(/\D/g, ''))}
              />
            </div>
          </div>
        );
      case 'VENMO':
        return (
          <div className="space-y-2">
            <Label htmlFor="venmoUsername">Venmo Username or Phone</Label>
            <Input
              id="venmoUsername"
              placeholder="@username or phone number"
              value={venmoUsername}
              onChange={(e) => setVenmoUsername(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Enter your Venmo username (with @) or registered phone number
            </p>
          </div>
        );
      case 'CASHAPP':
        return (
          <div className="space-y-2">
            <Label htmlFor="cashtag">$Cashtag</Label>
            <Input
              id="cashtag"
              placeholder="$YourCashtag"
              value={cashappCashtag}
              onChange={(e) => {
                let value = e.target.value;
                if (!value.startsWith('$') && value.length > 0) {
                  value = '$' + value;
                }
                setCashappCashtag(value);
              }}
            />
            <p className="text-xs text-muted-foreground">
              Enter your Cash App $Cashtag (e.g., $JohnDoe)
            </p>
          </div>
        );
      case 'ZELLE':
        return (
          <div className="space-y-2">
            <Label htmlFor="zelle">Zelle Email or Phone</Label>
            <Input
              id="zelle"
              placeholder="email@example.com or phone number"
              value={zelleEmailOrPhone}
              onChange={(e) => setZelleEmailOrPhone(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Enter the email or phone number registered with Zelle
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="heading-2 text-foreground">Payment Methods</h1>
        <p className="text-muted-foreground mt-1">Manage how you receive your commission payouts</p>
      </div>

      {/* Security Notice */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">Your information is secure</p>
              <p className="text-sm text-muted-foreground">
                Payment details are encrypted and stored securely. We only use this information to process your commission payouts.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Payment Method Status */}
      {existingMethod && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Current Payment Method
              </CardTitle>
              <Badge variant={existingMethod.isVerified ? 'default' : 'secondary'}>
                {existingMethod.isVerified ? 'Verified' : 'Pending Verification'}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              {paymentOptions.find(p => p.value === existingMethod.type)?.icon && (
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  {(() => {
                    const IconComponent = paymentOptions.find(p => p.value === existingMethod.type)?.icon;
                    return IconComponent ? <IconComponent className="h-5 w-5 text-primary" /> : null;
                  })()}
                </div>
              )}
              <div>
                <p className="font-medium">
                  {paymentOptions.find(p => p.value === existingMethod.type)?.label}
                </p>
                <p className="text-sm text-muted-foreground">
                  {existingMethod.type === 'ACH' && existingMethod.achAccountNumber && `****${existingMethod.achAccountNumber.slice(-4)}`}
                  {existingMethod.type === 'VENMO' && existingMethod.venmoUsername}
                  {existingMethod.type === 'CASHAPP' && existingMethod.cashappCashtag}
                  {existingMethod.type === 'ZELLE' && existingMethod.zelleEmailOrPhone}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Payment Method Selection */}
      <Card>
        <CardHeader>
          <CardTitle>{existingMethod ? 'Update Payment Method' : 'Add Payment Method'}</CardTitle>
          <CardDescription>
            Select your preferred method for receiving commission payouts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Payment Type Selection */}
          <RadioGroup
            value={selectedType}
            onValueChange={(value) => setSelectedType(value as PaymentMethodType)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {paymentOptions.map((option) => (
              <div key={option.value} className="relative">
                <RadioGroupItem
                  value={option.value}
                  id={option.value}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={option.value}
                  className="flex items-center gap-3 rounded-lg border-2 border-muted bg-background p-4 cursor-pointer transition-all hover:bg-secondary/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <option.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium text-sm block">{option.label}</span>
                    <span className="text-xs text-muted-foreground">{option.description}</span>
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>

          {/* Dynamic Form Fields */}
          <div className="pt-4 border-t">
            <h4 className="font-medium mb-4">
              {paymentOptions.find(p => p.value === selectedType)?.label} Details
            </h4>
            {renderFormFields()}
          </div>

          {/* Save Button */}
          <div className="pt-4">
            <Button onClick={handleSave} disabled={isSaving} className="w-full sm:w-auto">
              {isSaving ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  {existingMethod ? 'Update Payment Method' : 'Save Payment Method'}
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-muted-foreground" />
            Payout Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              Payouts are processed on the last business day of each month
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              Minimum payout amount is $50.00
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              ACH transfers typically arrive within 2-3 business days
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              Venmo, Cash App, and Zelle payments are usually instant
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
