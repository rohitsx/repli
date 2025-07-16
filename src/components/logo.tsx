export const RepliLogo = ({ size = 40, strokeWidth = 1 }) => {
	return (
		<svg
			viewBox="0 0 50 60"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
		>
			<g transform="translate(25, 35)">
				<path
					d="M0,-35 L-25,25 L-8,25 L-5,15 L5,15 L8,25 L25,25 Z"
					fill="black"
					stroke="black"
					strokeWidth={strokeWidth}
				/>
				<rect x="-12" y="5" width="24" height="8" fill="white" />
			</g>
		</svg>
	);
};

export const RepliDarkLogo = ({ size = 40, strokeWidth = 1 }) => {
	return (
		<svg
			viewBox="0 0 100 110"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
		>
			<rect x="0" y="0" width="100" height="110" rx="20" ry="20" fill="black" />
			<g transform="translate(50, 55)">
				<path
					d="M0,-35 L-25,25 L-8,25 L-5,15 L5,15 L8,25 L25,25 Z"
					fill="white"
					stroke="white"
					strokeWidth={strokeWidth}
				/>
				<rect x="-12" y="5" width="24" height="9" fill="black" />
			</g>
		</svg>
	);
};

export const XLogo = () => {
	return (
		<svg
			className="w-5 h-5 inline-block text-black hover:text-gray-700 transition-colors duration-200 ease-in-out"
			viewBox="0 0 16 16"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
		</svg>
	);
};

export const GoogleIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path
			d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
			fill="currentColor"
		/>
	</svg>
);

export const GmailIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66">
		<path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
		<path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
		<path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
		<path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
		<path
			fill="#c5221f"
			d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
		/>
	</svg>
);
