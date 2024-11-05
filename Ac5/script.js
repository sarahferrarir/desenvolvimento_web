const submitButton = document.querySelector('button[type="submit"]');
const form = document.getElementById('contactForm');

// Desativa o botão inicialmente
submitButton.disabled = true;

// Função para validar e exibir mensagens de erro
function validateField(field, errorMessageElement, errorMessage) {
    if (!field.checkValidity()) {
        errorMessageElement.textContent = errorMessage; // Define a mensagem de erro
        field.classList.add('invalid'); // Adiciona uma classe de estilo para campos inválidos
    } else {
        errorMessageElement.textContent = ''; // Limpa a mensagem de erro
        field.classList.remove('invalid'); // Remove a classe de estilo
    }
}

// Checa validade do formulário em cada entrada
form.addEventListener('input', () => {
    // Valida cada campo
    validateField(document.getElementById('name'), document.getElementById('nameError'), 'O nome é obrigatório.');
    validateField(document.getElementById('email'), document.getElementById('emailError'), 'O email deve ser válido.');
    validateField(document.getElementById('message'), document.getElementById('messageError'), 'A mensagem deve ter pelo menos 100 caracteres.');

    // Habilita ou desabilita o botão de envio com base na validade do formulário
    submitButton.disabled = !form.checkValidity();
});

// Adiciona a validação de tamanho da mensagem
document.getElementById('message').addEventListener('input', function () {
    const messageField = this;
    const messageErrorElement = document.getElementById('messageError');
    if (messageField.value.length < 100) {
        messageErrorElement.textContent = 'A mensagem deve ter pelo menos 100 caracteres.';
        messageField.classList.add('invalid');
    } else {
        messageErrorElement.textContent = '';
        messageField.classList.remove('invalid');
    }
});

// Reset do formulário e limpeza de mensagens
form.addEventListener('reset', () => {
    document.querySelectorAll('.error-message').forEach(element => {
        element.textContent = ''; // Limpa todas as mensagens de erro
    });
    document.querySelectorAll('input, textarea').forEach(field => {
        field.classList.remove('invalid'); // Remove a classe de erro
    });
});
