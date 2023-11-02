export { largeNavInteractor, handleNavBarsClick };


function handleNavBarsClick() {
  const navContainer = document.getElementById('js-large-nav');
  const smallNavBars = document.getElementById('js-small-bars');
  const bodyElement = document.getElementById('js-body');
  const sNavSocialMedia = document.getElementById('js-s-nav-social-media');
  
  navContainer.classList.toggle('hidden');
  navContainer.classList.toggle('flex');

  smallNavBars.classList.toggle('fa-bars');
  smallNavBars.classList.toggle('fa-x');

  bodyElement.classList.toggle('hidden');

  sNavSocialMedia.classList.toggle('flex');
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
