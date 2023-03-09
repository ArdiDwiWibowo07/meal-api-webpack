import axios from 'axios';

import '../component/category-item.js';
import '../component/search-bar.js';
import '../component/meal-list.js';
import '../component/category-item.js';

import DataSource from '../data/data-source.js';
 
const main = () => {
  const searchElement = document.querySelector('search-bar');
  const mealListElement = document.querySelector('meal-list');
  const categoryElement = document.querySelector('category-item');
 
  const onButtonSearchClicked = async () => {
    try {
      const result = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchElement.value}`);
      result.data.meals ? renderResult(result.data.meals) : fallbackResult(searchElement.value);
    } catch (error) {
      console.log(error);
    }
  };

  

  const onChangeCategory = () => {
      renderResultCategory(categoryElement.value);
  };

  const renderResult = results => {
    mealListElement.meals = results;

  };

  const renderResultCategory = result =>{
    mealListElement.category = result;
  }
 
  const fallbackResult = message => {
    mealListElement.renderError(message);
  };
 
  searchElement.clickEvent = onButtonSearchClicked;
  categoryElement.changeEvent = onChangeCategory;

};


 
export default main;