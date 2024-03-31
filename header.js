class Header extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.innerHTML = `
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
      <header>Halo, Selamat datang di Halaman Notes Apps Aditya</header>
      
    `;
  }
}

customElements.define("header-notes", Header);
