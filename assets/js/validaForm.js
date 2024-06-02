document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('emailInput');
    const subscribeButton = document.getElementById('subscribeButton');
    
    emailInput.addEventListener('input', function() {
        if (isValidEmail(emailInput.value)) {
            subscribeButton.disabled = false;
        } else {
            subscribeButton.disabled = true;
        }
    });

    function isValidEmail(email) {
        // Use uma expressão regular para validar o formato do e-mail
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    document.getElementById('newsletterForm').addEventListener('submit', function(event) {
        // Evita que o formulário seja enviado caso o e-mail não seja válido
        if (!isValidEmail(emailInput.value)) {
            event.preventDefault();
            alert('Por favor, insira um e-mail válido.');
        }
    });
});
