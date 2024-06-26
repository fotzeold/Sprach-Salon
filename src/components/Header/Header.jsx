import './header.scss';

import { useState, useEffect } from 'react';
import { logo } from "../../services/image";
import { Link } from "react-router-dom";
import coursesData from "../../data/courses.json"
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


const Header = () => {

	const [activeBurger, setActiveBurger] = useState(false);

	const toggleActive = () => {
		setActiveBurger(bool => !bool);
	}

	const setBurgerFalse = () => {
		setActiveBurger(false);
	}

	useEffect(() => {
		if (activeBurger) {
			disableBodyScroll(document.body)
		} else {
			clearAllBodyScrollLocks(document.body)
		}
	}, [activeBurger])

	return (
		<header>
			<div className="container">
				<div className="row">
					<a href='/' className="header__logo">
						<img src={logo} alt="" />
					</a>
					<nav className={activeBurger ? "active" : ""}>
						<ul>
							<li><Link to="/" onClick={setBurgerFalse}>Головна</Link></li>
							<li className="dropdown">
								Форми навчання <i className="arrow-down"></i>
								<div className="dropdown__content">
									<div className="dropdown__content-back">
										{
											coursesData && coursesData.map((el, i) => {
												return (
													<Link key={el.name + "-link-" + i} to={`/courses/${el.name}`} onClick={setBurgerFalse}>{el.title}</Link>
												)
											})
										}
									</div>
								</div>
							</li>
							<li><Link to="/contacts" onClick={setBurgerFalse}>Контакти</Link></li>
							<li><Link to="/test" onClick={setBurgerFalse}>Онлайн тест</Link></li>
						</ul>
					</nav>
					<div
						className={activeBurger ? "header__burger active" : "header__burger"}
						onClick={toggleActive}
					>
						<figure className='header__burger-first'></figure>
						<figure className='header__burger-second'></figure>
						<figure className='header__burger-third'></figure>
					</div>
				</div>
			</div>
		</header >
	)
}

export default Header;