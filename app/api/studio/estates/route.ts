import { getDb } from "@/db";
import { listingUpdates } from "@/db/schema";
import { portfolio } from "@/lib/estates";
import { estateInput } from "@/lib/estate-input";
import { isSiteOwner } from "@/lib/owner";

export async function POST(request: Request) {
  if (!await isSiteOwner()) return new Response(null, { status: 403 });
  const input = estateInput.safeParse(await request.json().catch(() => null));
  if (!input.success) return Response.json({ error: input.error.issues[0].path.join(".") + " — " + input.error.issues[0].message }, { status: 422 });
  const estate = input.data;
  if (portfolio.some(item => item.slug === estate.slug)) return Response.json({ error: "That estate address is already in use." }, { status: 409 });
  try {
    const result = await getDb().insert(listingUpdates).values({ slug: estate.slug, status: estate.status, price: estate.offer?.price ?? 0, content: estate })
      .onConflictDoNothing({ target: listingUpdates.slug }).returning({ slug: listingUpdates.slug });
    if (!result.length) return Response.json({ error: "That estate address is already in use." }, { status: 409 });
    return Response.json({ estate }, { status: 201 });
  } catch { return Response.json({ error: "The estate could not be saved." }, { status: 503 }); }
}
