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

/*function sendEmail(event) {
  event.preventDefault(); // Evitar el envío del formulario
  // Aquí puedes incluir el código para enviar los datos a un email
  // Puedes usar AJAX o una API de backend para el envío
  alert("Formulario enviado con éxito!");
}*/

function openEmailClient(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

  // Recoger los datos del formulario
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Construir el enlace mailto con los datos del formulario
  const subject = encodeURIComponent(`Contacto de  ${name} ,enviado desde la web`);
  const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`);
  const recipient = "Ranchapp.ar@gmail.com"; // Reemplaza con tu dirección de correo

  // Crear el enlace mailto
  const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

  // Abrir el cliente de correo del usuario
  window.location.href = mailtoLink;
}


document.addEventListener("DOMContentLoaded", function () {
  const termsPopup = document.getElementById("terms-popup");
  const acceptButton = document.getElementById("accept-btn");
  const rejectButton = document.getElementById("reject-btn");
  const mainContent = document.getElementById("main-content");

  // Muestra el popup al cargar la página
  termsPopup.style.display = "flex";

  // Funcionalidad del botón de aceptar
  acceptButton.addEventListener("click", () => {
    termsPopup.style.display = "none"; // Oculta el popup
    mainContent.style.display = "block"; // Muestra el contenido principal
  });

  // Funcionalidad del botón de rechazo
  rejectButton.addEventListener("click", () => {
    alert("Debes aceptar los Términos y Condiciones para acceder a RanchApp.");
  });

  // Función para ajustar el layout y hacer que los botones sean visibles
  const adjustLayout = () => {
    const termsText = document.querySelector('.terms-text');

    if (window.innerHeight > window.innerWidth) {
      // En modo vertical, el contenido debe ser más pequeño y visible desde el inicio
      termsText.style.maxHeight = "200px"; // Reduce el tamaño del área de texto para asegurar visibilidad de los botones
    } else {
      // En modo horizontal, el contenido puede ocupar más espacio
      termsText.style.maxHeight = "300px"; // Se asegura de que el contenido no ocupe toda la pantalla
    }
  };

  // Ajusta el layout al cargar la página
  adjustLayout();

  // Escucha cambios de tamaño o rotación
  window.addEventListener("resize", adjustLayout);
});


