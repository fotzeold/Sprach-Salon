import { _CHATID, _TGURL } from "./apiKey";

async function sendData(message) {

	return await fetch(_TGURL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			chat_id: _CHATID,
			text: message,
			parse_mode: "html"
		}),
	})

}

export default sendData;