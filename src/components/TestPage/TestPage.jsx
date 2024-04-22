import "./test-page.scss";
import { Link, animateScroll as scroll } from 'react-scroll';
import { useState } from "react";
import testData from "../../data/test.json"

const TestPage = ({ openModal, setTrueAnswers }) => {

	const [answers, setAnswers] = useState([]);

	const getAnswers = (element, quest) => {
		let answer = element.value;

		let findedEl = answers.find(item => item.quest === quest);
		if (findedEl) {
			let newAnswers = answers.filter(item => item !== findedEl);
			setAnswers([...newAnswers, { quest, answer }]);
		} else {
			setAnswers([...answers, { quest, answer }]);
		}
	}


	const handleSend = () => {
		let currEl;
		let counter = 0;
		testData && testData.forEach(element => {
			currEl = answers.find(el => el.quest === element.qstId)

			if (currEl && element.trueIndexChoice === currEl.answer) {
				counter++;
			}
		})

		setTrueAnswers(counter);
		openModal();
	};

	return (
		<section className="test">
			<div className="test__hero">
				<div className="test__hero-content">
					<h2>Online-Test</h2>
					<Link className="btn" to="section-qst" smooth={true} duration={500}>Почати тестування</Link>
				</div>
			</div>
			<div className="container">
				<div className="test__questions" id="section-qst">
					{
						testData ? testData.map((element, index) => {
							return (
								<div key={element._id + "-test-" + index} className="test__questions-field">
									<div className="test__questions-title">
										<p>{`${index + 1}. ${element.question}`}</p>
									</div>

									<div className="test__questions-choices">
										<div className="choises__group">
											<input
												type="radio"
												name={element.qstId}
												id={element.qstId + "--1"}
												value={`a`}
												onChange={(event) => getAnswers(event.target, element.qstId)}
											/>
											<label htmlFor={element.qstId + "--1"}><figure></figure>{element.choices.a}</label>
										</div>
										<div className="choises__group">

											<input
												type="radio"
												name={element.qstId}
												id={element.qstId + "--2"}
												value={`b`}
												onChange={(event) => getAnswers(event.target, element.qstId)}
											/>
											<label htmlFor={element.qstId + "--2"}><figure></figure>{element.choices.b}</label>
										</div>
										<div className="choises__group">

											<input
												type="radio"
												name={element.qstId}
												id={element.qstId + "--3"}
												value={`c`}
												onChange={(event) => getAnswers(event.target, element.qstId)}
											/>
											<label htmlFor={element.qstId + "--3"}><figure></figure>{element.choices.c}</label>
										</div>
										<div className="choises__group">

											<input
												type="radio"
												name={element.qstId}
												id={element.qstId + "--4"}
												value={`d`}
												onChange={(event) => getAnswers(event.target, element.qstId)}
											/>
											<label htmlFor={element.qstId + "--4"}><figure></figure>{element.choices.d}</label>
										</div>
									</div>
								</div>
							)
						}) : "Loading"
					}
					<button className="btn" onClick={handleSend}>Дізнатись результат</button>
				</div>
			</div>
		</section>
	)
}

export default TestPage;