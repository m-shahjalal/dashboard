import { useState } from 'react';
import List from '../panel/List';

import styles from './hamburger.module.css';

const Hamburger = () => {
	const [display, setDisplay] = useState(false);
	return (
		<div>
			<button
				className={styles.hamburger}
				type='button'
				onClick={() => setDisplay(!display)}>
				<svg
					className='w-6 h-6'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M4 6h16M4 12h16M4 18h16'
					/>
				</svg>
			</button>
			{display && (
				<div className={styles.container}>
					<List />
				</div>
			)}
		</div>
	);
};

export default Hamburger;
