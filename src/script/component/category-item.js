import DataSource from "../data/data-source";

class CategoryItem extends HTMLElement {
  async connectedCallback() {
    const json = await DataSource.listCategory();
    this.category = json;
    this.render();
  }

  set changeEvent(event) {
    this._changeEvent = event;
  }

  set category(category = null) {
    this._category = category;
    this.render();
  }

  get value() {
    return this.querySelector("#categoryElement").value;
  }

  render() {
    this.innerHTML = "";
    const select = document.createElement("select");
    const option = document.createElement("option");

    select.classList.add("custom-select", "my-2");
    select.setAttribute("id", "categoryElement");

    option.setAttribute("selected", "selected");
    option.innerText = "Silahkan pilih category";
    this.appendChild(select);
    select.appendChild(option);

    this._category.forEach((el) => {
      const option = document.createElement("option");
      option.setAttribute("value", el.strCategory);
      option.innerText = el.strCategory;
      select.appendChild(option);
    });

    this.querySelector("#categoryElement").addEventListener(
      "change",
      this._changeEvent
    );
  }
}

customElements.define("category-item", CategoryItem);
