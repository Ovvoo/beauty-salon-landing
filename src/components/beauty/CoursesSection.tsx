import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PaymentModal from "./PaymentModal";
import PriceDisplay from "./PriceDisplay";
import { useCourses } from "@/hooks/use-courses";
import type { Course } from "@/lib/types";

const INITIAL_VISIBLE_COUNT = 6;

const getLevelColor = (level: Course["level"]) => {
  switch (level) {
    case "Начинающий":
      return "bg-success";
    case "Повышение квалификации":
      return "bg-info";
    case "Продвинутый":
      return "bg-primary";
    default:
      return "bg-muted-foreground";
  }
};

const CoursesSection = () => {
  const { data: courses, dataUpdatedAt, isError, isFetching } = useCourses();
  const isUsingFallback = dataUpdatedAt === 0;
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handleBuyClick = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const visibleCourses = showAll ? courses : courses.slice(0, INITIAL_VISIBLE_COUNT);
  const hasMoreCourses = courses.length > INITIAL_VISIBLE_COUNT;

  return (
    <section id="courses" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Мои курсы</h2>
        <p className="text-center text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto px-2">
          Выберите курс, который подходит вашему уровню. После оплаты вы получите
          доступ к закрытому Telegram-каналу с уроками и сертификат.
        </p>

        {import.meta.env.DEV && (isError || isUsingFallback) && (
          <div className={`text-center text-xs mb-4 px-3 py-1.5 rounded mx-auto w-fit ${isError ? "bg-destructive/10 text-destructive" : "bg-muted text-muted-foreground"}`}>
            {isError
              ? "PocketBase недоступен — показаны локальные данные"
              : isFetching
                ? "Загрузка курсов из PocketBase..."
                : "Показаны локальные данные (PocketBase не отвечал)"}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {visibleCourses.map((course, index) => {
            const delayClasses = [
              "animate-delay-0",
              "animate-delay-50",
              "animate-delay-100",
              "animate-delay-150",
              "animate-delay-200",
              "animate-delay-250",
            ];
            return (
            <div
              key={course.id}
              className={`bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in flex flex-col ${delayClasses[index] || ""}`}
            >
              {/* Image */}
              <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex gap-2">
                  <Badge className="bg-card/90 text-card-foreground text-[10px] sm:text-xs">
                    {course.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-1">
                {/* Level Badge */}
                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                  <span className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${getLevelColor(course.level)}`} />
                  <span className="text-[10px] sm:text-xs text-muted-foreground">{course.level}</span>
                </div>

                <h3 className="font-heading font-semibold text-sm sm:text-base md:text-lg text-card-foreground mb-1.5 sm:mb-2 leading-snug">
                  {course.title}
                </h3>

                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 flex-1 leading-relaxed">
                  {course.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {course.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-[10px] sm:text-xs bg-muted text-muted-foreground px-1.5 sm:px-2 py-0.5 sm:py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between mt-auto pt-3 sm:pt-4 border-t border-border gap-2">
                  <PriceDisplay price={course.price} oldPrice={course.oldPrice} />
                  <Button
                    onClick={() => handleBuyClick(course)}
                    className="btn-primary text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 shrink-0"
                  >
                    Купить
                  </Button>
                </div>
              </div>
            </div>
          );
          })}
        </div>

        {hasMoreCourses && !showAll && (
          <div className="flex justify-center mt-8">
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              className="px-6 py-2"
            >
              Показать ещё
            </Button>
          </div>
        )}
      </div>

      <PaymentModal
        course={selectedCourse}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </section>
  );
};

export default CoursesSection;
