import { google } from "googleapis";
import { Google_Client_Secret, Google_Client_Id, Domain } from "@/lib/env";
import { NextResponse } from "next/server";

export async function GET() {
  const oauth2Client = new google.auth.OAuth2(
    Google_Client_Id,
    Google_Client_Secret,
    `${Domain}/api/auth/gmail/callback`,
  );

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/gmail.readonly"],
  });

  console.log(authUrl);

  return NextResponse.json(authUrl);
}
