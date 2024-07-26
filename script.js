document.addEventListener('DOMContentLoaded', () => {
    // Este script puede ser usado para interactividad adicional
    // Actualmente, no se requiere script adicional para el fondo animado
});

// document.addEventListener('onclick', () => {
        
// });

document.addEventListener('DOMContentLoaded', (event) => {
    const music = document.getElementById('background-music');
    const musicControlButton = document.getElementById('music-control');
    const musicIcon = document.getElementById('music-icon');

    // Reproduce la música cuando la página se carga
    music.play();

    window.toggleMusic = function() {
        if (music.paused) {
            music.play();
            musicIcon.classList.remove('bi-play');
            musicIcon.classList.add('bi-pause');
        } else {
            music.pause();
            musicIcon.classList.remove('bi-pause');
            musicIcon.classList.add('bi-play');
        }
    };

    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            music.pause();
            musicIcon.classList.remove('bi-pause');
            musicIcon.classList.add('bi-play');
        }
    });
});


