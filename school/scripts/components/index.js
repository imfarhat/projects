export { loadLargeNav, largeNavInteractor, handleNavBarsClick, loadSocialSmallNav };

function loadLargeNav() {
  let LargeNav = document.querySelector('.js-large-nav');
  LargeNav.innerHTML = `
  <li class="list-none px-2 py-1 bg-white hover:bg-[#EDF2FB] active:scale-95 active:bg-[#EDF2FB] hover:border-t-4 active:border-t-4 border-blue-400 rounded-md cursor-pointer transition-colors ease-in duration-200">
  Home
</li>

<li class="list-none px-2 py-1 bg-white hover:bg-[#EDF2FB] active:bg-[#EDF2FB] hover:border-t-4 hover:border-2 lg:hover:border-x-0 lg:hover:border-b-0 active:border-t-4 border-blue-400 rounded-md cursor-pointer transition-colors ease-in duration-200">
  <details>
    <summary class="flex">About</summary>
    <ul class="absolute left-[10.5rem] lg:left-auto flex flex-col justify-center items-center bg-[#EDF2FB] rounded-b-lg border-l-2 border-b-2 border-blue-400 text-start drop-shadow-lg w-[50vw] lg:w-auto">
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        TIS Society
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        Affiliation
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        Visition & Mission
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200br-lg rounded-b-lg">
        Self Affidavit Fromat
      </li>
    </ul>
  </details>
</li>

<li class="list-none px-2 py-1 bg-white hover:bg-[#EDF2FB] active:bg-[#EDF2FB] hover:border-t-4 hover:border-2 lg:hover:border-x-0 lg:hover:border-b-0 active:border-t-4 border-blue-400 rounded-md cursor-pointer transition-colors ease-in duration-200">
  <details>
    <summary class="flex">Team</summary>
    <ul class="absolute left-[10.5rem] lg:left-auto flex flex-col justify-center items-center bg-[#EDF2FB] rounded-b-lg border-l-2 border-b-2 border-blue-400 text-start drop-shadow-lg w-[50vw] lg:w-auto">
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        Board
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        Faculty
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        Administrative
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200br-lg rounded-b-lg">
        Pricipal's Message
      </li>
    </ul>
  </details>
</li>

<li class="list-none px-2 py-1 bg-white hover:bg-[#EDF2FB] active:bg-[#EDF2FB] hover:border-t-4 hover:border-2 lg:hover:border-x-0 lg:hover:border-b-0 active:border-t-4 border-blue-400 rounded-md cursor-pointer transition-colors ease-in duration-200">
  <details>
    <summary class="flex">Infrastructure</summary>
    <ul class="absolute left-[10.5rem] lg:left-auto flex flex-col justify-center items-center bg-[#EDF2FB] rounded-b-lg border-l-2 border-b-2 border-blue-400 text-start drop-shadow-lg w-[50vw] lg:w-auto">
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        Sports
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        Campus
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        Library
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        Classrooms
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200br-lg rounded-b-lg">
        Laboratories
      </li>
    </ul>
  </details>
</li>

<li class="list-none px-2 py-1 bg-white hover:bg-[#EDF2FB] active:bg-[#EDF2FB] hover:border-t-4 hover:border-2 lg:hover:border-x-0 lg:hover:border-b-0 active:border-t-4 border-blue-400 rounded-md cursor-pointer transition-colors ease-in duration-200">
  <details>
    <summary class="flex">Curriculum</summary>
    <ul class="absolute left-[10.5rem] lg:left-auto flex flex-col justify-center items-center bg-[#EDF2FB] rounded-b-lg border-l-2 border-b-2 border-blue-400 text-start drop-shadow-lg w-[50vw] lg:w-auto">
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        Pre Primary
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        Primary & Secondary
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        Higher Secondary
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200br-lg rounded-b-lg">
        Booklists
      </li>
    </ul>
  </details>
</li>

<li class="list-none px-2 py-1 bg-white hover:bg-[#EDF2FB] active:bg-[#EDF2FB] hover:border-t-4 hover:border-2 lg:hover:border-x-0 lg:hover:border-b-0 active:border-t-4 border-blue-400 rounded-md cursor-pointer transition-colors ease-in duration-200">
  <details>
    <summary class="flex">Extra Curricular</summary>
    <ul class="absolute left-[10.5rem] lg:left-auto flex flex-col justify-center items-center bg-[#EDF2FB] rounded-b-lg border-l-2 border-b-2 border-blue-400 text-start drop-shadow-lg w-[50vw] lg:w-auto">
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        E Magazine
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        Indoor Clubs
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        Outdoor Clubs
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200br-lg rounded-b-lg">
        School Magazine
      </li>
    </ul>
  </details>
</li>

<li class="list-none px-2 py-1 bg-white hover:bg-[#EDF2FB] active:bg-[#EDF2FB] hover:border-t-4 hover:border-2 lg:hover:border-x-0 lg:hover:border-b-0 active:border-t-4 border-blue-400 rounded-md cursor-pointer transition-colors ease-in duration-200">
  <details>
    <summary class="flex">News & Events</summary>
    <ul class="absolute left-[10.5rem] lg:left-auto flex flex-col justify-center items-center bg-[#EDF2FB] rounded-b-lg border-l-2 border-b-2 border-blue-400 text-start drop-shadow-lg w-[50vw] lg:w-auto">
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        News & Media
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        Excursion
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        Events
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200br-lg rounded-b-lg">
        Video Gallery
      </li>
    </ul>
  </details>
</li>
<li class="list-none px-2 py-1 bg-white hover:bg-[#EDF2FB] active:bg-[#EDF2FB] hover:border-t-4 hover:border-2 lg:hover:border-x-0 lg:hover:border-b-0 active:border-t-4 border-blue-400 rounded-md cursor-pointer transition-colors ease-in duration-200">
  <details>
    <summary class="flex">Notices</summary>
    <ul class="absolute left-[10.5rem] lg:left-auto flex flex-col justify-center items-center bg-[#EDF2FB] rounded-b-lg border-l-2 border-b-2 border-blue-400 text-start drop-shadow-lg w-[50vw] lg:w-auto">
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200br-lg rounded-b-lg">
        Circulars
      </li>
    </ul>
  </details>
</li>
<li class="list-none px-2 py-1 bg-white hover:bg-[#EDF2FB] active:bg-[#EDF2FB] hover:border-t-4 hover:border-2 lg:hover:border-x-0 lg:hover:border-b-0 active:border-t-4 border-blue-400 rounded-md cursor-pointer transition-colors ease-in duration-200">
  <details>
    <summary class="flex">Admission</summary>
    <ul class="absolute left-[10.5rem] lg:left-auto flex flex-col justify-center items-center bg-[#EDF2FB] rounded-b-lg border-l-2 border-b-2 border-blue-400 text-start drop-shadow-lg w-[50vw] lg:w-auto">
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        Information
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        Criteria
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        Transport
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        Fee Structure
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200">
        Timings & Uniform
      </li>
      <li class="px-2 py-1 bg-[#EDF2FB] active:bg-white active:border-t-2 hover:bg-white hover:border-r-2 border-blue-400 w-full transition-colors ease-in duration-200br-lg rounded-b-lg">
        Subject Combination (XI)
      </li>
    </ul>
  </details>
</li>
  `;
};

function handleNavBarsClick() {
  const navContainer = document.querySelector('.js-large-nav');
  navContainer.classList.toggle('hidden');
  navContainer.classList.toggle('flex');
  const smallNavBars = document.querySelector('.js-small-bars');
  smallNavBars.classList.toggle('fa-bars');
  smallNavBars.classList.toggle('fa-x');
  const bodyElement = document.querySelector('.js-body');
  bodyElement.classList.toggle('hidden');
  const sNavSocialMedia = document.querySelector('.js-s-nav-social-media');
  sNavSocialMedia.classList.toggle('hidden');
}

function largeNavInteractor() {
  // JavaScript for interactive navigation
  const detailsElements = document.querySelectorAll('details');
  const summaryElements = document.querySelectorAll('summary');
  
  detailsElements.forEach(details => {
    details.addEventListener('mouseleave', () => {
      details.removeAttribute('open'); // Remove the delay for immediate closing
    });
  });
  
  summaryElements.forEach(summary => {
    summary.addEventListener('mouseenter', () => {
      detailsElements.forEach(details => {
        if (details.contains(summary)) {
          details.setAttribute('open', true);
        } else {
          details.removeAttribute('open');
        }
      });
    });
  
    summary.addEventListener('click', () => {
      detailsElements.forEach(details => {
        if (details.contains(summary)) {
          details.setAttribute('open', !details.hasAttribute('open'));
        } else {
          details.removeAttribute('open');
        }
      });
    });
  });
  
  document.addEventListener('click', (event) => {
    if (event.target.closest('details')) {
      detailsElements.forEach(details => details.removeAttribute('open'));
    }
  });
};

function loadSocialSmallNav() {
  let  sNavSocialDiv = document.querySelector('.js-s-nav-social-media');
  sNavSocialDiv.innerHTML = `
  <a href="#">
    <i class="fa-brands fa-instagram cursor-pointer p-1.5 transition active:scale-90 text-white bg-gradient-to-tr from-yellow-500 via-red-600 to-purple-500 rounded-lg text-[1.4rem] h-[2.15rem] w-[2.15rem] text-center flex items-center justify-center"></i>
  </a>
  <a href="#">
    <i class="fa-brands fa-whatsapp cursor-pointer p-1.5 transition active:scale-90 text-white bg-gradient-to-b from-green-500 to-green-600 rounded-lg text-[1.4rem] h-[2.15rem] w-[2.15rem] text-center flex items-center justify-center"></i>
  </a>
  <a href="#">
    <i class="fa-brands fa-x-twitter cursor-pointer p-1.5 transition active:scale-90 text-white bg-gradient-to-b from-black to-black rounded-lg text-[1.4rem] h-[2.15rem] w-[2.15rem] text-center flex items-center justify-center"></i>
  </a>
  `;
};