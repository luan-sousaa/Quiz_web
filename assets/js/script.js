// Aguarda o DOM ser carregado completamente
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado - Script inicializado');
    
    // Seleciona o botão de começar
    const startButton = document.getElementById('startButton');
    
    if (startButton) {
        console.log('Botão "Começar" encontrado');
        
        // Adiciona o evento de clique no botão
        startButton.addEventListener('click', function(e) {
            console.log('Botão "Começar" clicado');
            e.preventDefault(); // Previne comportamento padrão
            
            // Redireciona para a página do quiz
            window.location.href = 'pages/quiz.html';
        });
    } else {
        console.error('Botão "Começar" não encontrado!');
    }
    
    // Adiciona efeito de entrada suave na página
    const welcomeContent = document.querySelector('.welcome-content');
    
    if (welcomeContent) {
        console.log('Elemento welcome-content encontrado - aplicando animação');
        welcomeContent.style.opacity = '0';
        welcomeContent.style.transform = 'translateY(30px)';
        
        // Anima a entrada do conteúdo
        setTimeout(() => {
            welcomeContent.style.transition = 'all 0.8s ease';
            welcomeContent.style.opacity = '1';
            welcomeContent.style.transform = 'translateY(0)';
        }, 100);
    } else {
        console.error('Elemento welcome-content não encontrado!');
    }
});
