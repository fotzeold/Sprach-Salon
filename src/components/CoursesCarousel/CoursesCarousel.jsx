import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./courses-carousel.scss";

const CoursesCarousel = () => {

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<section className="courses-carousel">
			<div className="container">
				<div className="courses-carousel__wrapper">
					<h2>Курси для будь-якої цілі та рівня</h2>
					<div className="courses-carousel__main">
						<div className="carousel__track">
							<Slider {...settings}>
								<div className="carousel__card">
									<h3>Індивідуальні уроки</h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum omnis similique pariatur ut officiis dolorem?</p>
									<a href='#'>Детальніше</a>
								</div>
								<div className="carousel__card">
									<h3>Індивідуальні уроки</h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum omnis similique pariatur ut officiis dolorem?</p>
									<a href='#'>Детальніше</a>
								</div>
								<div className="carousel__card">
									<h3>Індивідуальні уроки</h3>
									<p>Lorem ipsum dolor Illum omnis similique pariatur ut officiis dolorem?</p>
									<a href='#'>Детальніше</a>
								</div>
								<div className="carousel__card">
									<h3>Індивідуальні уроки</h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum omnis similique pariatur ut officiis dolorem?</p>
									<a href='#'>Детальніше</a>
								</div>
								<div className="carousel__card">
									<h3>Індивідуальні уроки</h3>
									<p> Illum omnis similique pariatur ut officiis dolorem?</p>
									<a href='#'>Детальніше</a>
								</div>
								<div className="carousel__card">
									<h3>Індивідуальні уроки</h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum omnis similique pariatur ut officiis dolorem?</p>
									<a href='#'>Детальніше</a>
								</div>
								<div className="carousel__card">
									<h3>Індивідуальні уроки</h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum omnis similique pariatur ut officiis dolorem?</p>
									<a href='#'>Детальніше</a>
								</div>
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CoursesCarousel;