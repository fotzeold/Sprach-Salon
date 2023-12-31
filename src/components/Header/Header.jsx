import './header.scss';

import { useState } from 'react';
import { logo } from "../../services/image";
import { Link } from "react-router-dom";

const Header = () => {

	const [activeBurger, setActiveBurger] = useState(false);

	const toggleActive = () => {
		setActiveBurger(bool => !bool);
	}

	const setBurgerFalse = () => {
		setActiveBurger(false);
	}

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
									<Link to="/courses/starter-course" onClick={setBurgerFalse}>Заняття для початківців</Link>
									<Link to="/courses/individual-course" onClick={setBurgerFalse}>Індивідуальні уроки</Link>
									<Link to="/courses/group-course" onClick={setBurgerFalse}>Групові заняття</Link>
									<Link to="/courses/online-course" onClick={setBurgerFalse}>Online заняття</Link>
									<Link to="/courses/intensive-course" onClick={setBurgerFalse}>Інтенсивний курс</Link>
									<Link to="/courses/conversational-course" onClick={setBurgerFalse}>Розмовний курс</Link>
									<Link to="/courses/zecertificate-course" onClick={setBurgerFalse}>Підготовка до Zertifikat</Link>
									<Link to="/courses/zno-course" onClick={setBurgerFalse}>Підготовка до ЗНО</Link>
								</div>
							</li>
							<li><a href="#" onClick={setBurgerFalse}>Контакти</a></li>
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