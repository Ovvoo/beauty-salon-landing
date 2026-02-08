export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "Ресницы" | "Брови";
  level: "Начинающий" | "Повышение квалификации" | "Продвинутый";
  price: number;
  oldPrice?: number;
  features: string[];
  telegramLink: string;
  targetAudience: string[];
}

export interface Review {
  id: string;
  name: string;
  photo: string;
  text: string;
  rating: number;
  course: string;
}
