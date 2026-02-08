import type { Course, Review, TelegramPost } from "@/lib/types";
import course1 from "@/assets/course-1.jpg";
import course2 from "@/assets/course-2.jpg";
import course3 from "@/assets/course-3.jpg";
import course4 from "@/assets/course-4.jpg";
import course5 from "@/assets/course-5.jpg";
import course6 from "@/assets/course-6.jpg";
import course7 from "@/assets/course-7.jpg";

export const fallbackCourses: Course[] = [
  {
    id: "fallback-1",
    title: "Мастер по наращиванию ресниц",
    description:
      "Станьте востребованным лешмейкером с нуля до первых клиентов за несколько дней. Гарантия качественного обучения и практического применения знаний — зарабатывайте больше, чем в офисе.",
    image: course1,
    category: "Ресницы",
    level: "Начинающий",
    oldPrice: 5000,
    price: 990,
    features: ["12 видеоуроков", "Чек-листы", "Сертификат"],
    telegramLink: "https://t.me/+dPAUJ0m4mRdlMTcy",
    targetAudience: [
      "Новичок и хочешь получить новую востребованную профессию",
      "Начинающий мастер, который не чувствует себя уверенным на практике",
    ],
  },
  {
    id: "fallback-2",
    title: "Объёмное наращивание ресниц",
    description:
      "Освойте технику составления любых пучков за один день. Идеально для мастеров классики, желающих освоить 2D и 3D наращивание, поднять средний чек и расширить клиентскую базу.",
    image: course2,
    category: "Ресницы",
    level: "Повышение квалификации",
    oldPrice: 5000,
    price: 990,
    features: ["18 видеоуроков", "Разбор ошибок", "Сертификат"],
    telegramLink: "https://t.me/+zm-FH44lwYQzZmNi",
    targetAudience: [
      "Уже наращиваешь классику и хочешь освоить 2D и 3D",
      "Хочешь поднять средний чек и расширить клиентскую базу",
    ],
  },
  {
    id: "fallback-3",
    title: "Ламинирование ресниц",
    description:
      "Быстрая процедура с высоким спросом — идеальный старт в профессии. Научитесь индивидуальному моделированию и созданию естественно подкрученных ресничек.",
    image: course3,
    category: "Ресницы",
    level: "Начинающий",
    oldPrice: 5000,
    price: 990,
    features: ["8 видеоуроков", "Список материалов", "Сертификат"],
    telegramLink: "https://t.me/+-QbgHlt4epNjMGUy",
    targetAudience: [
      "Хочешь освоить быструю процедуру с высоким спросом",
      "Хочешь научиться индивидуальному моделированию ресничек",
    ],
  },
  {
    id: "fallback-4",
    title: "Наращивание ресниц PRO",
    description:
      "Курс повышения квалификации для опытных лешмейкеров. Выведите мастерство на новый уровень, увеличьте прайс на услуги и откройте путь к повышению в салоне.",
    image: course4,
    category: "Ресницы",
    level: "Продвинутый",
    oldPrice: 5000,
    price: 990,
    features: ["24 видеоурока", "Схемы эффектов", "Сертификат"],
    telegramLink: "https://t.me/+PuHWyKZ-_7NmMTli",
    targetAudience: [
      "Хочешь повысить квалификацию мастера по наращиванию",
      "Хочешь увеличить прайс или получить повышение в салоне",
    ],
  },
  {
    id: "fallback-5",
    title: "Мокрый эффект",
    description:
      "Освойте трендовую технику создания эффекта мокрых ресниц с помощью наращивания. Расширьте арсенал услуг и увеличьте поток клиентов благодаря востребованной методике.",
    image: course5,
    category: "Ресницы",
    level: "Повышение квалификации",
    oldPrice: 5000,
    price: 990,
    features: ["10 видеоуроков", "Трендовые техники", "Сертификат"],
    telegramLink: "https://t.me/+yQA-LV8MUpczMzVi",
    targetAudience: [
      "Хочешь освоить трендовую технику мокрых ресниц",
      "Желаешь принимать больше клиентов и увеличить прайс",
    ],
  },
  {
    id: "fallback-6",
    title: "Американское наращивание",
    description:
      "Техника супер-объёмного наращивания для мастеров с опытом. Пополните свой профессиональный арсенал уникальной методикой и выделитесь среди конкурентов.",
    image: course6,
    category: "Ресницы",
    level: "Продвинутый",
    oldPrice: 5000,
    price: 990,
    features: ["14 видеоуроков", "Техника объёмов", "Сертификат"],
    telegramLink: "https://t.me/+5FTZaPTYLf81ODBi",
    targetAudience: [
      "Имеешь опыт объёмного наращивания",
      "Хочешь пополнить арсенал уникальной техникой",
    ],
  },
  {
    id: "fallback-7",
    title: "Ламинирование бровей",
    description:
      "Популярная услуга долговременной укладки бровей. Освойте технику для себя или расширьте навыки практикующего мастера-бровиста новой востребованной процедурой.",
    image: course7,
    category: "Брови",
    level: "Начинающий",
    oldPrice: 5000,
    price: 990,
    features: ["10 видеоуроков", "Схемы построения", "Сертификат"],
    telegramLink: "https://t.me/+Vrbz-G4MEWBmZjI6",
    targetAudience: [
      "Хочешь обучиться ламинированию бровей для себя",
      "Практикующий бровист и хочешь освоить новую технику",
    ],
  },
];

export const fallbackReviews: Review[] = [
  {
    id: "fallback-r1",
    name: "Анна Петрова",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    text: "Прошла курс по наращиванию с нуля. Всё очень понятно объяснено, уже через месяц начала принимать клиентов. Огромное спасибо за поддержку в чате!",
    rating: 5,
    course: "Наращивание с нуля",
  },
  {
    id: "fallback-r2",
    name: "Мария Иванова",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    text: "Курс по бровям — лучшее вложение! Научилась строить форму под любой тип лица. Теперь клиенты записываются за неделю вперёд.",
    rating: 5,
    course: "Архитектура бровей",
  },
  {
    id: "fallback-r3",
    name: "Екатерина Смирнова",
    photo:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
    text: "После курса объёмов мой средний чек вырос в 2 раза! Техники 3D-5D объяснены так, что получается с первого раза. Рекомендую!",
    rating: 5,
    course: "Объёмы 3D-6D",
  },
  {
    id: "fallback-r4",
    name: "Ольга Козлова",
    photo:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    text: "Долго искала качественный онлайн-курс. Здесь всё структурировано, есть обратная связь и закрытый чат. Сертификат пришёл сразу после оплаты.",
    rating: 5,
    course: "Классика + 2D",
  },
];

const TG_CHANNEL = "leralash22";

export const fallbackTelegramPosts: TelegramPost[] = [
  { id: "fallback-tp1", channel: TG_CHANNEL, postId: 45, type: "review" },
  { id: "fallback-tp2", channel: TG_CHANNEL, postId: 56, type: "review" },
  { id: "fallback-tp3", channel: TG_CHANNEL, postId: 12, type: "review" },
  { id: "fallback-tp4", channel: TG_CHANNEL, postId: 16, type: "review" },
  { id: "fallback-tp5", channel: TG_CHANNEL, postId: 31, type: "review" },
  { id: "fallback-tp6", channel: TG_CHANNEL, postId: 5, type: "news" },
  { id: "fallback-tp7", channel: TG_CHANNEL, postId: 33, type: "news" },
  { id: "fallback-tp8", channel: TG_CHANNEL, postId: 51, type: "news" },
  { id: "fallback-tp9", channel: TG_CHANNEL, postId: 57, type: "news" },
];
