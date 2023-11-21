import { firstCarouselInteractor } from "../components/home.js";
import { loadNavMarquee, loadHomeNotice } from "../utility/content-fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadNavMarquee();
    firstCarouselInteractor();
    loadHomeNotice();

    const circularsScroller = document.querySelector('#circulars-locator-for-scrollig')
    let showHideOldCirculars = document.getElementById('show-hide-old-circulars-btn');
    let shodHideCircularsEye = showHideOldCirculars.querySelector('i');
    showHideOldCirculars.addEventListener('click', () => {
        let isEyeIcon = shodHideCircularsEye.classList.contains('fa-eye');
        loadHomeNotice(!isEyeIcon);
        shodHideCircularsEye.classList.toggle('fa-eye', !isEyeIcon) && circularsScroller.scrollIntoView({ behavior: 'smooth' });
        shodHideCircularsEye.classList.toggle('fa-eye-slash', isEyeIcon);
    });
    
  }
  catch (error) {
    console.error("An error occurred while loading home defatult contents like nav marque, 10 recent circulars/all circulars, carousel/slider interactor js", error);
  }
});