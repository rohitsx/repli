import { ArrowLeft, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="my-10 md:my-16 space-y-12 flex flex-col text-center items-center">
      <div className="space-y-3 px-6 flex flex-col text-center items-center">
        <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl w-90 md:w-2/3">
          Your inbox, summarized on{" "}
          <span className="text-whatsapp">WhatsApp</span>
        </h1>
        <p className="w-70 md:w-1/2">
          Repli AI delivers a clean summary of your past 24 hours of email right
          to WhatsApp
        </p>
      </div>

      <button className="flex items-center gap-2 cursor-pointer bg-whatsapp hover:bg-whatsapp-h text-white p-2 px-6 md:px-8 md:py-4 rounded-lg transition-colors duration-300">
        Get Started
        <ArrowRight size={18} />
      </button>
    </div>
  );
};
