import styles from './css/yearSection.module.css';
import MatchCard from './Match-card';

export default function YearSection() {
	return (
		<>
			<div className={`bg-dark ${styles.yearContainer}`}>
				<hr className={`bg-danger offset-md-1 ${styles.hr}`} />
				<h4 className="offset-md-1 text-white">THIS YEAR AT ASSOCIATES</h4>
				<div className="row gap-4 mt-4 offset-md-1">
					<MatchCard></MatchCard>
					<MatchCard></MatchCard>
					<MatchCard></MatchCard>
					<MatchCard></MatchCard>
				</div>
			</div>
		</>
	);
}
