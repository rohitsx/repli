ALTER TABLE "gmail_users" ALTER COLUMN "time_zone" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "gmail_users" ALTER COLUMN "msg_time" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "gmail_auth" boolean;