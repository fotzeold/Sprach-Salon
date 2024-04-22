import advantagesData from "../../data/advantages.json"

import { spinner } from "../../services/image";

import "./advantages.scss";

const Advantages = ({ openModal }) => {
	return (
		<section className="advantages">
			<div className="container">
				<div className="advantages__wrapper">
					<div className="advantages__wrapper-title">
						<h2>5 000 cтудентів</h2>
						<p>обрали Sprach Salon</p>
					</div>
					<div className="advantages__wrapper-content">
						{advantagesData ?
							advantagesData.map(({ _id, title, img, descr }, index) => {
								const reverse = index % 2 ? "reverse" : null;

								return (
									<div className={"advantages__item row " + reverse} key={_id + "-advantages-" + index}>
										<div className="advantages__item-img">
											<img src={img} alt={title} loading="lazy" />
										</div>
										<div className="advantages__item-main">
											<h3>{title}</h3>
											<p>{descr}</p>
											<button onClick={openModal}>Записатись</button>
										</div>
									</div>
								)
							})
							: <img className="advantages__wrapper-spinner" src={spinner} alt="Loading..." />
						}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Advantages;