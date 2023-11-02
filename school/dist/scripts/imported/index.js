import { loadNavMarquee } from "../utility/nav-marquee.js";
import { largeNavInteractor, handleNavBarsClick } from "../components/index.js";


document.addEventListener("DOMContentLoaded", () => {
  try {
    loadNavMarquee();
    largeNavInteractor();
    const smallNavBtn = document.getElementById('js-small-nav-btn');
    smallNavBtn.addEventListener('click', () => {
      handleNavBarsClick();
    });
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});