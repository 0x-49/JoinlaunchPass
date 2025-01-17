import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Settings, Users, BarChart } from "lucide-react";

const steps = [
	{
		icon: Rocket,
		title: "Quick Start",
		description: "Connect your Discord, Telegram, or Slack account in under 2 minutes",
		action: "Connect Platform"
	},
	{
		icon: Settings,
		title: "Easy Setup",
		description: "Configure your pricing, customize your branding, and set up payment processing",
		action: "Configure Settings"
	},
	{
		icon: Users,
		title: "Launch & Grow",
		description: "Start accepting members and watch your community thrive with automated management",
		action: "Start Growing"
	},
	{
		icon: BarChart,
		title: "Scale Revenue",
		description: "Track growth, optimize pricing, and expand your community with analytics",
		action: "View Analytics"
	}
];

export function CustomerJourney() {
	return (
		<div className="space-y-8">
			<div className="text-center max-w-3xl mx-auto mb-12">
				<h2 className="text-3xl font-bold mb-4">Your Journey to Success</h2>
				<p className="text-muted-foreground">
					Get your community up and running in minutes with our simple, proven process
				</p>
			</div>

			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				{steps.map((step, index) => (
					<Card key={index} className="relative">
						<CardHeader>
							<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
								<step.icon className="h-6 w-6 text-primary" />
							</div>
							<CardTitle className="flex items-center gap-2">
								<span className="text-lg">{step.title}</span>
								{index < steps.length - 1 && (
									<ArrowRight className="h-4 w-4 text-muted-foreground hidden lg:block" />
								)}
							</CardTitle>
							<CardDescription>{step.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<Button variant="ghost" className="w-full">
								{step.action}
							</Button>
						</CardContent>
					</Card>
				))}
			</div>

			<div className="text-center mt-12">
				<Button size="lg" className="bg-primary hover:bg-primary/90">
					Start Your Journey Now
				</Button>
			</div>
		</div>
	);
}