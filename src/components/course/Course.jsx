import { Link } from 'react-router-dom';
import styles from './course.module.css';

const Course = () => {
	return (
		<div className={styles.course}>
			<h3 className={styles.lead}>My Courses</h3>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link>
						<div className={styles.avatar}>
							<img src={avatar} alt='avatar' />
						</div>
						<div className={styles.title}>The Title</div>
						<small className={styles.counter}>20 lessons</small>
						<button className={styles.button}>Details</button>
					</Link>
				</li>
				<li className={styles.item}>
					<Link>2. Second todo</Link>
				</li>
			</ul>
		</div>
	);
};

export default Course;
