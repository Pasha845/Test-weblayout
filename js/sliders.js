let currentSlide = 0;
const slides = document.querySelectorAll('.participants__slide');
const counter = document.querySelector('.participants__counter');
const prevButton = document.querySelector('.participants__prev');
const nextButton = document.querySelector('.participants__next');
let slidesToShow = 3;
const totalSlides = slides.length;

const updateCounter = () => {
  counter.innerHTML = `${currentSlide + Math.min(slidesToShow, totalSlides)} / <span>${totalSlides}</span>`;
};

const updateButtonStatus = () => {
  if (currentSlide === 0) {
    prevButton.classList.add('participants__dis');
  } else {
    prevButton.classList.remove('participants__dis');
  }

  if (currentSlide >= totalSlides - slidesToShow) {
    nextButton.classList.add('participants__dis');
  } else {
    nextButton.classList.remove('participants__dis');
  }
};

const showSlides = () => {
  slides.forEach((slide, i) => {
    slide.style.display = (i >= currentSlide && i < currentSlide + slidesToShow) ? 'block' : 'none';
  });
  updateCounter();
  updateButtonStatus();
};

const updateSlidesToShow = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    slidesToShow = 1;
  } else {
    slidesToShow = 3;
  };
  currentSlide = 0;
  showSlides();
};

prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
  }
  showSlides();
});

nextButton.addEventListener('click', () => {
  if (currentSlide < totalSlides - slidesToShow) {
    currentSlide++;
  }
  showSlides();
});

updateSlidesToShow();
showSlides();

window.addEventListener('resize', updateSlidesToShow);
