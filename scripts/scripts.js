document.addEventListener('DOMContentLoaded', () => {

    const enlacesProyecto = document.querySelectorAll('.enlace-proyecto-modal');
    const modales = document.querySelectorAll('.superposicion-modal');
    const botonesCerrar = document.querySelectorAll('.boton-cerrar');

    // Aviso para usuarios de Safari
(function () {
  var esSafari = /^((?!chrome|android|crios|fxios|edg).)*safari/i.test(navigator.userAgent);
  if (!esSafari) return;

  try { if (sessionStorage.getItem('avisoSafari')) return; } catch (e) {}

  window.addEventListener('load', function () {
    var aviso = document.createElement('div');
    aviso.setAttribute('role', 'status');
    aviso.style.cssText =
      'position:fixed;left:50%;bottom:24px;transform:translate(-50%,20px);opacity:0;' +
      'width:calc(100% - 32px);max-width:460px;box-sizing:border-box;z-index:99999;' +
      'display:flex;align-items:center;gap:16px;padding:16px 20px;border-radius:14px;' +
      'background:rgba(20,20,20,.92);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);' +
      'color:#fff;font:400 14px/1.5 system-ui,-apple-system,sans-serif;' +
      'box-shadow:0 12px 40px rgba(0,0,0,.25);transition:opacity .5s ease,transform .5s ease;';

    aviso.innerHTML =
      '<span style="flex:1">For the best experience, I recommend viewing this portfolio in ' +
      '<strong>Google Chrome</strong> or <strong>Firefox</strong>.</span>' +
      '<button type="button" style="flex:none;border:1px solid rgba(255,255,255,.4);background:transparent;' +
      'color:#fff;padding:8px 14px;border-radius:999px;font:inherit;cursor:pointer;">Got it</button>';

    aviso.querySelector('button').addEventListener('click', function () {
      aviso.style.opacity = '0';
      aviso.style.transform = 'translate(-50%,20px)';
      setTimeout(function () { aviso.remove(); }, 500);
      try { sessionStorage.setItem('avisoSafari', '1'); } catch (e) {}
    });

    document.body.appendChild(aviso);
    setTimeout(function () {
      aviso.style.opacity = '1';
      aviso.style.transform = 'translate(-50%,0)';
    }, 1500);
  });
})();

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