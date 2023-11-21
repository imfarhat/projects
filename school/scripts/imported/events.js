import { loadEventsData } from "../utility/content-fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadEventsData();
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});