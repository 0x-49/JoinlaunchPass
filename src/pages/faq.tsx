import Head from "next/head";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Getting Started",
    questions: [
      {
        q: "What is LaunchPass?",
        a: "LaunchPass is a platform that helps you monetize your chat communities on Discord, Telegram, and Slack. We handle payments, member management, and automated invites so you can focus on growing your community."
      },
      {
        q: "How do I get started?",
        a: "Getting started is easy! Simply sign up for a free account, connect your preferred platform (Discord, Telegram, or Slack), set up your pricing tiers, and customize your landing page. You can start accepting members in minutes."
      },
      {
        q: "Which platforms do you support?",
        a: "We currently support Discord, Telegram, and Slack. Each platform has its unique features and benefits, making them suitable for different types of communities."
      },
      {
        q: "Do I need technical knowledge?",
        a: "No technical knowledge is required! LaunchPass is designed to be user-friendly and intuitive. Our setup wizard will guide you through the entire process."
      }
    ]
  },
  {
    title: "Pricing & Payments",
    questions: [
      {
        q: "How much does LaunchPass cost?",
        a: "LaunchPass offers a free plan to get started, and a Premium plan at $29/month with advanced features. We also have Enterprise solutions for larger communities. All plans include payment processing fees for transactions."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, debit cards, and popular payment methods through Stripe. This includes Visa, Mastercard, American Express, and more."
      },
      {
        q: "How do payouts work?",
        a: "Payouts are processed automatically through Stripe. You can receive payments directly to your bank account on a schedule that works for you (daily, weekly, or monthly)."
      },
      {
        q: "Are there any hidden fees?",
        a: "No hidden fees! You only pay the monthly subscription (if on Premium) and standard payment processing fees. All fees are clearly displayed before you start."
      }
    ]
  },
  {
    title: "Features & Functionality",
    questions: [
      {
        q: "Can I offer different membership tiers?",
        a: "Yes! Premium users can create multiple membership tiers with different prices and access levels. This is perfect for offering various levels of content or services."
      },
      {
        q: "How does member management work?",
        a: "LaunchPass automatically handles member management. When someone subscribes, they're automatically added to your community. If they cancel or their payment fails, they're automatically removed."
      },
      {
        q: "Can I customize my landing page?",
        a: "Absolutely! You can customize your landing page with your branding, including logos, colors, and content. Premium users get access to advanced customization options."
      },
      {
        q: "Do you provide analytics?",
        a: "Yes, we provide detailed analytics including member growth, revenue, churn rate, and more. Premium users get access to advanced analytics and reporting features."
      }
    ]
  },
  {
    title: "Security & Support",
    questions: [
      {
        q: "Is LaunchPass secure?",
        a: "Yes, security is our top priority. We use bank-level encryption, secure payment processing through Stripe, and follow industry best practices for data protection."
      },
      {
        q: "What kind of support do you offer?",
        a: "We offer 24/7 support through chat and email. Premium users get priority support, and Enterprise users get a dedicated account manager."
      },
      {
        q: "Can I migrate my existing community?",
        a: "Yes! We have tools and support to help you migrate your existing community. Our team can guide you through the process to ensure a smooth transition."
      },
      {
        q: "What happens if I need to cancel?",
        a: "You can cancel your subscription anytime. We offer a 14-day money-back guarantee for Premium subscriptions. Your data remains accessible for export."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions | LaunchPass Community Monetization</title>
        <meta name="description" content="Find answers to common questions about LaunchPass. Learn about pricing, features, security, and how to monetize your Discord, Telegram, or Slack community." />
        <meta name="keywords" content="launchpass faq, community monetization help, discord monetization questions, telegram pricing faq, slack community help" />
        <meta property="og:title" content="LaunchPass FAQ - Get Your Questions Answered" />
        <meta property="og:description" content="Everything you need to know about monetizing your community with LaunchPass. Clear answers to common questions." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/LaunchPass_Logo-p-500.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LaunchPass FAQ - Community Monetization Guide" />
        <meta name="twitter:description" content="Get answers to your questions about community monetization with LaunchPass." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": ${JSON.stringify(
                faqCategories.flatMap(category => 
                  category.questions.map(q => ({
                    "@type": "Question",
                    "name": q.q,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": q.a
                    }
                  }))
                )
              )}
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Find answers to common questions about LaunchPass and community monetization.
            </p>
          </section>

          {/* FAQ Categories */}
          <section className="max-w-4xl mx-auto">
            {faqCategories.map((category, index) => (
              <Card key={index} className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    {category.questions.map((q, i) => (
                      <AccordionItem key={i} value={`item-${index}-${i}`}>
                        <AccordionTrigger>{q.q}</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">{q.a}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* Still Have Questions */}
          <section className="text-center mt-20">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our support team is here to help 24/7. Get in touch and we'll be happy to assist you.
            </p>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-center p-4">
                    <h3 className="font-semibold mb-2">Chat Support</h3>
                    <p className="text-muted-foreground">Get instant help from our support team</p>
                  </div>
                  <div className="text-center p-4">
                    <h3 className="font-semibold mb-2">Email Support</h3>
                    <p className="text-muted-foreground">Send us a detailed message anytime</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </>
  );
}