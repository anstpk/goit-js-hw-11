import "izitoast/dist/css/iziToast.css";
import iziToast from "izitoast";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import "loaders.css/loaders.min.css";
import "./css/styles.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";

const form = document.querySelector(".form");
const input = form.querySelector('input[name="search-text"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.error({
      title: "Error",
      message: "Please enter a search term.",
      position: "topRight",
    });
    return;
  }

  clearGallery();

  showLoader();

  getImagesByQuery(query)
    .then(data => {
      const hits = data.hits || [];
      if (hits.length === 0) {
        iziToast.info({
          title: "No results",
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
        });
        return;
      }

      createGallery(hits);
    })
    .catch(err => {
      console.error(err);
      iziToast.error({
        title: "Network error",
        message: "Something went wrong while fetching images. Please try again later.",
        position: "topRight",
      });
    })
    .finally(() => {
      hideLoader();
    });
});