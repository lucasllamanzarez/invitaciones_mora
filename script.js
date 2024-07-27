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


   // datos bancarios
   document.getElementById('show-bank-details').addEventListener('click', function() {
    Swal.fire({
        title: 'Datos Bancarios',
        html: `
            <p><strong>ALIAS:</strong> morasgro</p>
            <p><strong>CBU:</strong> 0000003100079793480010</p>
        `,
        icon: 'info',
        confirmButtonText: 'Cerrar',
        background: 'rgba(0, 0, 0, 0.4)', // Fondo opaco
        color: '#fff', // Color del texto
        backdrop: `rgba(0, 0, 0, 0.8)` // Fondo semi-opaco
    });
});

//Contador
// Fecha y hora del cumpleaños
const eventDate = new Date('August 23, 2024 21:30:00').getTime();

// Actualiza el contador cada segundo
const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Cálculo del tiempo restante
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra el resultado en los elementos correspondientes
    document.getElementById('countdown-days').innerText = `${days} Días`;
    document.getElementById('countdown-hours').innerText = `${hours} Horas`;
    document.getElementById('countdown-minutes').innerText = `${minutes} Minutos`;
    document.getElementById('countdown-seconds').innerText = `${seconds} Segundos`;

    // Si la cuenta regresiva ha terminado, muestra un mensaje
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown-timer').innerText = '¡Es Hora De Festejar!';
    }
}, 1000);