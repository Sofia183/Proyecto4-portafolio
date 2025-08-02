// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
    // Cierra el menú después de hacer clic en un enlace
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.classList.remove('nav-open');
    }
  });
});

// Menú responsive
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.cabecera-menu');
const closeBtn = document.querySelector('.close-menu');
if (toggleBtn && navLinks && closeBtn) {
  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open'); // Cambia a toggle para abrir y cerrar
  });
  closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('nav-open');
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav-open');
    });
  });
}



// Slider de "Experiencia" y "Estudios"
const tabs = document.querySelectorAll('.tab');
const slider = document.querySelector('.slider-contenido');

if (tabs.length && slider) {
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const index = tab.getAttribute('data-index');
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      slider.style.transform = `translateX(-${index * 100}%)`;
    });
  });
}
document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    // Cambiar clase activa
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Obtener índice
    const index = parseInt(tab.getAttribute('data-index'));

    // Mover slider
    const sliderContenido = document.querySelector('.slider-contenido');
    sliderContenido.style.transform = `translateX(-${index * 50}%)`;
  });
});



