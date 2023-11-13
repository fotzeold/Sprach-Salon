import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import getData from "../../services/getData";
import { _COURSES } from "../../services/apiKey";

import Modal from '../Modal/Modal';
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import CoursesPage from "../CoursesPage/CoursesPage";
import TestPage from "../TestPage/TestPage";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer"


function App() {
	const [courseList, setCourseList] = useState([]);
	const [activeModal, setActiveModal] = useState(false);
	const [trueAnswers, setTrueAnswers] = useState(0);

	const openModal = () => {
		document.body.classList.add("body-when-open-modal");
		setActiveModal(true);
	}

	const closeModal = () => {
		document.body.classList.remove("body-when-open-modal");
		setActiveModal(false);
	}

	useEffect(() => {
		getData(_COURSES).then(data => setCourseList(data))
	}, [])


	return (
		<BrowserRouter>
			<Header></Header>
			<main>
				<Routes>
					<Route path="/" element={<MainPage openModal={openModal} />} />
					<Route path="/courses/:id" element={<CoursesPage courseList={courseList} />} />
					<Route path="/test" element={<TestPage openModal={openModal} setTrueAnswers={setTrueAnswers} />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Modal active={activeModal} closeModal={closeModal} trueAnswers={trueAnswers} />
			</main>
			<Footer></Footer>
		</BrowserRouter>
	);
}

export default App;
