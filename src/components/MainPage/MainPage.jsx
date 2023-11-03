import { useState } from "react";

import { useMediaQuery } from "react-responsive";

import Hero from "../Hero/Hero";
import HeroContent from "../HeroContent/HeroContent";
import ContactUs from "../ContactUs/ContactUs";
import Facts from "../Facts/Facts";
import GeneralContact from "../GeneralContact/GeneralContact";
import Advantages from "../Advantages/Advantages";
import CoursesCarousel from "../CoursesCarousel/CoursesCarousel";
import SchoolInfo from "../SchoolInfo/SchoolInfo";
import Modal from '../Modal/Modal';

const MainPage = () => {
	const isMobile = useMediaQuery({ maxWidth: 760 });

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
		<main>
			<Hero openModal={openModal}></Hero>
			{isMobile && <div className="container"><HeroContent /></div>}
			<ContactUs />
			<Facts />
			<GeneralContact background={"first"} />
			<Advantages openModal={openModal} />
			<CoursesCarousel />
			<GeneralContact background={"second"} />
			<SchoolInfo />
			<Modal active={activeModal} closeModal={closeModal} />
		</main>
	)
}

export default MainPage;