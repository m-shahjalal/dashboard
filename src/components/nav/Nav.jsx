import styles from './nav.module.css';
import bell from '../../assets/icons/bell.svg';
import avatar from '../../assets/icons/profile.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className={styles.nav}>
			<div className={styles.notification}>
				<img className={styles.bell} src={bell} alt='bell' />
			</div>
			<Link className={styles.link}>
				<p className={styles.name}>shahjalal</p>
				<div className={styles.avatar}>
					<img
						className={`${styles.img} ${styles.proPic}`}
						src={avatar}
						alt='avatar'
					/>
				</div>
			</Link>
		</div>
	);
};

export default Nav;
