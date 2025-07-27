ALTER TABLE "paid_user" ALTER COLUMN "whatsapp_no" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "paid_user" ADD COLUMN "time_zone" text;--> statement-breakpoint
ALTER TABLE "paid_user" DROP COLUMN "paid_user";--> statement-breakpoint
ALTER TABLE "paid_user" DROP COLUMN "gmail_auth";--> statement-breakpoint
ALTER TABLE "paid_user" DROP COLUMN "is_whatsapp_no";