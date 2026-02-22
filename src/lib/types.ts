export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "Ресницы" | "Брови" | "Шугаринг" | "Волос";
  level: "Начинающий" | "Повышение квалификации" | "Продвинутый";
  price: number;
  oldPrice?: number;
  features: string[];
  telegramLink: string;
  targetAudience: string[];
}

export interface Lead {
  email: string;
  courseId: string;
  courseTitle: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  referrer?: string;
}

export type TelegramPostType = "review" | "news";

export interface TelegramPost {
  id: string;
  channel: string;
  postId: number;
  type: TelegramPostType;
}
