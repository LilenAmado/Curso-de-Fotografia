//NAV: 

/* 
Detecta el desplazamiento de la página y agrega una clase llamada 'fixed-nav' a la barra de navegación (identificada por el selector #main-nav) cuando el desplazamiento supera los 100 píxeles desde la parte superior de la página. 

Cuando el desplazamiento es menor o igual a 100 píxeles, se elimina la clase 'fixed-nav', restaurando así el comportamiento normal de la barra de navegación.

*/

$(function() {
    $(window).scroll(function() {
         var $this = $(window);

         if($this.scrollTop() > 100) {
              $('#main-nav').addClass('fixed-nav');
         } else {
              $('#main-nav').removeClass('fixed-nav');
         }
    });
});