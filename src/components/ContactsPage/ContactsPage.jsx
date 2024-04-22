import "./contacts-page.scss"
import contactsData from "../../data/contacts.json"
import { contactsPhone, contactsGrafik, contactsEmail, mapImg } from "../../services/image"

const ContactsPage = () => {
	return (
		<section className="contacts">
			<div className="for-header">

			</div>
			<div className="container">
				<h1>КОНТАКТИ <br /> <span>Sprach salon</span></h1>
				{
					contactsData && <>
						<div className="contacts__contact">
							<div className="row">
								<a href={`tel:${contactsData.phone}`} className="contacts__contact-item row">
									<img src={contactsPhone} alt="" />
									<div className="contact-item__descr">
										<h3>Телефон:</h3>
										<p>{contactsData.phoneVisible}</p>
									</div>
								</a>
								<div className="contacts__contact-item row">
									<img src={contactsGrafik} alt="" />
									<div className="contact-item__descr">
										<h3>Розклад:</h3>
										<p>{contactsData.grafik[0]}</p>
										<p>{contactsData.grafik[1]}</p>
									</div>
								</div>
								<a href={`mailto:${contactsData.email}`} className="contacts__contact-item row">
									<img src={contactsEmail} alt="" />
									<div className="contact-item__descr">
										<h3>Пошта:</h3>
										<p>{contactsData.email}</p>
									</div>
								</a>
							</div>
						</div>
						<a target="blank" href={contactsData.address.link} className="contacts__adress row">
							<div className="contacts__adress-descr">
								<h2>{contactsData.address.city}</h2>
								<h3>Школа Sprach Salon</h3>
								<p>{contactsData.address.full}</p>
							</div>
							<img src={mapImg} alt="" />
						</a>
					</>
				}
			</div>
		</section>
	)
}

export default ContactsPage