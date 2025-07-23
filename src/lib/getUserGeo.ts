export const getUserGeo = async () => {
	const res = await fetch("https://ipwho.is/");
	const data = await res.json();
	const {
		continent,
		country_code,
		continent_code,
		country,
		calling_code,
		timezone,
		postal,
		region,
		flag,
	} = data;

	return {
		continent,
		continent_code,
		country_code,
		country,
		calling_code,
		timezone,
		postal,
		region,
		flag,
	};
};
