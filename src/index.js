import 'regenerator-runtime/runtime';
import '@assets/css/styles.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import 'lazysizes';

import { start as startVisibility } from './js/elementController.js';

document.addEventListener('DOMContentLoaded', () => {
	startVisibility();
});
