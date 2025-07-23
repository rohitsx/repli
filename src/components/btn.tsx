"use client";

import { Button as UiButton } from "./ui/button";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

type ButtonProps = {
	className?: string;
	onClickAction?: () => void;
	children: React.ReactNode;
	[key: string]: any;
};

const LoadinBtn = ({ className }: { className?: string }) => (
	<UiButton size="sm" disabled className={className}>
		<Loader2Icon className="animate-spin " />
		Please wait
	</UiButton>
);

export const Button: React.FC<ButtonProps> = ({
	className,
	onClickAction,
	children,
	...props
}) => {
	const [loading, setLoading] = useState<boolean>(false);
	const handleClick = () => {
		setLoading(true);
		onClickAction && onClickAction();
	};

	if (loading) return <LoadinBtn className={className} />;
	return (
		<UiButton
			className={`${className} cursor-pointer`}
			onClick={handleClick}
			{...props}
		>
			{children}
		</UiButton>
	);
};
