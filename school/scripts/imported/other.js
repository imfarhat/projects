import { loadAllOtherInrastructureData } from "../utility/content-fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadAllOtherInrastructureData();
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});