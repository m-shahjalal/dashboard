import { Link } from 'react-router-dom';
import styles from './todo.module.css';

const Todo = () => {
	return (
		<div className={styles.todo}>
			<h3 className={styles.lead}>TO DO</h3>
			<div className={styles.list}>
				<Link className={styles.item}>1. First todo</Link>
				<Link className={styles.item}>2. Second todo</Link>
				<Link className={styles.item}>3. Third todo</Link>
			</div>
		</div>
	);
};

export default Todo;
