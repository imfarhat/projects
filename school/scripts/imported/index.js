import { largeNavInteractor, handleNavBarsClick } from "../components/index.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
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