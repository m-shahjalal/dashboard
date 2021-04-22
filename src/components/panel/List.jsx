import { Link } from 'react-router-dom';
import styles from './panel.module.css';
import arrow from '../../assets/icons/next.svg';

const List = () => {
	return (
		<ul className={styles.list}>
			<li className={styles.item}>
				<Link to='/' className={styles.link}>
					<span>Dashboard</span>
					<img src={arrow} alt='arrow' className={styles.arrow} />
				</Link>
			</li>
			<li className={styles.item}>
				<Link to='/course' className={styles.link}>
					<span>My Course</span>
					<img src={arrow} alt='arrow' className={styles.arrow} />
				</Link>
			</li>
			<li className={styles.item}>
				<Link to='/achievement' className={styles.link}>
					<span>Achievement</span>
					<img src={arrow} alt='arrow' className={styles.arrow} />
				</Link>
			</li>
			<li className={styles.item}>
				<Link to='/forum' className={styles.link}>
					<span>Forum</span>
					<img src={arrow} alt='arrow' className={styles.arrow} />
				</Link>
			</li>
		</ul>
	);
};

export default List;
