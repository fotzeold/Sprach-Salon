import "./hero.scss";
import { useMediaQuery } from "react-responsive";
import HeroContent from "../HeroContent/HeroContent";

const Hero = ({ openModal }) => {
	const isDesktop = useMediaQuery({ minWidth: 761 });

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
		</section>
	)
}

export default Hero;