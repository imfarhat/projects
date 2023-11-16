import { firstCarouselInteractor } from "../components/home.js";
import { loadNavMarquee, loadHomeNotice } from "../utility/content-fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadNavMarquee();
    firstCarouselInteractor();
    loadHomeNotice();

  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});