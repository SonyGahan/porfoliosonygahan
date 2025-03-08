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


    //Script para gráficos con Chart.js
    function crearGrafico(id, porcentaje, color) {
        let ctx = document.getElementById(id).getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [porcentaje, 100 - porcentaje],
                    backgroundColor: [color, '#E7D7C1'],
                    borderWidth: 0
                }]
            },
            options: {
                cutout: '70%',
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    //Graficos Lenguajes de Programación
    crearGrafico('javaChart', 95, '#f89820');
    crearGrafico('typescriptChart', 85, '#007acc');
    crearGrafico('javascriptChart', 90, '#f7df1e');
    crearGrafico('htmlChart', 80, '#e34f26');
    crearGrafico('cssChart', 70, '#1572b6');
    crearGrafico('phpChart', 65, '#777bb4');
    //Graficos de Frameworks y Librerías
    crearGrafico('springChart', 85, '#6db33f');
    crearGrafico('angularChart', 80, '#dd0031');
    crearGrafico('nodejsChart', 80, '#43853d');
    crearGrafico('hibernateChart', 80, '#59666c');
    crearGrafico('thymeleafChart', 80, '#005c00');
    crearGrafico('bootstrapChart', 80, '#563d7c');
    //Graficos de Herramientas
    crearGrafico('intellijChart', 75, '#000000');
    crearGrafico('netbeansChart', 90, '#1c75bc');
    crearGrafico('mysqlChart', 85, '#00758f');
    crearGrafico('githubChart', 95, '#181717');
    crearGrafico('vscodeChart', 95, '#0078d7');
    crearGrafico('insomniaChart', 95, '#4e5d94');
    crearGrafico('postmanChart', 95, '#ff6c37');
    crearGrafico('trelloChart', 95, '#0079bf');
});