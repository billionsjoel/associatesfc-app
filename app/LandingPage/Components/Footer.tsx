import styles from './css/footer.module.css';

export default function Footer() {
	return (
		<>
			<section id="footer" className={`${styles.footerBg} text-secondary`}>
				<div className="container">
					<div className="row p-4">
						<div className="col-md-12 text-center">
							<span className="fs-5">Associates FootBall Club</span>
						</div>
					</div>
					<div className="row p-4">
						<div className="col-md-3">
							<h6>QUICK LINKS</h6>
							<ul className={`${styles['ul-links']} pt-2`}>
								<li>
									<a href="{{ route('unauthorized') }}">Players</a>
								</li>
								<li>
									<a href="{{ route('unauthorized') }}">Fixtures</a>
								</li>
								<li>
									<a href="{{ route('unauthorized') }}">About Us</a>
								</li>
							</ul>
						</div>
						<div className="col-md-3">
							<h6>RESOURCES</h6>
							<ul className={`${styles['ul-links']} pt-2`}>
								<li>
									<a href="{{ route('unauthorized') }}">Podcasts</a>
								</li>
								<li>
									<a href="{{ route('unauthorized') }}">Toolkits</a>
								</li>
								<li>
									<a href="{{ route('unauthorized') }}">Articles</a>
								</li>
								<li>
									<a href="{{ route('unauthorized') }}">Interviews</a>
								</li>
							</ul>
						</div>
						<div className="col-md-3">
							<h6>INFORMATION</h6>
							<ul className={`${styles['ul-links']} pt-2`}>
								<li>
									<a href="{{ route('unauthorized') }}">Terms of use</a>
								</li>
								<li>
									<a href="{{ route('unauthorized') }}">Privary Policy</a>
								</li>
								<li>
									<a href="{{ route('unauthorized') }}">Return and Refund Policy</a>
								</li>
								<li>
									<a href="{{ route('unauthorized') }}">Contact</a>
								</li>
							</ul>
						</div>
						<div className="col-md-3">
							<h6>CONTACT</h6>
							<ul className={`${styles['ul-links']} pt-2`}>
								<li>
									<a href="{{route('contact')}}">Get in touch</a>
								</li>
								<li>
									<a href="#">info@associatesfc.com</a>
								</li>
								<li>
									<a href="#">+256 750 895 982</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="row pb-4">
						<div className="col-md-12">
							<hr />
							<div className="copyright text-center fs-6 fw-lighter">
								Copyright &copy; ASSOCIATES FC 2024. All rights reserved. Created by
								<a href="https//twitter.com/billionsjoel" className="text-white pt-2 text-decoration-none">
									&nbsp; Billionsjoel
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
