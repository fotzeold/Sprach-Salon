import './header.scss';

import { useState } from 'react';
import { logo } from "../../services/image";

const Header = () => {

	const [activeBurger, setActiveBurger] = useState(false);

	const toggleActive = () => {
		setActiveBurger(bool => !bool);
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
							<li><a href="#">Головна</a></li>
							<li className="dropdown">
								Форми навчання <i className="arrow-down"></i>
								<div className="dropdown__content">
									<a href="#">Дитячі заняття</a>
									<a href="#">Індивідуальні уроки</a>
									<a href="#">Групові заняття</a>
									<a href="/online">Online заняття</a>
									<a href="#">Інтенсивний курс</a>
									<a href="#">Розмовний курс</a>
									<a href="#">Підготовка до Zertifikat</a>
									<a href="#">Підготовка до ЗНО</a>
								</div>
							</li>
							<li><a href="#">Контакти</a></li>
							<li><a href="#">Онлайн тест</a></li>
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