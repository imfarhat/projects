import { loadAllClassroomData } from "../utility/content-fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadAllClassroomData();
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});