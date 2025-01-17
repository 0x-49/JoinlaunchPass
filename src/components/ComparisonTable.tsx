import { Check, X } from "lucide-react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const features = [
	{
		name: "Member Management",
		basic: true,
		premium: true,
		description: "Automated member invites and tracking"
	},
	{
		name: "Free Members",
		basic: true,
		premium: true,
		description: "Unlimited free members"
	},
	{
		name: "Custom Branding",
		basic: true,
		premium: true,
		description: "Customizable invite page design"
	},
	{
		name: "Recurring Billing",
		basic: false,
		premium: true,
		description: "Set up subscription payments"
	},
	{
		name: "Multi-tier Access",
		basic: false,
		premium: true,
		description: "Create different membership levels"
	},
	{
		name: "Analytics Dashboard",
		basic: false,
		premium: true,
		description: "Track growth and revenue"
	},
	{
		name: "24/7 Support",
		basic: false,
		premium: true,
		description: "Priority customer support"
	}
];

export function ComparisonTable() {
	return (
		<Table className="border rounded-lg">
			<TableHeader>
				<TableRow className="bg-secondary/50">
					<TableHead className="w-[300px]">Features</TableHead>
					<TableHead className="text-center">Basic</TableHead>
					<TableHead className="text-center">Premium</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{features.map((feature, i) => (
					<TableRow key={i} className="hover:bg-secondary/5">
						<TableCell className="font-medium">
							<div>
								<p>{feature.name}</p>
								<p className="text-sm text-muted-foreground">{feature.description}</p>
							</div>
						</TableCell>
						<TableCell className="text-center">
							{feature.basic ? (
								<Check className="h-5 w-5 text-primary mx-auto" />
							) : (
								<X className="h-5 w-5 text-muted-foreground mx-auto" />
							)}
						</TableCell>
						<TableCell className="text-center">
							{feature.premium ? (
								<Check className="h-5 w-5 text-primary mx-auto" />
							) : (
								<X className="h-5 w-5 text-muted-foreground mx-auto" />
							)}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}