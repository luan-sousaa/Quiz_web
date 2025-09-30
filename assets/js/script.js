document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM carregado - Script inicializado');

    const startButton = document.getElementById('startButton');

    if (startButton) {
        console.log('Botão "Começar" encontrado');

        startButton.addEventListener('click', function (e) {
            console.log('Botão "Começar" clicado');
            e.preventDefault();

            window.location.href = 'pages/quiz.html';
        });
    } else {
        console.error('Botão "Começar" não encontrado!');
    }

    const welcomeContent = document.querySelector('.welcome-content');

    if (welcomeContent) {
        console.log('Elemento welcome-content encontrado - aplicando animação');
        welcomeContent.style.opacity = '0';
        welcomeContent.style.transform = 'translateY(30px)';

        setTimeout(() => {
            welcomeContent.style.transition = 'all 0.8s ease';
            welcomeContent.style.opacity = '1';
            welcomeContent.style.transform = 'translateY(0)';
        }, 100);
    } else {
        console.error('Elemento welcome-content não encontrado!');
    }
});
