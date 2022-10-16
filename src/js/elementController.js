import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';

const DEFAULT_TRIGGER_THRESHOLD = 95;
let browserHeight = window.innerHeight;
let hiddenElements = [];

const setVisible = (element) => {
	const { visibilityClass } = element.dataset;

	element.classList.add(visibilityClass);
	element.controlledHidden = true; // eslint-disable-line no-param-reassign
};

const isVisible = (element) => {
	if (window.scrollY + browserHeight > element.offsetTop) {
		const scrollPercent = (element.getBoundingClientRect().top / browserHeight) * 100;

		if (scrollPercent < (element.dataset.visibilityTriggerThreshold || DEFAULT_TRIGGER_THRESHOLD)) {
			return true;
		}
	}

	return false;
};

const notVisible = (element) => !isVisible(element);

const updateInnerHeight = debounce(() => {
	browserHeight = window.innerHeight;
}, 333);

const toggleVisibility = throttle(() => {
	hiddenElements.filter(isVisible).forEach(setVisible);

	hiddenElements = hiddenElements.filter(notVisible);

	if (hiddenElements.length === 0) {
		window.removeEventListener('scroll', toggleVisibility);
		window.removeEventListener('resize', updateInnerHeight);
	}
}, 200);

const start = () => {
	hiddenElements = Array.from(document.getElementsByClassName('controlled-element'));

	window.addEventListener('scroll', toggleVisibility);
	window.addEventListener('resize', updateInnerHeight);

	toggleVisibility();
};

export {
	start,
};
