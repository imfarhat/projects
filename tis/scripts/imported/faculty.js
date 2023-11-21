import { loadAllFacultyData } from "../utility/content-fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadAllFacultyData();
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});