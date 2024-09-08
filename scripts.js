// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const loginScreen = document.getElementById('login-screen');
    const loginForm = document.getElementById('login-form');
    const messageBox = document.getElementById('message');

    // Simulação de carregamento
    setTimeout(function() {
        loadingScreen.style.opacity = '0';
        setTimeout(function() {
            loadingScreen.style.display = 'none';
            loginScreen.style.display = 'flex';
        }, 500); // Tempo para transição de fade out
    }, 2000); // Tempo de simulação de carregamento (2 segundos)

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita o envio padrão do formulário

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'Devcs15k' && password === 'Devcs15free') {
            messageBox.textContent = 'Acesso liberado!';
            messageBox.style.color = 'green';
            messageBox.style.display = 'block';

            // Redireciona para o link desejado (substitua 'https://www.exemplo.com' pelo link real)
            setTimeout(function() {
                window.location.href = 'https://www.google.com';
            }, 1500); // Delay para a mensagem ser visível
        } else {
            messageBox.textContent = 'Usuário ou senha inválidos.';
            messageBox.style.color = 'red';
            messageBox.style.display = 'block';
        }
    });

    document.getElementById('forgot-password').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Funcionalidade de recuperação de senha ainda não implementada.');
    });

    document.getElementById('create-account').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Funcionalidade de criação de conta ainda não implementada.');
    });
});

