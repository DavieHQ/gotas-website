import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";

let _db: ReturnType<typeof drizzle> | null = null;

export function getDb() {
  if (_db) return _db;

  const url = process.env.DATABASE_URL || "file:gotas_local.db";
  const authToken = process.env.DATABASE_AUTH_TOKEN;

  const client = createClient({
    url,
    authToken,
  });

  _db = drizzle(client, { schema });
  return _db;
}
