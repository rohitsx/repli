const formatPhoneNumber = (number: string): string => {
	number = number.replace(/\D/g, "");
	const match = number.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

	if (!match) return number;

	return [match[1], match[2], match[3]].filter(Boolean).join(" ");
};

export const updateWhatsappNoFormate = ({
	dialCode,
	input,
}: {
	dialCode: string;
	input: string;
}) => {
	if (!input.startsWith(dialCode)) {
		return dialCode + " " + formatPhoneNumber(input);
	} else {
		const numberPart = input.slice(dialCode.length).replace(/\D/g, "");
		return dialCode + " " + formatPhoneNumber(numberPart);
	}
};
