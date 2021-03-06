let template = document.querySelector("#tabbed-custom-element");
globalThis.customElements.define(template.id, class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content);
  }
});