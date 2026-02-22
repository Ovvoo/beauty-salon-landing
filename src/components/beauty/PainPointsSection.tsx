import { Wallet, ShieldAlert, TrendingDown, FileX, type LucideIcon } from "lucide-react";
import { LANDING } from "@/config/landing";

const { painPoints } = LANDING;

const ICON_MAP: Record<string, LucideIcon> = {
  Wallet,
  ShieldAlert,
  TrendingDown,
  FileX,
};

const DELAY_CLASSES = [
  "animate-delay-0",
  "animate-delay-100",
  "animate-delay-200",
  "animate-delay-300",
];

const PainPointsSection = () => {
  return (
    <section id={painPoints.sectionId} className="section-padding bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="section-title">{painPoints.title}</h2>

        {painPoints.subtitle && (
          <p className="text-center text-muted-foreground text-sm sm:text-base -mt-4 mb-8 sm:mb-10">
            {painPoints.subtitle}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {painPoints.items.map((item, index) => {
            const Icon = ICON_MAP[item.iconName];
            return (
              <div
                key={item.title}
                className={`bg-card rounded-xl p-4 sm:p-5 flex items-start gap-4 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in border-l-4 border-primary ${DELAY_CLASSES[index] || ""}`}
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  {Icon && <Icon className="w-5 h-5 sm:w-[1.375rem] sm:h-[1.375rem] text-primary" />}
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading text-sm sm:text-base font-semibold text-foreground leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-primary font-medium text-sm sm:text-base mt-6 sm:mt-8 max-w-md mx-auto">
          {painPoints.closingLine}
        </p>
      </div>
    </section>
  );
};

export default PainPointsSection;
