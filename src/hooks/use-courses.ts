import { useQuery, queryOptions } from "@tanstack/react-query";
import pb from "@/lib/pocketbase";
import { fallbackCourses } from "@/lib/fallback-data";
import type { Course } from "@/lib/types";

async function fetchCourses(): Promise<Course[]> {
  try {
    const records = await pb.collection("courses").getFullList();

    return records.map((r) => ({
      id: r.id,
      title: r.title,
      description: r.description,
      image: r.image
        ? pb.files.getURL(r, r.image, { thumb: "600x400" })
        : "",
      category: r.category,
      level: r.level,
      price: r.price,
      oldPrice: r.oldPrice,
      features: r.features,
      telegramLink: r.telegramLink,
      targetAudience: r.targetAudience,
    }));
  } catch (error) {
    console.error("[useCourses] PocketBase fetch failed:", error);
    throw error;
  }
}

export const coursesQueryOptions = queryOptions({
  queryKey: ["courses"],
  queryFn: fetchCourses,
  staleTime: 5 * 60 * 1000,
  initialData: fallbackCourses,
  initialDataUpdatedAt: 0,
});

export function useCourses() {
  return useQuery(coursesQueryOptions);
}
