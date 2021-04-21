import { Link } from 'react-router-dom';
import styles from './course.module.css';
import avatar from '../../assets/icons/teach.svg';

const Course = () => {
	return (
		<div className={styles.course}>
			<div className={styles.top}>
				<h3 className={styles.lead}>My Courses</h3>
				<Link className={styles.all}>See all Courses</Link>
			</div>
			<ul className={styles.list}>
				<li className={styles.item}>
					<div className={styles.row}>
						<div className={styles.avatar}>
							<img src={avatar} alt='avatar' />
						</div>
						<div className={styles.col}>
							<div className={styles.title}>The Title</div>
							<small className={styles.counter}>20 lessons</small>
						</div>
					</div>
					<button className={styles.button}>Details</button>
				</li>
				<li className={styles.item}>
					<div className={styles.row}>
						<div className={styles.avatar}>
							<img src={avatar} alt='avatar' />
						</div>
						<div className={styles.col}>
							<div className={styles.title}>The Title</div>
							<small className={styles.counter}>20 lessons</small>
						</div>
					</div>
					<button className={styles.button}>Details</button>
				</li>
			</ul>
		</div>
	);
};

export default Course;
