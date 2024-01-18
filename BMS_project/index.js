// Smooth vertical scrolling
function smoothScroll(elementSelector) {
	const element = document.querySelector(elementSelector);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
}

// Usage example
smoothScroll('#myElementId');
