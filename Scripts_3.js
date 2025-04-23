document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');
    const confirmationMessage = document.getElementById('confirmacion-contacto');

    const nameError = document.getElementById('contact-name-error');
    const emailError = document.getElementById('contact-email-error');
    const messageError = document.getElementById('contact-message-error');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Limpiar errores
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        confirmationMessage.classList.remove('visible');

        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Por favor, ingresa tu nombre.';
            isValid = false;
        }

        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            emailError.textContent = 'El correo es obligatorio.';
            isValid = false;
        } else if (!emailRegex.test(emailValue)) {
            emailError.textContent = 'Correo electrónico inválido.';
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Por favor, escribe tu mensaje.';
            isValid = false;
        }

        if (isValid) {
            form.reset();
            confirmationMessage.classList.add('visible');
        }
    });
});
