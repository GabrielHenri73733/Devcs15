document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const messageBox = document.getElementById('message');
    const forgotPasswordModal = document.getElementById('forgot-password-modal');
    const createAccountModal = document.getElementById('create-account-modal');
    const closeForgot = document.getElementById('close-forgot');
    const closeCreate = document.getElementById('close-create');
    const forgotPasswordLink = document.getElementById('forgot-password');
    const createAccountLink = document.getElementById('create-account');
    const createAccountForm = document.getElementById('create-account-form');

    // Mostrar Tela de Login após o Carregamento
    window.onload = function() {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('login-screen').style.display = 'block';
    };

    // Validação de Login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'Devcs15k' && password === 'Devcs15free') {
            messageBox.textContent = 'Acesso liberado!';
            messageBox.style.color = 'green';
            messageBox.style.display = 'block';

            setTimeout(function() {
                window.location.href = 'https://www.exemplo.com'; // Substitua pelo link desejado
            }, 1500);
        } else {
            messageBox.textContent = 'Usuário ou senha inválidos.';
            messageBox.style.color = 'red';
            messageBox.style.display = 'block';
        }
    });

    // Mostrar Modal de Recuperação de Senha
    forgotPasswordLink.onclick = function() {
        forgotPasswordModal.style.display = 'block';
    };

    closeForgot.onclick = function() {
        forgotPasswordModal.style.display = 'none';
    };

    // Mostrar Modal de Criação de Conta
    createAccountLink.onclick = function() {
        createAccountModal.style.display = 'block';
    };

    closeCreate.onclick = function() {
        createAccountModal.style.display = 'none';
    };

    // Fechar Modal ao Clicar Fora
    window.onclick = function(event) {
        if (event.target === forgotPasswordModal) {
            forgotPasswordModal.style.display = 'none';
        } else if (event.target === createAccountModal) {
            createAccountModal.style.display = 'none';
        }
    };

    // Simular Criação de Conta
    createAccountForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newUsername = document.getElementById('new-username').value;
        const newEmail = document.getElementById('new-email').value;
        const newPassword = document.getElementById('new-password').value;
        alert(`Conta criada com sucesso! \nUsuário: ${newUsername} \nE-mail: ${newEmail}`);
        createAccountModal.style.display = 'none';
    });
});
