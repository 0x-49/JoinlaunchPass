import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingCard = ({ 
	title, 
	price, 
	description, 
	features, 
	popular = false 
}: { 
	title: string;
	price: string;
	description: string;
	features: string[];
	popular?: boolean;
}) => (
	<Card className={`${popular ? 'border-primary' : ''} relative`}>
		{popular && (
			<span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-sm rounded-full">
				Most popular
			</span>
		)}
		<CardHeader>
			<CardTitle>{title}</CardTitle>
			<div className="flex items-baseline gap-1">
				<span className="text-3xl font-bold">{price}</span>
				{price !== "Free" && <span className="text-muted-foreground">/month</span>}
			</div>
			<CardDescription>{description}</CardDescription>
		</CardHeader>
		<CardContent>
			<ul className="space-y-2">
				{features.map((feature, i) => (
					<li key={i} className="flex items-center gap-2">
						<Check className="h-4 w-4 text-primary" />
						<span className="text-sm">{feature}</span>
					</li>
				))}
			</ul>
		</CardContent>
		<CardFooter>
			<Button className="w-full" variant={popular ? "default" : "outline"}>
				Get Started
			</Button>
		</CardFooter>
	</Card>
);

const Pricing = () => {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
			<PricingCard
				title="Basic"
				price="Free"
				description="Forever free plan to get you started"
				features={[
					"Automated member invites",
					"Unlimited free members",
					"One-click disable/enable signups",
					"Customizable invite page design",
					"Custom description",
					"Automated invites"
				]}
			/>
			<PricingCard
				title="Premium"
				price="$29"
				description="14 day free trial"
				popular={true}
				features={[
					"All features from basic",
					"One-time & recurring billing options",
					"Offer free trials & coupons",
					"Multi-tiered level access",
					"Dashboard with activity feed",
					"Automated subscriber management",
					"24/7 live chat support"
				]}
			/>
		</div>
	);
};

export default Pricing;