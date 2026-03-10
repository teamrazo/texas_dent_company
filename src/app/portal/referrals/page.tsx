'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {
  Users,
  UserPlus,
  Search,
  Filter,
  Calendar,
  Mail,
  Phone,
  MoreVertical,
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp,
  RefreshCw,
  Loader2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';
import { REFERRAL_STATUS_MAP } from '@/lib/constants';

interface Referral {
  id: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  status: string;
  source?: string;
  createdAt: string;
  opportunityValue?: number;
  commissionAmount?: number;
  ghlContactId?: string;
  lastSyncedAt?: string;
}

// Mock referral data (used as fallback)
const initialReferrals: Referral[] = [
  { id: '1', customerName: 'John Davidson', customerEmail: 'john.d@email.com', customerPhone: '(214) 555-0123', createdAt: '2026-03-05', status: 'PROSPECT', source: 'Direct Link' },
  { id: '2', customerName: 'Sarah Mitchell', customerEmail: 'sarah.m@email.com', customerPhone: '(469) 555-0456', createdAt: '2026-03-04', status: 'LEAD', source: 'Text Message' },
  { id: '3', customerName: 'Michael Roberts', customerEmail: 'michael.r@email.com', customerPhone: '(972) 555-0789', createdAt: '2026-03-01', status: 'COMPLETED', source: 'Social Media' },
  { id: '4', customerName: 'Emily Kim', customerEmail: 'emily.k@email.com', customerPhone: '(214) 555-0321', createdAt: '2026-02-28', status: 'DAMAGE_ASSESSMENT', source: 'Direct Link' },
  { id: '5', customerName: 'David Chen', customerEmail: 'david.c@email.com', customerPhone: '(469) 555-0654', createdAt: '2026-02-25', status: 'REPAIR_SCHEDULED', source: 'Email' },
  { id: '6', customerName: 'Jessica Taylor', customerEmail: 'jessica.t@email.com', customerPhone: '(972) 555-0987', createdAt: '2026-02-20', status: 'IN_PROGRESS', source: 'Text Message' },
  { id: '7', customerName: 'Brian Wilson', customerEmail: 'brian.w@email.com', customerPhone: '(214) 555-0147', createdAt: '2026-02-15', status: 'COMPLETED', source: 'Direct Link' },
  { id: '8', customerName: 'Amanda Garcia', customerEmail: 'amanda.g@email.com', customerPhone: '(469) 555-0258', createdAt: '2026-02-10', status: 'LOST', source: 'Social Media' },
];

const statusOptions = [
  { value: 'NEW_LEAD', label: 'New Lead' },
  { value: 'LEAD', label: 'Lead' },
  { value: 'PROSPECT', label: 'Prospect' },
  { value: 'DAMAGE_ASSESSMENT', label: 'Damage Assessment' },
  { value: 'REPAIR_SCHEDULED', label: 'Repair Scheduled' },
  { value: 'IN_PROGRESS', label: 'In Progress' },
  { value: 'COMPLETED', label: 'Completed' },
  { value: 'LOST', label: 'Lost' },
];

export default function ReferralsPage() {
  const { data: session } = useSession();
  const [referrals, setReferrals] = useState<Referral[]>(initialReferrals);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    completed: 0,
    conversionRate: 0,
  });
  const [newReferral, setNewReferral] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Fetch referrals from API
  const fetchReferrals = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/ghl/sync-opportunities');
      if (response.ok) {
        const data = await response.json();
        if (data.referrals && data.referrals.length > 0) {
          setReferrals(data.referrals);
        }
        if (data.stats) {
          setStats({
            total: data.stats.totalReferrals,
            active: data.stats.activeReferrals,
            completed: data.stats.completedReferrals,
            conversionRate: data.stats.conversionRate,
          });
        }
      }
    } catch (error) {
      console.error('Error fetching referrals:', error);
      // Use mock data as fallback
      setStats({
        total: referrals.length,
        active: referrals.filter(r => !['COMPLETED', 'LOST'].includes(r.status)).length,
        completed: referrals.filter(r => r.status === 'COMPLETED').length,
        conversionRate: referrals.length > 0 
          ? Math.round((referrals.filter(r => r.status === 'COMPLETED').length / referrals.length) * 100)
          : 0,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Sync with GHL
  const syncWithGHL = async () => {
    setIsSyncing(true);
    try {
      const response = await fetch('/api/ghl/sync-opportunities', {
        method: 'POST',
      });
      if (response.ok) {
        const data = await response.json();
        toast.success(data.message || 'Synced successfully with GHL');
        // Refresh referrals after sync
        await fetchReferrals();
      } else {
        toast.error('Failed to sync with GHL');
      }
    } catch (error) {
      console.error('Error syncing with GHL:', error);
      toast.error('Error syncing with GHL');
    } finally {
      setIsSyncing(false);
    }
  };

  useEffect(() => {
    fetchReferrals();
  }, []);

  // Filter referrals
  const filteredReferrals = referrals.filter((referral) => {
    const name = referral.customerName || '';
    const email = referral.customerEmail || '';
    const matchesSearch = 
      name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || referral.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Calculate local stats if API stats not available
  const displayStats = stats.total > 0 ? stats : {
    total: referrals.length,
    active: referrals.filter(r => !['COMPLETED', 'LOST'].includes(r.status)).length,
    completed: referrals.filter(r => r.status === 'COMPLETED').length,
    conversionRate: referrals.length > 0 
      ? Math.round((referrals.filter(r => r.status === 'COMPLETED').length / referrals.length) * 100)
      : 0,
  };

  const handleAddReferral = async () => {
    if (!newReferral.name || !newReferral.email) {
      toast.error('Please fill in name and email');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create contact in GHL
      const response = await fetch('/api/ghl/create-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newReferral.name,
          email: newReferral.email,
          phone: newReferral.phone,
          source: 'Manual Entry',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        
        // Add to local state
        const newEntry: Referral = {
          id: data.referral?.id || String(Date.now()),
          customerName: newReferral.name,
          customerEmail: newReferral.email,
          customerPhone: newReferral.phone,
          createdAt: new Date().toISOString().split('T')[0],
          status: 'NEW_LEAD',
          source: 'Manual Entry',
          ghlContactId: data.referral?.ghlContactId,
        };

        setReferrals([newEntry, ...referrals]);
        setNewReferral({ name: '', email: '', phone: '' });
        setIsAddDialogOpen(false);
        toast.success('Referral added and synced to GHL!');
      } else {
        // Fallback - add locally without GHL sync
        const newEntry: Referral = {
          id: String(Date.now()),
          customerName: newReferral.name,
          customerEmail: newReferral.email,
          customerPhone: newReferral.phone,
          createdAt: new Date().toISOString().split('T')[0],
          status: 'NEW_LEAD',
          source: 'Manual Entry',
        };

        setReferrals([newEntry, ...referrals]);
        setNewReferral({ name: '', email: '', phone: '' });
        setIsAddDialogOpen(false);
        toast.success('Referral added locally (GHL sync pending)');
      }
    } catch (error) {
      console.error('Error adding referral:', error);
      // Add locally as fallback
      const newEntry: Referral = {
        id: String(Date.now()),
        customerName: newReferral.name,
        customerEmail: newReferral.email,
        customerPhone: newReferral.phone,
        createdAt: new Date().toISOString().split('T')[0],
        status: 'NEW_LEAD',
        source: 'Manual Entry',
      };

      setReferrals([newEntry, ...referrals]);
      setNewReferral({ name: '', email: '', phone: '' });
      setIsAddDialogOpen(false);
      toast.success('Referral added locally');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="heading-2 text-foreground">Referrals</h1>
          <p className="text-muted-foreground mt-1">Track and manage all your referrals</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="gap-2"
            onClick={syncWithGHL}
            disabled={isSyncing}
          >
            {isSyncing ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4" />
            )}
            Sync GHL
          </Button>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <UserPlus className="h-4 w-4" />
                Add Referral
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Referral</DialogTitle>
                <DialogDescription>
                  Add a referral manually. This will create a contact in GoHighLevel automatically.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="Full name"
                    value={newReferral.name}
                    onChange={(e) => setNewReferral({ ...newReferral, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={newReferral.email}
                    onChange={(e) => setNewReferral({ ...newReferral, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(xxx) xxx-xxxx"
                    value={newReferral.phone}
                    onChange={(e) => setNewReferral({ ...newReferral, phone: e.target.value })}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddReferral} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Adding...
                    </>
                  ) : (
                    'Add Referral'
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#BD3728]/10 text-[#BD3728] flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{displayStats.total}</p>
                <p className="text-sm text-muted-foreground">Total Referrals</p>
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
                <p className="text-2xl font-bold text-foreground">{displayStats.active}</p>
                <p className="text-sm text-muted-foreground">Active</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{displayStats.completed}</p>
                <p className="text-sm text-muted-foreground">Completed</p>
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
                <p className="text-2xl font-bold text-foreground">{displayStats.conversionRate}%</p>
                <p className="text-sm text-muted-foreground">Conversion</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or email..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                {statusOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Referrals List */}
      <Card>
        <CardHeader>
          <CardTitle>All Referrals</CardTitle>
          <CardDescription>
            {filteredReferrals.length} referral{filteredReferrals.length !== 1 ? 's' : ''} found
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {isLoading ? (
              <div className="text-center py-8">
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">Loading referrals...</p>
              </div>
            ) : filteredReferrals.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No referrals found</p>
                <p className="text-sm">Try adjusting your search or filters</p>
              </div>
            ) : (
              filteredReferrals.map((referral) => {
                const statusInfo = REFERRAL_STATUS_MAP[referral.status as keyof typeof REFERRAL_STATUS_MAP];
                const name = referral.customerName || 'Unknown';
                const email = referral.customerEmail || '';
                const phone = referral.customerPhone || '';
                const date = referral.createdAt?.split('T')[0] || '';
                const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
                
                return (
                  <div
                    key={referral.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-medium text-foreground">
                          {initials || '?'}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-foreground">{name}</p>
                          {referral.ghlContactId && (
                            <Badge variant="outline" className="text-xs">GHL</Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                          {email && (
                            <span className="flex items-center gap-1">
                              <Mail className="h-3 w-3" />
                              {email}
                            </span>
                          )}
                          {phone && (
                            <span className="flex items-center gap-1">
                              <Phone className="h-3 w-3" />
                              {phone}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{date}</span>
                          {referral.source && (
                            <>
                              <span>•</span>
                              <span>{referral.source}</span>
                            </>
                          )}
                          {referral.opportunityValue && (
                            <>
                              <span>•</span>
                              <span className="text-green-600 font-medium">
                                ${referral.opportunityValue.toLocaleString()}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:ml-auto">
                      <Badge className={statusInfo?.color || 'bg-gray-100 text-gray-800'}>
                        {statusInfo?.label || referral.status}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => toast.info('View details coming soon')}>
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toast.info('Edit functionality coming soon')}>
                            Edit
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
