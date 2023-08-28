import "./form.scss";

import { telegram, viber } from "../../services/image";

const Form = () => {
	return (
		<div className="form">
			<h3>ЗАПОВНІТЬ ФОРМУ</h3>
			<p>Наш менеджер зв'яжеться з Вами протягом 15 хвилин</p>
			<form>
				<label htmlFor="inp_name">Твоє прізвище та ім`я</label>
				<input id="inp_name" type="text" placeholder="Roman Popovych" />
				<label htmlFor="inp_phone">Номер телефону</label>
				<input id="inp_phone" type="phone" placeholder="0983488820" />
				<div className="row">
					<button>Відправити заявку</button>
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