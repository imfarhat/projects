import { firstCarouselInteractor } from "../components/home.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    firstCarouselInteractor();
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});