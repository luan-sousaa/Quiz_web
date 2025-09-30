// Aguarda o DOM ser carregado completamente
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão de começar
    const startButton = document.getElementById('startButton');
    
    // Adiciona o evento de clique no botão
    startButton.addEventListener('click', function() {
        // Redireciona para a página do quiz
        window.location.href = 'quiz.html';
    });
    
    // Adiciona efeito de entrada suave na página
    const welcomeContent = document.querySelector('.welcome-content');
    welcomeContent.style.opacity = '0';
    welcomeContent.style.transform = 'translateY(30px)';
    
    // Anima a entrada do conteúdo
    setTimeout(() => {
        welcomeContent.style.transition = 'all 0.8s ease';
        welcomeContent.style.opacity = '1';
        welcomeContent.style.transform = 'translateY(0)';
    }, 100);
});
