import { useParams } from 'react-router-dom';

import "./courses-page.scss";

const CoursesPage = (props) => {

	const { courseList } = props;
	const { id } = useParams();

	return (
		<section className="courses">

			{courseList.length > 0 ?
				courseList.map(elem => elem.id === id ? elem.title : null) :
				<>loading...</>
			}
		</section>
	)
}

export default CoursesPage;