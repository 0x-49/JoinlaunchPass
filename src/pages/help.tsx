import Head from "next/head";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const helpCategories = {
	gettingStarted: [
		{
			title: "Quick Start Guide",
			description: "Learn how to set up your first community in minutes"
		},
		{
			title: "Platform Integration",
			description: "Connect Discord, Telegram, or Slack to LaunchPass"
		},
		{
			title: "Payment Setup",
			description: "Configure your Stripe account and pricing"
		}
	],
	features: [
		{
			title: "Member Management",
			description: "Learn about automated invites and member tracking"
		},
		{
			title: "Subscription Options",
			description: "Set up different tiers and payment plans"
		},
		{
			title: "Analytics & Reports",
			description: "Track your community's growth and revenue"
		}
	],
	troubleshooting: [
		{
			title: "Common Issues",
			description: "Solutions to frequently encountered problems"
		},
		{
			title: "Platform Status",
			description: "Check LaunchPass service status"
		},
		{
			title: "Contact Support",
			description: "Get help from our support team"
		}
	]
};

export default function Help() {
	return (
		<>
			<Head>
				<title>Help Center - LaunchPass Support</title>
				<meta name="description" content="Get help with LaunchPass. Find guides, troubleshooting tips, and contact our support team." />
			</Head>
			<div className="min-h-screen bg-background">
				<Header />
				<main className="container mx-auto py-20 px-4">
					<div className="max-w-3xl mx-auto">
						<h1 className="text-4xl font-bold text-center mb-8">Help Center</h1>
						<div className="relative mb-12">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
							<input
								type="text"
								placeholder="Search help articles..."
								className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background"
							/>
						</div>
						
						<Tabs defaultValue="gettingStarted">
							<TabsList className="grid w-full grid-cols-3">
								<TabsTrigger value="gettingStarted">Getting Started</TabsTrigger>
								<TabsTrigger value="features">Features</TabsTrigger>
								<TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
							</TabsList>

							{Object.entries(helpCategories).map(([category, items]) => (
								<TabsContent key={category} value={category}>
									<div className="grid gap-4">
										{items.map((item, index) => (
											<Card key={index}>
												<CardHeader>
													<CardTitle>{item.title}</CardTitle>
													<CardDescription>{item.description}</CardDescription>
												</CardHeader>
												<CardContent>
													<Button variant="ghost">Read More →</Button>
												</CardContent>
											</Card>
										))}
									</div>
								</TabsContent>
							))}
						</Tabs>

						<div className="mt-12 text-center">
							<h2 className="text-xl font-semibold mb-4">Need more help?</h2>
							<Button size="lg">Contact Support</Button>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}