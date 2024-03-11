import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '42797390-82869f1936654cf50378828df';

export async function searchImages(q) {
  const params = {
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  
  const url = await axios.get(`${BASE_URL}/`,{params});
 return res.data;
  };