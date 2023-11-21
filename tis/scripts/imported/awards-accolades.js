import { loadAllAwardsAccolades } from "../utility/content-fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadAllAwardsAccolades();
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});