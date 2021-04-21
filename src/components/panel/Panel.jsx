import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import arrow from '../../assets/icons/next.svg';
import styles from './panel.module.css';

const Panel = () => {
	return (
		<div className={styles.panel}>
			<div className={styles.innerPanel}>
				<div className={styles.logo}>
					<img className={styles.img} src={logo} alt='logo' />
				</div>
				<ul className={styles.list}>
					<li className={styles.item}>
						<Link to='/' className={styles.link}>
							<span>Dashboard</span>
							<img
								src={arrow}
								alt='arrow'
								className={styles.arrow}
							/>
						</Link>
					</li>
					<li className={styles.item}>
						<Link to='/course' className={styles.link}>
							<span>My Course</span>
							<img
								src={arrow}
								alt='arrow'
								className={styles.arrow}
							/>
						</Link>
					</li>
					<li className={styles.item}>
						<Link to='/achievement' className={styles.link}>
							<span>Achievement</span>
							<img
								src={arrow}
								alt='arrow'
								className={styles.arrow}
							/>
						</Link>
					</li>
					<li className={styles.item}>
						<Link to='/forum' className={styles.link}>
							<span>Forum</span>
							<img
								src={arrow}
								alt='arrow'
								className={styles.arrow}
							/>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Panel;
