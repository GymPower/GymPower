document.addEventListener('DOMContentLoaded', function() {
    const ejercicios = document.querySelectorAll('ejercicio');

    ejercicios.forEach(ejercicio => {
        ejercicio.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});
