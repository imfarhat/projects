import { loadSportsDivData } from "../utility/content-fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadSportsDivData();
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});