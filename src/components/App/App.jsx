import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import Modal from '../Modal/Modal';
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import CoursesPage from "../CoursesPage/CoursesPage";
import ContactsPage from "../ContactsPage/ContactsPage";
import TestPage from "../TestPage/TestPage";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer"
import ScrollToTop from "../../services/scrollToTop";

function App() {
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

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Header></Header>
			<main>
				<Routes>
					<Route path="/" element={<MainPage openModal={openModal} />} />
					<Route path="/courses/:name" element={<CoursesPage />} />
					<Route path="/contacts" element={<ContactsPage />} />
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
