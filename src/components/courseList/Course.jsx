import styles from './Course.module.css';
import Bar from './Bar';

const Course = () => {
	return (
		<div className={styles.course}>
			<h2 className={styles.lead}>All the courses</h2>
			<hr />
			<ul className={styles.list}>
				<li className={styles.item}>
					<div className={styles.row}>
						<div className={styles.title}>Higher Math</div>
						<div className={styles.col}>
							<p className='info'>
								<span className={styles.counter}>
									Lessons: 20
								</span>
								<span className={styles.processing}>
									Completed: 5
								</span>
							</p>
							<Bar />
						</div>
					</div>
				</li>
				<li className={styles.item}>
					<div className={styles.row}>
						<div className={styles.title}>Higher Math</div>
						<div className={styles.col}>
							<p className='info'>
								<span className={styles.counter}>
									Lessons: 20
								</span>
								<span className={styles.processing}>
									Completed: 5
								</span>
							</p>
							<Bar />
						</div>
					</div>
				</li>
				<li className={styles.item}>
					<div className={styles.row}>
						<div className={styles.title}>Higher Math</div>
						<div className={styles.col}>
							<p className='info'>
								<span className={styles.counter}>
									Lessons: 20
								</span>
								<span className={styles.processing}>
									Completed: 5
								</span>
							</p>
							<Bar />
						</div>
					</div>
				</li>
				<li className={styles.item}>
					<div className={styles.row}>
						<div className={styles.title}>Higher Math</div>
						<div className={styles.col}>
							<p className='info'>
								<span className={styles.counter}>
									Lessons: 20
								</span>
								<span className={styles.processing}>
									Completed: 5
								</span>
							</p>
							<Bar />
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Course;
