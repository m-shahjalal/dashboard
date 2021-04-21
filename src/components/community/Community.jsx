import Comment from './Comment';
import styles from './community.module.css';
import Form from './Form';

const Community = () => {
	return (
		<div className={styles.community}>
			<h1 className={styles.leadTop}>Community discussion</h1>
			<Form />
			<div className={styles.list}>
				<h2 className={styles.lead}>This is title</h2>
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
				<hr />
				<Comment />
			</div>
		</div>
	);
};

export default Community;
