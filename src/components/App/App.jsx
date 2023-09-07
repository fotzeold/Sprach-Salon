import { useMediaQuery } from "react-responsive";

import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import HeroContent from "../HeroContent/HeroContent";
import ContactUs from "../ContactUs/ContactUs";
import Facts from "../Facts/Facts";

import "./app.scss";

function App() {
	const isMobile = useMediaQuery({ maxWidth: 760 });

	return (
		<div className="App">
			<Header></Header>
			<Hero></Hero>
			{isMobile && <div className="container"><HeroContent /></div>}
			<ContactUs />
			<Facts />
		</div>
	);
}

export default App;
