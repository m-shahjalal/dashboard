import { Link } from 'react-router-dom';
import avatar from '../../assets/avatar.png';
import styles from './lesson.module.css';

const Lesson = () => {
	return (
		<div className={styles.lesson}>
			<h3>Upcoming lesson</h3>
			<ul className={styles.list}>
				<li>
					<Link className={styles.item}>
						<div>
							<span>Jan 10</span>
							<span>04:40 PM</span>
						</div>
						<div>
							<span>Chapter</span>
							<span>Higher Math</span>
						</div>
						<div className={styles.avatar}>
							<img src={avatar} alt='avatar' />
						</div>
					</Link>
				</li>

				<li>
					<Link className={styles.item}>
						<div>
							<span>Jan 10</span>
							<span>04:40 PM</span>
						</div>
						<div>
							<span>Chapter</span>
							<span>Higher Math</span>
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
