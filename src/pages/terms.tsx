import Head from "next/head";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service | LaunchPass</title>
        <meta name="description" content="LaunchPass terms of service. Read about our terms and conditions for using the LaunchPass platform for community monetization." />
        <meta name="keywords" content="launchpass terms, terms of service, legal terms, community monetization terms" />
        <meta property="og:title" content="LaunchPass Terms of Service" />
        <meta property="og:description" content="Read our terms of service for using LaunchPass." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/LaunchPass_Logo-p-500.png" />
      </Head>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto py-20 px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Terms of Service</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <p className="text-sm text-muted-foreground text-center mb-8">
                Last updated: January 18, 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing or using LaunchPass, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing LaunchPass.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
                <p>
                  LaunchPass grants you a limited, non-exclusive, non-transferable, revocable license to use our platform for managing and monetizing your online communities in accordance with these Terms.
                </p>
                <ul className="list-disc pl-6 mt-4">
                  <li>You must not use the service for any illegal or unauthorized purpose</li>
                  <li>You must not modify, adapt or hack the service</li>
                  <li>You must not transmit any worms, viruses or destructive code</li>
                  <li>You must not violate any laws in your jurisdiction</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Account Terms</h2>
                <p>
                  You are responsible for maintaining the security of your account and password. LaunchPass cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
                <p>
                  You agree to pay all fees associated with your use of LaunchPass. We reserve the right to modify our fees upon reasonable notice. All fees are exclusive of taxes, which you are responsible for paying.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Content Guidelines</h2>
                <p>
                  You are solely responsible for the content you publish and share through LaunchPass. Your content must not:
                </p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Contain harmful or malicious code</li>
                  <li>Include inappropriate or offensive material</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
                <p>
                  We may terminate or suspend your account and access to LaunchPass immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
                <p>
                  In no event shall LaunchPass, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
                <p>
                  We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page. Your continued use of LaunchPass after any changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
                <p>
                  If you have any questions about these Terms, please contact us at support@launchpass.com.
                </p>
              </section>
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  );
}