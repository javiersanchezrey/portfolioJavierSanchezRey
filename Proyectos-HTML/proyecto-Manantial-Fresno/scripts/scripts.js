/**
 * ============================================================================
 * 1. UTILIDADES Y DATOS GLOBALES
 * ============================================================================
 */

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

const casas = {
  familiar: [
    'Casa Familiar',
    'PARA COMPARTIR',
    'Dos habitaciones, un salón de sobremesas largas y un porche que da directamente al verde.',
    '2 dormitorios · 1 baño · cocina completa',
    'El punto de partida para toda la familia.',
    './img/casa-Familiar-portada.webp'
  ],
  deluxe: [
    'Deluxe Familiar',
    'MÁS LUZ, MÁS AIRE',
    'Un refugio abierto al jardín con detalles que convierten una escapada en un recuerdo.',
    '2 dormitorios · 1 baño · porche privado',
    'Para perder la noción de la hora.',
    './img/deluxe-familiar-portada.webp'
  ],
  suite: [
    'Suite Familiar',
    'CUANDO CABE TODO',
    'La casa más amplia del Manantial, con espacio para estirar los días y las conversaciones.',
    '2 dormitorios · 1 baño · 81 m²',
    'Para viajar sin renunciar a nada.',
    './img/Suite-Familiar-portada.jpg'
  ],
  apartamento: [
    'El Apartamento',
    'SOLO VOSOTROS DOS',
    'Bajo la cubierta y a salvo del mundo. Una escapada íntima hecha a vuestra medida.',
    '1 dormitorio · 1 baño · 55 m²',
    'Para bajar el volumen a todo lo demás.',
    './img/apartamento-portada.webp'
  ]
};

// Galerías de fotos de cada casa (cambia solo las rutas)
const galeriasCasas = {
  familiar: [
    './img/casa-familiar1.webp',
    './img/casa-familiar2.webp',
    './img/casa-familiar3.webp',
    './img/casa-familiar4.webp',
    './img/casa-familiar5.webp',
    './img/casa-familiar6.webp',
    './img/casa-familiar7.webp'
  ],
  deluxe: [
    './img/deluxe1.jpg',
    './img/deluxe2.webp',
    './img/deluxe3.webp',
    './img/deluxe4.webp',
    './img/deluxe5.webp',
    './img/deluxe6.jpg',
    './img/deluxe7.webp',
    './img/deluxe8.webp',
    './img/deluxe9.jpg'
  ],
  suite: [
    './img/suite1.jpg',
    './img/suite2.jpg',
    './img/suite3.jpg',
    './img/suite4.jpg',
    './img/suite5.jpg',
    './img/suite6.jpg',
    './img/suite7.jpg',
    './img/suite8.webp',
    './img/suite9.jpg',
    './img/suite10.jpg',
    './img/suite11.jpg',
    './img/suite12.webp',
  ],
  apartamento: [
    './img/apartamento1.webp',
    './img/apartamento2.webp',
    './img/apartamento3.webp',
    './img/apartamento4.webp',
    './img/apartamento5.webp',
    './img/apartamento6.webp',
    './img/apartamento7.webp',
    './img/apartamento8.webp'
  ]
};

// Información e imágenes para la Sección 3 (Valle del Ambroz)
const lugares = {
  hervas: {
    texto: 'Calles de piedra, la judería y una cocina que merece hacerse despacio.',
    imagen: './img/foto-hervas.webp'
  },
  forest: {
    texto: 'El castañar se recorre sin reloj: hojas, sombra y el olor de la tierra húmeda.',
    imagen: './img/monte-hervas.jpg'
  },
  pool: {
    texto: 'Una hamaca, agua fresca y ninguna notificación que atender.',
    imagen: './img/foto-piscina.jpg'
  }
};

// Contenidos ampliados para las tarjetas de la sección 4 con imágenes y diseño zigzag
const contenidosExperiencias = {
  'experiencia-1': `
    <div class="experiencia-cabecera">
      <p class="mono">ENTORNO & GUÍA · VALLE DEL AMBROZ</p>
      <h2>Qué ver en Hervás:<br><em>4 Lugares Imprescindibles</em></h2>
      <p class="subtitulo">Un paraíso natural y cultural enclavado en el norte de Cáceres. Ríos, bosques de castaños y un legado histórico único para recorrer sin prisa.</p>
    </div>

    <div class="lista-lugares-guia">
      <!-- 01: Imagen Izquierda -->
      <div class="tarjeta-lugar-guia">
        <div class="contenedor-imagen-lugar">
          <img src="./img/iglesia.jpg" alt="Iglesia Santa María de Aguas Vivas">
        </div>
        <div class="contenido-texto-lugar">
          <span class="numero-lugar">01</span>
          <h3>Iglesia Santa María de Aguas Vivas</h3>
          <p>Ubicada en la parte más alta de Hervás sobre una antigua atalaya. Ofrece un mirador panorámico impresionante sobre todo el Valle del Ambroz.</p>
        </div>
      </div>

      <!-- 02: Imagen Derecha (Invertido) -->
      <div class="tarjeta-lugar-guia invertido">
        <div class="contenedor-imagen-lugar">
          <img src="./img/barrioJudio.jpg" alt="El Barrio Judío">
        </div>
        <div class="contenido-texto-lugar">
          <span class="numero-lugar">02</span>
          <h3>El Barrio Judío (Conjunto Histórico-Artístico)</h3>
          <p>Un laberinto de callejuelas y casas tradicionales de adobe y madera de castaño construidas entre los siglos XIV y XV. Una de las juderías mejor conservadas de España.</p>
        </div>
      </div>

      <!-- 03: Imagen Izquierda -->
      <div class="tarjeta-lugar-guia">
        <div class="contenedor-imagen-lugar">
          <img src="./img/puenteHierro.jpg" alt="El Puente de Hierro">
        </div>
        <div class="contenido-texto-lugar">
          <span class="numero-lugar">03</span>
          <h3>El Puente de Hierro</h3>
          <p>Postal emblemática sobre el río Ambroz. Antigua vía de tren convertida en paseo con vistas panorámicas increíbles de la sierra y el pueblo.</p>
        </div>
      </div>

      <!-- 04: Imagen Derecha (Invertido) -->
      <div class="tarjeta-lugar-guia invertido">
        <div class="contenedor-imagen-lugar">
          <img src="./img/monte-hervas.jpg" alt="El Castañar Gallego de Hervás">
        </div>
        <div class="contenido-texto-lugar">
          <span class="numero-lugar">04</span>
          <h3>El Castañar Gallego de Hervás</h3>
          <p>Espacio protegido de más de 300 hectáreas y uno de los bosques de castaños más importantes del sur de Europa. Mágico para recorrer en cualquier época, especialmente en otoño.</p>
        </div>
      </div>
    </div>
  `,

  'experiencia-2': `
    <div class="experiencia-cabecera">
      <p class="mono">MOMENTO 02 · RITMO LENTO</p>
      <h2>Quedarse cinco minutos más</h2>
      <p class="subtitulo">Espacios diseñados para pausar el reloj, disfrutar de la luz de la mañana y reconectar con el silencio.</p>
    </div>
    <div class="tarjeta-lugar-guia">
      <div class="contenedor-imagen-lugar">
        <img src="./img/5-minutos-mas-portada2.jpg" alt="Refugio">
      </div>
      <div class="contenido-texto-lugar">
        <span class="numero-lugar">REFUGIO</span>
        <h3>Despertar sin prisas</h3>
        <p>Nuestras casas cuentan con chimenea de leña, camas equipadas para un descanso profundo y grandes ventanales con vistas directas al jardín.</p>
      </div>
    </div>
  `,

  'experiencia-3': `
    <div class="experiencia-cabecera">
      <p class="mono">MOMENTO 03 · CALMA TOTAL</p>
      <h2>Volver a la calma</h2>
      <p class="subtitulo">Disfruta del frescor de la naturaleza y del silencio del valle.</p>
    </div>
    <div class="tarjeta-lugar-guia">
      <div class="contenedor-imagen-lugar">
        <img src="./img/tranquilidad-portada.webp" alt="Calma">
      </div>
      <div class="contenido-texto-lugar">
        <span class="numero-lugar">ENTORNO</span>
        <h3>Agua y aire puro</h3>
        <p>Un entorno pensado para el descanso absoluto tras una jornada explorando los senderos y pueblos del Ambroz.</p>
      </div>
    </div>
  `
};

/**
 * ============================================================================
 * SCRIPT PRINCIPAL (DOM CARGADO)
 * ============================================================================
 */
document.addEventListener("DOMContentLoaded", () => {

  // 1. Selector interactivo de alojamientos
  const botonesCasas = $$('.tarjeta-casa');

  botonesCasas.forEach(boton => {
    boton.onclick = () => {
      const tipoCasa = boton.dataset.casa;
      const datosCasa = casas[tipoCasa];

      if (!datosCasa) return;

      botonesCasas.forEach(btn => btn.classList.remove('activa'));
      boton.classList.add('activa');

      const imagen = $('#foto-casa');
      if (imagen) {
        imagen.style.opacity = 0;
        setTimeout(() => {
          imagen.src = datosCasa[5];
          imagen.style.opacity = 1;
        }, 150);
      }

      if ($('#etiqueta-casa')) $('#etiqueta-casa').textContent = datosCasa[1];
      if ($('#nombre-casa')) $('#nombre-casa').textContent = datosCasa[0];
      if ($('#descripcion-casa')) $('#descripcion-casa').textContent = datosCasa[2];
      if ($('#detalle-casa')) $('#detalle-casa').textContent = datosCasa[3];
      if ($('#sensacion-casa')) $('#sensacion-casa').textContent = datosCasa[4];
    };
  });

  // 2. Gestión de fechas y huéspedes
  const hoy = new Date().toISOString().slice(0, 10);
  const entradaInput = $('#entrada');
  const salidaInput = $('#salida');

  if (entradaInput && salidaInput) {
    entradaInput.min = salidaInput.min = hoy;
    entradaInput.onchange = () => {
      salidaInput.min = entradaInput.value;
    };
  }

  const selectorHuespedes = $('#selector-huespedes');
  const menuHuespedes = $('#menu-huespedes');

  if (selectorHuespedes && menuHuespedes) {
    selectorHuespedes.onclick = () => menuHuespedes.classList.toggle('mostrar');

    $$('#menu-huespedes button').forEach(boton => {
      boton.onclick = () => {
        $$('#menu-huespedes button').forEach(btn => btn.classList.remove('elegido'));
        boton.classList.add('elegido');

        const cuentaHuespedes = boton.dataset.huespedes;
        const textoEtiqueta = cuentaHuespedes === '1' ? 'persona' : 'personas';

        selectorHuespedes.innerHTML = `${cuentaHuespedes} ${textoEtiqueta} <span>＋</span>`;
        menuHuespedes.classList.remove('mostrar');
      };
    });
  }

  // 3. Búsqueda y modal de resultados
  const modalOpciones = $('#modal-opciones');

  function buscar() {
    const valorEntrada = $('#entrada') ? $('#entrada').value : '';
    const valorSalida = $('#salida') ? $('#salida').value : '';
    const valorHuespedes = $('#selector-huespedes') ? $('#selector-huespedes').textContent.trim() : '';

    if (!valorEntrada || !valorSalida || new Date(valorSalida) <= new Date(valorEntrada)) {
      mostrarToast('Elige las fechas de tu escapada para continuar.');
      return;
    }

    const noches = Math.round((new Date(valorSalida) - new Date(valorEntrada)) / 864e5);
    const listaDisponibles = Object.values(casas).slice(0, 3);

    if ($('#titulo-modal')) {
      $('#titulo-modal').textContent = `${noches} ${noches === 1 ? 'noche' : 'noches'} para ${valorHuespedes}`;
    }

    if ($('#lista-opciones')) {
      $('#lista-opciones').innerHTML = listaDisponibles
        .map(
          (casa, indice) => `
          <div class="opcion-disponible">
            <div>
              <strong>${casa[0]}</strong><br>
              <small>${casa[3]} · desde ${130 + indice * 25} €/noche</small>
            </div>
            <button data-eleccion="${casa[0]}">Elegir ↗</button>
          </div>
        `
        )
        .join('');
    }

    if (modalOpciones) modalOpciones.showModal();

    $$('[data-eleccion]').forEach(boton => {
      boton.onclick = () => {
        if (modalOpciones) modalOpciones.close();
        mostrarToast(`${boton.dataset.eleccion} guardada para tu escapada.`);
      };
    });
  }

  if ($('#comprobar-estancia')) {
    $('#comprobar-estancia').onclick = buscar;
  }

  $$('.js-reservar').forEach(boton => {
    boton.onclick = () => {
      if ($('#entrada') && !$('#entrada').value) {
        const entradaPorDefecto = new Date();
        entradaPorDefecto.setDate(entradaPorDefecto.getDate() + 14);

        const salidaPorDefecto = new Date(entradaPorDefecto);
        salidaPorDefecto.setDate(salidaPorDefecto.getDate() + 2);

        $('#entrada').value = entradaPorDefecto.toISOString().slice(0, 10);
        if ($('#salida')) $('#salida').value = salidaPorDefecto.toISOString().slice(0, 10);
      }
      buscar();
    };
  });

  if ($('.boton-cerrar') && modalOpciones) {
    $('.boton-cerrar').onclick = () => modalOpciones.close();
  }

  // 4. Explorador de lugares e imágenes del entorno (Sección 3 / Valle)
  $$('.lugar').forEach(boton => {
    boton.onclick = () => {
      $$('.lugar').forEach(btn => btn.classList.remove('seleccionado'));
      boton.classList.add('seleccionado');

      const claveLugar = boton.dataset.lugar;
      const datosLugar = lugares[claveLugar];

      if (datosLugar) {
        const elementoDescripcion = $('#descripcion-lugar');
        if (elementoDescripcion) {
          elementoDescripcion.textContent = datosLugar.texto;
        }

        const imagenValle = $('#foto-valle');
        if (imagenValle && datosLugar.imagen) {
          imagenValle.style.opacity = 0;
          setTimeout(() => {
            imagenValle.src = datosLugar.imagen;
            imagenValle.style.opacity = 0.55;
          }, 150);
        }
      }
    };
  });

  // 5. Modal Básico de Experiencias (Sección 4)
  const modalExperiencia = $('#modal-experiencia');
  const contenedorExperiencia = $('#contenedor-experiencia');
  const botonCerrarExperiencia = $('#cerrar-modal-experiencia');

  $$('.momento').forEach(tarjeta => {
    tarjeta.onclick = () => {
      const claveDestino = tarjeta.dataset.destino;
      const htmlContenido = contenidosExperiencias[claveDestino];

      if (htmlContenido && modalExperiencia && contenedorExperiencia) {
        contenedorExperiencia.innerHTML = htmlContenido;
        modalExperiencia.classList.add('abierto');
      }
    };
  });

  if (botonCerrarExperiencia && modalExperiencia) {
    botonCerrarExperiencia.onclick = () => {
      modalExperiencia.classList.remove('abierto');
    };
  }

  if (modalExperiencia) {
    modalExperiencia.onclick = (e) => {
      if (e.target === modalExperiencia) {
        modalExperiencia.classList.remove('abierto');
      }
    };
  }

  // 5b. Galería de fotos de la casa (botón ↗ de la sección 2)
  const botonGaleriaCasa = $('#boton-galeria-casa');

  if (botonGaleriaCasa && modalExperiencia && contenedorExperiencia) {
    botonGaleriaCasa.onclick = () => {
      const casaActiva = $('.tarjeta-casa.activa');
      const clave = casaActiva ? casaActiva.dataset.casa : 'familiar';
      const datos = casas[clave];
      const fotos = galeriasCasas[clave] || [];
      if (!datos) return;

      contenedorExperiencia.innerHTML = `
        <div class="experiencia-cabecera">
          <p class="mono">${datos[1]} · GALERÍA</p>
          <h2>${datos[0]}</h2>
          <p class="subtitulo">${datos[2]}</p>
        </div>
        <div class="rejilla-galeria-casa">
          ${fotos.map((src, i) => `
            <div class="tarjeta-foto-galeria">
              <img src="${src}" alt="${datos[0]} - foto ${i + 1}" loading="lazy">
            </div>
          `).join('')}
        </div>
      `;

      const caja = modalExperiencia.querySelector('.caja-modal-experiencia');
      if (caja) caja.scrollTop = 0;
      modalExperiencia.classList.add('abierto');
    };
  }

  // Ampliar una foto de la galería (visor)
  const visor = document.createElement('div');
  visor.className = 'visor-foto';
  visor.innerHTML = '<img alt=""><button aria-label="Cerrar foto">×</button>';
  document.body.appendChild(visor);

  const cerrarVisor = () => visor.classList.remove('abierto');

  if (contenedorExperiencia) {
    contenedorExperiencia.addEventListener('click', (e) => {
      const foto = e.target.closest('.tarjeta-foto-galeria img');
      if (!foto) return;
      visor.querySelector('img').src = foto.src;
      visor.querySelector('img').alt = foto.alt;
      visor.classList.add('abierto');
    });
  }

  visor.onclick = cerrarVisor;

  // Tecla Esc: cierra primero el visor y, si no está abierto, el modal
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (visor.classList.contains('abierto')) {
      cerrarVisor();
    } else if (modalExperiencia) {
      modalExperiencia.classList.remove('abierto');
    }
  });

  // 6. Menú de navegación móvil
  if ($('.boton-hamburguesa')) {
    $('.boton-hamburguesa').onclick = evento => {
      const menuNav = $('.menu-navegacion');
      if (menuNav) {
        const estaAbierto = menuNav.classList.toggle('abrir');
        evento.currentTarget.textContent = estaAbierto ? '×' : '☰';
      }
    };
  }

});

// Control de notificaciones toast
let temporizadorToast;

function mostrarToast(mensaje) {
  const elementoToast = $('#notificacion-toast');
  if (!elementoToast) return;

  elementoToast.textContent = mensaje;
  elementoToast.classList.add('mostrar');

  clearTimeout(temporizadorToast);
  temporizadorToast = setTimeout(() => {
    elementoToast.classList.remove('mostrar');
  }, 2800);
}