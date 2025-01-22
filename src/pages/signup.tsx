import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Signup() {
  return (
    <>
      <Head>
        <title>Sign Up for LaunchPass | Start Monetizing Your Community</title>
        <meta name="description" content="Create your LaunchPass account and start monetizing your Discord, Telegram, or Slack community. Free to get started, no credit card required." />
        <meta name="robots" content="noindex" /> {/* Don't index signup pages */}
        <meta property="og:title" content="Sign Up for LaunchPass" />
        <meta property="og:description" content="Create your account and start monetizing your community today." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/LaunchPass_Logo-p-500.png" />
      </Head>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto py-20 px-4 flex justify-center items-center">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Create Your Account</CardTitle>
              <CardDescription>
                Get started with LaunchPass for free
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    autoComplete="name"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    autoComplete="email"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    autoComplete="new-password"
                  />
                  <p className="text-xs text-muted-foreground">
                    Must be at least 8 characters long
                  </p>
                </div>

                <div className="grid gap-2">
                  <Label>Choose Your Platform</Label>
                  <RadioGroup defaultValue="discord">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="discord" id="discord" />
                      <Label htmlFor="discord">Discord</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="telegram" id="telegram" />
                      <Label htmlFor="telegram">Telegram</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="slack" id="slack" />
                      <Label htmlFor="slack">Slack</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button className="w-full">
                  Create Account
                </Button>
              </div>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or sign up with
                  </span>
                </div>
              </div>

              <div className="grid gap-4">
                <Button variant="outline" className="w-full">
                  Continue with Google
                </Button>
                <Button variant="outline" className="w-full">
                  Continue with GitHub
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 text-center">
              <div className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link 
                  href="/login"
                  className="text-primary hover:text-primary/90"
                >
                  Sign in
                </Link>
              </div>
              <div className="text-xs text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link 
                  href="/terms"
                  className="underline hover:text-primary"
                >
                  Terms of Service
                </Link>
                {" "}and{" "}
                <Link 
                  href="/privacy"
                  className="underline hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </div>
            </CardFooter>
          </Card>
        </main>
      </div>
    </>
  );
}