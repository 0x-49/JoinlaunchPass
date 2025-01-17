import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
	return (
		<div className="w-full max-w-3xl mx-auto">
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>What is LaunchPass?</AccordionTrigger>
					<AccordionContent>
						LaunchPass makes it easy to create private, premium communities on Discord, Telegram or Slack. Everything is automated - from payments to invites to member management, allowing you to focus on growing your community.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-2">
					<AccordionTrigger>How much does LaunchPass cost?</AccordionTrigger>
					<AccordionContent>
						LaunchPass offers a free plan and a premium plan at $29/month with a 3.5% transaction fee. The premium plan includes features like recurring billing, multi-tiered access, and automated member management.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-3">
					<AccordionTrigger>How do you process payments?</AccordionTrigger>
					<AccordionContent>
						We process all payments through Stripe, a secure and trusted payment processor. Stripe charges a standard 2.9% + $0.30 per transaction fee, which is separate from LaunchPass fees.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-4">
					<AccordionTrigger>Can I offer free trials?</AccordionTrigger>
					<AccordionContent>
						Yes! You can offer one-week, two-week, or one-month free trials. You can also set up different subscription frequencies (daily, weekly, monthly, yearly) or charge one-time fees.
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-5">
					<AccordionTrigger>Is LaunchPass secure?</AccordionTrigger>
					<AccordionContent>
						Yes, LaunchPass takes security seriously. We use industry-standard encryption and secure payment processing through Stripe. All data transfers are encrypted and we regularly update our security measures.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default FAQ;