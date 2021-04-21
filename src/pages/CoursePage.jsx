import styles from './page.module.css';
import Course from '../components/courseList/Course';
const CoursePage = () => (
	<div className={styles.coursePage}>
		<Course />
	</div>
);
export default CoursePage;
