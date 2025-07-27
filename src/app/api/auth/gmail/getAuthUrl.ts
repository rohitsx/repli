import { Domain, Google_Client_Id, Google_Client_Secret } from "@/lib/env";
import { google } from "googleapis";

interface AuthParams {
  email: string;
  id: string;
  name: string;
}

export const getAuthUrl = ({ email, id, name }: AuthParams) => {
  if (!Google_Client_Id) throw new Error("Google client ID not found");

  const redirectUri = `${Domain}/api/auth/gmail`;

  const oauth2Client = new google.auth.OAuth2(
    Google_Client_Id,
    Google_Client_Secret,
    redirectUri,
  );

  const scopes = [
    "https://www.googleapis.com/auth/gmail.readonly",
    "https://www.googleapis.com/auth/gmail.send",
    "https://www.googleapis.com/auth/userinfo.email",
  ];

  const stateData = { email, id, name };
  const state = Buffer.from(JSON.stringify(stateData)).toString("base64url");

  return oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
    include_granted_scopes: true,
    state: state,
  });
};
