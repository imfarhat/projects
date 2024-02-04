chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Check if the message has 'updateTab' property
  if (message.updateTab) {
    // Query for the currently active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length) {
        let currentUrl = tabs[0].url;

        // Check if the URL contains '&t='
        if (currentUrl.includes("&t=")) {
          currentUrl = currentUrl.replace(/&t=[^&]*/i, "");
        }

        // Append the new time parameter to the URL
        currentUrl += `&t=${message.timeInS}s`;
        chrome.tabs.update(tabs[0].id, { url: currentUrl });
      }
    });
  }
});
