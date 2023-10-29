export { loadSmallNav, handleNavBarsClick };

function loadSmallNav() {
  let smallNav = document.querySelector('.js-small-device-nav');
  smallNav.innerHTML = `
  <ul class="flex flex-col text-center bg-[#EDF2FB] font-[500] z-[1]">
  <h1 class="text-center">Navigation Bar</h1>
  <!-- Main Heading 1 -->
  <li class="bg-blue-600 text-white">HOME</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Home</li>
  
  <!-- Main Heading 2 -->
  <li class="bg-blue-600 text-white">ABOUT</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">DPS Society</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Vision & Mission</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Affiliation</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Self Affidavit Format</li>
  
  <!-- Main Heading 3 -->
  <li class="bg-blue-600 text-white">TEAM</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Board</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Faculty</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Administrative</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Message From Headmistress</li>
  
  <!-- Main Heading 4 -->
  <li class="bg-blue-600 text-white">INFRASTRUCTURE</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Sports</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Campus</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Library</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Classrooms</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Laboratories</li>

  <!-- Main Heading 5 -->
  <li class="bg-blue-600 text-white">CURRICULUM</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Pre Primary</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Primary & Secondary</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Higher Secondary</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Booklists</li>
  
  <!-- Main Heading 6 -->
  <li class="bg-blue-600 text-white">EXTRA CURRICULAR</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">E Magazine</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Indoor Clubs</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Outdoor Clubs</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">School Magazine</li>

  <!-- Main Heading 7 -->
  <li class="bg-blue-600 text-white">NEWS & EVENT</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">News & Media</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Excursions</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Events</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Video Gallery</li>
  
  <!-- Main Heading 8 -->
  <li class="bg-blue-600 text-white">NOTICES</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Circulars</li>

  <!-- Main Heading 9 -->
  <li class="bg-blue-600 text-white">ADMISSION</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Information</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Criteria</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Transport</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Fee Structure</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Timings & Uniform</li>
  <li class="border-r-2 border-l-2 border-transparent hover:border-blue-500 active:scale-90 cursor-pointer hover:bg-white text-blue-600 transition-all ease-in duration-200">Subject Combination</li>
</ul>
  `;
}

function handleNavBarsClick() {
  const smallDeviceNav = document.querySelector('.js-small-device-nav');
  smallDeviceNav.classList.toggle('hidden');
  const smallNavBars = document.querySelector('.js-small-bars');
  smallNavBars.classList.toggle('fa-bars');
  smallNavBars.classList.toggle('fa-x');
  const body = document.querySelector('.js-body');
  body.classList.toggle('hidden');
  const sNavSocialMedia = document.querySelector('.js-s-nav-social-media');
  sNavSocialMedia.classList.toggle('hidden');
  smallDeviceNav.scrollTop = 0;
}

