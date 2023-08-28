import { people, fastTime, studying } from "../../services/image";
import './hero-content.scss';

const HeroContent = () => {
	return (
		<div className="hero__content">
			<div className="row">
				<a href="#" className="hero__card">
					<div className="row">
						<img src={people} alt="" />
						<div className="hero__card-text">
							<div className="hero__card-title">
								ГРУПОВІ <br />
								ЗАНЯТТЯ
							</div>
							<div className="hero__card-more">
								ДЕТАЛЬНІШЕ
							</div>
						</div>
					</div>
				</a>
				<a href="#" className="hero__card">
					<div className="row">
						<img src={studying} alt="" />
						<div className="hero__card-text">
							<div className="hero__card-title">
								ІНДИВІДУАЛЬНІ <br />
								ЗАНЯТТЯ
							</div>
							<div className="hero__card-more">
								ДЕТАЛЬНІШЕ
							</div>
						</div>
					</div>
				</a>
				<a href="#" className="hero__card">
					<div className="row">
						<img src={fastTime} alt="" />
						<div className="hero__card-text">
							<div className="hero__card-title">
								ІНТЕНСИВНИЙ <br />
								КУРС
							</div>
							<div className="hero__card-more">
								ДЕТАЛЬНІШЕ
							</div>
						</div>
					</div>
				</a>
			</div>
		</div>
	)
}

export default HeroContent;