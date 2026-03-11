import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TeamMemberProfile } from '@/components/sections/TeamMemberProfile';
import { teamMembers, getTeamMemberBySlug, getAllTeamSlugs } from '@/lib/team-data';

interface TeamMemberPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all team members
export async function generateStaticParams() {
  return getAllTeamSlugs().map((slug) => ({
    slug,
  }));
}

// Generate metadata for each team member
export async function generateMetadata({ params }: TeamMemberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    return {
      title: 'Team Member Not Found | Texas Dent Company',
    };
  }

  return {
    title: `${member.name} - ${member.role} | Texas Dent Company`,
    description: `Meet ${member.name}, ${member.role} at Texas Dent Company. ${member.shortBio}`,
    openGraph: {
      title: `${member.name} - ${member.role} | Texas Dent Company`,
      description: member.shortBio,
      type: 'profile',
      images: [
        {
          url: member.image,
          width: 400,
          height: 600,
          alt: member.name,
        },
      ],
    },
  };
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  // If no team member found, return 404
  if (!member) {
    notFound();
  }

  return <TeamMemberProfile member={member} />;
}
