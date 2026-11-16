import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { inspectionRequests } from "@/db/schema";
import { enquirySchema } from "@/lib/enquiry";
import { getCatalog } from "@/lib/catalog";

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return Response.json({ error: "Send the enquiry as JSON." }, { status: 415 });
  }
  const raw = await request.text();
  if (raw.length > 8000) return Response.json({ error: "Please shorten the message." }, { status: 413 });
  let payload;
  try { payload = JSON.parse(raw); } catch {
    return Response.json({ error: "The enquiry could not be read." }, { status: 400 });
  }
  const parsed = enquirySchema.safeParse(payload);
  if (!parsed.success) return Response.json({ error: "Check your contact details and preferred visit time.", fields: parsed.error.flatten().fieldErrors }, { status: 422 });

  const entry = parsed.data;
  if (entry.estateSlug !== "general" && !(await getCatalog()).some(e => e.slug === entry.estateSlug)) {
    return Response.json({ error: "Please choose a current estate." }, { status: 422 });
  }
  const id = crypto.randomUUID();
  const reference = "GD-" + id.replaceAll("-", "").slice(0, 10).toUpperCase();
  try {
    const db = getDb();
    const recorded = await db.insert(inspectionRequests).values({
      ...entry, id, reference, createdAt: Date.now(),
      preferredDate: entry.topic === "inspection" ? entry.preferredDate : "",
      preferredTime: entry.topic === "inspection" ? entry.preferredTime : ""
    }).onConflictDoNothing({ target: inspectionRequests.submissionKey })
      .returning({ reference: inspectionRequests.reference });
    if (recorded.length) return Response.json({ reference: recorded[0].reference }, { status: 201 });
    const [previous] = await db.select({ reference: inspectionRequests.reference })
      .from(inspectionRequests).where(eq(inspectionRequests.submissionKey, entry.submissionKey)).limit(1);
    if (!previous) throw new Error("Request record not found");
    return Response.json({ reference: previous.reference });
  } catch {
    return Response.json({ error: "Your enquiry could not be recorded. Please retry, call or email Gotas." }, { status: 503 });
  }
}
