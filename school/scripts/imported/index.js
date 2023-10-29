import { checkLargeDevice } from "../utility/device-check.js";
import { loadNavMarquee } from "../utility/nav-marquee.js";
import { loadLargeNav, largeNavInteractor } from "../exported/large-nav.js";
import { loadSmallNav, handleNavBarsClick } from "../exported/small-nav.js";
import { loadSocialSmallNav } from "../exported/s-nav-social.js";

try {
  loadNavMarquee();
  if (checkLargeDevice()) {
    loadLargeNav();
    largeNavInteractor();
  } else {
    loadSmallNav();
    loadSocialSmallNav();
  }
  const smallNavBtn = document.getElementById('js-small-nav-btn');
  smallNavBtn.addEventListener('click', () => {
    handleNavBarsClick();
  });
} catch (error) {
  // Handle any errors that may occur
  console.error("An error occurred:", error);
}
