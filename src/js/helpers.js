import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import error from '../img/error.svg';

const loader = document.querySelector('.loader');
export const loadMoreImagesButton = document.querySelector('.load-more');

export function showLoader() {
  loader.classList.remove('is-hide');
}

export function hideLoader() {
  loader.classList.add('is-hide');
}

export function showMessage(message) {
  iziToast.error({
    message,
    backgroundColor: '#EF4040',
    messageColor: '#fff',
    position: 'topRight',
    iconUrl: error,
  });
}

export function showLoadBtn() {
  loadMoreImagesButton.classList.remove('is-hide');
}

export function hideLoadBtn() {
  loadMoreImagesButton.classList.add('is-hide');
}

export function showLoadMessage(message) {
  iziToast.error({
    message,
    backgroundColor: '#EF4040',
    messageColor: '#fff',
    position: 'topRight',
  });
}