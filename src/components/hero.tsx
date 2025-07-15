import { GetStartedBtn } from "./getStartedBtn";

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
      <GetStartedBtn />
    </div>
  );
};
