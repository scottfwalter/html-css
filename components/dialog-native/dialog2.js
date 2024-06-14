const checkbox = document.querySelector('input');

const updatecheckbox = () => {
  document.querySelectorAll('[popover], dialog').forEach(elem => {
    if (checkbox.checked) {
      elem.classList.add('overlay');
    } else {
      elem.classList.remove('overlay');
    }
  });
};
updatecheckbox();
checkbox.onchange = updatecheckbox;