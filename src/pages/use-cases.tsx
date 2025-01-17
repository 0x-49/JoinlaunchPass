import Head from "next/head";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const useCases = [
	{
		title: "Content Creators",
		description: "Monetize your content and build exclusive communities",
		details: "Perfect for YouTubers, podcasters, and digital creators looking to offer premium content."
	},
	{
		title: "Trading & Investment",
		description: "Share market insights and trading signals",
		details: "Ideal for stock traders, crypto experts, and investment advisors."
	},
	{
		title: "Membership Communities",
		description: "Build and manage subscription-based communities",
		details: "Great for coaches, experts, and community leaders."
	},
	{
		title: "NFT & Crypto Groups",
		description: "Run exclusive crypto and NFT communities",
		details: "Perfect for crypto projects and NFT collections."
	}
];

export default function UseCases() {
	return (
		<>
			<Head>
				<title>Use Cases - LaunchPass</title>
				<meta name="description" content="Discover how different communities use LaunchPass to monetize their Discord, Telegram & Slack groups." />
			</Head>
			<div className="min-h-screen bg-background">
				<Header />
				<main className="container mx-auto py-20 px-4">
					<h1 className="text-4xl font-bold text-center mb-12">Use Cases</h1>
					<div className="grid md:grid-cols-2 gap-8">
						{useCases.map((useCase, index) => (
							<Card key={index}>
								<CardHeader>
									<CardTitle>{useCase.title}</CardTitle>
									<CardDescription>{useCase.description}</CardDescription>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground">{useCase.details}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</main>
			</div>
		</>
	);
}