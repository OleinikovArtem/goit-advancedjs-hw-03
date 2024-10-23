import * as api from './js/pixabay-api';
import * as render from './js/render-functions';

const $search = document.querySelector('#search');
const $submit = document.querySelector('#submit');
const $searchForm = document.querySelector('#search-form');

$searchForm.onsubmit = async (event) => {
  try {
    event.stopPropagation();
    event.preventDefault();

    const data = new FormData(event.target);
    const search = data.get('search');

    const parsedWords = search.trim().split(' ').join('+');
    
    const images = await api.search(parsedWords)
    console.log(images);
  } catch (error) {
    console.error(error);
  }
};
