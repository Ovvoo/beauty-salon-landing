import { Award, Send, Video, MessageCircle } from "lucide-react";

const benefits = [
  {
    icon: Video,
    title: "Видеоуроки",
    description: "Подробные уроки с демонстрацией техник на реальных моделях",
  },
  {
    icon: Send,
    title: "Telegram-канал",
    description: "Закрытый канал с уроками и чат для вопросов куратору",
  },
  {
    icon: Award,
    title: "Сертификат",
    description: "Официальный документ о прохождении курса на email",
  },
  {
    icon: MessageCircle,
    title: "Поддержка",
    description: "Обратная связь по практическим заданиям и ответы на вопросы",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Что вы получите</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const delayClasses = ["animate-delay-0", "animate-delay-100", "animate-delay-200", "animate-delay-300"];
            return (
            <div
              key={benefit.title}
              className={`flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300 animate-fade-in ${delayClasses[index] || ""}`}
            >
              <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                <benefit.icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary" />
              </div>
              <h3 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-foreground mb-1 sm:mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
