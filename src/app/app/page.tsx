import { AppContent } from "@/components/appPage/appContent";
import { AppText } from "@/components/ui/text";

export default function Page() {
	return (
		<div className="w-screen h-screen bg-white sm:flex justify-center items-center">
			<div className="shadow-xl w-full sm:max-w-120   h-full sm:h-fit pr-3 py-3 sm:p-2 sm:rounded-2xl bg-gray-100 flex flex-col">
				<AppContent />
				<AppText />
			</div>
		</div>
	);
}
