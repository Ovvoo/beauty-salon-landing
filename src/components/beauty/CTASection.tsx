import { Play, MessageCircle, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LANDING } from "@/config/landing";
import { useCourses } from "@/hooks/use-courses";

const { cta } = LANDING;

const BULLET_ICONS = [Play, MessageCircle, Award];

const CTASection = () => {
  const { data: courses } = useCourses();
  const minPrice = Math.min(...courses.map((c) => c.price));

  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-3 sm:mb-4 animate-fade-in">
          {cta.headline}
        </h2>

        <p className="text-primary-foreground/80 text-sm sm:text-base md:text-lg mb-2 animate-fade-in animate-delay-100">
          {cta.subheadline}
        </p>
        <p className="text-gold font-heading font-bold text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 animate-fade-in animate-delay-100">
          от {minPrice.toLocaleString("ru-RU")} ₽
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-lg mx-auto animate-fade-in animate-delay-200">
          {cta.bulletPoints.map((point, index) => {
            const Icon = BULLET_ICONS[index] || Play;
            return (
              <div
                key={point}
                className="flex-1 bg-primary-foreground/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-2">
                  <Icon className="w-4 sm:w-5 h-4 sm:h-5 text-gold" />
                </div>
                <span className="text-primary-foreground text-xs sm:text-sm leading-snug">
                  {point}
                </span>
              </div>
            );
          })}
        </div>

        <div className="animate-fade-in animate-delay-300">
          <a href={cta.button.href}>
            <Button
              size="lg"
              className="bg-gold text-gold-foreground hover:bg-gold/90 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              {cta.button.label}
            </Button>
          </a>
          <p className="text-primary-foreground/60 text-xs sm:text-sm mt-3 sm:mt-4">
            {cta.note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
