import { checkLargeDevice } from "../utility/device-check.js";
import { loadNavMarquee } from "../utility/nav-marquee.js";
import { loadLargeNav, largeNavInteractor, handleNavBarsClick, loadSocialSmallNav, loadNavLogo,loadNavBarsI } from "../components/index.js";


document.addEventListener("DOMContentLoaded", () => {
  try {
    loadNavMarquee();
    loadNavLogo();
    loadLargeNav();
    largeNavInteractor();
    loadNavBarsI();
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