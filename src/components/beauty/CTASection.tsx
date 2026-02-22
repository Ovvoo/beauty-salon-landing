import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LANDING } from "@/config/landing";

const { cta } = LANDING;

const CTASection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-3 sm:mb-4 animate-fade-in">
          {cta.headline}
        </h2>
        <p className="text-primary-foreground/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 animate-fade-in animate-delay-100">
          {cta.subheadline}
        </p>

        <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 max-w-md mx-auto animate-fade-in animate-delay-200">
          {cta.bulletPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2 sm:gap-3 text-primary-foreground"
            >
              <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-gold shrink-0" />
              <span className="text-sm sm:text-base text-left">{point}</span>
            </li>
          ))}
        </ul>

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
