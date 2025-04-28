import Image from 'next/image';
import styles from './css/nav.module.css';
import matchStyles from './css/match-card.module.css';

type MatchCardProps = {
	date: string;
	location: string;
	team1Logo: string;
	team1Name: string;
	team2Logo: string;
	team2Name: string;
	kickoff: string;
	result: string;
	venue: string;
};

export default function MatchCard({ date, location, team1Logo, team1Name, team2Logo, team2Name, kickoff, result, venue }: MatchCardProps) {
	return (
		<div className={`card ${matchStyles.matchCard} d-flex flex-row align-items-center`}>
			<div className="flex-grow-1">
				<small className="text-white">{date}</small>
				<h6 className={`${matchStyles.cardTitle} mb-1 mt-2 fw-light`}>{location}</h6>

				<div className="d-flex align-items-center mb-2 mt-2">
					<Image src={team1Logo} alt="Team logo 1" width={30} height={10} className={`${matchStyles.teamLogo} me-2 ${styles.logo}`} />
					<span>{team1Name}</span>
				</div>

				<div className="d-flex align-items-center">
					<Image src={team2Logo} alt="Team logo 2" width={30} height={10} className={`${matchStyles.teamLogo} me-2 ${styles.logo}`} />
					<span>{team2Name}</span>
				</div>
			</div>

			<div className="vr mx-3"></div>

			<div className="text-end">
				<div className="fw-light">{result === '--' ? `Kick Off - ${kickoff}` : `Result: ${result}`}</div>
				<small className="text-muted">{venue}</small>

				<div className="mt-3">
					<a href="#" className={`${matchStyles.cardBtn} btn btn-light btn-sm fw-light`}>
						Fixture
					</a>
				</div>
			</div>
		</div>
	);
}
