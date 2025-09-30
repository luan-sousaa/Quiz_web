# 🦸‍♂️ Quiz de Super-Heróis

Sistema de quiz interativo com tema de super-heróis para descobrir qual personagem você seria em um universo fictício.

## 📁 Estrutura do Projeto

```
Projeto_web/
├── README.md                 # Documentação principal
├── index.html               # Página principal
├── questoes.js              # Banco de perguntas do quiz
├── assets/                  # Recursos estáticos
│   ├── css/                 # Arquivos de estilo
│   │   └── styles.css
│   ├── js/                  # Arquivos JavaScript
│   │   └── script.js
│   └── images/              # Imagens e recursos visuais
│       └── dc.jpg
├── pages/                   # Páginas adicionais do sistema
│   └── (outras páginas)
└── docs/                    # Documentação adicional
    └── CONTRIBUTING.md
```

## 🚀 Como Executar

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` em um navegador
3. Clique em "Começar" para iniciar o quiz

## 👥 Como Contribuir

### 1. Criando uma Nova Página

1. Crie seu arquivo HTML na pasta `pages/`
2. Crie os arquivos CSS em `assets/css/`
3. Crie os arquivos JavaScript em `assets/js/`
4. Siga os padrões de nomenclatura existentes

### 2. Padrões de Nomenclatura

- **HTML**: `nome-pagina.html`
- **CSS**: `nome-pagina-styles.css`
- **JS**: `nome-pagina-script.js`
- **Imagens**: Use nomes descritivos em kebab-case

### 3. Estrutura de uma Página

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título da Página - Quiz</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet">
    
    <!-- CSS -->
    <link rel="stylesheet" href="../assets/css/sua-pagina-styles.css">
</head>
<body>
    <!-- Seu conteúdo aqui -->
    
    <!-- JavaScript -->
    <script src="../assets/js/sua-pagina-script.js"></script>
</body>
</html>
```

## 🎨 Padrões de Design

### Cores do Tema
- **Primária**: Gradiente azul-roxo (#667eea → #764ba2)
- **Secundária**: Vermelho-azul para elementos heroicos (#dc2626 → #1e40af)
- **Fundo**: Imagens temáticas de super-heróis
- **Texto**: #4a5568 (títulos), #718096 (descrições)

### Tipografia
- **Títulos**: `'Orbitron', monospace` - Para visual heroico
- **Corpo**: `'Poppins', sans-serif` - Para legibilidade

### Componentes Reutilizáveis
- **Botões**: Gradiente com hover e sombras
- **Cards**: Fundo translúcido com backdrop-filter
- **Animações**: Transições suaves (0.3s ease)

## 📝 Tarefas Sugeridas para Colaboradores

### 🔥 Alta Prioridade
- [ ] Criar página `quiz.html` com perguntas
- [ ] Desenvolver página de resultados
- [ ] Sistema de pontuação

### 🚀 Funcionalidades
- [ ] Banco de perguntas JavaScript
- [ ] Sistema de compartilhamento de resultados
- [ ] Animações entre páginas
- [ ] Modo escuro/claro

### 🎨 Design
- [ ] Mais temas visuais (Marvel, DC, Anime)
- [ ] Responsividade avançada
- [ ] Micro-interações
- [ ] Loading animations

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com flexbox, grid, gradientes
- **JavaScript**: Interatividade e lógica do quiz
- **Google Fonts**: Tipografia (Poppins + Orbitron)


