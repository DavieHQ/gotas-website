import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { desc } from "drizzle-orm";
import { getDb } from "@/db";
import { inspectionRequests } from "@/db/schema";
import { getCatalog, getLandListings } from "@/lib/catalog";
import { isSiteOwner } from "@/lib/owner";
import { Studio } from "@/components/Studio";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Site Management", robots: { index: false, follow: false } };

export default async function StudioPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  if (!await isSiteOwner()) {
    redirect("/studio/login?return_to=/studio");
  }
  const params = await searchParams;
  const section = params.view === "listings" || params.view === "prices" ? params.view : "inbox";
  const page = typeof params.page === "string" && /^\d{1,5}$/.test(params.page) ? Math.max(1, +params.page) : 1;
  const limit = 20;
  try {
    const [estates, prices] = await Promise.all([getCatalog(), section === "prices" ? getLandListings() : Promise.resolve([])]);
    const results = section !== "inbox" ? [] : await getDb().select({
      id: inspectionRequests.id, reference: inspectionRequests.reference, name: inspectionRequests.name, email: inspectionRequests.email, phone: inspectionRequests.phone,
      estateSlug: inspectionRequests.estateSlug, topic: inspectionRequests.topic, preferredDate: inspectionRequests.preferredDate, preferredTime: inspectionRequests.preferredTime,
      message: inspectionRequests.message, status: inspectionRequests.status, createdAt: inspectionRequests.createdAt
    }).from(inspectionRequests).orderBy(desc(inspectionRequests.createdAt), desc(inspectionRequests.id)).limit(limit + 1).offset((page-1)*limit);
    return <Studio estates={estates} prices={prices.map(({slug,name,price})=>({slug,name,price}))} records={results.slice(0,limit)} section={section} page={page} hasMore={results.length > limit}/>;
  } catch {
    return <main id="main-content" className="studio shell"><h1>Enquiry inbox</h1><p>The inbox could not be loaded. Please try again.</p></main>;
  }
}
