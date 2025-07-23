import { AvatarUi } from "@/components/avatar";

export const UserAvatar = ({ session }: { session: any }) => (
	<div className="flex flex-col items-center gap-4">
		<AvatarUi
			img={session?.user.image || ""}
			fallback={session?.user.name.charAt(0) || "N"}
			className="size-12 text-2xl"
		/>
	</div>
);
