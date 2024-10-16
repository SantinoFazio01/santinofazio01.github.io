const cuadros = document.querySelectorAll('.cuadro');

window.addEventListener('scroll', () => {
  cuadros.forEach((cuadro) => {
    const rect = cuadro.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      cuadro.classList.add('scroll-reveal');
    } else {
      cuadro.classList.remove('scroll-reveal');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Añadir la clase para activar la animación
        if (entry.target.classList.contains('imagnes-lado-izquierdo')) {
          entry.target.classList.add('animated-left');
        } else if (entry.target.classList.contains('icono2')) {
          entry.target.classList.add('animated-right');
        }
      } else {
        // Eliminar la clase si el elemento ya no está en la vista
        if (entry.target.classList.contains('imagnes-lado-izquierdo')) {
          entry.target.classList.remove('animated-left');
        } else if (entry.target.classList.contains('icono2')) {
          entry.target.classList.remove('animated-right');
        }
      }
    });
  }, { threshold: 0.1 }); // Cuando el 10% del elemento sea visible

  // Seleccionar todos los elementos a observar
  const elementosAnimados = document.querySelectorAll('.imagnes-lado-izquierdo, .icono2');
  elementosAnimados.forEach(elemento => observer.observe(elemento));
});

