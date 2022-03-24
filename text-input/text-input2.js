function showIcon() {
  const username = document.querySelector('.username').value
  const img = document.querySelector('.img')

  if (username.length <= 0) document.body.classList.remove('active')
  else document.body.classList.add('active')

  img.addEventListener('click', () => {
    document.querySelector('.username').value = ''
    document.body.classList.remove('active')
  })
}
