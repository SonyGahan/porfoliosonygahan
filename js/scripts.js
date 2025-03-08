document.addEventListener("DOMContentLoaded", function () {
    // Inicializar el carrusel
    let carousel = new bootstrap.Carousel(document.querySelector("#carouselExampleIndicators"), {
        interval: 3000,
        wrap: true
    });

    // Animaciones de entrada para las secciones
    const secciones = document.querySelectorAll('.seccion-contenedor:not(#cursos)');
    const presentacion = document.querySelector('.presentacion-personal');
    const logos = document.querySelector('.logos-institucionales');
    const cardBody = document.querySelector('.card-body');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    secciones.forEach(seccion => observer.observe(seccion));
    if (presentacion) observer.observe(presentacion);
    if (logos) observer.observe(logos);
    if (cardBody) observer.observe(cardBody);
 
});