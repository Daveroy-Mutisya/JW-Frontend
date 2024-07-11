import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AboutAccordion() {
    return (
        <>
        <div className="items-end justify-end">
        <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger> <p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl text-green-500">Vision</p></AccordionTrigger>
          <AccordionContent>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl">
            Our Vision is to be the leading trend in Interior Design, Project and Construction Management and Landscaping Management; while maintaining the maximum standards of environmental ethics in East and Central Africa.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger><p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl text-green-500">Mission</p></AccordionTrigger>
          <AccordionContent>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl">Our Mission is to be consistent with innovative and creative concepts that reflect the culture and traditions of the Country and also of East and Central Africa, which are ecofriendly.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger><p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl text-green-500">Core Values</p></AccordionTrigger>
          <AccordionContent>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl">Our Core Values are Customer Focus, Quality Work and Effective Client’s Satisfaction.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
        </div>
        </>
    )
  }
  