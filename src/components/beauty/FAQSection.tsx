import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LANDING } from "@/config/landing";

const { faq } = LANDING;

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="section-title">{faq.title}</h2>

        <Accordion type="single" collapsible className="w-full space-y-2 sm:space-y-3">
          {faq.items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-3 sm:px-4 md:px-6 data-[state=open]:shadow-md transition-shadow duration-300"
            >
              <AccordionTrigger className="text-left font-heading font-medium text-foreground hover:text-primary py-3 sm:py-4 md:py-5 text-xs sm:text-sm md:text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-xs sm:text-sm md:text-base pb-3 sm:pb-4 md:pb-5 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
