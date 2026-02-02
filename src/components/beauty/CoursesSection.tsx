import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PaymentModal from "./PaymentModal";
import courseClassic from "@/assets/course-classic.jpg";
import courseVolume from "@/assets/course-volume.jpg";
import courseBrows from "@/assets/course-brows.jpg";

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
}

const courses: Course[] = [
  {
    id: 1,
    title: "Наращивание ресниц с нуля",
    description: "Полный курс для начинающих мастеров. От теории до первых клиентов.",
    image: courseClassic,
    category: "Ресницы",
    level: "Начинающий",
    oldPrice: 15000,
    price: 4990,
    features: ["12 видеоуроков", "Чек-листы", "Сертификат"],
  },
  {
    id: 2,
    title: "Классика + 2D наращивание",
    description: "Для мастеров, желающих освоить объёмные техники и увеличить чек.",
    image: courseVolume,
    category: "Ресницы",
    level: "Повышение квалификации",
    oldPrice: 20000,
    price: 6990,
    features: ["18 видеоуроков", "Разбор ошибок", "Сертификат"],
  },
  {
    id: 3,
    title: "Объёмы 3D-6D + мега",
    description: "Продвинутые техники объёмного наращивания для опытных мастеров.",
    image: courseVolume,
    category: "Ресницы",
    level: "Продвинутый",
    oldPrice: 25000,
    price: 8990,
    features: ["24 видеоурока", "Схемы эффектов", "Сертификат"],
  },
  {
    id: 4,
    title: "Архитектура бровей с нуля",
    description: "Научитесь создавать идеальную форму бровей для любого типа лица.",
    image: courseBrows,
    category: "Брови",
    level: "Начинающий",
    oldPrice: 12000,
    price: 3990,
    features: ["10 видеоуроков", "Схемы построения", "Сертификат"],
  },
  {
    id: 5,
    title: "Окрашивание бровей",
    description: "Все техники окрашивания: хна, краска, долговременная укладка.",
    image: courseBrows,
    category: "Брови",
    level: "Повышение квалификации",
    oldPrice: 14000,
    price: 4990,
    features: ["14 видеоуроков", "Колористика", "Сертификат"],
  },
  {
    id: 6,
    title: "Ламинирование ресниц",
    description: "Популярная процедура для натурального эффекта. Быстрый старт.",
    image: courseClassic,
    category: "Ресницы",
    level: "Начинающий",
    oldPrice: 9900,
    price: 2990,
    features: ["8 видеоуроков", "Список материалов", "Сертификат"],
  },
];

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

  const handleBuyClick = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <section id="courses" className="section-padding bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Мои курсы</h2>
        <p className="text-center text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto px-2">
          Выберите курс, который подходит вашему уровню. После оплаты вы получите
          доступ к закрытому Telegram-каналу с уроками и сертификат.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {courses.map((course, index) => {
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
