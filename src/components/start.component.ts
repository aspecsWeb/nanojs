export class StartComponent extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      const template = document.createElement('template');
      template.innerHTML = `
          <style>
              .start-component {
                  text-align: center;
                  padding: 50px;
                  background-color: #f0f0f0;
              }
              h1 {
                  color: #2c3e50;
              }
              p {
                  color: #34495e;
                  font-size: 1.2rem;
              }
              button {
                  background-color: #3498db;
                  border: none;
                  color: white;
                  padding: 10px 20px;
                  margin-top: 20px;
                  border-radius: 5px;
                  cursor: pointer;
              }
              button:hover {
                  background-color: #2980b9;
              }
          </style>

          <div class="start-component">
              <h1>Welcome to My Web Component App</h1>
              <p>This is a boilerplate template using native Web Components with TypeScript.</p>
              <button>Click Me</button>
          </div>
      `;

      if (this.shadowRoot) {
          this.shadowRoot.appendChild(template.content.cloneNode(true));
      }
  }

  connectedCallback() {
      const button = this.shadowRoot?.querySelector('button');
      button?.addEventListener('click', () => {
          console.log('Button clicked!');
          alert('Button clicked!');
      });
  }
}

// Define the web component
customElements.define('start-component', StartComponent);
