import { pgTable, text, timestamp, serial } from "drizzle-orm/pg-core";

export const paid_user = pgTable("paid_user", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  time_zone: text("time_zone"),
  summary_schedule_time: text("summary_schedule_time"),
  whatsapp_no: text("whatsapp_no"),
  gmail_auth_id: text("gmail_auth_id"),
  gmail_auth_refresh_token: text("gmail_auth_refresh_token"),
  gmail_auth_access_token: text("gmail_auth_access_token"),
});

export const billing_info = pgTable("billing_info", {
  id: serial("id").primaryKey(),
  email: text("email"),
  name: text("name"),
  timestamp: timestamp("timestamp"),
  subscription_id: text("subscription_id"),
  payment_id: text("payment_id"),
  total_amount: text("total_amount"),
  settlement_currency: text("settlement_currency"),
  expire_date: timestamp(),
  city: text("city"),
  country: text("country"),
  state: text("state"),
  street: text("street"),
  zipcode: text("zipCode"),
});
