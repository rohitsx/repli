import { GmailAuth } from "@/components/gamilAuth_WhatsappNo";
import { GmailAuthFeatures } from "@/components/gmailAuthFeatures";

export default function Page() {
  return (
    <div className="h-full md:h-screen w-screen flex items-center justify-center px-5 py-8">
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6">
        <GmailAuthFeatures />
        <GmailAuth />
      </div>
    </div>
  );
}
