import { loadVideoGallerytData } from "../utility/content-fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadVideoGallerytData();
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});