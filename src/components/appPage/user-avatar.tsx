import { AvatarUi } from "@/components/avatar";
import { Session } from "@/lib/auth-client";

export const UserAvatar = ({ session }: { session: Session | null }) => (
  <div className="pt-8 md:pt-4 space-y-4 w-64">
    <div className="flex flex-col items-center gap-4">
      <AvatarUi
        img={session?.user.image || ""}
        fallback={session?.user.name.charAt(0) || "N"}
        className="size-12 text-2xl"
      />
    </div>
  </div>
);
