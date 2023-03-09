class DataSource {

  static listCategory() {
    return fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.categories) {
          return Promise.resolve(responseJson.categories);
        } else {
          return Promise.reject(console.log("error"));
        }
      });
  }

  static listMeals() {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(console.log("error"));
        }
      });
  }
}

export default DataSource;
