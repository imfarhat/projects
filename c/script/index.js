/*function updateOutputBtnIcon(outputImgP,outputBtnIconP) {
  let outputImg = document.querySelector(outputImgP);
  let outputBtnIcon = document.querySelector(outputBtnIconP);
  outputBtnIcon.classList.toggle('fa-eye-slash') && outputImg.classList.remove('js-output-img-hide');
  outputBtnIcon.classList.toggle('fa-eye') && outputImg.classList.add('js-output-img-hide');
} */
function updateOutputBtnIcon(outputImgP,outputBtnIconP) {
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
}
function updateThemeBtnIcon(codeImgDayP,codeImgNightP,themeBtnIconP) {
  let codeImgDay = document.querySelector(codeImgDayP);
  let codeImgNight = document.querySelector(codeImgNightP);
  let themeBtnIcon = document.querySelector(themeBtnIconP);
  
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
const img = document.querySelector("img");
img.ondragstart = () => {
  return false;
};
document.addEventListener('contextmenu', event => event.preventDefault());
/*// Function to load and insert external HTML content
function includeHTML() {
  fetch('sections/index-c-codes.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('included-buttons').innerHTML = data;
    });
    fetch('sections/index-sections.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('included-sections').innerHTML = data;
    });
}

// Call the includeHTML function when the page loads
window.addEventListener('load', includeHTML);*/
