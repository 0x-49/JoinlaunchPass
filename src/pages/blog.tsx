import Head from "next/head";
import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const blogPosts = [
  {
    title: "How to Monetize Your Discord Community",
    slug: "monetize-discord-community",
    date: "March 15, 2024",
    description: "Learn the best practices for turning your Discord community into a profitable business. We cover pricing strategies, member retention, and growth tactics.",
    readTime: "5 min read",
    category: "Guides",
    author: {
      name: "Sarah Johnson",
      role: "Community Growth Expert"
    },
    tags: ["discord", "monetization", "community building"],
    excerpt: "Building a successful paid Discord community requires more than just great content. Learn the proven strategies that top creators use to monetize their communities effectively."
  },
  {
    title: "Top 5 Features for Community Management",
    slug: "top-community-management-features",
    date: "March 10, 2024",
    description: "Discover the essential features that make managing your community easier. From automated workflows to analytics, these tools will help you scale.",
    readTime: "4 min read",
    category: "Features",
    author: {
      name: "Michael Chen",
      role: "Product Manager"
    },
    tags: ["features", "management", "automation"],
    excerpt: "The right tools can make or break your community management experience. We've compiled the top features that successful community managers can't live without."
  },
  {
    title: "Success Story: From 0 to 1000 Members",
    slug: "success-story-1000-members",
    date: "March 5, 2024",
    description: "See how one creator built a thriving paid community using LaunchPass. A detailed case study with actionable insights and real metrics.",
    readTime: "6 min read",
    category: "Case Studies",
    author: {
      name: "Alex Rivera",
      role: "Content Creator"
    },
    tags: ["case study", "growth", "success story"],
    excerpt: "Follow the journey of how a content creator turned their passion into a profitable community, growing from zero to 1000 paying members in just six months."
  },
  {
    title: "Choosing Between Discord, Telegram, and Slack",
    slug: "platform-comparison-guide",
    date: "March 1, 2024",
    description: "A comprehensive comparison to help you pick the right platform for your community. Compare features, pricing, and user experience.",
    readTime: "7 min read",
    category: "Guides",
    author: {
      name: "Emma Thompson",
      role: "Platform Specialist"
    },
    tags: ["platforms", "comparison", "decision guide"],
    excerpt: "Each platform has its strengths. Learn which one aligns best with your community goals through our detailed comparison and analysis."
  }
];

const categories = ["All", "Guides", "Features", "Case Studies"];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>Community Building Blog | LaunchPass Insights & Guides</title>
        <meta name="description" content="Expert insights on community building, monetization strategies, and success stories. Learn how to grow and monetize your Discord, Telegram, or Slack community." />
        <meta name="keywords" content="community building, discord monetization, telegram groups, slack communities, community management, membership site" />
        <meta property="og:title" content="LaunchPass Blog - Community Monetization Insights" />
        <meta property="og:description" content="Learn from experts about building and monetizing your online community. Tips, guides, and success stories." />
        <meta property="og:type" content="blog" />
        <meta property="og:image" content="/images/LaunchPass_Logo-p-500.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LaunchPass Community Building Blog" />
        <meta name="twitter:description" content="Expert insights and guides for community monetization." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "LaunchPass Blog",
            "description": "Expert insights on community building and monetization",
            "publisher": {
              "@type": "Organization",
              "name": "LaunchPass",
              "logo": {
                "@type": "ImageObject",
                "url": "/images/LaunchPass_Logo-p-500.png"
              }
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.description,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author.name
              }
            }))
          })}
        </script>
      </Head>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto py-20 px-4">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Community Building Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert guides, success stories, and strategies for building thriving communities.
            </p>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <Input
                placeholder="Search articles..."
                className="max-w-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList>
                  {categories.map((category) => (
                    <TabsTrigger key={category} value={category}>
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="grid md:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="text-sm">
                        <p className="font-semibold">{post.author.name}</p>
                        <p className="text-muted-foreground">{post.author.role}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, i) => (
                        <Badge key={i} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <Button variant="ghost" asChild>
                      <a href={`/blog/${post.slug}`}>Read More →</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Newsletter Signup */}
          <section className="mt-20">
            <Card className="bg-secondary/10">
              <CardHeader className="text-center">
                <CardTitle>Subscribe to Our Newsletter</CardTitle>
                <CardDescription>
                  Get the latest community building tips and strategies delivered to your inbox.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex gap-4 max-w-md mx-auto">
                  <Input placeholder="Enter your email" type="email" />
                  <Button>Subscribe</Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </>
  );
}