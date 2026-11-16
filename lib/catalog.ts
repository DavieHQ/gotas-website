import { getDb } from "@/db";
import { listingUpdates, landPriceUpdates } from "@/db/schema";
import { portfolio, type Estate, type StoredEstate } from "./estates";
import { landListings, type LandListing } from "./land-prices";
import previousDefaults from "./previous-estate-defaults.json";

type Row = { slug: string; status: string; price: number; content: StoredEstate | null };
const previousBySlug: Record<string, (typeof previousDefaults)[keyof typeof previousDefaults]> = previousDefaults;
function restoreEstate(row: Row, seed: Estate | undefined): Estate | undefined {
  const value = row.content;
  if (value && "homeTypes" in value) return { ...value, status: row.status };
  const old = previousBySlug[row.slug];
  if (seed && old) {
    const status = row.status === old.status ? seed.status : row.status;
    const label = value?.listing.priceLabel ?? old.priceLabel;
    const hasEditedQuote = row.price > 0 && (row.price !== old.listingPrice || label !== old.priceLabel);
    const offer = hasEditedQuote ? { price: row.price, label } : undefined;
    if (!value) return { ...seed, status, offer };
    // Carry forward owner changes while replacing the previous template defaults.
    const keep = <T,>(saved: T, prior: T, next: T) => JSON.stringify(saved) === JSON.stringify(prior) ? next : saved;
    return { ...seed, status, offer, name:value.name, shortName:value.shortName, area:value.area, district:value.district,
      overview:keep(value.overview,old.overview,seed.overview), subtitle:keep(value.subtitle,old.subtitle,seed.subtitle),
      features:keep(value.features,old.features,seed.features), gallery:keep(value.gallery,old.gallery,seed.gallery) };
  }
  if (!value) return seed;
  return { ...value, status:row.status, homeTypes:[value.listing.bedrooms + "-bedroom " + value.listing.label],
    offer:row.price > 0 ? {label:value.listing.priceLabel,price:row.price} : undefined };
}
export async function getCatalog(): Promise<Estate[]> {
  try {
    const updates = await getDb().select().from(listingUpdates).orderBy(listingUpdates.slug);
    const result = new Map(portfolio.map(estate => [estate.slug, estate]));
    for (const row of updates) {
      const estate = restoreEstate(row, result.get(row.slug));
      if (estate) result.set(row.slug, estate);
    }
    return [...result.values()];
  } catch (error) {
    console.error("Catalogue unavailable.", error instanceof Error ? error.name : "Database error");
    return portfolio;
  }
}
export async function getLandListings(): Promise<LandListing[]> {
  try {
    const updates = await getDb().select().from(landPriceUpdates);
    const prices = new Map(updates.map(row => [row.slug,row.price]));
    return landListings.map(item => ({ ...item, price:prices.get(item.slug) ?? item.price }));
  } catch (error) {
    console.error("Price updates unavailable.", error instanceof Error ? error.name : "Database error");
    return landListings;
  }
}
