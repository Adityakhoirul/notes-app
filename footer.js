class Footer extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `
        <style>
          header {
            background-color: black;
            color: white; 
            padding: 10px 20px; 
            font-size: 20px;
            text-align: center;
            display: flex;
            align-items: center; 
            justify-content: center; 
          }
        </style>
        <header>created by aditya khoirul</header>
      `;
    }
  }
  
  customElements.define("footer-notes", Footer);
  