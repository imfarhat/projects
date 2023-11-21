import { loadAdministrativeTeamData } from "../utility/content-fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadAdministrativeTeamData();
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
});