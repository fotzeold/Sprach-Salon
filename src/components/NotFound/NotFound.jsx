import { notFound } from "../../services/image";
import { Link } from "react-router-dom";

import "./not-found.scss";

const NotFound = () => {

	return (
		<section className="missing">
			<div className="container">
				<div className="missing__content">
					<h2> <span>Error</span> Page</h2>
					<p>
						Сторінку не знайдено, поверніться <br /> на головну -
						<Link to="/"> <span>Головна</span> </Link>
					</p>
				</div>
			</div>
		</section>
	)
}

export default NotFound;