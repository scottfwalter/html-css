const Q = (q) => document.querySelector(q);

Q('.dark-mode-switch').addEventListener('click', (ev) => {
  Q('body').classList.toggle('switching', true);
  setTimeout(() => {
    Q('body').classList.toggle('switching', false);
  }, 200);
  Q('.dark-mode-switch').classList.toggle('dark');
  Q('body').classList.toggle('dark');
});