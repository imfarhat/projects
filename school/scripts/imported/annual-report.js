import { loadAnnualReportImgPdfData } from "../utility/content-fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadAnnualReportImgPdfData();
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});