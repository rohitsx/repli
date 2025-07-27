CREATE TABLE "user_geo_info" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text,
	"name" text,
	"timestamp" timestamp,
	"subscription_id" text,
	"payment_id" text,
	"total_amount" text,
	"settlement_currency" text,
	"expire_date" timestamp,
	"city" text,
	"country" text,
	"state" text,
	"street" text,
	"zipCode" text,
	"user_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "paid_user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL,
	"paid_user" boolean,
	"gmail_auth" boolean,
	"is_whatsapp_no" boolean,
	"gmail_auth_id" text,
	"gmail_auth_refresh_token" text,
	"gmail_auth_access_token" text,
	"summary_schedule_time" timestamp,
	"whatsapp_no" integer,
	"user_id" text NOT NULL,
	CONSTRAINT "paid_user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "user_geo_info" ADD CONSTRAINT "user_geo_info_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "paid_user" ADD CONSTRAINT "paid_user_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;