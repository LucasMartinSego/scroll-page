// Obtener los elementos de la flecha hacia arriba y las secciones
const scrollUpBtn = document.getElementById("scrollUpBtn");
const container = document.querySelector(".container");
const slide2 = document.querySelector(".slide2");

// Mostrar el icono de flecha hacia arriba cuando se haga scroll a la segunda sección
container.addEventListener("scroll", function () {
    // Obtener la posición de la segunda sección dentro del contenedor
    const slide2Rect = slide2.getBoundingClientRect();

    // Mostrar la flecha cuando la mitad de la segunda sección sea visible
    if (slide2Rect.top <= window.innerHeight / 2) {
        scrollUpBtn.classList.add("show-scroll-up");
    } else {
        scrollUpBtn.classList.remove("show-scroll-up");
    }
});

const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const audioProgress = document.getElementById('audioProgress');

// Función para reproducir/pausar el audio
playPauseBtn.addEventListener('click', function () {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';  // Cambiar icono a pausa
    } else {
        audioPlayer.pause();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';  // Cambiar icono a play
    }
});

// Función para actualizar el progreso del audio
audioPlayer.addEventListener('timeupdate', function () {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    audioProgress.value = progress;
});

// Función para cambiar el progreso del audio al mover el slider
audioProgress.addEventListener('input', function () {
    const seekTime = (audioProgress.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
});
