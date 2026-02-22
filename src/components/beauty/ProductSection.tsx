import { PlayCircle, MessageCircle, Award, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LANDING } from "@/config/landing";

const { product } = LANDING;

const ICON_MAP: Record<string, LucideIcon> = {
  PlayCircle,
  MessageCircle,
  Award,
};

const DELAY_CLASSES = [
  "animate-delay-0",
  "animate-delay-100",
  "animate-delay-200",
];

const ProductSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{product.title}</h2>
        <p className="text-center text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto">
          {product.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {product.steps.map((step, index) => {
            const Icon = ICON_MAP[step.iconName] || PlayCircle;
            return (
              <div
                key={step.step}
                className={`flex flex-col items-center text-center p-4 sm:p-5 md:p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in ${DELAY_CLASSES[index] || ""}`}
              >
                <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-primary" />
                </div>
                <div className="text-xs sm:text-sm font-medium text-primary mb-1">
                  Шаг {step.step}
                </div>
                <h3 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Result card */}
        <div className="mt-6 sm:mt-8 md:mt-10 max-w-2xl mx-auto animate-fade-in animate-delay-300">
          <div className="bg-card rounded-xl p-4 sm:p-5 md:p-6 shadow-sm border border-border">
            <h3 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-foreground mb-3 sm:mb-4">
              {product.result.title}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {product.result.items.map((item) => (
                <li key={item} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
