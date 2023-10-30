import { checkLargeDevice } from "../utility/device-check.js";
import { loadNavMarquee } from "../utility/nav-marquee.js";
import { loadLargeNav, largeNavInteractor, handleNavBarsClick, loadSocialSmallNav } from "../components/index.js";


document.addEventListener("DOMContentLoaded", () => {
  try {
    loadNavMarquee();
    loadLargeNav();
    largeNavInteractor();
    loadSocialSmallNav();
    const smallNavBtn = document.getElementById('js-small-nav-btn');
    smallNavBtn.addEventListener('click', () => {
      handleNavBarsClick();
    });
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});