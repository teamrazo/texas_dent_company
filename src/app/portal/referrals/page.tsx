'use client';

import { useState } from 'react';
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
  X,
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

// Mock referral data
const initialReferrals = [
  { id: '1', name: 'John Davidson', email: 'john.d@email.com', phone: '(214) 555-0123', date: '2026-03-05', status: 'PROSPECT', source: 'Direct Link' },
  { id: '2', name: 'Sarah Mitchell', email: 'sarah.m@email.com', phone: '(469) 555-0456', date: '2026-03-04', status: 'LEAD', source: 'Text Message' },
  { id: '3', name: 'Michael Roberts', email: 'michael.r@email.com', phone: '(972) 555-0789', date: '2026-03-01', status: 'COMPLETED', source: 'Social Media' },
  { id: '4', name: 'Emily Kim', email: 'emily.k@email.com', phone: '(214) 555-0321', date: '2026-02-28', status: 'DAMAGE_ASSESSMENT', source: 'Direct Link' },
  { id: '5', name: 'David Chen', email: 'david.c@email.com', phone: '(469) 555-0654', date: '2026-02-25', status: 'REPAIRS_SCHEDULED', source: 'Email' },
  { id: '6', name: 'Jessica Taylor', email: 'jessica.t@email.com', phone: '(972) 555-0987', date: '2026-02-20', status: 'IN_PROGRESS', source: 'Text Message' },
  { id: '7', name: 'Brian Wilson', email: 'brian.w@email.com', phone: '(214) 555-0147', date: '2026-02-15', status: 'COMPLETED', source: 'Direct Link' },
  { id: '8', name: 'Amanda Garcia', email: 'amanda.g@email.com', phone: '(469) 555-0258', date: '2026-02-10', status: 'LOST', source: 'Social Media' },
];

const statusOptions = [
  { value: 'LEAD', label: 'Lead' },
  { value: 'PROSPECT', label: 'Prospect' },
  { value: 'DAMAGE_ASSESSMENT', label: 'Damage Assessment' },
  { value: 'REPAIRS_SCHEDULED', label: 'Repairs Scheduled' },
  { value: 'IN_PROGRESS', label: 'In Progress' },
  { value: 'COMPLETED', label: 'Completed' },
  { value: 'LOST', label: 'Lost' },
];

export default function ReferralsPage() {
  const { data: session } = useSession();
  const [referrals, setReferrals] = useState(initialReferrals);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newReferral, setNewReferral] = useState({
    name: '',
    email: '',
    phone: '',
    status: 'LEAD',
  });

  // Filter referrals
  const filteredReferrals = referrals.filter((referral) => {
    const matchesSearch = 
      referral.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      referral.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || referral.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Calculate stats
  const stats = {
    total: referrals.length,
    active: referrals.filter(r => !['COMPLETED', 'LOST'].includes(r.status)).length,
    completed: referrals.filter(r => r.status === 'COMPLETED').length,
    conversionRate: referrals.length > 0 
      ? Math.round((referrals.filter(r => r.status === 'COMPLETED').length / referrals.length) * 100)
      : 0,
  };

  const handleAddReferral = () => {
    if (!newReferral.name || !newReferral.email) {
      toast.error('Please fill in name and email');
      return;
    }

    const newEntry = {
      id: String(referrals.length + 1),
      ...newReferral,
      date: new Date().toISOString().split('T')[0],
      source: 'Manual Entry',
    };

    setReferrals([newEntry, ...referrals]);
    setNewReferral({ name: '', email: '', phone: '', status: 'LEAD' });
    setIsAddDialogOpen(false);
    toast.success('Referral added successfully!');
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="heading-2 text-foreground">Referrals</h1>
          <p className="text-muted-foreground mt-1">Track and manage all your referrals</p>
        </div>
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
                Manually add a referral to track their progress
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
              <div className="space-y-2">
                <Label htmlFor="status">Initial Status</Label>
                <Select
                  value={newReferral.status}
                  onValueChange={(value) => setNewReferral({ ...newReferral, status: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddReferral}>Add Referral</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
                <p className="text-2xl font-bold text-foreground">{stats.total}</p>
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
                <p className="text-2xl font-bold text-foreground">{stats.active}</p>
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
                <p className="text-2xl font-bold text-foreground">{stats.completed}</p>
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
                <p className="text-2xl font-bold text-foreground">{stats.conversionRate}%</p>
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
            {filteredReferrals.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No referrals found</p>
                <p className="text-sm">Try adjusting your search or filters</p>
              </div>
            ) : (
              filteredReferrals.map((referral) => {
                const statusInfo = REFERRAL_STATUS_MAP[referral.status as keyof typeof REFERRAL_STATUS_MAP];
                return (
                  <div
                    key={referral.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-medium text-foreground">
                          {referral.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{referral.name}</p>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {referral.email}
                          </span>
                          {referral.phone && (
                            <span className="flex items-center gap-1">
                              <Phone className="h-3 w-3" />
                              {referral.phone}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{referral.date}</span>
                          <span>•</span>
                          <span>{referral.source}</span>
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
