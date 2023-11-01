export { loadFirstCarousel, firstCarouselInteractor };
function loadFirstCarousel() {
  let firstCarouselDiv = document.getElementById('carousel-main-div');
  firstCarouselDiv.innerHTML = `
    <button id="js-top-carousel-prev-btn" class="flex justify-center items-center text-center p-0.5 sm:p-0 lg:p-1.5 rounded-md ml-1 bg-white rounded-r-none z-[1]">
      <i class="fa-solid fa-chevron-left text-lg sm:text-sm md:text-xl lg:text-2xl ml-1 active:scale-90 transition ease-in"></i>
    </button>
    <div id="top-carousel-img-container" class="relative flex min-w-[75vw] max-h-[75vh] aspect-video bg-white overflow-hidden rounded-md transition-opacity ease-in duration-500">
      <img id="js-top-carousel-img-1" class="min-w-full p-1 flex rounded-lg transition-opacity ease-in duration-500" src="./images/logo/main-circular.PNG" alt="TIS Classrooms">
      <img id="js-top-carousel-img-2" class="min-w-full p-1 flex rounded-lg transition-opacity ease-in duration-500" src="./images/logo/main-icon-circular.PNG" alt="TIS Inftrastructure">
      <img id="js-top-carousel-img-3" class="min-w-full p-1 flex rounded-lg transition-opacity ease-in duration-500" src="./images/logo/main-icon.png" alt="TIS Students">
      <img id="js-top-carousel-img-1" class="min-w-full p-1 flex rounded-lg transition-opacity ease-in duration-500" src="./images/logo/main.png" alt="TIS Classrooms">
    </div>
    <div id="js-top-carousel-dots-container" class="absolute h-fit bg-blue-400 bottom-[-0.875rem] lg:bottom-[-1.65rem] rounded-b-lg mx-1.5 flex justify-center gap-2 md:gap-3 lg:gap-4 px-2 py-1.5 lg:px-4 lg:py-2 transition-all duration-1000 delay-1000 ease-in w-fit drop-shadow-lg">
      <div id="carousel-dot-1" class="h-2 w-3 lg:h-4 lg:w-6 rounded-full border-2 lg:border-4 border-white active:scale-90 ease-in cursor-pointer"></div>
      <div id="carousel-dot-2" class="h-2 w-3 lg:h-4 lg:w-6 rounded-full border-2 lg:border-4 border-white active:scale-90 ease-in cursor-pointer"></div>
      <div id="carousel-dot-3" class="h-2 w-3 lg:h-4 lg:w-6 rounded-full border-2 lg:border-4 border-white active:scale-90 ease-in cursor-pointer"></div>
      <div id="carousel-dot-4" class="h-2 w-3 lg:h-4 lg:w-6 rounded-full border-2 lg:border-4 border-white active:scale-90 ease-in cursor-pointer"></div>
    </div>
    <button id="js-top-carousel-next-btn" class="flex justify-center items-center text-center p-0.5 sm:p-0 lg:p-1.5 rounded-md mr-1 bg-white rounded-l-none z-[1]">
      <i class="fa-solid fa-chevron-right text-lg sm:text-sm md:text-xl lg:text-2xl mr-1 active:scale-90 transition ease-in"></i>
    </button>
  `;
};
function firstCarouselInteractor () {
  let slideIndex = 1;
  showSlides(slideIndex);
  
  let autoSlideInterval;
  const autoSlideDuration = 6000;
  const fadeDuration = 500;
  
  function plusSlides(n) {
    showSlides((slideIndex += n));
    resetAutoSlideTimer();
  }
  
  function currentSlide(n) {
    showSlides((slideIndex = n));
    resetAutoSlideTimer();
  }
  
  function showSlides(n) {
    const slides = document.querySelectorAll('#top-carousel-img-container img');
    const dots = document.querySelectorAll('#js-top-carousel-dots-container div');
    const prevButton = document.getElementById('js-top-carousel-prev-btn');
    const nextButton = document.getElementById('js-top-carousel-next-btn');
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
  
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.add('hidden');
      dots[i].classList.remove('bg-white');
    }
  
    slides[slideIndex - 1].style.opacity = 50;
    slides[slideIndex - 1].classList.remove('hidden');
    dots[slideIndex - 1].classList.add('bg-white');
  
    if (slideIndex === 1) prevButton.classList.add('invisible');
    else prevButton.classList.remove('invisible');
  
    if (slideIndex === slides.length) nextButton.classList.add('invisible');
    else nextButton.classList.remove('invisible');
  
    setTimeout(() => (slides[slideIndex - 1].style.opacity = 1), 50);
  }
  
  function updateDotStyles() {
    const dots = document.querySelectorAll('#js-top-carousel-dots-container div');
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide(index + 1);
        resetAutoSlideTimer();
        dots.forEach((d, i) => (i === index ? d.classList.add('bg-white') : d.classList.remove('bg-white')));
      });
    });
  }
  
  updateDotStyles();
  document.getElementById('js-top-carousel-prev-btn').addEventListener('click', () => plusSlides(-1));
  document.getElementById('js-top-carousel-next-btn').addEventListener('click', () => plusSlides(1));
  
  let touchStartX = 0;
  let touchEndX = 0;
  let swipeThreshold = 0.33;
  
  function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
  }
  
  function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].clientX;
    const swipeDistance = touchStartX - touchEndX;
    const container = document.getElementById('top-carousel-img-container');
    const containerWidth = container.offsetWidth;
    const swipePercentage = Math.abs(swipeDistance) / containerWidth;
  
    if (swipePercentage >= swipeThreshold) {
      if (swipeDistance > 0 && slideIndex < container.childElementCount) plusSlides(1);
      else if (swipeDistance < 0 && slideIndex > 1) plusSlides(-1);
      resetAutoSlideTimer();
    }
  }
  
  const imageContainer = document.getElementById('top-carousel-img-container');
  imageContainer.addEventListener('touchstart', handleTouchStart);
  imageContainer.addEventListener('touchend', handleTouchEnd);
  
  function resetAutoSlideTimer() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => plusSlides(1), autoSlideDuration);
  }
  
  resetAutoSlideTimer();  
};