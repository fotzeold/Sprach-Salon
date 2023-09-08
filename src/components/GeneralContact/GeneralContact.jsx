import Form from "../Form/Form";
import "./general-contact.scss";

const GeneralContact = ({ background }) => {
	const classBackground = background === "first" ? "first-back" : "second-back";
	return (
		<section className={"general-contact " + classBackground}>
			<div className="container">
				<div className="general-contact__wrapper">
					<div className="row">
						<div className="general-contact__main">
							<h3>Не зволікай <br /> записуйся на навчання</h3>
						</div>
						<div className="general-contact__form">
							<Form />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
};

export default GeneralContact;