import { LitElement, html, css }
from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js?module';

document.addEventListener('my-event', () => { console.log('cool'); })



class MyElement extends LitElement {
  static properties = {
    version: {},
    myname: { type: String }
  };

  static styles = css`
  :host {
    display: inline-block;
    padding: 10px;
    background: #5fe1ee;
    border-radius: 5px;
    cursor: pointer;
  }

    * {
      color: red;
    }
  `;

  constructor() {
    super();
    this.version = 'STARTING';

    this.addEventListener('build', () => {
      console.log('received event');
    }, true)
  }

  boo() {
    console.log('boo');
  }

  handleClick() {
    console.log('root', this.renderRoot.querySelector('button'));
    const event = new Event('my-event', {bubbles: true, composed: true});
    this.dispatchEvent(event);
  }

  changeName(event) {
    const input = event.target;
    console.log(input.value);
    // this.name = input.value;
  }

  render() {
    return html`
    <p>Welcome to the Lit tutorial!! ${this.myname}</p>
    <p>This is the ${this.version} code.</p>
    <button @click=${this.handleClick}>Click me!</button>
    <input @blur=${this.changeName}>
    `;
  }
}

customElements.define('my-element', MyElement);
