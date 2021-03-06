const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const returnedData = []

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => returnedData.push(...data))

function findMatchedEntries(wordToMatch, citiesArray) {
  return citiesArray.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi')
    return place.city.match(regex) || place.state.match(regex)
  })
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function displayMatchedData() {
  const matchedData = findMatchedEntries(this.value, returnedData)
  const html = matchedData
    .map((place) => {
      const regex = new RegExp(this.value, 'gi')
      const cityName = place.city.replace(
        regex,
        `<span class='hl'>${this.value}</span>`
      )
      const stateName = place.state.replace(
        regex,
        `<span class='hl'>${this.value}</span>`
      )
      return `
			<li>
				<span class='name'>${cityName}, ${stateName}</span>
				<span class='population'>${numberWithCommas(place.population)}</span>
			</li>
		`
    })
    .join('')
  suggestions.innerHTML = html
}

const cityInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

cityInput.addEventListener('change', displayMatchedData)
cityInput.addEventListener('keyup', displayMatchedData)
