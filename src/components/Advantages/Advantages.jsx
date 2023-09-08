import { useEffect, useState } from "react";

import getData from "../../services/getData";
import { _ADVS } from "../../services/apiKey";
import { spinner } from "../../services/image";

import "./advantages.scss";

const Advantages = () => {
	const [advs, setAdvs] = useState(null);

	useEffect(() => {
		getData(_ADVS)
			.then(data => data.record.advs)
			.then((data) => setAdvs(data))
	}, []);

	return (
		<section className="advantages">
			<div className="container">
				<div className="advantages__wrapper">
					<div className="advantages__wrapper-title">
						<h2>5 000 cтудентів</h2>
						<p>обрали Sprach Salon</p>
					</div>
					<div className="advantages__wrapper-content">
						{advs ?
							advs.map(({ id, title, img, descr }, index) => {
								const reverse = index % 2 ? "reverse" : null;

								return (
									<div className={"advantages__item row " + reverse} key={id}>
										<div className="advantages__item-img">
											<img src={img} alt={title} loading="lazy" />
										</div>
										<div className="advantages__item-main">
											<h3>{title}</h3>
											<p>{descr}</p>
											<button>Записатись</button>
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