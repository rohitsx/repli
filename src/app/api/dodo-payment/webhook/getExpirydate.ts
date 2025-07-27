export const getDateDiffer = ({
	oldDate,
	newDate,
}: {
	oldDate: Date;
	newDate: Date;
}): Date => {
	const diffInMs = newDate.getTime() - oldDate.getTime();
	const diffDate = new Date(0); // Epoch start
	diffDate.setTime(Math.abs(diffInMs));
	return diffDate;
};

export const add30Days = (date: Date): Date => {
	const newDate = new Date(date);
	newDate.setTime(newDate.getTime() + 30 * 24 * 60 * 60 * 1000);
	return newDate;
};
