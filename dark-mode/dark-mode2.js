var darkMode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
var toggle = function() {
	document.querySelector('html').classList.remove('theme-default');
	
	if (darkMode) {
		document.querySelector('html').classList.add('theme-light');
		document.querySelector('html').classList.remove('theme-dark');
	}
	else {
		document.querySelector('html').classList.remove('theme-light');
		document.querySelector('html').classList.add('theme-dark');
	}
	
	darkMode = !darkMode;
	
	document.querySelector('output').innerText = darkMode ? 'dark' : 'light';
}

document.querySelector('button').addEventListener('click', toggle);