window.addEventListener('load', () => {
    // Simula o carregamento por 2 segundos
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('login-screen').style.display = 'flex';
    }, 2000);
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Lógica de autenticação fictícia (substitua com a lógica real)
    if (username === 'user' && password === 'password') {
        // Redireciona para o link que será adicionado
        window.location.href = 'https://youtu.be/k1b9ND7-jjI?si=KB-lkMT8ImyzYbOg'; // Substitua com o link real
    } else {
        alert('Usuário ou senha incorretos.');
    }
});

document.getElementById('forgot-password').addEventListener('click', function(e) {
    e.preventDefault();
    // Redireciona para a página de recuperação de senha
    window.location.href = 'https://exemplo.com/recuperar-senha';
});

document.getElementById('create-account').addEventListener('click', function(e) {
    e.preventDefault();
    // Redireciona para a página de criação de conta
    window.location.href = 'https://exemplo.com/criar-conta';
});




