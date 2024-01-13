let inputFile = document.getElementById("input-file");
let previewImgDiv = document.getElementById("img-preview-div");
let previewImg = document.getElementById("img-preview");
let previewFileName = document.getElementById("selected-file-name");
let messageBox = document.getElementById("message");
let intialMessage = document.getElementById("log-0");
let logHistoryBox = document.getElementById("log-history");
let outputImg = document.getElementById("output-f-src");
let outputDFile = document.getElementById("output-d-file");
let outputB64CopyDiv = document.getElementById("output-b64-div");
let outputB64TickImg = document.getElementById("output-b64-tick-img");
let outputB64Message = document.getElementById("copy-b64-message");
let base64Snippet = document.getElementById("base64-snippet");
let genImgDiv = document.getElementById("gen-img-f-b64-div");
let inputBase64 = document.getElementById("input-base64");
let genImgFGenB64 = document.getElementById("gen-img-f-gen-b64");
let genImgFGenB64Tick = document.getElementById("gen-img-f-gen-b64-tick-img");
let clearLogsBtn = document.getElementById("clear-logs-btn");
let imgObj = {};
let result = "";
let rsplit = "";
let pureBase64 = "";
// Event listener for file input change
inputFile.addEventListener("change", () => {
  if (logHistoryBox.innerHTML.length <= 151) {
    logEvent("Image selected, file reading started");
  } else {
    logHistoryBox.innerHTML = `
        <summary class="font-semibold transition-all rounded-md pb-2 text-sm md:text-base cursor-pointer select-none">Detailed Log History</summary>
    <button onclick="clearLogs();" id="clear-logs-btn" class="absolute top-2 right-2 bg-red-500 text-white py-1 px-2 md:px-3 z-10 text-sm md:text-balance rounded">Clear <span class="hidden md:inline-block">logs</span>
    </button>
      <li class="list-decimal pl-4 text-sm md:text-base"><span class="">Image selected, file reading started</span> - ${new Date().toLocaleTimeString()}.</li>`;
    intialMessage.innerHTML = `<span class="">Image selected, file reading started</span> - ${new Date().toLocaleTimeString()}`;
  }
  intialMessage.classList.remove("hidden");
  logHistoryBox.classList.remove("hidden");

  let fileReader = new FileReader();

  fileReader.addEventListener("loadend", () => {
    result = fileReader.result;
    previewImg.src = result;
    previewFileName.innerHTML = `<b class="font-semibold text-sm md:text-base p-2">Selected File:</b> ${inputFile.files[0].name}`;
    previewImgDiv.classList.remove("hidden");

    logEvent('<span class="text-green-500">Base 64 code generated</span>');

    rsplit = result.split("base64,")[1];
    base64Snippet.innerHTML = rsplit;

    logEvent('<span class="text-green-500">Clean base64 code generated</span>');

    outputB64CopyDiv.classList.remove("hidden");
    base64Snippet.classList.remove("hidden");

    imgObj = {
      base64: rsplit,
      type: inputFile.files[0].type,
      name: inputFile.files[0].name,
    };
  });

  fileReader.readAsDataURL(inputFile.files[0]);
});

// Event listener for clicking the "Copy Base64" button
outputB64CopyDiv.addEventListener("click", () => {
  logEvent('<span class="text-green-600">Copied generated base64 code</span>');
  outputB64TickImg.classList.remove("hidden");

  // Create a temporary textarea element with a specified class
  let textarea = document.createElement("textarea");
  textarea.value = base64Snippet.innerHTML;

  // Append the textarea to the document
  document.body.appendChild(textarea);

  // Select the text in the textarea
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Remove the temporary textarea from the document
  document.body.removeChild(textarea);

  outputB64Message.innerHTML = `Copied Code <i class="fa-solid fa-clipboard-check text-xl pl-2"></i>`;

  setTimeout(() => {
    outputB64TickImg.classList.add("hidden");
    outputB64Message.innerHTML = `Copy Base64 Code <i class="fa-solid fa-clipboard text-xl pl-2"></i>`;
  }, 5000);
});

// Event listener for clicking the "Download" link
outputDFile.addEventListener("click", () => {
  logEvent(
    '<span class="text-green-600">Image (generated from Base64) downloaded successfully</span>'
  );
});

//Function to check if any code in textarea to generate image file
genImgDiv.addEventListener("click", () => {
  if (inputBase64.value.length) {
    logEvent('<span class="">Base64 code reading started</span>');
    outputDFile.href = "data:image/png;base64," + inputBase64.value;
    outputImg.src = "data:image/png;base64," + inputBase64.value;
    outputDFile.download = `Image Generated from Base64`;
    intialMessage.classList.remove("hidden");
    logHistoryBox.classList.remove("hidden");

    // Check if event listeners are already attached
    let loadListener = () => {
      outputDFile.classList.remove("hidden");
      logEvent(
        '<span class="text-green-600">Image generated from base64 code</span>'
      );
    };

    let errorListener = () => {
      outputDFile.classList.add("hidden");
      logEvent(
        '<span class="text-red-500">Error: Invalid Base64 code, failed to generate image</span>'
      );
    };

    if (!outputImg.hasAttribute("data-event-listeners")) {
      // Add event listeners only if they are not already attached
      outputImg.addEventListener("load", loadListener);
      outputImg.addEventListener("error", errorListener);
      outputImg.setAttribute("data-event-listeners", "true");
    }
  } else {
    logEvent(
      '<span class="text-red-500">Error: Empty input!, Please paste base64 code of image file</span>'
    );
    intialMessage.classList.remove("hidden");
  }
});

// Function t o clear logs
function clearLogs() {
  logHistoryBox.innerHTML = `
    <summary class="font-semibold transition-all rounded-md pb-2 text-sm md:text-base cursor-pointer select-none">Detailed Log History</summary>
    <button onclick="clearLogs();" id="clear-logs-btn" class="absolute top-2 right-2 bg-red-500 text-white py-1 px-2 md:px-3 z-10 text-sm md:text-balance rounded">Clear <span class="hidden md:inline-block">logs</span>
    </button>
    `;
  logEvent('<span class="text-green-600">Cleared logs</span>');
  intialMessage.classList.remove("hidden");
}

// Function to log events and update UI
function logEvent(message) {
  logHistoryBox.innerHTML += `<li class="list-decimal pl-4 text-sm md:text-base">${message} - ${new Date().toLocaleTimeString()}.</li>`;
  intialMessage.innerHTML = `${message} - ${new Date().toLocaleTimeString()}`;
}
