class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {

    this.innerHTML = `
      <div class=" d-flex justify-content-center my-4">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="searchElement">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit"  id="searchButtonElement">Search</button>
    </div>
    `;

    this.querySelector("#searchButtonElement").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-bar", SearchBar);
