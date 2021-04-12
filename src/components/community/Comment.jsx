import styles from './community.module.css';

const Comment = () => {
	return (
		<form>
			<input className={styles.commentText} type='text' />
			<input
				className={styles.commentSubmit}
				type='submit'
				value='submit'
			/>
		</form>
	);
};

export default Comment;
