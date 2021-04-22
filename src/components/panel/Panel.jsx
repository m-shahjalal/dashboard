import logo from '../../assets/images/logo.png';

import styles from './panel.module.css';
import List from './List';

const Panel = () => {
	return (
		<div className={styles.panel}>
			<div className={styles.innerPanel}>
				<div className={styles.logo}>
					<img className={styles.img} src={logo} alt='logo' />
				</div>
				<List />
			</div>
		</div>
	);
};

export default Panel;
