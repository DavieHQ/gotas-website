import { z } from "zod";

export const enquiryTopics = ["inspection", "property", "application"] as const;
export type Topic = typeof enquiryTopics[number];
export const topicTitles: Record<Topic, string> = {
  inspection: "Request an inspection",
  property: "Ask about a property",
  application: "Ask about an application"
};
export const followupStates = ["New", "Contacted", "Closed"] as const;
export function lagosDate() {
  return new Date(Date.now() + 3_600_000).toISOString().slice(0, 10);
}
function isRealDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const time = new Date(value + "T12:00:00Z").getTime();
  return Number.isFinite(time) && new Date(time).toISOString().slice(0, 10) === value;
}

export const enquirySchema = z.object({
  submissionKey: z.string().uuid(),
  topic: z.enum(enquiryTopics),
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(30).regex(/^[+\d() .-]{7,30}$/).refine(v => v.replace(/\D/g, "").length >= 7),
  estateSlug: z.string().min(1).max(96).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  message: z.string().trim().max(1800),
  preferredDate: z.string().max(10),
  preferredTime: z.string().max(5),
}).superRefine((entry, ctx) => {
  if (entry.topic === "inspection") {
    if (!isRealDate(entry.preferredDate) || entry.preferredDate < lagosDate()) {
      ctx.addIssue({ code: "custom", path: ["preferredDate"], message: "Choose today or a later inspection date." });
    }
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(entry.preferredTime)) {
      ctx.addIssue({ code: "custom", path: ["preferredTime"], message: "Choose a preferred inspection time." });
    }
  }
});
