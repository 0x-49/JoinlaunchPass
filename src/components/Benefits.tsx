import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, Zap, BarChart3, Users, Palette } from "lucide-react";

const benefits = [
	{
		icon: Zap,
		title: "Launch in Minutes",
		description: "Set up your community and start accepting payments in under 5 minutes"
	},
	{
		icon: Users,
		title: "Automated Management",
		description: "Automatic invites, removals, and member tracking"
	},
	{
		icon: BarChart3,
		title: "Scale Your Revenue",
		description: "Multiple pricing tiers and flexible subscription options"
	},
	{
		icon: Shield,
		title: "Secure & Reliable",
		description: "Built on Stripe with enterprise-grade security"
	},
	{
		icon: Clock,
		title: "24/7 Support",
		description: "Round-the-clock assistance from our expert team"
	},
	{
		icon: Palette,
		title: "Custom Branding",
		description: "Fully customizable landing pages and widgets"
	}
];

export function Benefits() {
	return (
		<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{benefits.map((benefit, index) => (
				<Card key={index} className="bg-card/50 border-none hover:bg-card/80 transition-colors">
					<CardHeader className="flex flex-row items-center gap-4">
						<div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
							<benefit.icon className="h-6 w-6 text-primary" />
						</div>
						<div>
							<CardTitle className="text-lg">{benefit.title}</CardTitle>
							<CardContent className="p-0 text-sm text-muted-foreground">
								{benefit.description}
							</CardContent>
						</div>
					</CardHeader>
				</Card>
			))}
		</div>
	);
}