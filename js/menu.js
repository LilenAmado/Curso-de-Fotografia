// Cuando se hace click en el botón de menú, se abre el menú de navegación.

$('#menu-button').click(function() {
    $(this).toggleClass('change');
    $('.nav-links').toggleClass('nav-open');
});


$(window).resize(function() {
    if ($(window).width() > 768) {
         console.log($(window).width());
         if ($('.nav-links').hasClass('nav-open')) {
              $('#menu-button').toggleClass('change');
              $('.nav-links').toggleClass('nav-open');
         }
    }
});

// Footer

// Obtenemos el elemento span por su ID
const yearElement = document.getElementById("year");

// Obtenemos el año actual
const currentYear = new Date().getFullYear();

// Actualizamos el contenido del elemento con el año actual
yearElement.textContent = currentYear;