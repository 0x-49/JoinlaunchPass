import Head from "next/head";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Discord() {
  return (
    <>
      <Head>
        <title>Discord Community Monetization | Create Paid Discord Server | LaunchPass</title>
        <meta name="description" content="Create a paid Discord server in minutes with LaunchPass. Automate member management, process payments, and grow your Discord community with ease." />
        <meta name="keywords" content="paid discord server, discord monetization, premium discord community, discord subscription, discord membership" />
        <meta property="og:title" content="Create & Monetize Your Discord Community | LaunchPass" />
        <meta property="og:description" content="Turn your Discord server into a profitable business. Automated payments, member management, and instant access for your community." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/LaunchPass_Logo-p-500.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Discord Community Monetization | LaunchPass" />
        <meta name="twitter:description" content="Launch your paid Discord community today. Seamless payments, automated invites, and member management." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "LaunchPass Discord Integration",
              "description": "Platform for monetizing Discord communities",
              "brand": {
                "@type": "Brand",
                "name": "LaunchPass"
              },
              "offers": {
                "@type": "Offer",
                "price": "29",
                "priceCurrency": "USD"
              }
            }
          `}
        </script>
      </Head>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto py-20 px-4">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <Badge variant="secondary" className="mb-4">
              MOST POPULAR PLATFORM
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Create a Paid Discord Server
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Turn your Discord community into a thriving business with automated payments, member management, and instant access.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Your Discord Server
            </Button>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Discord for Your Community?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Flexible Configuration</CardTitle>
                  <CardDescription>
                    Create multiple channels, roles, and permission levels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Custom roles for different membership tiers</li>
                    <li>Private channels for exclusive content</li>
                    <li>Granular permission settings</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rich Features</CardTitle>
                  <CardDescription>
                    Engage with your community using Discord's features
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Voice & video channels</li>
                    <li>Screen sharing capabilities</li>
                    <li>Bot integrations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Scalable Platform</CardTitle>
                  <CardDescription>
                    Grow your community without limitations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Unlimited members</li>
                    <li>High performance & reliability</li>
                    <li>Advanced moderation tools</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">How to Monetize Your Discord Server</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Connect Discord</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Link your Discord server to LaunchPass in just a few clicks</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Set Up Tiers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Create membership tiers with different prices and permissions</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Customize Page</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Design your branded payment page to match your community</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Start Earning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Share your page and start accepting members automatically</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Discord Community Types</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Trading & Investment</CardTitle>
                  <CardDescription>Share market insights and trading signals</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Perfect for stock traders, crypto experts, and investment advisors looking to share real-time market analysis and trading opportunities.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Education & Coaching</CardTitle>
                  <CardDescription>Teach and mentor your students</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Ideal for online courses, coaching programs, and educational communities where interaction is key to learning.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Content Creation</CardTitle>
                  <CardDescription>Exclusive access to premium content</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Great for YouTubers, streamers, and creators who want to offer behind-the-scenes content and direct interaction with fans.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Professional Networks</CardTitle>
                  <CardDescription>Build industry-specific communities</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Perfect for professional networking, industry discussions, and knowledge sharing among experts.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Discord Community?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of successful community creators who trust LaunchPass to manage their Discord communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get started for free
              </Button>
              <Button size="lg" variant="outline">
                Book a demo
              </Button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}