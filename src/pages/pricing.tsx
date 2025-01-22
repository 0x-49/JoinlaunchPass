import Head from "next/head";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for getting started with community monetization",
    features: [
      "Up to 100 members",
      "Basic analytics",
      "Standard support",
      "Manual invites",
      "Basic branding",
      "2.9% + $0.30 per transaction"
    ]
  },
  {
    name: "Premium",
    price: "$29",
    period: "/month",
    description: "Everything you need to grow your community",
    features: [
      "Unlimited members",
      "Advanced analytics",
      "Priority support",
      "Automated invites",
      "Custom branding",
      "Multiple tiers",
      "Member portal",
      "API access",
      "Lower transaction fees",
      "Affiliate program"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large communities with custom needs",
    features: [
      "Everything in Premium",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantees",
      "Advanced security",
      "Custom contracts",
      "Bulk discounts",
      "Training sessions"
    ]
  }
];

export default function Pricing() {
  return (
    <>
      <Head>
        <title>LaunchPass Pricing | Simple & Transparent Community Monetization Plans</title>
        <meta name="description" content="Choose the perfect LaunchPass plan for your community. Start free, upgrade as you grow. Transparent pricing with no hidden fees." />
        <meta name="keywords" content="launchpass pricing, community monetization cost, discord server pricing, telegram channel cost, slack community pricing" />
        <meta property="og:title" content="LaunchPass Pricing - Start Free, Scale As You Grow" />
        <meta property="og:description" content="Simple, transparent pricing for your community. Free plan available, premium features for growing communities." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/LaunchPass_Logo-p-500.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LaunchPass Pricing - Community Monetization Made Simple" />
        <meta name="twitter:description" content="Choose your perfect plan. Start free, upgrade when ready. No hidden fees." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "PriceSpecification",
              "name": "LaunchPass Pricing Plans",
              "description": "Pricing plans for LaunchPass community monetization platform",
              "price": "0",
              "priceCurrency": "USD",
              "minPrice": "0",
              "maxPrice": "29"
            }
          `}
        </script>
      </Head>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto py-20 px-4">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Start free, upgrade as you grow. No hidden fees, no surprises.
            </p>
          </section>

          {/* Pricing Grid */}
          <section className="mb-20">
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <Card key={index} className={`relative flex flex-col ${plan.popular ? 'border-primary' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute top-4 right-4" variant="secondary">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                      </div>
                      <p className="mt-4">{plan.description}</p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What's included in the free plan?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The free plan includes everything you need to get started: up to 100 members, basic analytics, standard support, and manual invites. Perfect for testing the waters.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Can I upgrade or downgrade anytime?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any payments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Are there any hidden fees?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No hidden fees. You only pay the monthly subscription (if on Premium) and standard payment processing fees for transactions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Do you offer refunds?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we offer a 14-day money-back guarantee if you're not satisfied with your Premium subscription.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to grow your community?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start with our free plan and upgrade when you're ready. No credit card required.
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