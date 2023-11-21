import { loadNewsMediaData } from "../utility/content-fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadNewsMediaData();
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});