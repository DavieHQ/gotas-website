import { getDb } from "@/db";
import { landPriceUpdates } from "@/db/schema";
import { landListings } from "@/lib/land-prices";
import { landPrice } from "@/lib/estate-input";
import { isSiteOwner } from "@/lib/owner";
export async function PUT(request: Request, context: { params: Promise<{ slug: string }> }) {
  if (!await isSiteOwner()) return new Response(null,{status:403});
  const {slug}=await context.params;
  if (!landListings.some(item=>item.slug===slug)) return new Response(null,{status:404});
  const input=await request.json().catch(()=>null);
  const result=landPrice.safeParse(input && typeof input === "object" && "price" in input ? input.price : undefined);
  if (!result.success) return Response.json({error:"Enter a positive whole-naira land price."},{status:422});
  try {
    await getDb().insert(landPriceUpdates).values({slug,price:result.data}).onConflictDoUpdate({target:landPriceUpdates.slug,set:{price:result.data}});
    return Response.json({price:result.data});
  } catch {return Response.json({error:"The land price could not be saved."},{status:503});}
}
