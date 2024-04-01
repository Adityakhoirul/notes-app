class SearchBox extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._style = document.createElement('style');
      this.render();
    }
  
    connectedCallback() {
      const input = this.shadowRoot.querySelector('input');
      const searchButton = this.shadowRoot.querySelector('button');
      input.addEventListener('input', this.handleInput.bind(this));
      searchButton.addEventListener('click', this.handleSearch.bind(this));
    }
    
    // handleInput() {
      
    // }

    handleSearch() {
      const searchTerm = this.shadowRoot.querySelector('input').value.toLowerCase();
      const notesWrapper = document.getElementById("notesWrapper");
      const notes = notesData.filter(note => note.title.toLowerCase().includes(searchTerm) || note.body.toLowerCase().includes(searchTerm));
      this.renderNotes(notes);
    }
  
    render() {
      this._style.textContent = `
        input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px 0 0 5px;
          box-sizing: border-box;
        }
        button {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 0 5px 5px 0;
          background-color: #007bff;
          color: white;
          cursor: pointer;
          box-sizing: border-box;
        }
      `;
      const template = `
        ${this._style.outerHTML}
        <input type="text" placeholder="Search notes..." />
        <button>Search</button>
      `;
      this.shadowRoot.innerHTML = template;
    }
  
    renderNotes(notes) {
      const notesWrapper = document.getElementById("notesWrapper");
      notesWrapper.innerHTML = "";
      notes.forEach((note) => {
        const li = document.createElement("li");
        li.classList.add("note");
        const details = document.createElement("div");
        details.classList.add("details");
  
        const title = document.createElement("p");
        title.textContent = note.title;
  
        const body = document.createElement("span");
        body.textContent = note.body;
  
        details.appendChild(title);
        details.appendChild(body);
        const bottomContent = document.createElement("div");
        bottomContent.classList.add("bottom-content");
  
        const date = document.createElement("span");
        date.textContent = new Date(note.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
  
        bottomContent.appendChild(date);
        li.appendChild(details);
        li.appendChild(bottomContent);
        notesWrapper.appendChild(li);
      });
    }
  }
  
  customElements.define('search-box', SearchBox);
