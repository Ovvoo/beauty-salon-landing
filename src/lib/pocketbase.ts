import PocketBase, { RecordService, RecordModel } from "pocketbase";
import type { TelegramPostType } from "@/lib/types";

export interface CourseRecord extends RecordModel {
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

export interface ReviewRecord extends RecordModel {
  name: string;
  photo: string;
  photoUrl: string;
  text: string;
  rating: number;
  course: string;
}

export interface TelegramPostRecord extends RecordModel {
  channel: string;
  postId: number;
  type: TelegramPostType;
}

interface TypedPocketBase extends PocketBase {
  collection(idOrName: "courses"): RecordService<CourseRecord>;
  collection(idOrName: "reviews"): RecordService<ReviewRecord>;
  collection(idOrName: "telegram_posts"): RecordService<TelegramPostRecord>;
  collection(idOrName: string): RecordService<RecordModel>;
}

const pb = new PocketBase(
  import.meta.env.VITE_POCKETBASE_URL || "http://127.0.0.1:8090"
) as TypedPocketBase;

pb.autoCancellation(false);

export default pb;
