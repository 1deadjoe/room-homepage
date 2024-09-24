const menuButton = document.getElementById("menu");
const menuOpen = document.querySelector(".open-menu");
const menuClose = document.querySelector(".close-menu");
const header = document.querySelector("header");
const navLinks = document.querySelector("nav");
const logo = document.querySelector(".logo");

window.addEventListener("DOMContentLoaded", function () {
  menuButton.addEventListener("click", () => {
    header.classList.toggle("menu-pop");
    menuOpen.classList.toggle("hidden");
    menuClose.classList.toggle("hidden");
    navLinks.classList.toggle("hidden");
    logo.classList.toggle("hidden");
  });

  // *  Carousel control function
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const slides = document.querySelectorAll(".hero-slide");

  let currentSlide = 0; // Track the current slide index

  // Function to show the hidden slide
  function showSlide(index) {
    // Ensure index is within the bounds
    if (index >= slides.length) {
      currentSlide = 0; // Wrap around to the first slide
    } else if (index < 0) {
      currentSlide = slides.length - 1; // Wrap around to the last slide
    } else {
      currentSlide = index;
    }

    // Hide all slides and remove 'hidden' class
    slides.forEach((slide) => slide.classList.add("hidden"));

    // Show the current slide and add 'hidden' class
    slides[currentSlide].classList.remove("hidden");
  }

  // Event listener for next button
  nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1); // Go to the next slide
  });

  // Event listener for previous button
  prevButton.addEventListener("click", () => {
    showSlide(currentSlide - 1); // Go to the previous slide
  });
  // Initialize the first slide
  showSlide(currentSlide);
});
