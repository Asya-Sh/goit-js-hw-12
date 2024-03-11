import { searchImages } from './js/pixabay-api.js';
import { renderImages, clearMarkup } from './js/render-functions.js';
import { showLoader, hideLoader, showMessage } from './js/helpers.js';

const searchForm = document.querySelector('.js-form');
const msgErr = "Sorry, there are no images matching your search query. Please try again!";
const emptyMsg = "Error, empty field";

searchForm.addEventListener('submit', onSearchBtn);

function onSearchBtn(e) {
  e.preventDefault();
  showLoader();
  clearMarkup();

  const searchInput = e.target.elements.search.value.trim().split(" ");
  const userWord = searchInput.join('+');

  if (!userWord) {
    clearMarkup()
    showMessage(emptyMsg)
    hideLoader()
    return;
  }

  searchImages(userWord)
    .then(res => {
      if (res.hits.length === 0) {
        hideLoader();
        showMessage(msgErr);
      } else {
        renderImages(res.hits);
      }
    })
    .catch(console.log).finally(() => {
      hideLoader();
    });

  e.target.reset();
}
