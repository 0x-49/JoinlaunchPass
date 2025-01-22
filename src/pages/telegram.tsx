import Head from "next/head";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Telegram() {
  return (
    <>
      <Head>
        <title>Telegram Channel Monetization | Create Paid Telegram Group | LaunchPass</title>
        <meta name="description" content="Create a paid Telegram channel or group in minutes with LaunchPass. Automate member access, process payments, and grow your Telegram community effortlessly." />
        <meta name="keywords" content="paid telegram channel, telegram monetization, premium telegram group, telegram subscription, telegram membership" />
        <meta property="og:title" content="Create & Monetize Your Telegram Community | LaunchPass" />
        <meta property="og:description" content="Turn your Telegram channel into a profitable business. Automated payments, member management, and instant access for your community." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/LaunchPass_Logo-p-500.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Telegram Community Monetization | LaunchPass" />
        <meta name="twitter:description" content="Launch your paid Telegram community today. Seamless payments, automated invites, and member management." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "LaunchPass Telegram Integration",
              "description": "Platform for monetizing Telegram communities",
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
              FASTEST GROWING PLATFORM
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Create a Paid Telegram Channel
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your Telegram channel or group into a profitable business with automated member management and instant access.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Your Telegram Channel
            </Button>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Telegram for Your Community?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Powerful Broadcasting</CardTitle>
                  <CardDescription>
                    Reach your audience instantly and effectively
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Unlimited channel members</li>
                    <li>Rich media support</li>
                    <li>Instant notifications</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enhanced Privacy</CardTitle>
                  <CardDescription>
                    Industry-leading security and privacy features
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>End-to-end encryption</li>
                    <li>Secure file sharing</li>
                    <li>Private messaging</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mobile Optimized</CardTitle>
                  <CardDescription>
                    Perfect for on-the-go communities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Fast mobile performance</li>
                    <li>Low data consumption</li>
                    <li>Cross-platform sync</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">How to Monetize Your Telegram Channel</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Connect Telegram</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Link your Telegram channel or group to LaunchPass securely</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Configure Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Set up subscription plans and access levels</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Brand Your Page</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Create a professional payment page that matches your brand</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Launch & Grow</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Share your page and watch your community grow</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Telegram Community Types</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>News & Analysis</CardTitle>
                  <CardDescription>Premium news and market insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Perfect for news organizations, analysts, and industry experts sharing time-sensitive information and exclusive insights.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Trading Signals</CardTitle>
                  <CardDescription>Real-time trading opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Ideal for traders and investment professionals sharing market signals and analysis with their subscribers.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Premium Content</CardTitle>
                  <CardDescription>Exclusive media and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Great for content creators, artists, and influencers sharing exclusive content with their premium subscribers.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Private Networks</CardTitle>
                  <CardDescription>Secure professional groups</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Perfect for private professional networks and secure business communications requiring enhanced privacy.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Telegram Community?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join successful creators who use LaunchPass to manage and monetize their Telegram communities.
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