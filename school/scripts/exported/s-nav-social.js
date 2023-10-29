export { loadSocialSmallNav };
function loadSocialSmallNav() {
  let  sNavSocialDiv = document.querySelector('.js-s-nav-social-media');
  sNavSocialDiv.innerHTML = `
  <i class="fa-brands fa-instagram cursor-pointer text-center p-1.5 transition active:scale-90 text-white bg-gradient-to-tr from-yellow-500 via-red-600 to-purple-500 rounded-lg"></i>
  <i class="fa-brands fa-x-twitter cursor-pointer text-center p-1.5 transition active:scale-90 text-white bg-gradient-to-b from-black to-black rounded-lg"></i>
  <i class="fa-brands fa-whatsapp cursor-pointer text-center p-1.5 transition active:scale-90 text-white bg-gradient-to-b from-green-500 to-green-600 rounded-lg"></i>
  `;
};