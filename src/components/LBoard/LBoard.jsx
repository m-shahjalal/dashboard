import { Link } from 'react-router-dom';
import styles from './lBoard.module.css';

const LBoard = () => {
	return (
		<div className={styles.lBoard}>
			<h3 className={styles.lead}>TO DO</h3>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link to='#'>1. First todo</Link>
				</li>
				<li className={styles.item}>
					<Link to='#'>2. Second todo</Link>
				</li>
			</ul>
		</div>
	);
};

export default LBoard;
