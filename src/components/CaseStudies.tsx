import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Users, DollarSign, TrendingUp } from "lucide-react";

const caseStudies = [
	{
		title: "Crypto Trading Community",
		category: "Finance",
		metrics: {
			members: "5,000+",
			revenue: "$50K/month",
			growth: "300%"
		},
		description: "Leading crypto signals group scaled from 0 to 5,000 members in 6 months using LaunchPass's automated member management.",
		quote: "LaunchPass automated everything, letting us focus on providing value to our members."
	},
	{
		title: "Premium Podcast Network",
		category: "Content",
		metrics: {
			members: "2,500+",
			revenue: "$25K/month",
			growth: "200%"
		},
		description: "Podcast network successfully monetized their audience with exclusive content and community features.",
		quote: "We transformed our free listeners into paying subscribers seamlessly."
	},
	{
		title: "Sports Picks Community",
		category: "Sports",
		metrics: {
			members: "3,000+",
			revenue: "$35K/month",
			growth: "250%"
		},
		description: "Sports analysis group built a thriving premium community with multiple subscription tiers.",
		quote: "LaunchPass made it easy to manage different membership levels and payments."
	}
];

export function CaseStudies() {
	return (
		<div className="grid gap-6 md:grid-cols-3">
			{caseStudies.map((study, index) => (
				<Card key={index} className="relative overflow-hidden">
					<CardHeader>
						<div className="flex justify-between items-start mb-2">
							<Badge variant="secondary">{study.category}</Badge>
							<ArrowUpRight className="h-4 w-4 text-muted-foreground" />
						</div>
						<CardTitle className="text-xl mb-2">{study.title}</CardTitle>
						<CardDescription>{study.description}</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-3 gap-4 mb-4">
							<div className="text-center">
								<Users className="h-4 w-4 mx-auto mb-1 text-primary" />
								<div className="text-sm font-medium">{study.metrics.members}</div>
								<div className="text-xs text-muted-foreground">Members</div>
							</div>
							<div className="text-center">
								<DollarSign className="h-4 w-4 mx-auto mb-1 text-primary" />
								<div className="text-sm font-medium">{study.metrics.revenue}</div>
								<div className="text-xs text-muted-foreground">Revenue</div>
							</div>
							<div className="text-center">
								<TrendingUp className="h-4 w-4 mx-auto mb-1 text-primary" />
								<div className="text-sm font-medium">{study.metrics.growth}</div>
								<div className="text-xs text-muted-foreground">Growth</div>
							</div>
						</div>
						<blockquote className="border-l-2 pl-4 italic text-sm text-muted-foreground">
							"{study.quote}"
						</blockquote>
					</CardContent>
				</Card>
			))}
		</div>
	);
}