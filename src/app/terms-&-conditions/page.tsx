import { NavBar } from "@/components/navbar";
import { termsServiceSection } from "./termsServiceSection";

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

			<div className="px-6 md:w-1/2 py-6 space-y-3">
				<h3 className="text-whatsapp font-bold">Legal</h3>
				<div className="space-y-9">
					<div className="space-y-4">
						<h1 className="text-4xl md:text-4xl font-bold">Terms of Service</h1>
						<div
							className="text-sm"
							dangerouslySetInnerHTML={{
								__html: termsServiceSection.subHeading,
							}}
						/>
					</div>
					{termsServiceSection.sections.map((s, idx) => (
						<Section key={idx} h={s.title} p={s.content} />
					))}
				</div>
			</div>
		</div>
	);
}
