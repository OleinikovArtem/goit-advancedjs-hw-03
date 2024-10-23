import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const baseUrl = 'https://pixabay.com/api/';
const key = '46672316-334fc4a904d955c3d11f52bb4';
const imageType = 'photo';

export const search = async words => {
  try {
    const params = new URLSearchParams({
      key,
      q: words,
      image_type: imageType,
    });

    const response = await fetch(`${baseUrl}?${params.toString()}`);
    const json = await response.json();

    if (!json.hits.length) {
      return iziToast.error({ 
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight'
      });
    }

    return json.hits;
  } catch (error) {
    console.error(`Serch is failed with words: "${words}"`, error);
  }
};
