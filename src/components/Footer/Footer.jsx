import "./footer.scss";
import { phone, mail, adress, logo, telegram, viber, visa, masterCard } from "../../services/image";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="footer__wrapper">
					<div className="footer__menu">
						<div className="row">
							<div className="footer__menu-contacts">
								<a href="#" className="footer__main-link">КОНТАКТИ</a>
								<a href="tel:+380970265819">
									<img src={phone} alt="#" />
									098 34 888 18
								</a>
								<a href="mailto:tyotyahalya@gmail.com">
									<img src={mail} alt="#" />
									sprach-salon@gmail.com
								</a>
								<a href="#">
									<img src={adress} alt="#" />
									місто Київ метро Житомирська
								</a>
							</div>
							<div className="footer__menu-courses">
								<p className="footer__main-link">ФОРМИ НАВЧАННЯ</p>
								<div className="menu-courses__main grid">
									<a href="#">Дитячі заняття</a>
									<a href="#">Online заняття</a>
									<a href="#">індивідуальні уроки</a>
									<a href="#">Інтенсивний курс</a>
									<a href="#">Групові заняття</a>
									<a href="#">Розмовний курс</a>
									<a href="#">Підготовка до Zertifikat</a>
									<a href="#">Підготовка до ЗНО</a>
								</div>
							</div>
							<div className="footer__menu-test">
								<a className="footer__main-link" href="#">ONLINE TEST</a>
							</div>
						</div>
					</div>

					<div className="footer__hotlinks row">
						<div className="footer__hotlinks-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="footer__hotlinks-social row">
							<a href="#">
								<img src={telegram} alt="telegram" />
							</a>
							<a href="#">
								<img src={viber} alt="viber" />
							</a>
						</div>
					</div>

					<div className="footer__contracts">
						<div className="row">
							<div className="footer__contracts-school">
								<span>© 2010–2023 SprachSalon київ</span>
							</div>
							<div className="footer__contracts-docs grid">
								<a href="#">Договір оферти</a>
								<a href="#">Політика конфіденційності</a>
							</div>
							<div className="footer__contracts-paymant">
								<img src={visa} alt="visa" />
								<img src={masterCard} alt="mastercard" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;