import { loadTransportData } from "../utility/content-fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadTransportData();
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});