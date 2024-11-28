const stageSlides = document.querySelectorAll('.stage__slide');
const nextBtn = document.querySelector('.stage__next');
const prevBtn = document.querySelector('.stage__prev');
const pagination = document.querySelector('.stage__pagination');
let currentIndex = 0;

function updateSlider() {
  const totalSlides = stageSlides.length;

  stageSlides.forEach((slide, index) => {
    slide.style.display = index === currentIndex ? 'block' : 'none';
  });

  pagination.innerHTML = '';
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.classList.add('stage__pagination-btn');
    dot.classList.toggle('active', i === currentIndex);
    dot.addEventListener('click', () => {
      currentIndex = i;
      updateSlider();
    });
    pagination.appendChild(dot);
  };

  nextBtn.classList.toggle('stage__dis', currentIndex >= totalSlides - 1);
  prevBtn.classList.toggle('stage__dis', currentIndex <= 0);
};

nextBtn.addEventListener('click', () => {
  if (currentIndex < stageSlides.length - 1) {
    currentIndex++;
    updateSlider();
  };
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  };
});

updateSlider();
