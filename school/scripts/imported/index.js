import { largeNavInteractor, handleNavBarsClick } from "../components/index.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    largeNavInteractor();
    const smallNavBtn = document.getElementById('js-small-nav-btn');
    smallNavBtn.addEventListener('click', () => {
      handleNavBarsClick();
    });
  } catch (error) {
    console.error("An error occurred while applying nav interactions, nav bar clicks & setting the loading attribute to lazy for all imgs:", error);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // Get the current URL
  const currentUrl = window.location.href;

  // Remove ".html" from the URL
  let updatedUrl = currentUrl.replace(/\.html$/, '');

  // Handle the special case of "index.html"
  updatedUrl = updatedUrl.replace(/\/index$/, '/');

  // Update the URL if it has changed
  if (currentUrl !== updatedUrl) {
      history.replaceState(null, '', updatedUrl);
  }
});

