const handleHover = (anchorId, divId, isHovered) => {
  const anniversaryAnchor = document.getElementById(anchorId);
  const anniversaryDiv = document.getElementById(divId);

  const positionAnniversaryDiv = () => {
    const anchorRect = anniversaryAnchor.getBoundingClientRect();
    const anchorBottom = anchorRect.bottom;

    // Set the top position of the anniversaryDiv just below the anniversaryAnchor
    anniversaryDiv.style.top = `${anchorBottom}px`;
  };

  anniversaryDiv.classList.toggle("flex", isHovered);
  anniversaryDiv.classList.toggle("hidden", !isHovered);
  anniversaryAnchor.classList.toggle("underline", isHovered);

  if (isHovered) {
    // Position the anniversaryDiv when either the anchor or the div is hovered
    positionAnniversaryDiv();
  }
};

const addEventListeners = (anchorId, divId) => {
  const anniversaryAnchor = document.getElementById(anchorId);
  const anniversaryDiv = document.getElementById(divId);

  anniversaryAnchor.addEventListener("mouseenter", () =>
    handleHover(anchorId, divId, true)
  );
  anniversaryAnchor.addEventListener("mouseleave", () =>
    handleHover(anchorId, divId, false)
  );

  anniversaryDiv.addEventListener("mouseenter", () =>
    handleHover(anchorId, divId, true)
  );
  anniversaryDiv.addEventListener("mouseleave", () =>
    handleHover(anchorId, divId, false)
  );
};

addEventListeners("anniversaryHead", "anniversaryDiv");
addEventListeners("birthdayHead", "birthdayDiv");
addEventListeners("occasionHead", "occasionDiv");
addEventListeners("relationshipHead", "relationshipDiv");
addEventListeners("typeHead", "typeDiv");

//For Slider
// Getting necessary elements
const prevButton = document.getElementById("heroPrev");
const nextButton = document.getElementById("heroNext");
const imgContainer = document.getElementById("heroImgContainer");
const images = document.querySelectorAll("#heroImgContainer img");

// Setting initial image index
let currentImageIndex = 0;
let slideInterval;

// Function to show the current image
const showImage = () => {
  images.forEach((img, index) => {
    img.style.transform = `translateX(${-100 * currentImageIndex}%)`;
  });
};

// Function to handle automatic sliding of imgs
const startAutoSlide = () => {
  slideInterval = setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage();
  }, 4000);
};

// Starting automatic sliding initially
startAutoSlide();

// Event listener for the previous button
prevButton.addEventListener("click", () => {
  clearInterval(slideInterval); // Clear the interval
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage();
  startAutoSlide(); // Restart the interval
});

// Event listener for the next button
nextButton.addEventListener("click", () => {
  clearInterval(slideInterval); // Clear the interval
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage();
  startAutoSlide(); // Restart the interval whenever the button are clicked
});
