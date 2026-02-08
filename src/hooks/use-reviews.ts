import { useQuery, queryOptions } from "@tanstack/react-query";
import pb from "@/lib/pocketbase";
import { fallbackReviews } from "@/lib/fallback-data";
import type { Review } from "@/lib/types";

async function fetchReviews(): Promise<Review[]> {
  try {
    const records = await pb.collection("reviews").getFullList({
      sort: "created",
    });

    return records.map((r) => {
      let photo = "";
      if (r.photo) {
        photo = pb.files.getURL(r, r.photo, { thumb: "100x100" });
      } else if (r.photoUrl) {
        photo = r.photoUrl;
      }

      return {
        id: r.id,
        name: r.name,
        photo,
        text: r.text,
        rating: r.rating,
        course: r.course,
      };
    });
  } catch (error) {
    console.error("[useReviews] PocketBase fetch failed:", error);
    throw error;
  }
}

export const reviewsQueryOptions = queryOptions({
  queryKey: ["reviews"],
  queryFn: fetchReviews,
  staleTime: 5 * 60 * 1000,
  initialData: fallbackReviews,
});

export function useReviews() {
  return useQuery(reviewsQueryOptions);
}
