import { loadCampusDivData } from "../utility/content-fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadCampusDivData();
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});