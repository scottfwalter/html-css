const combos = document.querySelectorAll(".combo-select");
for (combo of combos) {
  const comboButton = combo.querySelector('.combo-select__button');
  comboButton.addEventListener('click', function (event) {
    combo.classList.toggle('combo-select--active');
  });
}