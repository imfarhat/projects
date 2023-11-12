import { loadNavMarquee, loadHomeNotice } from "../utility/content-fetch.js";
import { largeNavInteractor, handleNavBarsClick } from "../components/index.js";


document.addEventListener("DOMContentLoaded", () => {
  try {
    loadNavMarquee();
    largeNavInteractor();
    const smallNavBtn = document.getElementById('js-small-nav-btn');
    smallNavBtn.addEventListener('click', () => {
      handleNavBarsClick();
    });
    loadHomeNotice();
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});