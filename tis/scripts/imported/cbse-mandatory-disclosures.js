import { loadCBSEMandatoryDisclosures } from "../utility/content-fetch.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    loadCBSEMandatoryDisclosures();    
  }
  catch (error) {
    console.error("An error occurred while loading home defatult contents like nav marque, 10 recent circulars/all circulars, carousel/slider interactor js", error);
  }
});