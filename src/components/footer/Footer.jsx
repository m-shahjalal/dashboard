import { Link } from 'react-router-dom';
import styles from './footer.module.css';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.col}>
				<div className={styles.lead}>Links</div>
				<ul className={styles.list}>
					<li className={styles.item}>
						<Link to='#'>About us</Link>
					</li>
					<li className={styles.item}>
						<Link to='#'>Contact</Link>
					</li>
					<li className={styles.item}>
						<Link to='#'>Mission</Link>
					</li>
					<li className={styles.item}>
						<Link to='#'>Involve</Link>
					</li>
				</ul>
			</div>
			<div className={styles.col}>
				<div className={styles.lead}>Links</div>
				<ul className={styles.list}>
					<li className={styles.item}>
						<Link to='#'>About us</Link>
					</li>
					<li className={styles.item}>
						<Link to='#'>Contact</Link>
					</li>
					<li className={styles.item}>
						<Link to='#'>Mission</Link>
					</li>
					<li className={styles.item}>
						<Link to='#'>Involve</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
