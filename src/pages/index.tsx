import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FAQ from "@/components/FAQ";
import { CaseStudies } from "@/components/CaseStudies";
import { CustomerJourney } from "@/components/CustomerJourney";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Benefits } from "@/components/Benefits";

export default function Home() {
  return (
    <>
        <Head>
        <title>LaunchPass - The #1 Platform for Paid Chat Communities | Discord, Telegram & Slack</title>
        <meta name="description" content="LaunchPass is the leading platform for monetizing Discord, Telegram & Slack communities. Launch your paid community in minutes with automated payments, invites, and member management." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="paid discord server, monetize telegram, slack community, membership platform, community monetization" />
        <meta property="og:title" content="LaunchPass - Launch Your Paid Chat Community" />
        <meta property="og:description" content="Create and monetize your Discord, Telegram or Slack community in minutes. Automated payments, invites, and member management." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/LaunchPass_Logo-p-500.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LaunchPass - Monetize Your Chat Community" />
        <meta name="twitter:description" content="Turn your Discord, Telegram or Slack community into a profitable business with LaunchPass." />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "LaunchPass",
              "applicationCategory": "BusinessApplication",
              "description": "Platform for monetizing Discord, Telegram & Slack communities",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "29",
                "priceCurrency": "USD"
              }
            }
          `}
        </script>
        </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 md:px-6 lg:px-8 flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-4">
            ❤️ Love LaunchPass? Join our partner program and earn 50% 🚀
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Launch a paid chat community in minutes
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
            LaunchPass makes it easy for you to charge for access to Discord, Telegram & Slack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get started for free
            </Button>
            <Button size="lg" variant="outline">
              Book a demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-8">
            Millions of community members managed for our creators
          </p>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose LaunchPass?</h2>
          <Benefits />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-none">
              <CardHeader>
                <CardTitle>Monetize Anything</CardTitle>
                <CardDescription>
                  Charge for access to any type of community
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card/50 border-none">
              <CardHeader>
                <CardTitle>Turn Your Passion Into Profit</CardTitle>
                <CardDescription>
                  Get paid doing what you know and love
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card/50 border-none">
              <CardHeader>
                <CardTitle>Launch In Minutes</CardTitle>
                <CardDescription>
                  Launch your community in less than 5 minutes
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Customer Journey Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <CustomerJourney />
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <CaseStudies />
          </div>
        </section>

        {/* Platform Selection */}
        <section className="py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Choose your platform</h2>
            <Tabs defaultValue="discord" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="discord">Discord</TabsTrigger>
                <TabsTrigger value="telegram">Telegram</TabsTrigger>
                <TabsTrigger value="slack">Slack</TabsTrigger>
              </TabsList>
              <TabsContent value="discord" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Discord</CardTitle>
                    <CardDescription>
                      Discord enables super flexible configuration and scalability. Roles allow you to set different permissions and access to channels within a server.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Connect Discord</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="telegram" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Telegram</CardTitle>
                    <CardDescription>
                      Telegram offers scalability, security, and reliability. Groups allow for discussion among members, and channels enable broadcasting messages.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Connect Telegram</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="slack" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Slack</CardTitle>
                    <CardDescription>
                      Professional solution with large workspace capacity, public and private channels, and extensive integrations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Connect Slack</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            </div>
          </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 md:px-6 lg:px-8" id="pricing">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Simple & Transparent Pricing</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that's right for you. All plans include a 14-day free trial.
              </p>
              </div>
              <ComparisonTable />
            </div>
            </section>

          {/* Calculator Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Estimate what you could make on LaunchPass</h2>
            <Card className="bg-card/50">
              <CardContent className="pt-6">
                <div className="grid gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of subscribers</label>
                    <input 
                      type="number" 
                      defaultValue="250"
                      className="w-full p-2 bg-background border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Price per month ($)</label>
                    <input 
                      type="number" 
                      defaultValue="45"
                      className="w-full p-2 bg-background border rounded-md"
                    />
                  </div>
                  <div className="pt-4">
                    <p className="text-2xl font-bold">You receive: $11.25K/month</p>
                    <p className="text-sm text-muted-foreground">You keep all revenue after any applicable LaunchPass and Stripe fees.</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">See why our users ❤️ LaunchPass 🚀</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/50">
            <CardHeader>
              <CardTitle>Amazing Platform!</CardTitle>
              <CardDescription>
              <div className="flex items-center gap-2 mb-2">
                {"⭐".repeat(5)}
              </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
              "LaunchPass manages everything perfectly and flawlessly. If you run any type of business with recurring subs, you need LaunchPass ASAP. My business grew exponentially after teaming up with them!"
              </p>
            </CardContent>
            <CardFooter>
              <p className="text-sm font-medium">- Brandon, Content Creator</p>
            </CardFooter>
            </Card>

            <Card className="bg-card/50">
            <CardHeader>
              <CardTitle>Exceptional Support</CardTitle>
              <CardDescription>
              <div className="flex items-center gap-2 mb-2">
                {"⭐".repeat(5)}
              </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
              "The support team here is amazing! They're always available & respond to any query within minutes. Helped streamline my entire business."
              </p>
            </CardContent>
            <CardFooter>
              <p className="text-sm font-medium">- Richard, Community Manager</p>
            </CardFooter>
            </Card>

            <Card className="bg-card/50">
            <CardHeader>
              <CardTitle>Game Changer</CardTitle>
              <CardDescription>
              <div className="flex items-center gap-2 mb-2">
                {"⭐".repeat(5)}
              </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
              "LaunchPass helped us build and commercialize a 500+ community within a few days. Behind their powerful product is an amazing team!"
              </p>
            </CardContent>
            <CardFooter>
              <p className="text-sm font-medium">- Chris, Convert.ai</p>
            </CardFooter>
            </Card>
          </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/10" id="faq">
          <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
          <FAQ />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Launch your paid chat community today!</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get started for free
              </Button>
              <Button size="lg" variant="outline">
                Book a demo
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
