import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import arrow from '../../assets/icons/next.svg';
import styles from './panel.module.css';

const Panel = () => {
	return (
		<div className={styles.panel}>
			<div className={styles.logo}>
				<img className={styles.img} src={logo} alt='logo' />
			</div>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link className={styles.link}>
						<span>Home</span>
						<img src={arrow} alt='arrow' className={styles.arrow} />
					</Link>
				</li>
				<li className={styles.item}>
					<Link className={styles.link}>
						<span>Dashboard</span>
						<img src={arrow} alt='arrow' className={styles.arrow} />
					</Link>
				</li>
				<li className={styles.item}>
					<Link className={styles.link}>
						<span>My Course</span>
						<img src={arrow} alt='arrow' className={styles.arrow} />
					</Link>
				</li>
				<li className={styles.item}>
					<Link className={styles.link}>
						<span>Achievement</span>
						<img src={arrow} alt='arrow' className={styles.arrow} />
					</Link>
				</li>
				<li className={styles.item}>
					<Link className={styles.link}>
						<span>Forum</span>
						<img src={arrow} alt='arrow' className={styles.arrow} />
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Panel;
