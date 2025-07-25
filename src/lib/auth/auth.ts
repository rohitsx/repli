import { user, session, account, verification } from "@/db/schema/auth";
import { betterAuth } from "better-auth";
import { Domain } from "../env";
import { nextCookies } from "better-auth/next-js";
import { db } from "@/db/drizzle";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user,
      session,
      account,
      verification,
    },
  }),
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 10 * 60,
    },
  },
  plugins: [nextCookies()],
  user: {
    additionalFields: {
      paid_user: {
        type: "boolean",
        required: false,
        defaultValue: false,
        input: false,
      },
      gmail_auth: {
        type: "boolean",
        required: false,
        defaultValue: false,
        input: false,
      },
      is_whatsapp_no: {
        type: "boolean",
        required: false,
        defaultValue: false,
        input: false,
      },
      gmail_auth_id: {
        type: "string",
        required: false,
        defaultValue: false,
        input: false,
      },
      gmail_auth_refresh_token: {
        type: "string",
        required: false,
        defaultValue: false,
        input: false,
      },
      gmail_auth_access_token: {
        type: "string",
        required: false,
        defaultValue: false,
        input: false,
      },
      time_zone: {
        type: "string",
        required: false,
        defaultValue: false,
        input: false,
      },
      country_code: {
        type: "string",
        required: false,
        defaultValue: false,
        input: false,
      },
      whatsapp_no: {
        type: "number",
        required: false,
        defaultValue: false,
        input: false,
      },
      subscription_date: {
        type: "date",
        required: false,
        defaultValue: false,
        input: false,
      },
    },
  },
  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  baseURL: `${Domain}/api/auth/base`,
});
