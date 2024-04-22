import "./footer.scss";
import { phone, mail, adress, logo, telegram, viber, visa, masterCard } from "../../services/image";
import dataCourse from "../../data/courses.json"
import dataContacts from "../../data/contacts.json"
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="footer__wrapper">
					<div className="footer__menu">
						<div className="row">
							<div className="footer__menu-contacts">
								<Link to="/contacts" className="footer__main-link">КОНТАКТИ</Link>
								<a target="blank" href={`tel:${dataContacts.phone}`}>
									<img src={phone} alt="#" />
									{dataContacts && dataContacts.phoneVisible}
								</a>
								<a target="blank" href={`mailto:${dataContacts.email}`}>
									<img src={mail} alt="#" />
									{dataContacts && dataContacts.email}
								</a>
								<a target="blank" href={dataContacts && dataContacts.address.link}>
									<img src={adress} alt="#" />
									місто Київ метро Житомирська
								</a>
							</div>
							<div className="footer__menu-courses">
								<p className="footer__main-link">ФОРМИ НАВЧАННЯ</p>
								<div className="menu-courses__main grid">
									{dataCourse && dataCourse.map(el => {
										return (
											<Link to={`/courses/${el.name}`}>{el.title}</Link>
										)
									})}
								</div>
							</div>
							<div className="footer__menu-test">
								<Link className="footer__main-link" to="/test">ONLINE TEST</Link>
							</div>
						</div>
					</div>

					<div className="footer__hotlinks row">
						<div className="footer__hotlinks-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="footer__hotlinks-social row">
							<a href="https://t.me/+380636818776" target="blank">
								<img src={telegram} alt="telegram" />
							</a>
							<a href="viber://contact?number=%2B380636818776" target="blank">
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