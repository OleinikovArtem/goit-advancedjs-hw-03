import * as api from './js/pixabay-api';
import * as render from './js/render-functions';

const $searchForm = document.querySelector('#search-form');

$searchForm.onsubmit = async event => {
  try {
    // TODO: start loading
    event.stopPropagation();
    event.preventDefault();

    const data = new FormData(event.target);
    const search = data.get('search');
    const parsedWords = search.trim().split(' ').join('+');

    if (!parsedWords) {
      iziToast.error({
        message: 'Please enter a search term!',
        position: 'topRight',
      });
      return;
    }

    render.showLoading();
    const images = await api.search(parsedWords);
    if (images) render.renderImages(images);
    if (!images) render.clearLoading();
  } catch (error) {
    console.error(error);
  }
};
