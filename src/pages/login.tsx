import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login to LaunchPass | Manage Your Community</title>
        <meta name="description" content="Log in to your LaunchPass account to manage your community, view analytics, and process payments for your Discord, Telegram, or Slack group." />
        <meta name="robots" content="noindex" /> {/* Don't index login pages */}
        <meta property="og:title" content="Login to LaunchPass" />
        <meta property="og:description" content="Access your LaunchPass dashboard to manage your community." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/LaunchPass_Logo-p-500.png" />
      </Head>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto py-20 px-4 flex justify-center items-center">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
              <CardDescription>
                Log in to manage your community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
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
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link 
                      href="/forgot-password"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                  />
                </div>
                <Button className="w-full">
                  Sign In
                </Button>
              </div>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
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
                Don't have an account?{" "}
                <Link 
                  href="/signup"
                  className="text-primary hover:text-primary/90"
                >
                  Sign up for free
                </Link>
              </div>
              <div className="text-xs text-muted-foreground">
                By signing in, you agree to our{" "}
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