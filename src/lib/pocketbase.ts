import PocketBase, { RecordService, RecordModel } from "pocketbase";
import type { TelegramPostType } from "@/lib/types";

export interface CourseRecord extends RecordModel {
  title: string;
  tagline?: string;
  description: string;
  image: string;
  category: "Ресницы" | "Брови" | "Шугаринг" | "Волос" | "Педикюр";
  level: "Начинающий" | "Повышение квалификации" | "Продвинутый";
  price: number;
  oldPrice?: number;
  features: string;
  telegramLink: string;
  targetAudience: string;
  sortOrder: number;
}

export interface TelegramPostRecord extends RecordModel {
  channel: string;
  postId: number;
  type: TelegramPostType;
}

export interface LeadRecord extends RecordModel {
  email: string;
  courseId: string;
  courseTitle: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  referrer?: string;
}

interface TypedPocketBase extends PocketBase {
  collection(idOrName: "courses"): RecordService<CourseRecord>;
  collection(idOrName: "telegram_posts"): RecordService<TelegramPostRecord>;
  collection(idOrName: "leads"): RecordService<LeadRecord>;
  collection(idOrName: string): RecordService<RecordModel>;
}

const pb = new PocketBase(
  import.meta.env.VITE_POCKETBASE_URL || "http://localhost:8090"
) as TypedPocketBase;

pb.autoCancellation(false);

export default pb;
