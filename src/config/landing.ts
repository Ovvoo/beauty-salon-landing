interface NavLink {
  href: string;
  label: string;
}

interface PainPoint {
  emoji: string;
  title: string;
  description: string;
}

interface ProductStep {
  step: number;
  iconName: "PlayCircle" | "MessageCircle" | "Award";
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface LandingConfig {
  header: {
    navLinks: NavLink[];
    ctaLabel: string;
    ctaHref: string;
  };
  hero: {
    badge: string;
    headline: { main: string; accent: string };
    subheadline: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    stats: { value: string; label: string }[];
    floatingCard: { title: string; subtitle: string };
    imageAlt: string;
  };
  painPoints: {
    title: string;
    subtitle: string;
    items: PainPoint[];
    closingLine: string;
  };
  product: {
    title: string;
    subtitle: string;
    steps: ProductStep[];
    result: {
      title: string;
      items: string[];
    };
  };
  live: {
    title: string;
    sectionId: string;
    tabs: { key: "review" | "news"; label: string }[];
    channelLinkLabel: string;
  };
  cta: {
    headline: string;
    subheadline: string;
    bulletPoints: string[];
    button: { label: string; href: string };
    note: string;
  };
  faq: {
    title: string;
    items: FAQItem[];
  };
}

export const LANDING: LandingConfig = {
  header: {
    navLinks: [
      { href: "/#courses", label: "Курсы" },
      { href: "/#how-it-works", label: "Обучение" },
      { href: "/#reviews", label: "Отзывы" },
      { href: "/#faq", label: "Вопросы" },
    ],
    ctaLabel: "Выбрать курс",
    ctaHref: "/#courses",
  },

  hero: {
    badge: "Онлайн-обучение",
    headline: {
      main: "Курсы по ресницам и бровям",
      accent: "с нуля до первых клиентов",
    },
    subheadline:
      "Видеоуроки, сертификат и поддержка куратора. Начни зарабатывать уже через 2 недели.",
    primaryCta: { label: "Смотреть курсы", href: "/#courses" },
    secondaryCta: { label: "Отзывы учениц", href: "/#reviews" },
    stats: [
      { value: "500+", label: "учениц" },
      { value: "7 лет", label: "опыта" },
      { value: "98%", label: "довольны" },
    ],
    floatingCard: { title: "500+ мастеров", subtitle: "уже обучились" },
    imageAlt: "Мастер по наращиванию ресниц",
  },

  painPoints: {
    title: "Узнаёшь себя?",
    subtitle: "Если хотя бы один пункт — про тебя, наши курсы помогут",
    items: [
      {
        emoji: "💸",
        title: "Работаешь в салоне за процент",
        description:
          "Наращиваешь ресницы за 40-50% от чека. На руки выходит меньше, чем в офисе, а устаёшь в три раза больше",
      },
      {
        emoji: "😰",
        title: "Насмотрелась YouTube, а руки дрожат",
        description:
          "Хочешь делать наращивание или ламинирование, но без наставника боишься испортить клиенту ресницы или брови",
      },
      {
        emoji: "📉",
        title: "Умеешь только классику — чек не растёт",
        description:
          "Клиенты просят объёмы, мокрый эффект, ламинирование бровей — а ты отказываешь и теряешь деньги",
      },
      {
        emoji: "📱",
        title: "Нет сертификата — клиенты не доверяют",
        description:
          "Знакомые кончились, а новые клиенты хотят видеть документ. Без него не берут в салон и не записываются",
      },
    ],
    closingLine:
      "Всё это решается за 2 недели. Без поездок, без расписания — в своём темпе.",
  },

  product: {
    title: "Как проходит обучение",
    subtitle: "От первого урока до сертификата — 3 простых шага",
    steps: [
      {
        step: 1,
        iconName: "PlayCircle",
        title: "Смотришь видеоуроки",
        description:
          "Подробные уроки с демонстрацией техник на реальных моделях. Доступ навсегда — пересматривай сколько нужно.",
      },
      {
        step: 2,
        iconName: "MessageCircle",
        title: "Практикуешься с поддержкой",
        description:
          "Выполняешь задания, отправляешь фото куратору в Telegram. Получаешь разбор ошибок и советы.",
      },
      {
        step: 3,
        iconName: "Award",
        title: "Получаешь сертификат",
        description:
          "Сертификат на email. Чек-листы по старту: как найти клиентов, как вести соцсети.",
      },
    ],
    result: {
      title: "В итоге ты получаешь:",
      items: [
        "Навык, который кормит — средний чек мастера от 2 000 ₽",
        "Сертификат — клиенты доверяют документу",
        "Закрытый чат мастеров — помощь и после курса",
      ],
    },
  },

  live: {
    title: "Отзывы и наша жизнь",
    sectionId: "reviews",
    tabs: [
      { key: "review", label: "Отзывы учениц" },
      { key: "news", label: "Наша жизнь" },
    ],
    channelLinkLabel: "Все новости в Telegram",
  },

  cta: {
    headline: "Начни зарабатывать на любимом деле",
    subheadline:
      "Всего за 199 ₽ ты получаешь профессию, которая окупится после первого клиента",
    bulletPoints: [
      "Видеоуроки с доступом навсегда",
      "Поддержка куратора в Telegram",
      "Сертификат о прохождении курса",
    ],
    button: { label: "Выбрать свой курс", href: "/#courses" },
    note: "Никаких подписок. Один платёж — вечный доступ.",
  },

  faq: {
    title: "Часто задаваемые вопросы",
    items: [
      {
        question: "Нужен ли опыт для прохождения курса?",
        answer:
          "Нет, наши курсы для начинающих рассчитаны на учеников без какого-либо опыта. Мы начинаем с самых основ и постепенно переходим к более сложным техникам.",
      },
      {
        question: "Как долго сохраняется доступ к курсу?",
        answer:
          "Доступ к материалам курса остаётся у вас навсегда. Вы можете пересматривать уроки в любое время и возвращаться к ним по мере необходимости.",
      },
      {
        question: "Как получить сертификат?",
        answer:
          "Сертификат выдаётся после успешного выполнения всех практических заданий курса. Вы получите официальный документ в электронном формате, который можно распечатать.",
      },
      {
        question: "Какие материалы нужны для практики?",
        answer:
          "После оплаты курса вы получите подробный список необходимых материалов с рекомендациями по выбору. Также предоставляем скидки у наших партнёров-поставщиков.",
      },
      {
        question: "Как связаться с куратором?",
        answer:
          "После покупки курса вы получите доступ к закрытому чату с куратором в Telegram. Куратор отвечает на вопросы в течение 24 часов и даёт обратную связь по практическим заданиям.",
      },
    ],
  },
};
