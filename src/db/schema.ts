import { pgTable, text, timestamp, serial, integer } from "drizzle-orm/pg-core";
import { user } from "./auth-schema";

export const gmailTokens = pgTable("gmail_tokens", {
  id: serial("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),

  accessToken: text("access_token").notNull(),
  refreshToken: text("refresh_token").notNull(),
  expiresAt: timestamp("expires_at").notNull(),

  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),

  timezone: text("timezone"),
  whatsappNo: integer("whatapp_no"),
});
