'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import {
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle,
  Calendar,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  CreditCard,
  Wallet,
  Filter,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

// Mock earnings data
const mockEarningsOverview = {
  totalEarned: 2450.00,
  pendingPayout: 450.00,
  lastPayout: 800.00,
  lastPayoutDate: '2026-02-28',
  lifetimeReferrals: 28,
  conversionRate: 64,
  averageCommission: 87.50,
};

const mockTransactions = [
  { id: '1', type: 'commission', description: 'Commission - John Davidson', amount: 150.00, status: 'pending', date: '2026-03-05', referralName: 'John Davidson' },
  { id: '2', type: 'commission', description: 'Commission - Sarah Mitchell', amount: 125.00, status: 'pending', date: '2026-03-04', referralName: 'Sarah Mitchell' },
  { id: '3', type: 'commission', description: 'Commission - Michael Roberts', amount: 175.00, status: 'pending', date: '2026-03-01', referralName: 'Michael Roberts' },
  { id: '4', type: 'payout', description: 'Monthly Payout - February', amount: -800.00, status: 'completed', date: '2026-02-28', referralName: '' },
  { id: '5', type: 'commission', description: 'Commission - Emily Kim', amount: 200.00, status: 'completed', date: '2026-02-25', referralName: 'Emily Kim' },
  { id: '6', type: 'commission', description: 'Commission - David Chen', amount: 150.00, status: 'completed', date: '2026-02-20', referralName: 'David Chen' },
  { id: '7', type: 'commission', description: 'Commission - Jessica Taylor', amount: 125.00, status: 'completed', date: '2026-02-15', referralName: 'Jessica Taylor' },
  { id: '8', type: 'payout', description: 'Monthly Payout - January', amount: -600.00, status: 'completed', date: '2026-01-31', referralName: '' },
  { id: '9', type: 'commission', description: 'Commission - Brian Wilson', amount: 175.00, status: 'completed', date: '2026-01-28', referralName: 'Brian Wilson' },
  { id: '10', type: 'commission', description: 'Commission - Amanda Garcia', amount: 100.00, status: 'completed', date: '2026-01-20', referralName: 'Amanda Garcia' },
];

const paymentMethods = [
  { id: '1', type: 'bank', name: 'Chase Bank ****4521', isDefault: true },
  { id: '2', type: 'paypal', name: 'PayPal - john@email.com', isDefault: false },
];

export default function EarningsPage() {
  const { data: session } = useSession();
  const [filterType, setFilterType] = useState('all');
  const [filterPeriod, setFilterPeriod] = useState('all');

  // Filter transactions
  const filteredTransactions = mockTransactions.filter((tx) => {
    const matchesType = filterType === 'all' || tx.type === filterType;
    return matchesType;
  });

  // Calculate monthly earnings (mock)
  const monthlyEarnings = [
    { month: 'Jan', amount: 375 },
    { month: 'Feb', amount: 475 },
    { month: 'Mar', amount: 450 },
  ];

  const maxMonthly = Math.max(...monthlyEarnings.map(m => m.amount));

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="heading-2 text-foreground">Earnings</h1>
          <p className="text-muted-foreground mt-1">Track your commissions and payouts</p>
        </div>
        <Button variant="outline" className="gap-2" onClick={() => toast.info('Export coming soon')}>
          <Download className="h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Earnings Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                <DollarSign className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">${mockEarningsOverview.totalEarned.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">Total Earned</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">${mockEarningsOverview.pendingPayout.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">Pending Payout</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">${mockEarningsOverview.averageCommission.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">Avg. Commission</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#BD3728]/10 text-[#BD3728] flex items-center justify-center">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{mockEarningsOverview.conversionRate}%</p>
                <p className="text-sm text-muted-foreground">Conversion Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Performance and Payment Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Earnings Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Earnings</CardTitle>
            <CardDescription>Your commission earnings over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyEarnings.map((month) => (
                <div key={month.month} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{month.month} 2026</span>
                    <span className="text-muted-foreground">${month.amount.toFixed(2)}</span>
                  </div>
                  <Progress value={(month.amount / maxMonthly) * 100} className="h-2" />
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Q1 2026 Total</span>
                <span className="text-lg font-bold text-primary">
                  ${monthlyEarnings.reduce((sum, m) => sum + m.amount, 0).toFixed(2)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Status */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Status</CardTitle>
            <CardDescription>Your payout information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Last Payout */}
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-800 dark:text-green-200">Last Payout Completed</p>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    ${mockEarningsOverview.lastPayout.toFixed(2)} on {mockEarningsOverview.lastPayoutDate}
                  </p>
                </div>
              </div>
            </div>

            {/* Next Payout */}
            <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-900">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-yellow-600" />
                <div>
                  <p className="font-medium text-yellow-800 dark:text-yellow-200">Pending Payout</p>
                  <p className="text-sm text-yellow-600 dark:text-yellow-400">
                    ${mockEarningsOverview.pendingPayout.toFixed(2)} • Processing by end of month
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h4 className="text-sm font-medium mb-3">Payment Methods</h4>
              <div className="space-y-2">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      {method.type === 'bank' ? (
                        <CreditCard className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <Wallet className="h-5 w-5 text-muted-foreground" />
                      )}
                      <span className="text-sm">{method.name}</span>
                    </div>
                    {method.isDefault && (
                      <Badge variant="secondary" className="text-xs">Default</Badge>
                    )}
                  </div>
                ))}
              </div>
              <Button variant="link" className="px-0 mt-2 text-sm" onClick={() => toast.info('Payment settings coming soon')}>
                Manage payment methods
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>All your commissions and payouts</CardDescription>
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Transactions</SelectItem>
                <SelectItem value="commission">Commissions Only</SelectItem>
                <SelectItem value="payout">Payouts Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredTransactions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <DollarSign className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No transactions found</p>
              </div>
            ) : (
              filteredTransactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      tx.type === 'commission' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {tx.type === 'commission' ? (
                        <ArrowUpRight className="h-5 w-5" />
                      ) : (
                        <ArrowDownRight className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{tx.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{tx.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${
                      tx.amount > 0 ? 'text-green-600' : 'text-blue-600'
                    }`}>
                      {tx.amount > 0 ? '+' : ''}${Math.abs(tx.amount).toFixed(2)}
                    </p>
                    <Badge 
                      variant={tx.status === 'completed' ? 'default' : 'secondary'}
                      className={tx.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                    >
                      {tx.status === 'completed' ? 'Completed' : 'Pending'}
                    </Badge>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
