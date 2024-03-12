import { searchImages } from './js/pixabay-api.js';
import { renderImages, clearMarkup, gallery } from './js/render-functions.js';
import {
  showLoader,
  hideLoader,
  showMessage,
  loadMoreImagesButton,
  showLoadBtn,
  hideLoadBtn,
  showLoadMessage
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

searchForm.addEventListener('submit', onSearchBtn);
loadMoreImagesButton.addEventListener('click', onLoadMoreBtn);

async function onSearchBtn(e) {
  e.preventDefault();
  currentPage = 1;
  const searchInput = e.target.elements.search.value.trim().split(' ');
  userWord = searchInput.join('+');
  
  if (!userWord) {
    clearMarkup();
    showMessage(emptyMsg);
    hideLoader();
    return;
  }

  try {
    const res = await searchImages(userWord, currentPage);
    if (res.data.hits.length === 0) {
      hideLoader();
      showMessage(msgErr);
    } else {
      renderImages(res.data.hits);
      scrollToNextGroup()
      showLoadBtn();
    }
    hideLoader();

    if (result.data.totalHits <= per_page) { 
      hideLoadBtn()
  }

} catch {
  console.log(result)
  hideLoader()
}

  e.target.reset();
}

async function onLoadMoreBtn() {
  showLoader()
  currentPage++;

  try {
    const res = await searchImages(userWord, currentPage);
    const lastPage = Math.ceil(res.data.totalHits / perPage);
    renderImages(res.data.hits);

    if (lastPage === currentPage) {
      hideLoadBtn();
      showLoadMessage(endOfResultsMsg);
    }

    hideLoader();
  } catch (error) {
    console.log(error);
    hideLoader();
  }
}

function scrollToNextGroup() {

  const cardEl = gallery.querySelector('.desc-li')

  const cardHeight = cardEl.getBoundingClientRect().height * 2;
      window.scrollBy({
        top: cardHeight, 
        behavior: 'smooth' 
      });
  }

