import axios from 'axios';
export axios function searchImages(query) {
  const BASE_URL = 'https://pixabay.com/';
  const END_POINT = 'api/';
  const params = new URLSearchParams({
    key: '42797390-82869f1936654cf50378828df',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  
  const url = `${BASE_URL}${END_POINT}?${params}`;
  
try {
  const response = await axios.get(url);
  if (response.status !== 200) {
    throw new Error(response.status);
  }
  return response.data;
} catch (error) {
  throw new Error(error);
}
}