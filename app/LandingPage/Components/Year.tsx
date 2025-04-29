'use client'; // if you are in app/ directory of Next 13+

import { useEffect, useState } from 'react';
import styles from './css/yearSection.module.css';
import MatchCard from './Match-card';

// Define the type for a match object
type Match = {
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

export default function YearSection() {
	const [matches, setMatches] = useState<Match[]>([]);

	useEffect(() => {
		fetch('/matches.json')
			.then((res) => res.json())
			.then((data) => setMatches(data));
	}, []);

	return (
		<div className={`bg-dark ${styles.yearContainer}`}>
			<hr className={`bg-danger offset-md-1 ${styles.hr}`} />
			<h4 className="offset-md-1 text-white">THIS YEAR AT ASSOCIATES</h4>
			<div className="row mt-4 offset-md-1">
				{matches.map((match, index) => (
					<div key={index} className="col-md-3">
						<MatchCard {...match} />
					</div>
				))}
			</div>
		</div>
	);
}
