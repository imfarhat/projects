import { largeNavInteractor, handleNavBarsClick } from "../components/index.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    largeNavInteractor();
    let allImages = document.querySelectorAll('img');
    allImages.forEach(img => {
      if (!img.loading || img.loading !== 'lazy') {
        img.loading = 'lazy';
      }
    });
    const smallNavBtn = document.getElementById('js-small-nav-btn');
    smallNavBtn.addEventListener('click', () => {
      handleNavBarsClick();
    });
  } catch (error) {
    console.error("An error occurred while applying nav interactions, nav bar clicks & setting the loading attribute to lazy for all imgs:", error);
  }
});
