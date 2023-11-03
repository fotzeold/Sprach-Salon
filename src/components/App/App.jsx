import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import getData from "../../services/getData";
import { _COURSES } from "../../services/apiKey";


import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import CoursesPage from "../CoursesPage/CoursesPage";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer"


function App() {
	const [courseList, setCourseList] = useState([]);

	useEffect(() => {
		getData(_COURSES).then(data => setCourseList(data.record.coursesList))
	}, [])


	return (
		<BrowserRouter>
			<Header></Header>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/courses/:id" element={<CoursesPage courseList={courseList} />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer></Footer>
		</BrowserRouter>
	);
}

export default App;
