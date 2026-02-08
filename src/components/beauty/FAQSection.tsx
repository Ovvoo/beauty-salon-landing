import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Нужен ли опыт для прохождения курса?",
    answer:
      "Нет, наши курсы для начинающих рассчитаны на учеников без какого-либо опыта. Мы начинаем с самых основ и постепенно переходим к более сложным техникам.",
  },
  {
    question: "Как долго сохраняется доступ к курсу?",
    answer:
      "Доступ к материалам курса остаётся у вас навсегда. Вы можете пересматривать уроки в любое время и возвращаться к ним по мере необходимости.",
  },
  {
    question: "Как получить сертификат?",
    answer:
      "Сертификат выдаётся после успешного выполнения всех практических заданий курса. Вы получите официальный документ в электронном формате, который можно распечатать.",
  },
  {
    question: "Какие материалы нужны для практики?",
    answer:
      "После оплаты курса вы получите подробный список необходимых материалов с рекомендациями по выбору. Также предоставляем скидки у наших партнёров-поставщиков.",
  },
  {
    question: "Как связаться с куратором?",
    answer:
      "После покупки курса вы получите доступ к закрытому чату с куратором в Telegram. Куратор отвечает на вопросы в течение 24 часов и даёт обратную связь по практическим заданиям.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="section-title">Часто задаваемые вопросы</h2>

        <Accordion type="single" collapsible className="w-full space-y-2 sm:space-y-3">
          {faqItems.map((item, index) => (
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
