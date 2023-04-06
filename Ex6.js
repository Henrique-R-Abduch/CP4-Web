// Obtém o formulário e adiciona um evento de submit
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que a página seja recarregada

    // Obtém os valores dos campos de usuário e senha
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    // Verifica se o usuário e a senha correspondem aos dados cadastrados
    if (usuario === 'admin' && senha === '1234') {
        alert('Login realizado com sucesso!');
    } else {
        alert('Falha de autenticação. Verifique o usuário e a senha e tente novamente.');
    }
});