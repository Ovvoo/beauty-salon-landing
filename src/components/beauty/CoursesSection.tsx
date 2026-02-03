import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PaymentModal from "./PaymentModal";
import course1 from "@/assets/course-1.jpg";
import course2 from "@/assets/course-2.jpg";
import course3 from "@/assets/course-3.jpg";
import course4 from "@/assets/course-4.jpg";
import course5 from "@/assets/course-5.jpg";
import course6 from "@/assets/course-6.jpg";
import course7 from "@/assets/course-7.jpg";

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "Ресницы" | "Брови";
  level: "Начинающий" | "Повышение квалификации" | "Продвинутый";
  oldPrice: number;
  price: number;
  features: string[];
  telegramLink: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Мастер по наращиванию ресниц",
    description: "Станьте востребованным лешмейкером с нуля до первых клиентов за несколько дней. Гарантия качественного обучения и практического применения знаний — зарабатывайте больше, чем в офисе.",
    image: course1,
    category: "Ресницы",
    level: "Начинающий",
    oldPrice: 15000,
    price: 4990,
    features: ["12 видеоуроков", "Чек-листы", "Сертификат"],
    telegramLink: "https://t.me/+dPAUJ0m4mRdlMTcy",
  },
  {
    id: 2,
    title: "Объёмное наращивание ресниц",
    description: "Освойте технику составления любых пучков за один день. Идеально для мастеров классики, желающих освоить 2D и 3D наращивание, поднять средний чек и расширить клиентскую базу.",
    image: course2,
    category: "Ресницы",
    level: "Повышение квалификации",
    oldPrice: 20000,
    price: 6990,
    features: ["18 видеоуроков", "Разбор ошибок", "Сертификат"],
    telegramLink: "https://t.me/+zm-FH44lwYQzZmNi",
  },
  {
    id: 3,
    title: "Ламинирование ресниц",
    description: "Быстрая процедура с высоким спросом — идеальный старт в профессии. Научитесь индивидуальному моделированию и созданию естественно подкрученных ресничек.",
    image: course3,
    category: "Ресницы",
    level: "Начинающий",
    oldPrice: 9900,
    price: 2990,
    features: ["8 видеоуроков", "Список материалов", "Сертификат"],
    telegramLink: "https://t.me/+-QbgHlt4epNjMGUy",
  },
  {
    id: 4,
    title: "Наращивание ресниц PRO",
    description: "Курс повышения квалификации для опытных лешмейкеров. Выведите мастерство на новый уровень, увеличьте прайс на услуги и откройте путь к повышению в салоне.",
    image: course4,
    category: "Ресницы",
    level: "Продвинутый",
    oldPrice: 25000,
    price: 8990,
    features: ["24 видеоурока", "Схемы эффектов", "Сертификат"],
    telegramLink: "https://t.me/+PuHWyKZ-_7NmMTli",
  },
  {
    id: 5,
    title: "Мокрый эффект",
    description: "Освойте трендовую технику создания эффекта мокрых ресниц с помощью наращивания. Расширьте арсенал услуг и увеличьте поток клиентов благодаря востребованной методике.",
    image: course5,
    category: "Ресницы",
    level: "Повышение квалификации",
    oldPrice: 14000,
    price: 4990,
    features: ["10 видеоуроков", "Трендовые техники", "Сертификат"],
    telegramLink: "https://t.me/+yQA-LV8MUpczMzVi",
  },
  {
    id: 6,
    title: "Американское наращивание",
    description: "Техника супер-объёмного наращивания для мастеров с опытом. Пополните свой профессиональный арсенал уникальной методикой и выделитесь среди конкурентов.",
    image: course6,
    category: "Ресницы",
    level: "Продвинутый",
    oldPrice: 18000,
    price: 7990,
    features: ["14 видеоуроков", "Техника объёмов", "Сертификат"],
    telegramLink: "https://t.me/+5FTZaPTYLf81ODBi",
  },
  {
    id: 7,
    title: "Ламинирование бровей",
    description: "Популярная услуга долговременной укладки бровей. Освойте технику для себя или расширьте навыки практикующего мастера-бровиста новой востребованной процедурой.",
    image: course7,
    category: "Брови",
    level: "Начинающий",
    oldPrice: 12000,
    price: 3990,
    features: ["10 видеоуроков", "Схемы построения", "Сертификат"],
    telegramLink: "https://t.me/+Vrbz-G4MEWBmZjI6",
  },
];

const INITIAL_VISIBLE_COUNT = 6;

const getLevelColor = (level: Course["level"]) => {
  switch (level) {
    case "Начинающий":
      return "bg-green-500";
    case "Повышение квалификации":
      return "bg-blue-500";
    case "Продвинутый":
      return "bg-primary";
    default:
      return "bg-muted-foreground";
  }
};

const CoursesSection = () => {
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
    <section id="courses" className="section-padding bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Мои курсы</h2>
        <p className="text-center text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto px-2">
          Выберите курс, который подходит вашему уровню. После оплаты вы получите
          доступ к закрытому Telegram-каналу с уроками и сертификат.
        </p>

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
                  className="w-full h-full object-cover"
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
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                    <span className="line-through text-muted-foreground text-xs sm:text-sm">
                      {course.oldPrice.toLocaleString()} ₽
                    </span>
                    <span className="font-bold text-primary text-lg sm:text-xl">
                      {course.price.toLocaleString()} ₽
                    </span>
                  </div>
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
