import { loadAllLaboratoriesData } from "../utility/content-fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadAllLaboratoriesData();
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});