import Image from 'next/image';
import styles from './css/nav.module.css';

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
			<div className="container-fluid">
				<a className="navbar-brand offset-1" href="#">
					<Image src="/images/logo.jpeg" alt="Team logo" width={40} height={40} className={`${styles.logo}`} /> &nbsp; Associates Fc
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarsExample04"
					aria-controls="navbarsExample04"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarsExample04">
					<ul className="navbar-nav offset-md-7 mb-2 mb-md-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Players
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Fans
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Fixtures
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About Us
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contact Us
							</a>
						</li>
						{/*<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
								Login
							</a>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="#">
										Action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Another action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</li>
							</ul>
						</li>*/}
					</ul>
				</div>
			</div>
		</nav>
	);
}
