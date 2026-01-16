import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { Database_Url } from "@/lib/env";

export const client = neon(Database_Url);
export const db = drizzle({ client });
