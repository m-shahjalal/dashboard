import { Link } from 'react-router-dom';
import avatar from '../../assets/icons/teach.svg';
import styles from './lesson.module.css';

const Lesson = () => {
	return (
		<div className={styles.lesson}>
			<h3 className={styles.lead}>Upcoming lessons</h3>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link to='#' className={styles.link}>
						<div>
							<p className={styles.paragraph}>Jan 10</p>
							<p className={styles.paragraph}>04:40 PM</p>
						</div>
						<div>
							<p className={styles.paragraph}>Chapter</p>
							<p className={styles.paragraph}>Higher Math</p>
						</div>
						<div className={styles.avatar}>
							<img src={avatar} alt='avatar' />
						</div>
					</Link>
				</li>

				<li className={styles.item}>
					<Link to='#' className={styles.link}>
						<div>
							<p className={styles.paragraph}>Jan 10</p>
							<p className={styles.paragraph}>04:40 PM</p>
						</div>
						<div>
							<p className={styles.paragraph}>Chapter</p>
							<p className={styles.paragraph}>Higher Math</p>
						</div>
						<div className={styles.avatar}>
							<img src={avatar} alt='avatar' />
						</div>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Lesson;
