import '@assets/css/styles.css';
import 'lazysizes';

import { start as startVisibility } from './js/elementController.js';

document.addEventListener('DOMContentLoaded', () => {
	startVisibility();

	import('@fortawesome/fontawesome-free/js/fontawesome');
	import('@fortawesome/fontawesome-free/js/solid');
	import('@fortawesome/fontawesome-free/js/brands');
});
