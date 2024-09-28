export class CompanyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
        <style>
          .company-component {
            text-align: center;
            padding: 40px;
          }
  
          h2 {
            color: #34495e;
          }
  
          p {
            color: #2c3e50;
            font-size: 1.1rem;
            margin: 10px 0;
          }
  
          .company-logo {
            max-width: 400px;
            margin-top: 20px;
          }
  
          a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            color: #3498db;
            border: 2px solid #3498db;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }
  
          a:hover {
            background-color: #3498db;
            color: white;
          }
        </style>
  
        <div class="company-component">
          <h2>Created by</h2>
          <img class="company-logo" src="/aspecs-logo.png" alt="Aspecs Logo">
          <br>
          <a href="https://www.aspecs.ch/en/socials" target="_blank">Follow Aspecs on Socials</a>
        </div>
      `;

    if (this.shadowRoot) {
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

customElements.define("company-component", CompanyComponent);
