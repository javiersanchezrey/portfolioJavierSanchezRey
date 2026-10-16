/* 1. ANIMACIÓN DE ENTRADA AL HACER SCROLL */

/* IntersectionObserver vigila cuándo un elemento entra en la pantalla.
  Es más eficiente que comprobar la posición durante cada movimiento de scroll. El CSS de .revelar contiene el estado inicial de la animación. */
const observadorEntrada = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      /* Si el elemento ya se ve en pantalla, añadimos la clase que lo anima. */
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
      }
    });
  },
  {
    /* La animación comienza cuando se ve el 12 % del elemento. */
    threshold: 0.12,
  }
);

/* Conectamos el observador a todos los elementos con class="revelar". */
document.querySelectorAll('.revelar').forEach((elemento) => {
  observadorEntrada.observe(elemento);
});

/* 2. CONTADORES ANIMADOS DE LA SECCIÓN "EN NÚMEROS" */

const observadorNumeros = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      /* No hacemos nada si el contador aún no está visible o si ya se animó anteriormente. data-hecho evita que se reinicie al volver hacia arriba en la página. */
      if (!entrada.isIntersecting || entrada.target.dataset.hecho) {
        return;
      }

      entrada.target.dataset.hecho = 'true';

      /* data-conteo está en el HTML y almacena el número final. performance.now() guarda el instante exacto de inicio. */
      const objetivo = Number(entrada.target.dataset.conteo);
      const inicio = performance.now();

      /* pasoTemporizador se ejecuta una vez por cada fotograma del navegador. "ahora" representa el tiempo actual que proporciona el navegador. */
      const pasoTemporizador = (ahora) => {
        /* Calculamos el avance entre 0 y 1 durante 1.200 milisegundos. */
        const progreso = Math.min((ahora - inicio) / 1200, 1);

        /* Esta fórmula acelera al principio y frena suavemente al final. toFixed(1) conserva un decimal cuando el número final lo tiene, como sucede con 2.8 segundos. */
        const valorActual = objetivo * (1 - Math.pow(1 - progreso, 3));
        const decimales = objetivo % 1 ? 1 : 0;
        entrada.target.textContent = valorActual.toFixed(decimales);

        /* Mientras no se llegue al 100 %, pedimos el siguiente fotograma. */
        if (progreso < 1) {
          requestAnimationFrame(pasoTemporizador);
        }
      };

      requestAnimationFrame(pasoTemporizador);
    });
  },
  {
    /* Espera a que el 60 % del número sea visible antes de iniciar el conteo. */
    threshold: 0.6,
  }
);

/* Observamos todos los elementos que tengan el atributo data-conteo. */
document.querySelectorAll('[data-conteo]').forEach((elemento) => {
  observadorNumeros.observe(elemento);
});

/* 3. MENÚ DESPLEGABLE EN DISPOSITIVOS MÓVILES  */

/* Localizamos el botón de dos líneas de la cabecera. */
const menu = document.querySelector('.conmutador-menu');

/* Al pulsarlo, aria-expanded cambia entre "true" y "false". El CSS utiliza ese atributo para mostrar u ocultar los enlaces. El operador ?. evita un error si no existe el botón en otra página. */
menu?.addEventListener('click', () => {
  const menuAbierto = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!menuAbierto));
});

/* Al elegir cualquier enlace del menú, cerramos el desplegable para que el contenido de la página vuelva a ser visible inmediatamente. */
document.querySelectorAll('.enlaces-navegacion a').forEach((enlace) => {
  enlace.addEventListener('click', () => {
    menu?.setAttribute('aria-expanded', 'false');
  });
});