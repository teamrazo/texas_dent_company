import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Blog | Hail Repair Tips & News | Texas Dent Company',
  description: 'Read the latest news, tips, and guides about hail damage repair, PDR techniques, insurance claims, and more from Texas Dent Company experts.',
};

const blogPosts = [
  {
    slug: 'hail-claim-process',
    title: 'The Complete Process at Texas Dent Company: From First Contact to Final Pickup',
    excerpt: 'Walk through the entire process of getting your car repaired for hail damage with Texas Dent Company, from the moment one of our salespeople contacts you to when you pick up your fully restored vehicle.',
    image: '/images/gallery/headliner-work.png',
    author: 'Kailey Wilson',
    date: 'March 29, 2024',
    category: 'Hail Claims',
  },
  {
    slug: 'repair-timeline',
    title: 'Auto Hail Repair Timeline: 3 Important Factors',
    excerpt: 'When your car is in our facility for hail damage repair, three main factors determine how long the process will take. Learn what affects your repair timeline.',
    image: '/images/blog/repair-timeline.jpg',
    author: 'Kailey Wilson',
    date: 'March 29, 2024',
    category: 'Hail Claims',
  },
  {
    slug: 'frisco-location',
    title: 'Frisco Location | Auto Hail Repair',
    excerpt: 'We have moved from our Carrollton location. Now, we are located at 122 Rose Ln Suite 801, Frisco, TX 75036. The same customer service and quality of repair that we have been offering.',
    image: '/images/locations/frisco-shop.jpg',
    author: 'Kailey Wilson',
    date: 'May 7, 2024',
    category: 'TDC Locations',
  },
  {
    slug: 'tyler-location',
    title: 'Tyler Location | Auto Hail Repair',
    excerpt: 'We have been helping Tyler residents get rid of the dents the storm from February 14th caused on their cars. Check out our location and book your appointment.',
    image: '/images/locations/tyler-location.jpg',
    author: 'Kailey Wilson',
    date: 'April 5, 2024',
    category: 'TDC Locations',
  },
];

const categories = ['All', 'Hail Claims', 'TDC Locations', 'PDR Tips'];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-background py-16 md:py-24">
        <div className="container-xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-1 text-foreground mb-6">Blog</h1>
            <p className="body-large text-muted-foreground">
              Expert insights, repair guides, and the latest news from Texas Dent Company. 
              Learn about hail damage repair, insurance claims, and how to protect your vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container-xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container-xl">
          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="heading-3 text-foreground mb-8">Featured Article</h2>
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-[16/10] lg:aspect-auto">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    <Tag className="h-3 w-3 mr-1" />
                    {blogPosts[0].category}
                  </Badge>
                  <h3 className="heading-2 text-foreground mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {blogPosts[0].date}
                    </div>
                  </div>
                  <Link href={`/blog/${blogPosts[0].slug}`}>
                    <Button>
                      Read Article <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* More Posts */}
          <h2 className="heading-3 text-foreground mb-8">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    <Tag className="h-3 w-3 mr-1" />
                    {post.category}
                  </Badge>
                  <h3 className="heading-4 text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Read More <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-2 text-foreground mb-4">Need Hail Repair?</h2>
            <p className="body-large text-muted-foreground mb-8">
              Schedule a free inspection and let our experts assess your vehicle.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8">
                Schedule Inspection <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
