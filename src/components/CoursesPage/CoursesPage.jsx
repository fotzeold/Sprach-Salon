import "./courses-page.scss";
import { useParams } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import Form from "../Form/Form";

import coursesData from "../../data/courses.json"

const CoursesPage = (props) => {

	const { name } = useParams();
	const course = coursesData && coursesData.find(el => el.name === name)

	return (
		<section className="course">
			<div className="course__hero" style={{ background: `linear-gradient( rgba(14, 18, 11, 0.45), rgba(0, 0, 0, 0.3) ), url(${course.img}) center center/cover no-repeat` }}>
				<h1>{coursesData && course.title}</h1>
				<Link className="btn" to="course-info" smooth={true} duration={500}>Детальніше</Link>
			</div>
			<div className="container">
				<div className="course__wrapper row" id="course-info">
					<div className="course__info">
						<h2>Опис курсу</h2>
						<p>{coursesData && course.descr}</p>
						<p>Залишай заявку і наш менеджер звяжеться з тобою і відповість на всі запитання!</p>
					</div>
					<div className="course__form">
						<Form />
					</div>
				</div>
			</div>
		</section >
	)
}

export default CoursesPage;

