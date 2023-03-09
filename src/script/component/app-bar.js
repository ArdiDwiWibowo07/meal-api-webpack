
class AppBar extends HTMLElement {
  //berhasil ditambahkan ke dokumen HTML (DOM).
  connectedCallback() {
    this.render();
  }

  render() {
    //Maka digunakan shodaDOM karena terisolasi
    this.innerHTML = `
    <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">Aplikasi Pencari Makanan</span>
    </nav>
    `;
  }
}

customElements.define("app-bar", AppBar);
