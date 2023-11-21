import { loadCircularsImgPdfData } from "../utility/content-fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadCircularsImgPdfData();
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});