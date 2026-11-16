import { z } from "zod";
import { renders, statuses } from "./estates";
export const availableMedia = Object.values(renders).map(photo => photo.image);
const legacyMedia = ["ecocity","ecocity-interior","kingsland","kingsland-other","kings-garden","kings-garden-detail","aurora","aurora-detail"];
const text = (limit: number) => z.string().trim().min(1).max(limit);
const image = z.string().trim().max(1900).refine(value => {
  if (availableMedia.includes(value) || legacyMedia.includes(value)) return true;
  try { const url = new URL(value); return url.protocol === "https:" && !url.username && !url.password; } catch { return false; }
}, "Choose a supplied image or enter a complete HTTPS image URL.");
const photo = z.object({image, alt:text(220), caption:text(100)});
export const landPrice = z.number().int().min(1).max(1000000000000);
export const estateInput = z.object({
  slug:z.string().min(2).max(95).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).refine(value => value !== "general"),
  name:text(90), shortName:text(75), district:text(60), area:text(100), subtitle:text(180), overview:text(2600),
  status:text(30).refine(value=>statuses.includes(value)), features:z.array(text(130)).min(1).max(15),
  gallery:z.array(photo).min(1).max(8), homeTypes:z.array(text(100)).min(1).max(15),
  offer:z.object({label:text(80),price:landPrice}).optional()
});
