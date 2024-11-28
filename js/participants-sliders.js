let currentSlide = 0;
const slides = document.querySelectorAll('.participants__slide');
const counter = document.querySelector('.participants__counter');
const prevButton = document.querySelector('.participants__prev');
const nextButton = document.querySelector('.participants__next');
const totalSlides = slides.length;
let slidesToShow = 0;
let autoSlideInterval;

const updateCounter = () => {
  counter.innerHTML = `${Math.min(currentSlide + 1, totalSlides)} / <span>${totalSlides}</span>`;
};

const showSlides = () => {
  slides.forEach((slide, i) => {
    slide.style.display = (i >= currentSlide && i < currentSlide + slidesToShow) ? 'block' : 'none';
  });
  updateCounter();
};

const updateSlidesToShow = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    slidesToShow = 1;
  } else {
    slidesToShow = 3;
  };

  currentSlide = Math.min(currentSlide, totalSlides - slidesToShow);
  showSlides();
};

const startAutoSlide = () => {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % (totalSlides - slidesToShow + 1);
    showSlides();
  }, 4000);
};

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % (totalSlides - slidesToShow + 1);
  showSlides();
  startAutoSlide();
});

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % (totalSlides - slidesToShow + 1);
  showSlides();
  startAutoSlide();
});

updateSlidesToShow();
showSlides();
startAutoSlide();
window.addEventListener('resize', () => {
  updateSlidesToShow();
  startAutoSlide();
});
