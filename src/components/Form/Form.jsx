import "./form.scss";

import { telegram, viber } from "../../services/image";
import { useState } from "react";
import sendData from "../../services/sendForm";

const Form = ({ trueAnswers }) => {
	const [formData, setFormData] = useState({
		inp_name: "",
		inp_phone: "",
	});

	const handleInputChange = (event) => {
		const { id, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		let base = `\n<b>Заявка із сайту</b>\n\n<i>Імя та Прізвище:</i>\n<b>${formData.inp_name}</b>\n\n<i>Номер телефону:</i>\n<b>${formData.inp_phone}</b>\n\n`;
		let message

		if (!trueAnswers || trueAnswers === 0) {
			message = `${base}<b>Користувач не проходив тест</b>`
		} else if (trueAnswers === 1) {
			message = `${base}<b>Користувач пройшов тест і набрав ${trueAnswers} бал із 25 можливих</b>`
		} else if (trueAnswers > 1 && trueAnswers <= 4) {
			message = `${base}<b>Користувач пройшов тест і набрав ${trueAnswers} бали із 25 можливих</b>`
		} else if (trueAnswers >= 5) {
			message = `${base}<b>Користувач пройшов тест і набрав ${trueAnswers} балів із 25 можливих</b>`
		}

		sendData(message);

		setFormData({
			name: "",
			phone: "",
		});
	};

	return (
		<div className="form">
			<h3>ЗАПОВНІТЬ ФОРМУ</h3>
			<p>Наш менеджер зв'яжеться з Вами протягом 15 хвилин</p>
			<form onSubmit={handleSubmit}>
				<label htmlFor="inp_name">Твоє прізвище та ім`я</label>
				<input
					id="inp_name"
					type="text"
					placeholder="Roman Popovych"
					value={formData.inp_name || ""}
					onChange={handleInputChange}
				/>
				<label htmlFor="inp_phone">Номер телефону</label>
				<input
					id="inp_phone"
					type="phone"
					placeholder="0983488820"
					value={formData.inp_phone || ""}
					onChange={handleInputChange}
				/>
				<div className="row">
					<button type="submit">Відправити заявку</button>
					<div className="form__social">
						<a href="#"><img src={telegram} alt="telegram" /></a>
						<a href="#"><img src={viber} alt="viber" /></a>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Form;