document.addEventListener("DOMContentLoaded", () => {
  try {
    // DOM elements
    const notOnYT = document.getElementById("notOnYT");
    const statsNotLoaded = document.getElementById("statsNotLoaded");
    const adCountSpan = document.getElementById("adCountSpan");
    const savedTimeInSec = document.getElementById("savedTimeInS");
    const savedTimeInM = document.getElementById("savedTimeInM");
    const savedTimeInH = document.getElementById("savedTimeInH");
    const savedTimeInSecSpan = document.getElementById("savedTimeInSSpan");
    const savedTimeInMSpan = document.getElementById("savedTimeInMSpan");
    const savedTimeInHSpan = document.getElementById("savedTimeInHSpan");
    const stoppedStatus = document.getElementById("stopped");
    const runningStatus = document.getElementById("running");
    const adCountSection = document.getElementById("adCountSection");
    const savingsSection = document.getElementById("savingStats");
    const sEqualsM = document.getElementById("sEqualsM");
    const mEqualsH = document.getElementById("mEqualsH");

    // Query active tab and check for YouTube URL
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab?.url.startsWith("https://www.youtube.com")) {
        // Hide 'stopped' and show 'running' status
        stoppedStatus.classList.add("hidden");
        notOnYT.classList.add("hidden");
        runningStatus.classList.remove("hidden");
        statsNotLoaded.classList.remove("hidden");
      }
      // Check if the tab has finished loading before sending a message
      if (
        activeTab?.url.startsWith("https://www.youtube.com") &&
        activeTab.status === "complete"
      )
        chrome.tabs.sendMessage(activeTab.id, { requestStats: true });
    });

    // Listen for messages from the content script i.e. script.js
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      // Update UI (index.html) based on the received message
      statsNotLoaded.classList.add("hidden");

      let adCount = message.adCount;
      let savedTimeInS = message.savedTimeInS;

      adCountSpan.innerHTML = adCount;
      savedTimeInSec.innerHTML = savedTimeInS;

      adCountSection.classList.remove("hidden");
      savingsSection.classList.remove("hidden");

      // Update ad count based on different ranges
      if (savedTimeInS >= 60 && savedTimeInS < 3600) {
        savedTimeInM.innerHTML = Math.round((savedTimeInS * 100) / 60) / 100;
        sEqualsM.classList.remove("hidden");
        savedTimeInMSpan.classList.remove("hidden");
      } else if (savedTimeInS >= 3600) {
        savedTimeInSecSpan.classList.add("hidden");
        sEqualsM.classList.add("hidden");
        savedTimeInM.innerHTML = Math.round((savedTimeInS * 100) / 60) / 100;
        savedTimeInMSpan.classList.remove("hidden");
        savedTimeInH.innerHTML = Math.round((savedTimeInS * 100) / 3600) / 100;
        mEqualsH.classList.remove("hidden");
        savedTimeInHSpan.classList.remove("hidden");
      }
    });
  } catch (error) {
    // Log error details if an exception occurs
    console.log("An error occurred while loading stats for SkipPi!");
    console.log(error);
  }
});
