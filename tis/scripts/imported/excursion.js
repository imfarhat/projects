import { loadExcursionData } from "../utility/content-fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadExcursionData();
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});