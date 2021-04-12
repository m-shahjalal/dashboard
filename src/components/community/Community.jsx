import Comment from './Comment';
import styles from './community.module.css';
import Form from './Form';

const Community = () => {
	return (
		<div className={styles.Community}>
			<h1 className={styles.lead}>COmmunity discussion</h1>
			<Form />
			<div className={styles.list}>
				<p className={styles.info}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Eveniet suscipit, praesentium velit tempora porro rerum
					sapiente id aspernatur numquam quod quo beatae harum.
					Repudiandae nisi voluptas reiciendis aliquid vero mollitia!
					<br />
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Eveniet suscipit, praesentium velit tempora porro rerum
					sapiente id aspernatur numquam quod quo beatae harum.
					Repudiandae nisi voluptas reiciendis aliquid vero mollitia!
				</p>
				<Comment />
				<div className={styles.comment}>
					this is a a simple comment for this post lorem Lorem ipsum
					dolor sit, amet consectetur adipisicing elit. Eveniet
					suscipit,
				</div>
				<div className={styles.comment}>
					this is a a simple comment for this post lorem Lorem ipsum
					dolor sit, amet consectetur adipisicing elit. Eveniet
					suscipit,
				</div>
			</div>
		</div>
	);
};

export default Community;
