document.addEventListener("DOMContentLoaded", function () {
    const elementosAnimar = document.querySelectorAll(
        ".seccion-catalogo, .seccion-sincronizacion, .seccion-tecno-testimonio, .seccion-cta-footer"
    );

    elementosAnimar.forEach(elemento => {
        elemento.classList.add("animar-flotar");
    });

    const opcionesObservador = {
        root: null,
        rootMargin: "0px 0px -50px 0px", 
        threshold: 0.1 
    };

    const callbackObservador = (entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
                observador.unobserve(entrada.target);
            }
        });
    };

    const observador = new IntersectionObserver(callbackObservador, opcionesObservador);

    elementosAnimar.forEach(elemento => {
        observador.observe(elemento);
    });
});