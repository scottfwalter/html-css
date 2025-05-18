// Clone of departure boards @ New St and other stations
// grid-template-columns/ratios are based off a total width of 140px and an inner width of 125px. Departures should be about 9px high including padding (1px up and down).

// Use of list tags (<ul>, <li>) isn't particularly semantic - it should probably be a table. However, I cba working out all the issues of using grid on a <table> element with all the associated styling.

// Original ratio based (~=actual):
// grid-template-columns: 16% 51.2% 16% 16.8%;
// New observation based:
// grid-template-columns: 16% 51.2% 12% 20.8%;
// Observation based v2:
// grid-template-columns: 16% 51.2% 9% 23.8%; // Plat/Expected column adjustments

// The animation initially appears as a fade in on the boards, and then continually goes right-to-left and re-appears at the far right again, scrolling in. it never snaps back to the start. (confirmed)

depMessage = document.querySelectorAll('.departure .message');

// https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
// https://developer.mozilla.org/en-US/docs/Web/API/Element/animate

for (i = 0; i < depMessage.length; i++) {
	fade_in(depMessage[i]); // fade-in is fine
	// but text-scroll needs a delay (1s or so) before the first iteration begins.
	text_scroll(depMessage[i], depMessage[i].scrollWidth*14);
}

function text_scroll(el, dur = 1250) {
	// Scroll the text from right to left
	el.animate([
		{transform: 'translateX('+ (el.scrollWidth) +'px)'},
		{transform: 'translateX(-'+ (el.scrollWidth * 1.05) +'px)'},
	], {
		id: 'text-scroll',
		// duration: el.scrollWidth * 14,
		duration: el.scrollWidth * 18,
		easing: 'linear',
		iterations: Infinity
	});
}

function fade_in(el, dur = 850) {
	el.animate(
		[
			{opacity: 0},
			{opacity: 1},
		],
		{
			id: 'fade-in',
			duration: dur,
			easing: 'linear',
			fill: 'forwards', // == animation-fill-mode: forwards;
			iterations: 1
		}
	);
}


// Long destination name handling
// Not sure how departure boards actually handle it. I think it scrolls to just display the end of the text and then snaps back after a moment. Check 'Worcester Foregate Street' next time I'm at a station.
// Is there a difference between the larger boards and the platform boards? I think the larger boards just split it onto multiple lines?
// For scrolling behaviour, add `white-space: nowrap; overflow: hidden;` to .dest. Remove if scrolling is unwanted.

depDest      = document.querySelectorAll('.departure .dest');
depDestInner = document.querySelectorAll('.departure .dest span'); // alternative to defining it in the loop as depDest.querySelector('span'). this is perhaps less safe.

// .clientWidth vs. .scrollWidth?
for (i = 0; i < depDest.length; i++) {
	console.log('outer width: ' + depDest[i].clientWidth + '   inner width: ' + depDestInner[i].clientWidth);
	if (depDestInner[i].clientWidth > depDest[i].clientWidth) {
		text_scroll(depDestInner[i], depDestInner[i].clientWidth*14);
	}
}