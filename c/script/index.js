  function updateOutputBtnIcon(outputImgP,outputBtnIconP) {
  let outputImg = document.querySelector(outputImgP);
  let outputBtnIcon = document.querySelector(outputBtnIconP);
  outputBtnIcon.classList.toggle('fa-eye') && outputImg.classList.remove('js-output-img-hide');
  outputBtnIcon.classList.toggle('fa-eye-slash') && outputImg.classList.add('js-output-img-hide');
} 
/*function updateOutputBtnIcon(outputImgP,outputBtnIconP) {
  let outputImg = document.querySelector(outputImgP);
  let outputBtnIcon = document.querySelector(outputBtnIconP);
  
  if (outputBtnIcon.classList.contains('fa-eye')) {
    outputBtnIcon.classList.toggle('fa-eye');
    outputBtnIcon.classList.toggle('fa-eye-slash');
    outputImg.classList.remove('js-output-img-hide');
  } else if (outputBtnIcon.classList.contains('fa-eye-slash')) {
    outputBtnIcon.classList.toggle('fa-eye-slash');
    outputBtnIcon.classList.toggle('fa-eye');
    outputImg.classList.add('js-output-img-hide');
  }
}*/



/*
function updateThemeBtnIcon() {
  let codeImgDay = document.querySelector('.js-code');
  let codeImgNight = document.querySelector('.js-dark-code');
  let themeBtnIcon = document.querySelector('.js-theme-btn i');
  
  if (themeBtnIcon.classList.contains('fa-sun')) {
    themeBtnIcon.classList.toggle('fa-sun');
    themeBtnIcon.classList.toggle('fa-moon');
    codeImgNight.classList.add('js-dark-code-hide');
    codeImgDay.classList.remove('js-code-hide');
  } else if (themeBtnIcon.classList.contains('fa-moon')) {
    themeBtnIcon.classList.toggle('fa-moon');
    themeBtnIcon.classList.toggle('fa-sun');
    codeImgNight.classList.remove('js-dark-code-hide');
    codeImgDay.classList.add('js-code-hide');
  }
}*/
function updateThemeBtnIcon() {
  const codeImages = document.querySelectorAll('.js-code, .js-dark-code');
  const themeBtnIcon = document.querySelector('.js-theme-btn i');
  
  themeBtnIcon.classList.toggle('fa-sun');
  themeBtnIcon.classList.toggle('fa-moon');

  codeImages.forEach(image => {
    const isDarkCode = image.classList.contains('js-dark-code');
    image.classList.toggle('js-dark-code-hide', themeBtnIcon.classList.contains('fa-moon') && isDarkCode);
    image.classList.toggle('js-code-hide', themeBtnIcon.classList.contains('fa-sun') && !isDarkCode);
  });
}


/*
function updateThemeBtnIcon() {
  let codeImgDay = document.querySelector('.js-code');
  let codeImgNight = document.querySelector('.js-dark-code');
  let themeBtnIcon = document.querySelector('.js-theme-btn i');
  
  if (themeBtnIcon.classList.contains('fa-sun')) {
    themeBtnIcon.classList.toggle('fa-sun');
    themeBtnIcon.classList.toggle('fa-moon');
    codeImgNight.classList.add('js-dark-code-hide');
    codeImgDay.classList.remove('js-code-hide');
  } else if (themeBtnIcon.classList.contains('fa-moon')) {
    themeBtnIcon.classList.toggle('fa-moon');
    themeBtnIcon.classList.toggle('fa-sun');
    codeImgNight.classList.remove('js-dark-code-hide');
    codeImgDay.classList.add('js-code-hide');
  }
}*/
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
const img = document.querySelector("img");
img.ondragstart = () => {
  return false;
};
document.addEventListener('contextmenu', event => event.preventDefault());
/*
// Function to load and insert external HTML content
function includeHTML() {
  fetch('sections/index-control-panels.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('included-control-panels').innerHTML = data;
    });
    fetch('sections/index-c-codes.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('included-sections-c-codes').innerHTML = data;
    });
}

// Call the includeHTML function when the page loads
window.addEventListener('load', includeHTML);
*/

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
    themeBtnIcon.classList.remove('fa-sun');
    themeBtnIcon.classList.add('fa-moon');
  } else {
    themeBtnIcon.classList.remove('fa-moon');
    themeBtnIcon.classList.add('fa-sun');
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

