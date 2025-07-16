import { RepliDarkLogo } from "./logo";
import { Bot, ShieldCheck, Lock } from "lucide-react";

export const GmailAuthFeatures = () => {
  const features = [
    {
      icon: Bot,
      header: "Intelligent Assistance for Work Accounts",
      details: "Automate email tasks and get smart recommendations.",
    },
    {
      icon: ShieldCheck,
      header: "Enterprise-Grade Security",
      details:
        "Your data is encrypted and never shared with third parties. Not used to train a LLM or AI models.",
    },
    {
      icon: Lock,
      header: "Limited Access",
      details:
        "No human reads or has access to your email data. Only the software reads and dismisses it when finished.",
    },
  ];
  return (
    <div className="text-left space-y-3 md:w-1/2">
      <RepliDarkLogo size={60} />
      <h3 className="font-medium text-2xl">
        AI Assistant for busy professionals
      </h3>
      <div className="text-xs md:text-sm  bg-green-100 text-whatsapp px-3 py-2 rounded-md border-green-400 border-1">
        No email data is stored on our servers! It is never read by humans and
        not used for AI training.
      </div>
      <div className="space-y-1 md:space-y-3 md:py-2">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-3 text-sm md:text-base">
            <div className="pt-1">
              <feature.icon className="text-whatsapp" size={25} />
            </div>
            <div>
              <h3 className="font-semibold">{feature.header}</h3>
              <p className="text-gray-500">{feature.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
