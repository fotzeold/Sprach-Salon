import { _KEY, _URL } from "./apiKey";

async function getData(_DATA) {
	const url = `${_URL}/${_KEY}/${_DATA}`;
	const request = await fetch(url, {
		method: 'GET',
	});
	return await request.json();
}

export default getData;