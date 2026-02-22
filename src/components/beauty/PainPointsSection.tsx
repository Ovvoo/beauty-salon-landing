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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="section-title">{painPoints.title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
          {painPoints.items.map((item, index) => (
            <div
              key={item.title}
              className={`bg-card rounded-xl p-3 sm:p-4 flex items-start gap-3 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in ${DELAY_CLASSES[index] || ""}`}
            >
              <span className="text-xl sm:text-2xl shrink-0 leading-none mt-0.5">
                {item.emoji}
              </span>
              <div>
                <h3 className="font-heading text-sm sm:text-base font-semibold text-foreground leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-snug mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-5 sm:mt-6 max-w-md mx-auto">
          {painPoints.closingLine}
        </p>
      </div>
    </section>
  );
};

export default PainPointsSection;
