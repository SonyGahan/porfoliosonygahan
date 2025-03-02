document.addEventListener("DOMContentLoaded", function () {
  // Inicializar el carrusel
  let carousel = new bootstrap.Carousel(document.querySelector("#carouselExampleIndicators"), {
      interval: 3000,
      wrap: true
  });

  // Validación del formulario de contacto (si existe)
  let form = document.querySelector("form");
  if (form) {
      form.addEventListener("submit", function (event) {
          event.preventDefault();
          alert("Mensaje enviado con éxito!");
      });
  }
});