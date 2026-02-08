import { useQuery, queryOptions } from "@tanstack/react-query";
import pb from "@/lib/pocketbase";
import { fallbackTelegramPosts } from "@/lib/fallback-data";
import type { TelegramPost, TelegramPostType } from "@/lib/types";

async function fetchTelegramPosts(
  type: TelegramPostType,
): Promise<TelegramPost[]> {
  const records = await pb.collection("telegram_posts").getFullList({
    filter: `type="${type}"`,
  });

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
