import pb from "@/lib/pocketbase";
import type { Lead } from "@/lib/types";

export async function submitLead(lead: Lead): Promise<void> {
  try {
    await pb.collection("leads").create(lead);
  } catch (err) {
    console.error("[leads] Failed to submit lead:", err);
  }
}
