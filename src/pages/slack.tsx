import Head from "next/head";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Slack() {
  return (
    <>
      <Head>
        <title>Slack Workspace Monetization | Create Paid Slack Community | LaunchPass</title>
        <meta name="description" content="Create a paid Slack workspace in minutes with LaunchPass. Perfect for professional communities, consulting groups, and premium business networks." />
        <meta name="keywords" content="paid slack workspace, slack monetization, premium slack community, slack subscription, professional slack community" />
        <meta property="og:title" content="Create & Monetize Your Professional Slack Community | LaunchPass" />
        <meta property="og:description" content="Turn your Slack workspace into a profitable business community. Automated payments, member management, and professional networking." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/LaunchPass_Logo-p-500.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Slack Community Monetization | LaunchPass" />
        <meta name="twitter:description" content="Launch your paid Slack community today. Perfect for business networks and professional communities." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "LaunchPass Slack Integration",
              "description": "Platform for monetizing professional Slack communities",
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
              PROFESSIONAL CHOICE
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Create a Premium Slack Community
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your expertise into a thriving professional community with a monetized Slack workspace.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Your Slack Community
            </Button>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Slack for Your Professional Community?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Professional Environment</CardTitle>
                  <CardDescription>
                    Built for business communication
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Organized channels</li>
                    <li>Thread discussions</li>
                    <li>Professional interface</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Powerful Integrations</CardTitle>
                  <CardDescription>
                    Connect with essential business tools
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>2,000+ app integrations</li>
                    <li>Custom workflows</li>
                    <li>API accessibility</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enterprise Features</CardTitle>
                  <CardDescription>
                    Built for scalable communities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Advanced security</li>
                    <li>Data compliance</li>
                    <li>Analytics tools</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">How to Monetize Your Slack Workspace</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Connect Slack</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Link your Slack workspace to LaunchPass securely</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Set Up Plans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Create professional membership tiers</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Brand Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Customize your professional landing page</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Grow Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Build your professional community</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Slack Community Types</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Industry Networks</CardTitle>
                  <CardDescription>Professional networking communities</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Perfect for industry professionals looking to network, share insights, and collaborate with peers in their field.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Consulting Groups</CardTitle>
                  <CardDescription>Expert consulting communities</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Ideal for consultants and experts offering premium access to their expertise and professional guidance.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Professional Development</CardTitle>
                  <CardDescription>Career growth communities</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Great for mentorship programs, career development groups, and professional skill-building communities.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Business Masterminds</CardTitle>
                  <CardDescription>Executive networking groups</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Perfect for high-level executive networking, mastermind groups, and business strategy discussions.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Professional Community?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join successful professionals who use LaunchPass to build and monetize their Slack communities.
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