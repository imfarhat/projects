document.addEventListener("DOMContentLoaded", () => {
  try {
    // Request the ad count from the content script i.e. script.js
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { requestAdCount: true });
    });

    const adCountSpan = document.getElementById("adCountSpan");
    const adCountInS = document.getElementById("adCountInS");
    const adCountInM = document.getElementById("adCountInM");
    const adCountInH = document.getElementById("adCountInH");
    const adCountInSSpan = document.getElementById("adCountInSSpan");
    const adCountInMSpan = document.getElementById("adCountInMSpan");
    const adCountInHSpan = document.getElementById("adCountInHSpan");
    const stoppedStatus = document.getElementById("stopped");
    const runningStatus = document.getElementById("running");
    const adCountSection = document.getElementById("adCountSection");
    const savingsSevtion = document.getElementById("savings");
    const sEqualsM = document.getElementById("sEqualsM");
    const mEqualsH = document.getElementById("mEqualsH");

    // Listen for messages from the content script i.e. script.js
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      stoppedStatus.classList.add("hidden");
      runningStatus.classList.remove("hidden");
      adCountSection.classList.remove("invisible");
      savingsSevtion.classList.remove("invisible");
      let adCount = message.adCount;

      // Update popup HTML i.e. index.html
      adCountSpan.innerHTML = adCount || 0;
      adCountInS.innerHTML = adCount * 5;
      if (adCount >= 12 && adCount < 720) {
        adCountInM.innerHTML = Math.round((adCount * 100) / 12) / 100;
        sEqualsM.classList.remove("hidden");
        adCountInMSpan.classList.remove("hidden");
      } else if (adCount >= 720) {
        adCountInSSpan.classList.add("hidden");
        sEqualsM.classList.add("hidden");
        adCountInM.innerHTML = Math.round((adCount * 100) / 12) / 100;
        adCountInMSpan.classList.remove("hidden");
        adCountInH.innerHTML = Math.round((adCount * 100) / 720) / 100;
        mEqualsH.classList.remove("hidden");
        adCountInHSpan.classList.remove("hidden");
      }
    });
  } catch (error) {
    console.log(
      "An error occured while loading stats for Auto Skip YouTube Ads!"
    );
    console.log(error);
  }
});
