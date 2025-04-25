import styles from './css/yearSection.module.css';

export default function YearSection() {
	return (
		<>
			<div className={`${styles.yearContainer}`}>
				<hr className={`offset-1 ${styles.hr}`} />
				<h4 className="offset-1">This Year At Associates.</h4>
			</div>
		</>
	);
}
