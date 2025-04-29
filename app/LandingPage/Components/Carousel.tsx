import styles from './css/carousel.module.css';
import Image from 'next/image';

export default function Carousel() {
	return (
		<div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
			<div className="carousel-indicators">
				<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<div className={`${styles.carouselWrapper}`}>
						<div className={`${styles.carouselImage1}`}></div>
					</div>
					<div className="container">
						<div className="carousel-caption text-start">
							<h1>Join Associates FC.</h1>
							<p className="opacity-75">The best team in the city without a doubt.</p>
							<p>
								<a className="btn btn-sm btn-primary" href="#">
									Sign up today
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="carousel-item">
					<div className={`${styles.carouselWrapper}`}>
						<div className={`${styles.carouselImage2}`}></div>
					</div>
					<div className="container">
						<div className="carousel-caption">
							<h1>Not Just a Team But a Family.</h1>
							<p>Some of our players and fans representing the team in one of the visitings.</p>
							<p>
								<a className="btn btn-sm btn-primary" href="#">
									Learn more
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="carousel-item">
					<div className={`${styles.carouselWrapper}`}>
						<div className={`${styles.carouselImage3}`}></div>
					</div>
					<div className="container">
						<div className="carousel-caption text-end">
							<h1>Why You should Join Us.</h1>
							<p>From Health, Care, Support and Wealth. Associates is one of a kind team. </p>
							<p>
								<a className="btn btn-sm btn-primary" href="#">
									Browse gallery
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}
