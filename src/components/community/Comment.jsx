import styles from './community.module.css';

const Comment = () => {
	return (
		<div className={styles.comment}>
			<form className={styles.commentForm}>
				<input
					className={styles.commentText}
					type='text'
					placeholder='Write a comment'
				/>
				<input
					className={styles.commentSubmit}
					type='submit'
					value='submit'
				/>
			</form>
			<div className={styles.commentContainer}>
				<div className={styles.commentBox}>
					<div className={styles.commentUser}>Mr. someones</div>
					<div className={styles.commentContent}>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Magni numquam repellat aperiam veritatis dolore
						commodi distinctio ipsa magnam nisi similique, eveniet
						assumenda, ea dolor fugiat voluptatibus nulla? Itaque,
						perferendis quam?
					</div>
				</div>
				<div className={styles.commentBox}>
					<div className={styles.commentUser}>Mr. someones</div>
					<div className={styles.commentContent}>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Magni numquam repellat aperiam veritatis dolore
						commodi distinctio ipsa magnam nisi similique, eveniet
						assumenda, ea dolor fugiat voluptatibus nulla? Itaque,
						perferendis quam?
					</div>
				</div>
			</div>
		</div>
	);
};

export default Comment;
