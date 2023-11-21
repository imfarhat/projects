import { loadTeachersTrainingData } from "../utility/content-fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadTeachersTrainingData();
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});