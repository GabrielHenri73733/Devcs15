document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const loginScreen = document.getElementById('login-screen');
    const forgotPasswordModal = document.getElementById('forgot-password-modal');
    const createAccountModal = document.getElementById('create-account-modal');
    const closeForgot = document.getElementById('close-forgot');
    const closeCreate = document.getElementById('close-create');

    // Mostra a tela de login após 2 segundos
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        loginScreen.style.display = 'flex';
    }, 2000);

    // Função de login
    document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'Devcs15k' && password === 'Devcs15free') {
            alert('Acesso Liberado!');
            window.location.href = 'https://www.example.com'; // Troque pelo link desejado
        } else {
            alert('Usuário ou senha incorretos.');
        }
    });

    // Abrir modal de Esquecer Senha
    document.getElementById('forgot-password').addEventListener('click', function (e) {
        e.preventDefault();
        forgotPasswordModal.style.display = 'block';
    });

    // Fechar modal de Esquecer Senha
    closeForgot.addEventListener('click', function () {
        forgotPasswordModal.style.display = 'none';
    });

    // Abrir modal de Criar Conta
    document.getElementById('create-account').addEventListener('click', function (e) {
        e.preventDefault();
        createAccountModal.style.display = 'block';
    });

    // Fechar modal de Criar Conta
    closeCreate.addEventListener('click', function () {
        createAccountModal.style.display = 'none';
    });

    // Funcionalidade de criação de conta
    document.getElementById('create-account-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const newUsername = document.getElementById('new-username').value;
        const newEmail = document.getElementById('new-email').value;
        const newPassword = document.getElementById('new-password').value;
        alert(`Conta criada com sucesso! \nUsuário: ${newUsername} \nE-mail: ${newEmail}`);
        createAccountModal.style.display = 'none';
    });
});
