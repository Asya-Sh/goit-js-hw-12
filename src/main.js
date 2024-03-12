import { searchImages } from './js/pixabay-api.js';
import { renderImages, clearMarkup, gallery } from './js/render-functions.js';
import {
  showLoader,
  hideLoader,
  showMessage,
  loadMoreImagesButton,
  showLoadBtn,
  hideLoadBtn,
  showLoadMessage,
} from './js/helpers.js';

const searchForm = document.querySelector('.js-form');

const perPage = 15;
let currentPage = 1;
let userWord;

const msgErr =
  'Sorry, there are no images matching your search query. Please try again!';
const emptyMsg = 'Error, empty field';
const endOfResultsMsg =
  "We're sorry, but you've reached the end of search results.";

searchForm.addEventListener('submit', onSubmitBtn);
loadMoreImagesButton.addEventListener('click', onLoadMoreBtn);

async function onSubmitBtn(e) {
  e.preventDefault();

  currentPage = 1;
  
  showLoader();
  clearMarkup();
  hideLoadBtn();

  const userValue = e.target.elements.search.value.trim().split(' ');
  userWord = userValue.join('+');

  if (!userWord) {
    clearMarkup();
    showMessage(emptyMsg);
    hideLoader();
    return;
  }

  try {
    const result = await searchImages(userWord, currentPage);
    if (result.data.hits.length === 0) {
      hideLoader();
      showMessage(msgErr);
    } else {
      renderImages(result.data.hits);
      scrollToNextGroup();
      showLoadBtn();
    }
    hideLoader();

    if (result.data.totalHits <= perPage) {
      hideLoadBtn();
    }
  } catch {
    console.log(result);
    hideLoader();
  }

  e.target.reset();
}

async function onLoadMoreBtn() {
  showLoader();
  currentPage += 1;

  try {
    const res = await searchImages(userWord, currentPage);
    const lastPage = Math.ceil(res.data.totalHits / perPage);
    renderImages(res.data.hits);
    scrollToNextGroup();
    if (lastPage === currentPage) {
      hideLoadBtn();
      showLoadMessage(endOfResultsMsg);
    }
    hideLoader();
  } catch (err) {
    console.log(err);
    hideLoader();
  }
}

function scrollToNextGroup() {
  const cardEl = gallery.firstElementChild;

  const cardHeight = cardEl.getBoundingClientRect().height * 2;
  window.scrollBy({
    top: cardHeight,
    behavior: 'smooth',
  });
}