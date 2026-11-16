import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";

import type { StoredEstate } from "@/lib/estates";

export const inspectionRequests = sqliteTable("inspection_requests", {
  id: text("id").primaryKey(),
  reference: text("reference").notNull().unique(),
  submissionKey: text("submission_key").notNull().unique(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  estateSlug: text("estate_slug").notNull(),
  topic: text("topic").notNull(),
  preferredDate: text("preferred_date").notNull(),
  preferredTime: text("preferred_time").notNull(),
  message: text("message").notNull(),
  status: text("status").notNull().default("New"),
  createdAt: integer("created_at").notNull()
}, table => [index("inspection_created_idx").on(table.createdAt)]);

export const listingUpdates = sqliteTable("listing_updates", {
  slug: text("slug").primaryKey(),
  status: text("status").notNull(),
  price: integer("price").notNull(),
  content: text("content", { mode: "json" }).$type<StoredEstate>()
});

export const landPriceUpdates = sqliteTable("land_price_updates", {
  slug: text("slug").primaryKey(),
  price: integer("price").notNull()
});
