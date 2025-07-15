import { NavBar } from "@/components/navbar";
import { privacyPolicySections } from "./privacyPolicySections";

export default function Page() {
  const Section = ({ h, p }: { h: string; p: string }) => {
    return (
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">{h}</h1>
        <div className="text-sm" dangerouslySetInnerHTML={{ __html: p }} />
      </div>
    );
  };

  return (
    <div className="w-full h-screen flex flex-col items-center ">
      <NavBar />
      <div className="px-6 md:w-1/2 py-6 space-y-8">
        <Section
          h="Privacy Policy"
          p={`Last Modified: ${privacyPolicySections.lastModified} `}
        />
        {privacyPolicySections.sections.map((s, idx) => (
          <Section key={idx} h={s.title} p={s.content} />
        ))}
      </div>
    </div>
  );
}
