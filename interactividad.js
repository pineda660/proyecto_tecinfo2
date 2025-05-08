// Script para añadir interactividad a las imágenes
document.addEventListener("DOMContentLoaded", function() {
    // Obtén todas las imágenes interactivas
    const imagenes = document.querySelectorAll('.interactiva');

    imagenes.forEach(imagen => {
        // Evento para mostrar un mensaje cuando se hace clic en la imagen
        imagen.addEventListener('click', function() {
            alert("¡Has hecho clic en una imagen!");
        });

        // Evento para cambiar el cursor cuando el mouse pasa sobre la imagen
        imagen.addEventListener('mouseenter', function() {
            imagen.style.cursor = 'pointer';
        });

        // Restaurar el cursor al salir de la imagen
        imagen.addEventListener('mouseleave', function() {
            imagen.style.cursor = 'default';
        });
    });
});
