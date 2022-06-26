colorMode.addEventListener('click', () => {
  const current = document.body.style.getPropertyValue("--dark-mode") - 0;
  document.body.style.setProperty("--dark-mode", 1 - current);
})