document.addEventListener('DOMContentLoaded', () => {

    const enlacesProyecto = document.querySelectorAll('.enlace-proyecto-modal');
    const modales = document.querySelectorAll('.superposicion-modal');
    const botonesCerrar = document.querySelectorAll('.boton-cerrar');

    // ABRIR PROYECTO
    enlacesProyecto.forEach(enlace => {
      enlace.addEventListener('click', e => {
        e.preventDefault();

        const id = enlace.dataset.proyecto;
        const modal = document.getElementById(id);

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    // CERRAR PROYECTO
    botonesCerrar.forEach(boton => {
      boton.addEventListener('click', () => {
        modales.forEach(modal => modal.classList.remove('active'));
        document.body.style.overflow = '';
      });
    });

    modales.forEach(modal => {
      modal.addEventListener('click', e => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
      });
    });

    // SCROLL HORIZONTAL CON LA RUEDA DEL RATÓN EN LA SECCIÓN DE PROYECTOS
    const carruselWrapper = document.querySelector('.carrusel-proyectos-wrapper');
    if (carruselWrapper) {
      carruselWrapper.addEventListener('wheel', (evt) => {
        if (evt.deltaY !== 0) {
          evt.preventDefault();
          carruselWrapper.scrollLeft += evt.deltaY;
        }
      }, { passive: false });
    }

});

// LOADER (PANTALLA DE CARGA)
document.addEventListener('DOMContentLoaded', () => {
    const cargador = document.getElementById('cargador');
    const contador = document.getElementById('contador-cargador');

    let cuenta = 0;

    const intervalo = setInterval(() => {
      cuenta++;
      contador.textContent = cuenta + '%';

      if (cuenta >= 100) {
        clearInterval(intervalo);
        
        setTimeout(() => {
          cargador.classList.add('hidden');
        }, 300);
      }
    }, 20); 
});