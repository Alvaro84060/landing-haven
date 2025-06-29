// slider.js
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.testimonial-slider blockquote');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
      slide.style.position = i === index ? 'relative' : 'absolute';
      slide.style.transition = 'opacity 0.8s ease';
      slide.style.pointerEvents = i === index ? 'auto' : 'none';
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  // Inicializo mostrando la primera
  showSlide(current);

  // Cambio cada 5 segundos
  setInterval(nextSlide, 5000);
});
