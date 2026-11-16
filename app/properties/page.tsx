import type { Metadata } from "next";
import { getCatalog } from "@/lib/catalog";
import { districtsFor } from "@/lib/estates";
import { PropertyCollection } from "@/components/PropertyCollection";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Property Collection", description: "Walk through Gotas estates in Idu Gousa, Kabusa and Kuje, save your favourites and see the estate plans." };
export default async function Properties({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const [params, estates] = await Promise.all([searchParams, getCatalog()]);
  const district = typeof params.district === "string" && districtsFor(estates).includes(params.district) ? params.district : "";
  return <PropertyCollection estates={estates} district={district} savedOnly={params.saved === "1"}/>;
}
