import { eq } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "@/db";
import { inspectionRequests } from "@/db/schema";
import { isSiteOwner } from "@/lib/owner";
import { followupStates } from "@/lib/enquiry";

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  if (!await isSiteOwner()) return new Response(null, { status: 403 });
  const { id } = await context.params;
  const input = z.object({ status: z.enum(followupStates) }).safeParse(await request.json().catch(() => null));
  if (!input.success) return new Response(null, { status: 422 });
  try {
    const changed = await getDb().update(inspectionRequests).set({ status: input.data.status })
      .where(eq(inspectionRequests.id, id)).returning({ id: inspectionRequests.id });
    return new Response(null, { status: changed.length ? 204 : 404 });
  } catch { return new Response(null, { status: 503 }); }
}
