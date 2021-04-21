import Course from '../components/course/Course';
import LBoard from '../components/LBoard/LBoard';
import Lesson from '../components/lesson/Lesson';
import Progress from '../components/progress/Progress';
import Todo from '../components/todo/Todo';
import styles from './page.module.css';

const HomePage = () => {
	return (
		<div className={styles.home}>
			<Lesson />
			<Todo />
			<LBoard />
			<Course />
			<Progress />
		</div>
	);
};

export default HomePage;
