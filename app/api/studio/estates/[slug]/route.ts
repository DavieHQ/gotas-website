import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { listingUpdates } from "@/db/schema";
import { portfolio } from "@/lib/estates";
import { estateInput } from "@/lib/estate-input";
import { isSiteOwner } from "@/lib/owner";

export async function PUT(request: Request, context: { params: Promise<{ slug: string }> }) {
  if (!await isSiteOwner()) return new Response(null, { status: 403 });
  const { slug } = await context.params;
  const input = estateInput.safeParse(await request.json().catch(() => null));
  if (!input.success) return Response.json({ error: input.error.issues[0].path.join(".") + " — " + input.error.issues[0].message }, { status: 422 });
  const estate = input.data;
  if (estate.slug !== slug) return Response.json({ error: "The estate address must match the existing listing." }, { status: 422 });
  const values = { status: estate.status, price: estate.offer?.price ?? 0, content: estate };
  try {
    const db = getDb();
    if (portfolio.some(item => item.slug === slug)) {
      await db.insert(listingUpdates).values({ slug, ...values })
        .onConflictDoUpdate({ target: listingUpdates.slug, set: values });
    } else {
      const updated = await db.update(listingUpdates).set(values).where(eq(listingUpdates.slug,slug)).returning({ slug: listingUpdates.slug });
      if (!updated.length) return new Response(null, { status: 404 });
    }
    return Response.json({ estate });
  } catch { return Response.json({ error: "Your changes could not be saved." }, { status: 503 }); }
}
