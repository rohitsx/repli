import { Label } from "../ui/label";
import { ReactNode } from "react";

export const InputField = ({
	id,
	label,
	children,
}: {
	id: string;
	label: string;
	children: ReactNode;
}) => (
	<div className="grid gap-3 w-full">
		<Label htmlFor={id} className="text-gray-500">
			{label}
		</Label>
		{children}
	</div>
);
