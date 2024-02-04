try {
  let adCount = parseInt(localStorage.getItem("adCount")) || 0;
  let savedTimeInS = parseInt(localStorage.getItem("savedTimeInS")) || 0;

  // Listen for requests for the ad count
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.requestStats) {
      // Send the ad count to the popup script i.e. index.js
      chrome.runtime.sendMessage({
        adCount: localStorage.getItem("adCount") || 0,
        savedTimeInS: localStorage.getItem("savedTimeInS") || 0,
      });
    }
  });

  function clickAdSkipButton() {
    const adSkipButton =
      document.querySelector(".ytp-ad-skip-button-modern") ||
      document.querySelector(".ytp-ad-skip-button");
    if (!adSkipButton) return;
    adSkipButton.click();
    localStorage.setItem("adCount", ++adCount);
    localStorage.setItem("savedTimeInS", savedTimeInS + 5);
  }

  async function tackleUnskippableAds() {
    const moviePlayer = document.getElementById("movie_player");
    const videoStream = document.querySelector(".video-stream");
    const playerTimeInS = Number(videoStream?.currentTime) || 0;

    if (
      moviePlayer &&
      videoStream &&
      moviePlayer.classList.contains("ad-showing")
    ) {
      const adDurationSpan = document.querySelector(".ytp-time-duration");
      const adDuration =
        adDurationSpan?.textContent || adDurationSpan?.innerText;
      const adDurationInSeconds = ((
        [minutes, seconds] = (adDuration || "").split(":").map(Number)
      ) => minutes * 60 + seconds)();

      setTimeout(() => {
        window.addEventListener("load", () => {
          if (moviePlayer.classList.contains("ad-showing")) {
            chrome.runtime.sendMessage({
              updateTab: true,
              timeInS: playerTimeInS,
            });
          }
          localStorage.setItem("adCount", ++adCount);
          localStorage.setItem(
            "savedTimeInS",
            savedTimeInS + adDurationInSeconds
          );
        });
      }, 100);
    }
  }

  setInterval(clickAdSkipButton, 100);
  setInterval(tackleUnskippableAds, 100);
} catch (error) {
  console.log(`An error occurred while running SkipPi!`);
  console.log(error);
}
