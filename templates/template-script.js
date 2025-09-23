// ===================================
// TEMPLATE JAVASCRIPT PARA PÁGINAS
// ===================================

// IMPORTANTE: Substitua [NOME-DA-PAGINA] pelos nomes reais

// Aguarda o DOM ser carregado
document.addEventListener('DOMContentLoaded', function() {
    // Inicialização da página
    initializePage();
    
    // Event listeners
    setupEventListeners();
    
    // Animações de entrada
    addPageAnimations();
});

// ===================================
// FUNÇÕES PRINCIPAIS
// ===================================

function initializePage() {
    console.log('[NOME-DA-PAGINA] - Página inicializada');
    
    // Aqui você pode:
    // - Carregar dados salvos do localStorage
    // - Configurar estados iniciais
    // - Verificar parâmetros da URL
    
    // Exemplo: Recuperar dados do quiz anterior
    // const quizData = getQuizData();
    // if (quizData) {
    //     console.log('Dados do quiz encontrados:', quizData);
    // }
}

function setupEventListeners() {
    // Botão principal de ação
    const actionButton = document.getElementById('actionButton');
    if (actionButton) {
        actionButton.addEventListener('click', handleMainAction);
    }
    
    // Botão de próxima página
    const nextButton = document.getElementById('nextButton');
    if (nextButton) {
        nextButton.addEventListener('click', goToNextPage);
    }
    
    // Adicione mais event listeners conforme necessário
    // Exemplo:
    // document.querySelectorAll('.quiz-option').forEach(option => {
    //     option.addEventListener('click', selectOption);
    // });
}

function addPageAnimations() {
    // Animação de entrada suave
    const content = document.querySelector('.content');
    if (content) {
        content.style.opacity = '0';
        content.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            content.style.transition = 'all 0.8s ease';
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        }, 100);
    }
}

// ===================================
// HANDLERS DE EVENTOS
// ===================================

function handleMainAction() {
    console.log('Ação principal executada');
    
    // Exemplo de ação:
    // - Processar resposta do quiz
    // - Validar formulário
    // - Salvar progresso
    
    // Animação de feedback
    const button = document.getElementById('actionButton');
    if (button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    }
}

function goToNextPage() {
    console.log('Navegando para próxima página');
    
    // Salvar dados antes de navegar (se necessário)
    // saveQuizProgress();
    
    // Navegar para próxima página
    // window.location.href = 'proxima-pagina.html';
}

// ===================================
// FUNÇÕES UTILITÁRIAS
// ===================================

// Salvar dados no localStorage
function saveQuizData(data) {
    try {
        localStorage.setItem('quizData', JSON.stringify(data));
        console.log('Dados salvos com sucesso');
    } catch (error) {
        console.error('Erro ao salvar dados:', error);
    }
}

// Recuperar dados do localStorage
function getQuizData() {
    try {
        const data = localStorage.getItem('quizData');
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Erro ao recuperar dados:', error);
        return null;
    }
}

// Limpar dados salvos
function clearQuizData() {
    localStorage.removeItem('quizData');
    console.log('Dados do quiz limpos');
}

// Navegar com animação
function navigateWithAnimation(url) {
    const content = document.querySelector('.content');
    if (content) {
        content.style.transition = 'all 0.5s ease';
        content.style.opacity = '0';
        content.style.transform = 'translateY(-30px)';
        
        setTimeout(() => {
            window.location.href = url;
        }, 500);
    } else {
        window.location.href = url;
    }
}

// Mostrar mensagem de feedback
function showFeedback(message, type = 'info') {
    // Criar elemento de feedback
    const feedback = document.createElement('div');
    feedback.className = `feedback feedback-${type}`;
    feedback.textContent = message;
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        color: white;
        font-weight: 600;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    // Definir cor baseada no tipo
    switch (type) {
        case 'success':
            feedback.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            break;
        case 'error':
            feedback.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
            break;
        case 'warning':
            feedback.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
            break;
        default:
            feedback.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';
    }
    
    // Adicionar ao body
    document.body.appendChild(feedback);
    
    // Remover após 3 segundos
    setTimeout(() => {
        feedback.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 300);
    }, 3000);
}

// Adicionar CSS para animações de feedback
const feedbackStyles = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;

// Injetar estilos de feedback
const styleSheet = document.createElement('style');
styleSheet.textContent = feedbackStyles;
document.head.appendChild(styleSheet);

// ===================================
// EXEMPLO DE USO DAS FUNÇÕES
// ===================================

// Para usar as funções utilitárias:

// 1. Salvar progresso do quiz:
// const progress = { currentQuestion: 1, answers: ['A', 'B'] };
// saveQuizData(progress);

// 2. Mostrar feedback ao usuário:
// showFeedback('Resposta salva com sucesso!', 'success');

// 3. Navegar com animação:
// navigateWithAnimation('../pages/quiz.html');

// 4. Recuperar dados salvos:
// const savedData = getQuizData();
// if (savedData) {
//     console.log('Progresso encontrado:', savedData);
// }
