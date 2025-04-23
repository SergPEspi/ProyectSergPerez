
const darkModeButton = document.getElementById('Dark-mode');
const body = document.body;

darkModeButton.addEventListener('click', () => {
    body.classList.toggle('modo-oscuro'); 
    if (body.classList.contains('modo-oscuro')) {
        darkModeButton.textContent = 'Modo Claro'; 
    } else {
        darkModeButton.textContent = 'Modo Oscuro'; 
    }
});


let currentIndex = 0;
const images = document.querySelectorAll('.galeria-carrusel img');
const previousButton = document.querySelector('.btn-carrusel-anterior');
const nextButton = document.querySelector('.btn-carrusel-siguiente');

function showImage(index) {
    if (index < 0) {
        currentIndex = images.length - 1; 
    } else if (index >= images.length) {
        currentIndex = 0; 
    }
    images.forEach((img, i) => {
        img.style.display = (i === currentIndex) ? 'block' : 'none';
    });
}

previousButton.addEventListener('click', () => {
    currentIndex--;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex++;
    showImage(currentIndex);
});


showImage(currentIndex);


let visitCount = localStorage.getItem('visitas') ? parseInt(localStorage.getItem('visitas')) : 0;
visitCount++;
localStorage.setItem('visitas', visitCount);

const contadorVisitas = document.getElementById('contador-visitas');
contadorVisitas.textContent = visitCount; 