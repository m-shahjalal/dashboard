import styles from './community.module.css';

const Form = () => {
	return (
		<form className={styles.form}>
			<input
				className={styles.title}
				type='text'
				name='title'
				id='title'
			/>
			<textarea
				className={styles.question}
				name='question'
				id='question'
			/>
			<input
				className={styles.submit}
				type='submit'
				name='submit'
				value='submit'
			/>
		</form>
	);
};

export default Form;
