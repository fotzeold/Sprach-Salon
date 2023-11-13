import "./modal.scss";

import Form from "../Form/Form";

const Modal = ({ active, closeModal, trueAnswers }) => {

	return (
		<div
			className={active ? "modal active" : "modal"}
			onClick={closeModal}
		>
			<div className="modal__content" onClick={(e) => e.stopPropagation()}>
				<figure onClick={closeModal}>&#215;</figure>
				<Form trueAnswers={trueAnswers}></Form>
			</div>
		</div >
	)
}

export default Modal;