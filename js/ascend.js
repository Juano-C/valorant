// Referencias a los botones y secciones
const composicionBtn = document.getElementById('composicion');
const jugadasBtn = document.getElementById('jugadas');
const informacionBtn = document.getElementById('informacion');

const composicionSection = document.getElementById('composicionSection');
const jugadasSection = document.getElementById('jugadasSection');
const informacionSection = document.getElementById('informacionSection');

// Mapas de los agentes
const jettMapa = document.getElementById('jett-mapa');
const sovaMapa = document.getElementById('sova-mapa');
const omenMapa = document.getElementById('omen-mapa');
const kyoMapa = document.getElementById('kyo-mapa');
const kjMapa = document.getElementById('kj-mapa');
const mapaCompleto = document.getElementById('mapa-completo-posiciones');

// Función para mostrar una sección y ocultar las demás
function mostrarSeccion(seccionAMostrar) {
    composicionSection.style.display = 'none';
    jugadasSection.style.display = 'none';
    informacionSection.style.display = 'none';
    seccionAMostrar.style.display = 'block';
}

// Función para ocultar todos los mapas y mostrar solo el que se necesite
function mostrarMapa(mapaAMostrar) {
    // Ocultar todos los mapas
    jettMapa.style.display = 'none';
    sovaMapa.style.display = 'none';
    omenMapa.style.display = 'none';
    kyoMapa.style.display = 'none';
    kjMapa.style.display = 'none';
    mapaCompleto.style.display = 'none';

    // Mostrar solo el mapa correspondiente
    mapaAMostrar.style.display = 'block';
}

// Asignar eventos a los botones para mostrar secciones
composicionBtn.addEventListener('click', function() {
    mostrarSeccion(composicionSection);
});
jugadasBtn.addEventListener('click', function() {
    mostrarSeccion(jugadasSection);
});
informacionBtn.addEventListener('click', function() {
    mostrarSeccion(informacionSection);
});

// Asignar eventos a los botones de los agentes y la posición completa
document.querySelector('[data-bs-target="#jett-mapa"]').addEventListener('click', function() {
    mostrarMapa(jettMapa);
});
document.querySelector('[data-bs-target="#sova-mapa"]').addEventListener('click', function() {
    mostrarMapa(sovaMapa);
});
document.querySelector('[data-bs-target="#omen-mapa"]').addEventListener('click', function() {
    mostrarMapa(omenMapa);
});
document.querySelector('[data-bs-target="#kyo-mapa"]').addEventListener('click', function() {
    mostrarMapa(kyoMapa);
});
document.querySelector('[data-bs-target="#kj-mapa"]').addEventListener('click', function() {
    mostrarMapa(kjMapa);
});
// Evento para el botón "Posición Meta"
document.querySelector('[data-bs-target="#mapa-completo-posiciones"]').addEventListener('click', function() {
    if (mapaCompleto.style.display === 'block') {
        mapaCompleto.style.display = 'none'; // Si está visible, lo ocultamos
    } else {
        mostrarMapa(mapaCompleto);  // Si está oculto, mostramos solo este mapa
    }
});

