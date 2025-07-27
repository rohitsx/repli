ALTER TABLE "billing_info" DROP CONSTRAINT "billing_info_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "paid_user" DROP CONSTRAINT "paid_user_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "billing_info" DROP COLUMN "user_id";--> statement-breakpoint
ALTER TABLE "paid_user" DROP COLUMN "user_id";