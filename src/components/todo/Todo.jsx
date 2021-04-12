import { Link } from 'react-router-dom';
import styles from './todo.module.css';

const Todo = () => {
	return (
		<div className={styles.todo}>
			<h3 className={styles.lead}>TO DO</h3>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link>1. First todo</Link>
				</li>
				<li className={styles.item}>
					<Link>2. Second todo</Link>
				</li>
			</ul>
		</div>
	);
};

export default Todo;
