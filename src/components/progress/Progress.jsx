import { Link } from 'react-router-dom';
import Bar from './Bar';
import styles from './progress.module.css';

const Progress = () => {
	return (
		<div className={styles.progress}>
			<h3 className={styles.lead}>Total progress</h3>
			<Bar className={styles.bar} />
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link to='#'>1. First todo</Link>
					<span>Completed</span>
				</li>
				<li className={styles.item}>
					<Link to='#'>2. Second todo</Link>
					<span>Incomplete</span>
				</li>
			</ul>
		</div>
	);
};

export default Progress;
