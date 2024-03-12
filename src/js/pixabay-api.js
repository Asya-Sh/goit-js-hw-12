import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com';
const END_POINT = '/api/';
const API_KEY = '42797390-82869f1936654cf50378828df';

export async function searchImages(q, page) {
  const { data } = await axios.get(`${END_POINT}`, {
    params: {
      key: API_KEY,
      q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  });
  return data;
}
