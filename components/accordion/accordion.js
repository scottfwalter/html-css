function toggleAccordion(event) {
  const trigger = event.target;

  if (trigger.classList.contains('open')) {
    trigger.classList.remove('open');
    const height = trigger.parentNode.querySelector('.accordion-content').offsetHeight;
    trigger.parentNode.style.setProperty('--margin', `${height * -1}px`);
  }
  
  else {
    trigger.classList.add('open');
    trigger.parentNode.style.setProperty('--margin', 0);
  }
}

const accordions = document.querySelectorAll('.accordion');
let accordionHeight = 0;
for (let accordion of accordions) {
  accordionHeight = accordion.querySelector('.accordion-content').offsetHeight;
  accordion.style.setProperty('--margin', accordionHeight * -1 + 'px');
  accordion.querySelector('.accordion-trigger').addEventListener('click', toggleAccordion);
}