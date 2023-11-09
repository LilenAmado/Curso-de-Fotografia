$(function () {
    'use strict';
    let $window = $(window); 

    // Función: Muetra y oculta objetos.

    function hidden_element() {

        /* Si el ancho de la ventana es menor que 748, lo toma como dispositivo movil, es por esto que las animaciones se desactivan para mejorar el rendimiento. */

        if ($window.width() > 748) {
            let window_top = $window.scrollTop(), // Top of the screen
                window_bottom = $window.height() * 0.8 + window_top; 

            $(".hidden_element:not(.animated)").each(function () {
                let $this = $(this), // "$this" se refiere a cualquier elemento con la clase de "hidden_element"
                    object_top = $this.offset().top, 
                    object_bottom = $this.outerHeight() + object_top, 
                    animation = $this.data("animation"); 

                if ((window_bottom > object_top) && (window_top < object_bottom)) {
                    // Declaración de letiables
                    let delay,
                        animationDuration;
                    
                    if (typeof $this.data("delay") !== 'undefined') {
                        delay = $this.data("delay");
                    } else {
                        delay = 0; 
                    }
                    
                    if (typeof $this.data("duration") !== 'undefined') {
                        animationDuration = $this.data("duration");
                    } else {
                        animationDuration = 1; 
                    }
                    
                    if (delay > 0 || animationDuration > 0) {
                        window.setTimeout(function () {
                            $this.css({
                                "moz-animation-duration": animationDuration + 's',
                                "webkit-animation-duration": animationDuration + 's',
                                "animation-duration": animationDuration + 's'
                            });
                            

                            $this.addClass('animated ' + animation);
                        }, delay * 1000);
                    } else {
                        $this.addClass('animated ' + animation);
                    }
                }
            });
        }
    }
    
    
    let timeOut;

    $window.scroll(function () {
        if (timeOut) {
            clearTimeout(timeOut);
            timeOut = null;
        }
        timeOut = setTimeout(hidden_element, 10);
    });
});