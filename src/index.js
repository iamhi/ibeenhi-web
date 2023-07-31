import '@assets/css/styles.css';
import 'lazysizes';

import { start as startVisibility } from './js/elementController.js';

document.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => startVisibility(), 1000);

	import('@fortawesome/fontawesome-free/js/fontawesome');
	import('@fortawesome/fontawesome-free/js/solid');
	import('@fortawesome/fontawesome-free/js/brands');
});
