import { Layout } from '../components/Layout';
import { Section } from '../components/ui/section';

export default function UseCases() {
  return (
    <Layout>
      <Section id="podcasts" className="min-h-screen pt-20">
        <h2 className="text-4xl font-bold mb-8">For Podcasters</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Monetize your podcast with exclusive content, behind-the-scenes access,
          and premium episodes available only to your members.
        </p>
      </Section>

      <Section id="trading" className="min-h-screen pt-20">
        <h2 className="text-4xl font-bold mb-8">For Traders & Investors</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Share market insights, trading signals, and investment strategies
          with your community through secure, members-only content.
        </p>
      </Section>

      <Section id="creators" className="min-h-screen pt-20">
        <h2 className="text-4xl font-bold mb-8">For Content Creators</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Build a premium community around your content with exclusive videos,
          early access releases, and member-only interactions.
        </p>
      </Section>
    </Layout>
  );
}
