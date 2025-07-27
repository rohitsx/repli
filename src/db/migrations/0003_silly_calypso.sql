ALTER TABLE "user_geo_info" RENAME TO "billing_info";--> statement-breakpoint
ALTER TABLE "billing_info" DROP CONSTRAINT "user_geo_info_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "billing_info" ADD CONSTRAINT "billing_info_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;