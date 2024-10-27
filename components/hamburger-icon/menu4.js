const btnList = document.querySelectorAll('.btn');

btnList.forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('open');
  });
});