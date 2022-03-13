var button = document.querySelector('span')
button.addEventListener('click', () => {
  button.innerHTML = `<div class="loading"></div>`
  setTimeout(() => {
    button.innerText = 'Submited'
  }, 5000)
})
