import Head from "next/head";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | LaunchPass</title>
        <meta name="description" content="LaunchPass privacy policy. Learn how we collect, use, and protect your personal information when you use our community monetization platform." />
        <meta name="keywords" content="launchpass privacy, privacy policy, data protection, personal information" />
        <meta property="og:title" content="LaunchPass Privacy Policy" />
        <meta property="og:description" content="Learn how LaunchPass protects your privacy and personal information." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/LaunchPass_Logo-p-500.png" />
      </Head>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto py-20 px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <p className="text-sm text-muted-foreground text-center mb-8">
                Last updated: January 18, 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p>
                  LaunchPass ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-2">2.1 Personal Information</h3>
                <p>We may collect the following types of personal information:</p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Name and contact information</li>
                  <li>Payment information</li>
                  <li>Platform credentials (Discord, Telegram, Slack)</li>
                  <li>Usage data and analytics</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 mt-4">2.2 Automatically Collected Information</h3>
                <p>When you use our platform, we automatically collect:</p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Device information</li>
                  <li>IP addresses</li>
                  <li>Browser type</li>
                  <li>Usage patterns</li>
                  <li>Performance data</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p>We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Providing and maintaining our services</li>
                  <li>Processing payments and transactions</li>
                  <li>Communicating with you about our services</li>
                  <li>Improving our platform and user experience</li>
                  <li>Complying with legal obligations</li>
                  <li>Preventing fraud and abuse</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
                <p>
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Service providers (payment processors, hosting services)</li>
                  <li>Platform partners (Discord, Telegram, Slack)</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information, including:
                </p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Secure data storage practices</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to data processing</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar tracking technologies to improve your experience on our platform. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
                <p>
                  Our services are not intended for children under 13. We do not knowingly collect or maintain information from children under 13.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Changes to Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our privacy practices, please contact us at privacy@launchpass.com.
                </p>
              </section>
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  );
}