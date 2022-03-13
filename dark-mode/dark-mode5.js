const switchTheme = (e) => {
  const theme = e.target.value
  document.body.dataset.theme = theme
}

const switches = document.querySelectorAll('input[name="theme"]')
Array.from(switches).forEach((el) => el.addEventListener('change', switchTheme))
