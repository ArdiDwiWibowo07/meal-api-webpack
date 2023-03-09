class MealItem extends HTMLElement {
    
  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card mb-4">
        <img class="card-img-top" src="${this._meal.strMealThumb}" alt="Card image">
        <div class="card-body">
          <h4 class="card-title">${this._meal.strMeal}</h4>
          <p class="card-text">Kategori : ${this._meal.strCategory}</p>
          <a  class="btn btn-primary" data-toggle="modal" data-target="#myModal${this._meal.idMeal}">Langkah Pembuatan</a>
        </div>
      </div>


      <!-- Modal -->
      <div class="modal fade" id="myModal${this._meal.idMeal}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Pembuatan</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ${this._meal.strInstructions}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
        `;
  }
}

customElements.define("meal-item", MealItem);
