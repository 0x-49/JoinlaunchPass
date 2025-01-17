import Head from "next/head";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
	{
		title: "How to Monetize Your Discord Community",
		date: "March 15, 2024",
		description: "Learn the best practices for turning your Discord community into a profitable business.",
		readTime: "5 min read",
		category: "Guides"
	},
	{
		title: "Top 5 Features for Community Management",
		date: "March 10, 2024",
		description: "Discover the essential features that make managing your community easier.",
		readTime: "4 min read",
		category: "Features"
	},
	{
		title: "Success Story: From 0 to 1000 Members",
		date: "March 5, 2024",
		description: "See how one creator built a thriving paid community using LaunchPass.",
		readTime: "6 min read",
		category: "Case Studies"
	},
	{
		title: "Choosing Between Discord, Telegram, and Slack",
		date: "March 1, 2024",
		description: "A comprehensive comparison to help you pick the right platform.",
		readTime: "7 min read",
		category: "Guides"
	}
];

export default function Blog() {
	return (
		<>
			<Head>
				<title>Blog - LaunchPass Community Insights</title>
				<meta name="description" content="Read the latest insights about community building, monetization strategies, and success stories from LaunchPass users." />
			</Head>
			<div className="min-h-screen bg-background">
				<Header />
				<main className="container mx-auto py-20 px-4">
					<h1 className="text-4xl font-bold text-center mb-12">Latest Articles</h1>
					<div className="grid md:grid-cols-2 gap-8">
						{blogPosts.map((post, index) => (
							<Card key={index} className="hover:shadow-lg transition-shadow">
								<CardHeader>
									<div className="flex justify-between items-center mb-2">
										<span className="text-sm text-muted-foreground">{post.date}</span>
										<span className="text-sm bg-secondary px-2 py-1 rounded-full">{post.category}</span>
									</div>
									<CardTitle className="text-xl">{post.title}</CardTitle>
									<CardDescription>{post.description}</CardDescription>
								</CardHeader>
								<CardContent className="flex justify-between items-center">
									<span className="text-sm text-muted-foreground">{post.readTime}</span>
									<Button variant="ghost">Read More →</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</main>
			</div>
		</>
	);
}