import { Link } from 'react-router-dom';
import styles from './lBoard.module.css';

const LBoard = () => {
	return (
		<div className={styles.lBoard}>
			<h3 className={styles.lead}>Top Chart</h3>
			<ul className={styles.list}>
				<Link className={styles.item}>1. The first Mna</Link>
				<Link className={styles.item}>2. Mr. X</Link>
				<Link className={styles.item}>2. Mr. Third man</Link>
			</ul>
		</div>
	);
};

export default LBoard;
