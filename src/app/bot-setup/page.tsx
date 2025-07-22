import { GmailAuth } from "@/components/gmailAuth/auth";
import { GmailAuthFeatures } from "@/components/gmailAuth/feature";

export default function Page() {
  return (
    <div className="h-full md:h-screen w-screen flex items-center justify-center px-5 py-8 pb-35 md:pb-8">
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6 space-y-7">
        <GmailAuthFeatures />
        <GmailAuth />
      </div>
    </div>
  );
}
