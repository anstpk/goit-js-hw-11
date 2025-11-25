import axios from "axios";

const API_KEY = "53403770-87d4de3df2f0f55697bb62e3a";
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      per_page: 40,
    },
  })
  .then(response => {
    return response.data;
  });
}