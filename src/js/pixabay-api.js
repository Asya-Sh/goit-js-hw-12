import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42797390-82869f1936654cf50378828df';

export async function searchImages(userValue, currentPage) {
  const params = {
    key: API_KEY,
    q: userValue,
    page: currentPage,
    per_page: 15,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return await axios.get(`${BASE_URL}`, { params });
}
