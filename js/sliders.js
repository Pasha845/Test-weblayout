let currentSlide = 0; // Текущий слайд
const slides = document.querySelectorAll('.participants__slide'); // Все слайды
const counter = document.querySelector('.participants__counter'); // Элемент для отображения счётчика
const slidesToShow = 3; // Количество слайдов, показываемых на экране
const totalSlides = slides.length; // Общее количество слайдов

function updateCounter() {
  counter.textContent = `${currentSlide + 3} / ${totalSlides}`;
}

function showSlides() {
  slides.forEach((slide, i) => {
    if (i >= currentSlide && i < currentSlide + slidesToShow) {
      slide.style.display = 'block'; // Показываем слайд
    } else {
      slide.style.display = 'none'; // Скрываем слайд
    }
  });
  updateCounter();
}

document.querySelector('.participants__prev').addEventListener('click', () => {
  // Обработка нажатия кнопки "предыдущий"
  if (currentSlide > 0) {
    currentSlide--; // Уменьшаем номер текущего слайда
  }
  showSlides(); // Обновляем отображение слайдов
});

document.querySelector('.participants__next').addEventListener('click', () => {
  // Обработка нажатия кнопки "следующий"
  if (currentSlide < totalSlides - slidesToShow) {
    currentSlide++; // Увеличиваем номер текущего слайда
  }
  showSlides(); // Обновляем отображение слайдов
});

updateCounter(); // Инициализация счётчика
showSlides(); // Изначально показываем слайды
