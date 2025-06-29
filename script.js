console.log("Haven Concierge listo 🚀");
document.addEventListener('DOMContentLoaded', () => {
  gsap.from('.hero h1', { duration: 1, y: -50, opacity: 0, ease: 'power3.out' });
  gsap.from('.hero p', { duration: 1, y: 50, opacity: 0, delay: 0.3, ease: 'power3.out' });
  gsap.from('.btn-cta', { duration: 1, scale: 0.8, opacity: 0, delay: 0.6, ease: 'elastic.out(1, 0.5)' });

  gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.from(card, {
      duration: 1,
      y: 20,
      opacity: 0,
      delay: 0.3 + i * 0.2,
      ease: 'power3.out'
    });
  });
});
