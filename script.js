let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function changeSlide(direction) {
  slides[slideIndex].classList.remove('active');
  dots[slideIndex].classList.remove('active');
  slideIndex = (slideIndex + direction + slides.length) % slides.length;
  slides[slideIndex].classList.add('active');
  dots[slideIndex].classList.add('active');
}

function currentSlide(index) {
  slides[slideIndex].classList.remove('active');
  dots[slideIndex].classList.remove('active');
  slideIndex = index;
  slides[slideIndex].classList.add('active');
  dots[slideIndex].classList.add('active');
}

// Automatically change slides every 5 seconds
setInterval(() => {
  changeSlide(1);
}, 5000);






