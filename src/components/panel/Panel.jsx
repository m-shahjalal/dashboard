import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './panel.module.css';

const Panel = () => {
	return (
		<div className={styles.panel}>
			<div className={styles.logo}>
				<img src={logo} alt='logo' />
			</div>
			<ul>
				<li>
					<Link>Home</Link>
				</li>
				<li>
					<Link>Dashboard</Link>
				</li>
				<li>
					<Link>My Course</Link>
				</li>
				<li>
					<Link>Achievement</Link>
				</li>
				<li>
					<Link>Forum</Link>
				</li>
			</ul>
		</div>
	);
};

export default Panel;
