export { firstCarouselInteractor };

function firstCarouselInteractor () {
  let slideIndex = 1;
  showSlides(slideIndex);
  
  let autoSlideInterval;
  const autoSlideDuration = 5000;
  //const fadeDuration = 500;
  
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