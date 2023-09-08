import { _KEY, _URL } from "./apiKey";

async function getData(_DATA) {
	const url = `${_URL}/${_DATA}`;
	const request = await fetch(url, {
		method: 'GET',
		headers: {
			'X-MASTER-KEY': _KEY,
		},
	});
	return await request.json();
}

export default getData;