import { LANDING } from "@/config/landing";

const { painPoints } = LANDING;

const DELAY_CLASSES = [
  "animate-delay-0",
  "animate-delay-100",
  "animate-delay-200",
  "animate-delay-300",
];

const PainPointsSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="section-title">{painPoints.title}</h2>
        <p className="text-center text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto">
          {painPoints.subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {painPoints.items.map((item, index) => (
            <div
              key={item.title}
              className={`bg-card rounded-xl p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in ${DELAY_CLASSES[index] || ""}`}
            >
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">
                {item.emoji}
              </div>
              <h3 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm sm:text-base mt-6 sm:mt-8 md:mt-10 max-w-xl mx-auto">
          {painPoints.closingLine}
        </p>
      </div>
    </section>
  );
};

export default PainPointsSection;
