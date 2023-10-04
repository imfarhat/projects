  function updateOutputBtnIcon(outputImgP,outputBtnIconP) {
  let outputImg = document.querySelector(outputImgP);
  let outputBtnIcon = document.querySelector(outputBtnIconP);
  outputBtnIcon.classList.toggle('fa-eye') && outputImg.classList.remove('js-output-img-hide');
  outputBtnIcon.classList.toggle('fa-eye-slash') && outputImg.classList.add('js-output-img-hide');
} 

function updateCopyBtnIcon(copyBtnIconP) {
  let copyBtnIcon = document.querySelector(copyBtnIconP);
  copyBtnIcon.classList.toggle('fa-circle-check');
  copyBtnIcon.classList.toggle('fa-copy');
  setTimeout(() => {
    copyBtnIcon.classList.toggle('fa-circle-check');
    copyBtnIcon.classList.toggle('fa-copy');
  }, 2500);
}
function copyCodeToClipboard(codeTextareaId) {
  const codeText = document.getElementById(codeTextareaId).value;
  const dummyTextarea = document.createElement("textarea");
  dummyTextarea.value = codeText;
  document.body.appendChild(dummyTextarea);
  dummyTextarea.select();
  document.execCommand('copy');
  document.body.removeChild(dummyTextarea);
}
// Function to prevent image dragging and context menue
const img = document.querySelector("img");
img.ondragstart = () => {
  return false;
};
document.addEventListener('contextmenu', event => event.preventDefault());

// Function to set the theme preference in local storage
function setThemePreference(isDarkMode) {
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Function to retrieve the theme preference from local storage
function getThemePreference() {
  return localStorage.getItem('theme');
}

// Function to update the theme based on user preference
function updateTheme() {
  const themeBtnIcon = document.querySelector('.js-theme-btn i');
  const currentTheme = getThemePreference();

  if (currentTheme === 'dark') {
    themeBtnIcon.classList.remove('fa-moon');
    themeBtnIcon.classList.add('fa-sun');
  } else {
    themeBtnIcon.classList.remove('fa-sun');
    themeBtnIcon.classList.add('fa-moon');
  }

  // Toggle the theme based on the current preference
  const codeImages = document.querySelectorAll('.js-code, .js-dark-code');
  codeImages.forEach(image => {
    const isDarkCode = image.classList.contains('js-dark-code');
    image.classList.toggle('js-dark-code-hide', currentTheme === 'dark' && isDarkCode);
    image.classList.toggle('js-code-hide', currentTheme === 'light' && !isDarkCode);
  });
}


// Function to initialize the theme based on the user's preference or default to light theme
function initializeTheme() {
  const currentTheme = getThemePreference();

  if (currentTheme === 'dark') {
    setThemePreference(true);
  } else {
    setThemePreference(false);
  }

  updateTheme();
}

// Add an event listener to the theme button to toggle the theme preference
document.querySelector('.js-theme-btn').addEventListener('click', () => {
  const currentTheme = getThemePreference();
  setThemePreference(currentTheme === 'dark' ? false : true);
  updateTheme();
});

// Initialize the theme based on user preference or default
initializeTheme();


const scrollToTopButton = document.getElementById("scrollToTopButton");

window.addEventListener("scroll", () => {
    scrollToTopButton.style.display = window.scrollY > window.innerHeight ? "block" : "none";
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
