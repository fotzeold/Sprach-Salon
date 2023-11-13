import { useMediaQuery } from "react-responsive";

import Hero from "../Hero/Hero";
import HeroContent from "../HeroContent/HeroContent";
import ContactUs from "../ContactUs/ContactUs";
import Facts from "../Facts/Facts";
import GeneralContact from "../GeneralContact/GeneralContact";
import Advantages from "../Advantages/Advantages";
import CoursesCarousel from "../CoursesCarousel/CoursesCarousel";
import SchoolInfo from "../SchoolInfo/SchoolInfo";

const MainPage = ({ openModal }) => {
	const isMobile = useMediaQuery({ maxWidth: 760 });

	return (
		<>
			<Hero openModal={openModal}></Hero>
			{isMobile && <div className="container"><HeroContent /></div>}
			<ContactUs />
			<Facts />
			<GeneralContact background={"first"} />
			<Advantages openModal={openModal} />
			<CoursesCarousel />
			<GeneralContact background={"second"} />
			<SchoolInfo />
		</>
	)
}

export default MainPage;