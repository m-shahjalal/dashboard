import styles from './achievement.module.css';

export const Achievement = () => {
	return (
		<div className={styles.achievement}>
			<h2 className={styles.lead}>Your Achievements</h2>
			<hr />
			<ul className={styles.list}>
				<li className={styles.item}>1. completed course one</li>
				<li className={styles.item}>2. completed course two</li>
				<li className={styles.item}>3. completed course three</li>
				<li className={styles.item}>4. completed course four</li>
				<li className={styles.item}>5. completed course five</li>
			</ul>
		</div>
	);
};

export default Achievement;
