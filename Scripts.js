const botones = document.querySelectorAll('.btn-agregar-carro');
const modal = document.getElementById('modal');
const aceptar = document.getElementById('aceptar');
const mensajeModal = document.getElementById('mensaje-modal');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const nombreProducto = boton.getAttribute('nombre-producto');
        mensajeModal.textContent = `${nombreProducto} agregado al carrito`;
        modal.style.display = 'block';
    });
});

aceptar.addEventListener('click', () => {
    modal.style.display = 'none';
});




