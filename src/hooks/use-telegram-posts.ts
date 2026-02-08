import { useQuery, queryOptions } from "@tanstack/react-query";
import pb from "@/lib/pocketbase";
import { fallbackTelegramPosts } from "@/lib/fallback-data";
import type { TelegramPost, TelegramPostType } from "@/lib/types";

const ALLOWED_TYPES: readonly TelegramPostType[] = ["review", "news"];

async function fetchTelegramPosts(
  type: TelegramPostType,
): Promise<TelegramPost[]> {
  if (!ALLOWED_TYPES.includes(type)) {
    throw new Error(`Invalid telegram post type: ${type}`);
  }

  const records = await pb.collection("telegram_posts").getFullList({
    filter: `type="${type}"`,
  });

  console.info(`[useTelegramPosts] Fetched ${records.length} ${type} posts from PocketBase`);

  return records.map((r) => ({
    id: r.id,
    channel: r.channel,
    postId: r.postId,
    type: r.type,
  }));
}

function telegramPostsQueryOptions(type: TelegramPostType) {
  const fallback = fallbackTelegramPosts.filter((p) => p.type === type);

  return queryOptions({
    queryKey: ["telegram_posts", type],
    queryFn: () => fetchTelegramPosts(type),
    staleTime: 30 * 1000,
    initialData: fallback,
    initialDataUpdatedAt: 0,
  });
}

export function useTelegramPosts(type: TelegramPostType) {
  return useQuery(telegramPostsQueryOptions(type));
}
