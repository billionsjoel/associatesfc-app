import Image from 'next/image';
import styles from './css/nav.module.css';
import matchStyles from './css/match-card.module.css';

export default function MatchCard() {
	return (
		<>
			<div className={`card ${matchStyles.matchCard} d-flex flex-row align-items-center`}>
				<div className="flex-grow-1">
					<small className="text-white">11-07-2025</small>
					<h6 className={`${matchStyles.cardTitle} mb-1 mt-2 fw-light`}>Masaka</h6>

					<div className="d-flex align-items-center mb-2 mt-2">
						<Image src="/images/logo.jpeg" alt="Team logo" width={30} height={10} className={`${matchStyles.teamLogo} me-2 ${styles.logo}`} />
						<span>Associates fc</span>
					</div>

					<div className="d-flex align-items-center">
						<Image src="https://img.logo.dev/manutd.com" alt="Team logo" width={30} height={10} className={`${matchStyles.teamLogo} me-2 ${styles.logo}`} />
						<span>Masaka fc</span>
					</div>
				</div>

				<div className="vr mx-3"></div>

				<div className="text-end">
					<div className="fw-light">Kick Off - 2:00</div>
					<small className="text-muted">Masaka Sports Village</small>

					<div className="mt-3">
						<a href="#" className={`${matchStyles.cardBtn} btn btn-light btn-sm fw-light`}>
							Fixture
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
