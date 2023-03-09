import DataSource from "../data/data-source.js";
import "./meal-item.js";

class MealList extends HTMLElement {
  async connectedCallback() {
    const json = await DataSource.listMeals();
    this._meals = json;
    this.render();
  }

  set meals(meals) {
    this._meals = meals; 
    this.render();
  }

  set category(category = null) {
    this._category = category;
    this.render();

  }

  renderError(message) {
    this.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;
    this.innerHTML += `<h2 class="placeholder">${message} tidak ada </h2>`;
  }

  render() {
    this.innerHTML = "";
    if (this._category == null) {
      this._meals.forEach((meal) => {
        const mealItemElement = document.createElement("meal-item");
        mealItemElement.classList.add("col-lg-3");
        mealItemElement.meal = meal;
        this.appendChild(mealItemElement);
      });
    } else {
      this._meals
        .filter((meal) => meal.strCategory == this._category)
        .forEach((meal) => {
          const mealItemElement = document.createElement("meal-item");
          mealItemElement.classList.add("col-lg-3");
          mealItemElement.meal = meal;
          this.appendChild(mealItemElement);
        });
    }
  }
}

customElements.define("meal-list", MealList);
