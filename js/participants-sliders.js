let currentSlide = 0;
const slides = document.querySelectorAll('.participants__slide');
const counter = document.querySelector('.participants__counter');
const prevButton = document.querySelector('.participants__prev');
const nextButton = document.querySelector('.participants__next');
let slidesToShow = 0;
const totalSlides = slides.length;
let autoSlideInterval;

const updateCounter = () => {
  counter.innerHTML = `${Math.min(currentSlide + slidesToShow, totalSlides)} / <span>${totalSlides}</span>`;
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
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlides();
    }, 4000);
  } else {
    slidesToShow = 3;
    clearInterval(autoSlideInterval);
  }
  
  currentSlide = Math.min(currentSlide, totalSlides - slidesToShow); // Сбросить currentSlide при изменении размера
  showSlides();
};

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % (totalSlides - slidesToShow + 1);
  showSlides();
});

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % (totalSlides - slidesToShow + 1);
  showSlides();
});


updateSlidesToShow();
showSlides();
window.addEventListener('resize', updateSlidesToShow);
