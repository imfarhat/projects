import { loadFirstCarousel, firstCarouselInteractor } from "../components/home.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadFirstCarousel();
    firstCarouselInteractor();
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});