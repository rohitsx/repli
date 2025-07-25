import {
	pgTable,
	text,
	timestamp,
	boolean,
	integer,
} from "drizzle-orm/pg-core";
import { user } from "./auth";

export const paid_user = pgTable("paid_user", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	image: text("image"),
	createdAt: timestamp("created_at")
		.$defaultFn(() => /* @__PURE__ */ new Date())
		.notNull(),
	updatedAt: timestamp("updated_at")
		.$defaultFn(() => /* @__PURE__ */ new Date())
		.notNull(),
	paid_user: boolean("paid_user"),
	gmail_auth: boolean("gmail_auth"),
	is_whatsapp_no: boolean("is_whatsapp_no"),
	gmail_auth_id: text("gmail_auth_id"),
	gmail_auth_refresh_token: text("gmail_auth_refresh_token"),
	gmail_auth_access_token: text("gmail_auth_access_token"),
	subscription_date: timestamp("subscription_date"),
	summary_schedule_time: timestamp("summary_schedule_time"),
	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
});

export const user_geo_info = pgTable("user_geo_info", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
	country_code: text("country_code"),
	whatsapp_no: integer("whatsapp_no"),
});
