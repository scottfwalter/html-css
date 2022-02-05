const suggestions = document.querySelector('.type-ahead__suggestions')
const input = document.querySelector('.type-ahead__input');


suggestions.addEventListener('click', (e) => {
	if(e.target.classList.contains('match')) {
		input.value = e.target.parentNode.innerText;
	} else {
		input.value = e.target.innerText;
	}
	suggestions.classList.add('hidden');
})

input.addEventListener('keyup', (e) => {
	if(e.code === 'Enter') 	return suggestions.classList.add('hidden');
	const text = event.target.value;
	if(!text) {
		return suggestions.classList.add('hidden')
	} else {
		suggestions.classList.remove('hidden')
		const suggestionItems = `
			<li class="suggestion"><span class="match">${text}</span></li>
			<li class="suggestion">${highLightMatch('veritatis et',text)}</li>
			<li class="suggestion">${highLightMatch('ut aliquid ex vero eos',text)}</li>
		`;
		suggestions.innerHTML = suggestionItems;
	};
});

function highLightMatch(sentence, targetText) {
	const regex = new RegExp(targetText, 'gi');
	return sentence.replace(regex, `<span class="match">${targetText}</span>`)
}