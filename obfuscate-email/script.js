window.addEventListener("load", (event) => {
	
	const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

	emailLinks.forEach(link => {	
		// console.log(link.innerText);
		// link.href = link.href + link.innerText;
		const href = link.href.replace("mailto:", "mailto:" + link.innerText);
		// console.log(href);
		link.href = href;
	});
	
});