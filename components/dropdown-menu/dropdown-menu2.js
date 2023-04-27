class Dropdown {
  constructor(container) {
    this.isOpen = false;
    this.activeIndex = undefined;

    this.container = container;
    this.button = container.querySelector(".dropdown-button");
    this.menu = container.querySelector(".dropdown-menu");
    this.items = container.querySelectorAll(".dropdown-menu-item");
  }

  initEvents() {
    this.button.addEventListener("click", this.toggle.bind(this));
    document.addEventListener("click", this.onClickOutside.bind(this));
    document.addEventListener("keydown", this.onKeyEvent.bind(this));
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.button.setAttribute("aria-expanded", this.isOpen);
    this.menu.setAttribute("aria-hidden", !this.isOpen);
    this.container.dataset.open = this.isOpen;
  }

  onClickOutside(e) {
    if (!this.isOpen) return;

    let targetElement = e.target;

    do {
      if (targetElement == this.container) return;

      targetElement = targetElement.parentNode;
    } while (targetElement);

    this.toggle();
  }

  onKeyEvent(e) {
    if (!this.isOpen) return;

    if (e.key === "Tab") {
      this.toggle();
    }

    if (e.key === "Escape") {
      this.toggle();
      this.button.focus();
    }

    if (e.key === "ArrowDown") {
      this.activeIndex =
        this.activeIndex < this.items.length - 1 ? this.activeIndex + 1 : 0;
      this.items[this.activeIndex].focus();
    }

    if (e.key === "ArrowUp") {
      this.activeIndex =
        this.activeIndex > 0 ? this.activeIndex - 1 : this.items.length - 1;
      this.items[this.activeIndex].focus();
    }
  }
}

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => new Dropdown(dropdown).initEvents());