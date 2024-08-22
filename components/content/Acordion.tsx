import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function AccordionDemo() {
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1">
				<AccordionTrigger>Github</AccordionTrigger>
				<AccordionContent>https://github.com/gamzesirin</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Linkedin</AccordionTrigger>
				<AccordionContent>https://www.linkedin.com/in/gamzeşirin/</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Medium</AccordionTrigger>
				<AccordionContent>https://medium.com/@ggamzesirinn</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
