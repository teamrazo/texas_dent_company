'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import {
  Users,
  UserPlus,
  Clipboard,
  Wrench,
  CheckCircle,
  DollarSign,
  Clock,
  Copy,
  ExternalLink,
  TrendingUp,
  MessageSquare,
  Mail,
  Share2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { REFERRAL_STATUS_MAP } from '@/lib/constants';

// Mock data for read-only dashboard
const mockStats = {
  totalReferrals: 12,
  leads: 5,
  prospects: 3,
  damageAssessments: 2,
  repairsScheduled: 1,
  inProgress: 0,
  completed: 1,
  lost: 0,
  earnedCommissions: 450.00,
  pendingPayout: 150.00,
};

const mockRecentReferrals = [
  { id: '1', name: 'John D.', status: 'PROSPECT', date: '2026-03-05' },
  { id: '2', name: 'Sarah M.', status: 'LEAD', date: '2026-03-04' },
  { id: '3', name: 'Michael R.', status: 'COMPLETED', date: '2026-03-01' },
  { id: '4', name: 'Emily K.', status: 'DAMAGE_ASSESSMENT', date: '2026-02-28' },
];

// Outreach Templates
const textTemplates = [
  {
    title: 'Personal Introduction',
    content: 'Hey [Name], this is [Your Name] - I wanted to personally introduce you to Texas Dent Company.\n\nThey are helping families in DFW get quick, professional hail repair after the storm.\n\nBook your free inspection here 👉 [YourLink]',
  },
  {
    title: 'After the Storm',
    content: 'Hey [Name], if your car got caught in that last hailstorm, Texas Dent Company can help.\n\nThey are quick, local, and reliable - plus they support DFW nonprofits with every repair.\n\nFree estimate link 👉 [YourLink]',
  },
  {
    title: 'Faith & Family',
    content: 'Hey [Name], I am part of the new outreach with Texas Dent Company - they are partnering with local churches to help families get back on the road.\n\nEvery repair helps support community programs.\n\nHere is where you can book: [YourLink]',
  },
  {
    title: 'Quick Follow-Up',
    content: 'Hey [Name], just checking back - have you had your hail damage inspected yet?\n\nTexas Dent Company is offering free inspections this week.\n\nHere is the booking link again 👉 [YourLink]',
  },
  {
    title: 'Texas Strong',
    content: 'Hi [Name], Texas Dent Company is leading local recovery after the storm.\n\nFast service, fair prices, and they give back to DFW families.\n\nSchedule here and be part of the impact 💪 [YourLink]',
  },
];

const emailTemplates = [
  {
    title: 'Partnership Announcement',
    subject: 'Proud to Partner with [Organization Name] - Texans Helping Texans',
    content: `Hello [Name],

We are honored to announce our partnership with [Organization Name] to help DFW families get back on the road quickly after hail events - without compromising quality or integrity.

What makes us different:
• Trusted, insurance-approved hail repair
• Local technicians with a reputation for excellence
• Every appointment supports [Organization Name]'s mission

Book your hail repair and support [Organization Name] today: [YourLink]

Best regards,
[Your Name]`,
  },
  {
    title: 'Together We Rebuild',
    subject: 'Together, We Rebuild Texas - Join Us',
    content: `Hi [Name],

When storms hit Texas, we stand together - and rebuild together.

We have teamed up with [Organization Name] to deliver fast, high-quality hail repair that funds local initiatives.

Why choose Texas Dent Company:
• Quick turnaround, expert workmanship
• Clear communication from estimate to completion
• Your repair helps rebuild our community

Schedule now and make your repair count: [YourLink]

Thanks,
[Your Name]`,
  },
  {
    title: 'After Storm Alert',
    subject: 'Hit by Hail? Free Assessment + Fast Repair',
    content: `Hi [Name],

Hail is stressful - your repair should not be.

Use our partner link for priority scheduling, free assessments, and guidance on insurance claims.

What we offer:
• Quick estimates
• Clear timelines
• Community support with every booking

Claim your appointment now: [YourLink]

Best,
[Your Name]`,
  },
];

const socialPosts = [
  {
    title: 'Partnership Announcement',
    content: `🤝 Proud to Partner with the Heart of Our Community

Texas Dent Company is honored to join forces with [Organization Name] - working together to support local families and restore what matters most.

✅ Built on integrity and trust
✅ Local experts in hail damage repair
✅ Committed to DFW families

👉 Book your repair & support your community: [YourLink]

#TexasDentCompany #DFWCommunity #HailRepairTX #TexasStrong`,
  },
  {
    title: 'After Storm Post',
    content: `☔ Hit by Hail? We Have Got You Covered.

Storm season is tough - but Texans are tougher.

✅ Free hail damage inspections
✅ Fast turnaround
✅ Support local recovery with every repair

👉 Book your appointment: [YourLink]

#HailDamage #TexasStrong #AutoRepair`,
  },
  {
    title: 'Community Impact',
    content: `❤️ Repairing Cars, Restoring Hope

A repaired car gets someone back to work, to church, to life.

Our partnership with [Nonprofit] means every repair helps a neighbor take the next step.

✅ Thorough inspection and fair recommendations
✅ Streamlined insurance coordination
✅ Funds directed to local programs

👉 Make your repair matter: [YourLink]

#CommunityFirst #TexasHelpsTexas`,
  },
  {
    title: 'Faith Partnership',
    content: `🙏 Faith Drives Us Forward

We are proud to partner with [Church Name] to help local families restore more than their vehicles - restoring peace of mind.

✅ Family-focused hail repair
✅ Integrity in every interaction
✅ Give back with every booking

👉 Schedule your appointment: [YourLink]

#FaithInAction #CommunityPartnership`,
  },
];

export default function PartnerDashboardPage() {
  const { data: session } = useSession();
  const affiliateLink = `https://www.texasdentcompany.com/?ref=${session?.user?.partnerId || 'partner123'}`;
  const [expandedResource, setExpandedResource] = useState<string | null>(null);

  const copyAffiliateLink = () => {
    navigator.clipboard.writeText(affiliateLink);
    toast.success('Affiliate link copied to clipboard!');
  };

  const copyTemplate = (content: string) => {
    const personalizedContent = content.replace(/\[YourLink\]/g, affiliateLink);
    navigator.clipboard.writeText(personalizedContent);
    toast.success('Template copied with your affiliate link!');
  };

  // Calculate pipeline progress
  const pipelineStages = [
    { label: 'Leads', count: mockStats.leads, color: 'bg-[#BD3728]' },
    { label: 'Prospects', count: mockStats.prospects, color: 'bg-yellow-500' },
    { label: 'Assessment', count: mockStats.damageAssessments, color: 'bg-orange-500' },
    { label: 'Scheduled', count: mockStats.repairsScheduled, color: 'bg-purple-500' },
    { label: 'In Progress', count: mockStats.inProgress, color: 'bg-indigo-500' },
    { label: 'Completed', count: mockStats.completed, color: 'bg-green-500' },
  ];

  const totalActive = mockStats.leads + mockStats.prospects + mockStats.damageAssessments + 
                      mockStats.repairsScheduled + mockStats.inProgress;
  const completionRate = mockStats.totalReferrals > 0 
    ? Math.round((mockStats.completed / mockStats.totalReferrals) * 100) 
    : 0;

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="heading-2 text-foreground">Welcome back, {session?.user?.name?.split(' ')[0] || 'Partner'}!</h1>
        <p className="text-muted-foreground mt-1">Here is an overview of your referral activity.</p>
      </div>

      {/* Affiliate Link Card */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Your Affiliate Link</CardTitle>
          <CardDescription>Share this link to earn commissions on referrals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 bg-background rounded-lg border border-border px-4 py-2 text-sm font-mono truncate">
              {affiliateLink}
            </div>
            <div className="flex gap-2">
              <Button onClick={copyAffiliateLink} variant="outline" size="sm">
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
              <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Preview
                </Button>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#BD3728]/10 text-[#BD3728] flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{mockStats.totalReferrals}</p>
                <p className="text-sm text-muted-foreground">Total Referrals</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{totalActive}</p>
                <p className="text-sm text-muted-foreground">Active Pipeline</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                <DollarSign className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">${mockStats.earnedCommissions.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">Total Earned</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">${mockStats.pendingPayout.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">Pending Payout</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Marketing Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Marketing Resources</CardTitle>
          <CardDescription>Ready-to-use templates for sharing with your network. Click to copy with your affiliate link included!</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="text" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="text" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Text Messages
              </TabsTrigger>
              <TabsTrigger value="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Emails
              </TabsTrigger>
              <TabsTrigger value="social" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Social Media
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="text" className="mt-4 space-y-3">
              {textTemplates.map((template, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground">{template.title}</h4>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => copyTemplate(template.content)}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{template.content}</p>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="email" className="mt-4 space-y-3">
              {emailTemplates.map((template, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-foreground">{template.title}</h4>
                      <p className="text-xs text-muted-foreground">Subject: {template.subject}</p>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => copyTemplate(`Subject: ${template.subject}\n\n${template.content}`)}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-pre-line mt-2">{template.content}</p>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="social" className="mt-4 space-y-3">
              {socialPosts.map((post, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground">{post.title}</h4>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => copyTemplate(post.content)}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{post.content}</p>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Pipeline Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Pipeline Progress</CardTitle>
          <CardDescription>Track your referrals through each stage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Visual Pipeline */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {pipelineStages.map((stage, index) => (
                <div key={stage.label} className="flex items-center">
                  <div className="flex flex-col items-center min-w-[80px]">
                    <div className={`w-10 h-10 rounded-full ${stage.color} text-white flex items-center justify-center font-bold text-sm`}>
                      {stage.count}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 text-center">{stage.label}</p>
                  </div>
                  {index < pipelineStages.length - 1 && (
                    <div className="w-8 h-0.5 bg-border mx-1" />
                  )}
                </div>
              ))}
            </div>

            {/* Completion Rate */}
            <div className="pt-4 border-t border-border">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Completion Rate</span>
                <span className="text-sm text-muted-foreground">{completionRate}%</span>
              </div>
              <Progress value={completionRate} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Referrals */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Referrals</CardTitle>
              <CardDescription>Your latest referral activity</CardDescription>
            </div>
            <Link href="/portal/referrals">
              <Button variant="outline" size="sm">
                View All
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockRecentReferrals.map((referral) => {
              const statusInfo = REFERRAL_STATUS_MAP[referral.status as keyof typeof REFERRAL_STATUS_MAP];
              return (
                <div key={referral.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-sm font-medium text-foreground">
                        {referral.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{referral.name}</p>
                      <p className="text-xs text-muted-foreground">{referral.date}</p>
                    </div>
                  </div>
                  <Badge className={statusInfo?.color || 'bg-gray-100 text-gray-800'}>
                    {statusInfo?.label || referral.status}
                  </Badge>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Quick Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Tips for Success</CardTitle>
          <CardDescription>Maximize your earnings with these proven strategies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { tip: 'Start with people you know', desc: 'Text friends, family, or coworkers who had hail damage.' },
              { tip: 'Share your story', desc: 'Tell them how fast or easy your repair was - people trust real stories.' },
              { tip: 'Post once a week', desc: 'Stay consistent - it only takes a minute to share.' },
              { tip: 'Follow the 1-2-1 rhythm', desc: 'Intro, reminder after 2-3 days, then one follow-up if needed.' },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground text-sm">{item.tip}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Help Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Need Help?</CardTitle>
          <CardDescription>We are here to support you</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Questions about the program or need assistance? Reach out to our support team.
          </p>
          <a href="https://support.razorsharpnetworks.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Contact Support</Button>
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
