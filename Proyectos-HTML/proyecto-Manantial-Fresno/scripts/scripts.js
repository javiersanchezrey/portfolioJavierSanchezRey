/**
 * ============================================================================
 * 1. UTILIDADES Y DATOS GLOBALES
 * ============================================================================
 */

const $ = selector => document.querySelector(selector); const $$ = selector => [...document.querySelectorAll(selector)];

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

    $$('#menu-huespedes button').forEach(boton => { boton.onclick = () => { $$
('#menu-huespedes button').forEach(btn => btn.classList.remove('elegido'));
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
    $('#comprobar-estancia').onclick = buscar; }    $$('.js-reservar').forEach(boton => {
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

  if ($('.boton-cerrar') && modalOpciones) {$('.boton-cerrar').onclick = () => modalOpciones.close();
  }

  // 4. Explorador de lugares e imágenes del entorno (Sección 3 / Valle)
  $$('.lugar').forEach(boton => { boton.onclick = () => { $$
('.lugar').forEach(btn => btn.classList.remove('seleccionado'));
      boton.classList.add('seleccionado');
      
      const claveLugar = boton.dataset.lugar;
      const datosLugar = lugares[claveLugar];
      
      if (datosLugar) {
        // Actualizar texto
        const elementoDescripcion = $('#descripcion-lugar');
        if (elementoDescripcion) {
          elementoDescripcion.textContent = datosLugar.texto;
        }

        // Transición y cambio de la imagen
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

  // 5. Menú de navegación móvil
  if ($('.boton-hamburguesa')) {$('.boton-hamburguesa').onclick = evento => {
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