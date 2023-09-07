import "./contact-us.scss";
import Form from "../Form/Form";

const ContactUs = () => {

	return (
		<section className="contact-us">
			<div className="container">
				<div className="contact-us__wrapper">
					<div className="grid">
						<div className="contact-us__main">
							<h2>Шановні учні!</h2>
							<p>Навчитися новій мові – це захоплююча подорож у світ виразності та можливостей. Німецька мова відкриває перед вами двері до культурного розмаїття Німеччини, Австрії, Швейцарії та багатьох інших країн, де вона є офіційною мовою.</p>
							<p>Саме тому ми підготували навчальні програми навчання для дітей та дорослих.</p>
							<p>Щоб дізнатись деталі залишайте заявку і з вами зв’яжеться наш менеджер.</p>
							<p>Бережіть себе та близьких 💙💛</p>
						</div>
						<div className="contact-us__form">
							<Form></Form>
						</div>
					</div>
				</div>
			</div>
		</section >
	)
}

export default ContactUs;