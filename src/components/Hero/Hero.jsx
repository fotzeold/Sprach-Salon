import "./hero.scss";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import Modal from '../Modal/Modal';
import HeroContent from "../HeroContent/HeroContent";

const Hero = () => {
	const isDesktop = useMediaQuery({ minWidth: 761 });

	const [activeModal, setActiveModal] = useState(false);

	const openModal = () => {
		document.body.classList.add("body-when-open-modal");
		setActiveModal(true);
	}

	const closeModal = () => {
		document.body.classList.remove("body-when-open-modal");
		setActiveModal(false);
	}

	return (
		<section className="hero">
			<div className="container">
				<div className="hero__wrapper">
					<div className="hero__main">
						<p>Індивідуальні та групові заняття</p>
						<h1>ШКОЛА НІМЕЦЬКОЇ МОВИ</h1>
						<button onClick={openModal}>
							Записатись на пробний урок
						</button>
					</div>
					{isDesktop && <HeroContent />}
				</div>
			</div>
			<Modal active={activeModal} closeModal={closeModal} />
		</section>
	)
}

export default Hero;