import "./facts.scss";

const Facts = () => {

	return (
		<section className="facts">
			<div className="container">
				<div className="facts__wrapper">

					<div className="facts__main">
						<h2>Чому саме ми?</h2>
						<ul className="grid">
							<li>
								<figure></figure>
								<span>Структуровані Уроки:</span>
								<p>Навчання розпочинається з основ і поступово переходить до більш складних тем. Ви зможете вивчати мову послідовно та легко. </p>
							</li>
							<li>
								<figure></figure>
								<span>Інтерактивні вправи:</span>
								<p>Наші інтерактивні вправи допоможуть вам закріпити знання, а відповіді та пояснення допоможуть зрозуміти помилки.</p>
							</li>
							<li>
								<figure></figure>
								<span>Занурення в Мову</span>
								<p>Ми пропонуємо аудіо-та відеоматеріали на різні теми, щоб ви могли практикувати розуміння на слух та вдосконалювати вимову</p>
							</li>
							<li>
								<figure></figure>
								<span>Онлайн-Спільнота:</span>
								<p>Навчання стає ще цікавішим, коли ви можете спілкуватися з іншими студентами ви зможете обговорювати теми, задавати питання та навіть знаходити партнерів для мовної практики.</p>
							</li>
						</ul>
					</div>
					<div className="facts__video">
						<iframe
							src="https://www.youtube.com/embed/li-_BLtq58w?si=YLyEf85L6AdZByEo"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen>
						</iframe>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Facts;