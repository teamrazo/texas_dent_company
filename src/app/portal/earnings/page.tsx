'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
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
  RefreshCw,
  Loader2,
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

interface Transaction {
  id: string;
  type: 'commission' | 'payout';
  description: string;
  amount: number;
  status: string;
  date: string;
  referralName: string;
}

interface MonthlyEarning {
  month: string;
  year?: number;
  amount: number;
}

interface EarningsData {
  totalEarned: number;
  pendingPayout: number;
  totalPaidOut: number;
  lastPayout: { amount: number; date: string } | null;
  lifetimeReferrals: number;
  conversionRate: number;
  averageCommission: number;
}

// Mock fallback data
const mockEarningsOverview: EarningsData = {
  totalEarned: 2450.00,
  pendingPayout: 450.00,
  totalPaidOut: 2000.00,
  lastPayout: { amount: 800.00, date: '2026-02-28' },
  lifetimeReferrals: 28,
  conversionRate: 64,
  averageCommission: 87.50,
};

const mockTransactions: Transaction[] = [
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

const mockMonthlyEarnings: MonthlyEarning[] = [
  { month: 'Jan', amount: 375 },
  { month: 'Feb', amount: 475 },
  { month: 'Mar', amount: 450 },
];

export default function EarningsPage() {
  const { data: session } = useSession();
  const [filterType, setFilterType] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [earningsData, setEarningsData] = useState<EarningsData>(mockEarningsOverview);
  const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions);
  const [monthlyEarnings, setMonthlyEarnings] = useState<MonthlyEarning[]>(mockMonthlyEarnings);

  // Fetch earnings data
  const fetchEarnings = async () => {
    try {
      const response = await fetch('/api/ghl/sync-earnings');
      if (response.ok) {
        const data = await response.json();
        if (data.earnings) {
          setEarningsData({
            totalEarned: data.earnings.totalEarned || 0,
            pendingPayout: data.earnings.pendingPayout || 0,
            totalPaidOut: data.earnings.totalPaidOut || 0,
            lastPayout: data.earnings.lastPayout,
            lifetimeReferrals: data.earnings.lifetimeReferrals || 0,
            conversionRate: data.earnings.conversionRate || 0,
            averageCommission: data.earnings.averageCommission || 0,
          });
        }
        if (data.transactions && data.transactions.length > 0) {
          setTransactions(data.transactions);
        }
        if (data.monthlyEarnings && data.monthlyEarnings.length > 0) {
          setMonthlyEarnings(data.monthlyEarnings);
        }
      }
    } catch (error) {
      console.error('Error fetching earnings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Sync earnings
  const syncEarnings = async () => {
    setIsSyncing(true);
    try {
      const response = await fetch('/api/ghl/sync-earnings', {
        method: 'POST',
      });
      if (response.ok) {
        const data = await response.json();
        toast.success(data.message || 'Earnings synced successfully');
        await fetchEarnings();
      } else {
        toast.error('Failed to sync earnings');
      }
    } catch (error) {
      console.error('Error syncing earnings:', error);
      toast.error('Error syncing earnings');
    } finally {
      setIsSyncing(false);
    }
  };

  useEffect(() => {
    fetchEarnings();
  }, []);

  // Filter transactions
  const filteredTransactions = transactions.filter((tx) => {
    const matchesType = filterType === 'all' || tx.type === filterType;
    return matchesType;
  });

  const maxMonthly = Math.max(...monthlyEarnings.map(m => m.amount), 1);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="heading-2 text-foreground">Earnings</h1>
          <p className="text-muted-foreground mt-1">Track your commissions and payouts</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="gap-2"
            onClick={syncEarnings}
            disabled={isSyncing}
          >
            {isSyncing ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4" />
            )}
            Sync
          </Button>
          <Button variant="outline" className="gap-2" onClick={() => toast.info('Export coming soon')}>
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
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
                <p className="text-2xl font-bold text-foreground">${earningsData.totalEarned.toFixed(2)}</p>
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
                <p className="text-2xl font-bold text-foreground">${earningsData.pendingPayout.toFixed(2)}</p>
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
                <p className="text-2xl font-bold text-foreground">${earningsData.averageCommission.toFixed(2)}</p>
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
                <p className="text-2xl font-bold text-foreground">{earningsData.conversionRate}%</p>
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
            {earningsData.lastPayout ? (
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-green-800 dark:text-green-200">Last Payout Completed</p>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      ${earningsData.lastPayout.amount.toFixed(2)} on {earningsData.lastPayout.date}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-secondary rounded-lg border">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">No Payouts Yet</p>
                    <p className="text-sm text-muted-foreground">
                      Your first payout will be processed once you reach the minimum threshold
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Pending Payout */}
            {earningsData.pendingPayout > 0 && (
              <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-900">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-yellow-600" />
                  <div>
                    <p className="font-medium text-yellow-800 dark:text-yellow-200">Pending Payout</p>
                    <p className="text-sm text-yellow-600 dark:text-yellow-400">
                      ${earningsData.pendingPayout.toFixed(2)} • Processing by end of month
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Payment Methods Link */}
            <div className="pt-2">
              <Link href="/portal/payment-methods">
                <Button variant="outline" className="w-full gap-2">
                  <CreditCard className="h-4 w-4" />
                  Manage Payment Methods
                </Button>
              </Link>
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
