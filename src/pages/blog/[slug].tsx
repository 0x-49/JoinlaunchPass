import Head from "next/head";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    title: "How to Monetize Your Discord Community",
    slug: "monetize-discord-community",
    date: "March 15, 2024",
    description: "Learn the best practices for turning your Discord community into a profitable business.",
    content: `
      <h2>Introduction</h2>
      <p>Building a successful paid Discord community requires more than just great content. Learn the proven strategies that top creators use to monetize their communities effectively.</p>
      
      <h2>1. Define Your Value Proposition</h2>
      <p>Clearly articulate what makes your community unique and valuable. This could be exclusive content, expert access, or a supportive environment.</p>
      
      <h2>2. Set Up Tiered Memberships</h2>
      <p>Offer different levels of access and benefits to cater to various budgets and interests. Common tiers include:</p>
      <ul>
        <li>Basic Access</li>
        <li>Premium Content</li>
        <li>VIP/Founder's Club</li>
      </ul>
      
      <h2>3. Create Engaging Content</h2>
      <p>Regularly provide valuable content that keeps members engaged and coming back for more. This could include:</p>
      <ul>
        <li>Exclusive tutorials</li>
        <li>Live Q&A sessions</li>
        <li>Community challenges</li>
      </ul>
      
      <h2>4. Leverage Automation</h2>
      <p>Use tools like LaunchPass to automate member onboarding, payments, and access management.</p>
    `,
    readTime: "5 min read",
    category: "Guides",
    author: {
      name: "Sarah Johnson",
      role: "Community Growth Expert"
    },
    tags: ["discord", "monetization", "community building"]
  },
  // Other posts would follow the same structure
];

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title} | LaunchPass Blog</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/images/LaunchPass_Logo-p-500.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.description,
            "datePublished": post.date,
            "author": {
              "@type": "Person",
              "name": post.author.name
            }
          })}
        </script>
      </Head>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto py-20 px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <Badge variant="secondary">{post.category}</Badge>
              </div>
              <CardTitle className="text-3xl mb-2">{post.title}</CardTitle>
              <CardDescription className="text-lg">{post.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
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
              
              <article 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-8">
                <Button variant="ghost" asChild>
                  <a href="/blog">← Back to Blog</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  );
}