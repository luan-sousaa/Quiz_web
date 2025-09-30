# Quiz de Personalidade DC Comics

Sistema web de quiz interativo que determina qual herói da DC Comics corresponde à personalidade do usuário através de 10 questões específicas.

## Estrutura do Projeto

```
Projeto_web/
├── index.html                      # Página inicial de boas-vindas
├── assets/
│   ├── css/
│   │   ├── styles.css              # Estilos da página inicial
│   │   └── quiz-styles.css         # Estilos específicos do quiz
│   ├── js/
│   │   ├── script.js               # Lógica da página inicial
│   │   ├── quiz.js                 # Lógica principal do quiz
│   │   └── questoes.js             # Banco de dados das questões
│   └── images/
│       └── dc.jpg                  # Imagem de fundo da página inicial
├── pages/
│   └── quiz.html                   # Página principal do quiz
└── docs/
    └── CONTRIBUTING.md             # Guia para contribuições
```

## Como Usar

### Execução Local
1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` em qualquer navegador web moderno
3. Clique no botão "Começar" para iniciar o quiz
4. Responda as 10 questões apresentadas
5. Visualize seu resultado personalizado

### Servidor Local (Opcional)
Para desenvolvimento ou testes avançados:
```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com Live Server (VS Code)
Instale a extensão Live Server e clique em "Go Live"
```

## Lógica do Sistema

### Funcionamento do Quiz
1. **Inicialização**: Carrega 10 questões do arquivo `questoes.js`
2. **Pontuação**: Cada resposta atribui pontos para 5 heróis diferentes:
   - Superman
   - Batman
   - Mulher-Maravilha
   - Flash
   - Aquaman
3. **Cálculo**: Soma os pontos de todas as respostas
4. **Resultado**: Determina o herói com maior pontuação total

### Sistema de Pontuação
Cada questão possui 4 opções de resposta. Cada opção distribui pontos entre os 5 heróis:
```javascript
{
  pergunta: "Como você resolve conflitos?",
  opcoes: [
    {
      texto: "Converso e inspiro",
      pontuacao: { superman: 10, batman: 2, mulherMaravilha: 5, flash: 6, aquaman: 2 }
    }
    // ... outras opções
  ]
}
```

## Arquivos Principais

### index.html
Página de entrada com:
- Design temático de super-heróis
- Botão de redirecionamento para o quiz
- Animações CSS de entrada

### pages/quiz.html
Interface principal do quiz contendo:
- Container para questões
- Área de respostas com botões interativos
- Tela de resultado com informações do herói
- Botão para reiniciar o quiz

### assets/js/quiz.js
Lógica central do sistema:
- Carregamento das questões
- Gerenciamento de estado (questão atual, pontuação)
- Processamento das respostas
- Cálculo e exibição dos resultados
- Controle de navegação

### assets/js/questoes.js
Banco de dados das questões:
- 10 questões de personalidade
- 4 opções por questão
- Sistema de pontuação balanceado
- Exportação para módulo ES6

## Tecnologias e Recursos

### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: 
  - Gradientes e animações
  - Layout responsivo (Flexbox)
  - Tamanhos fixos para consistência visual
- **JavaScript ES6+**:
  - Módulos ES6 para organização
  - Manipulação do DOM
  - Armazenamento de estado local

### Tipografia
- **Google Fonts**:
  - Orbitron: Títulos (tema futurístico/heroico)
  - Poppins: Texto geral (legibilidade)

### Responsividade
Breakpoints definidos:
- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: ≤ 480px

## Personalização

### Modificar Questões
Edite o arquivo `assets/js/questoes.js`:
1. Altere o texto das perguntas
2. Modifique as opções de resposta
3. Ajuste a pontuação conforme necessário
4. Mantenha o formato do objeto

### Alterar Cores
Modifique `assets/css/quiz-styles.css`:
- Gradientes de fundo
- Cores dos botões e elementos interativos
- Esquemas de cor personalizados

### Adicionar Heróis
1. Inclua novos heróis no sistema de pontuação
2. Atualize a função `determinarHeroiVencedor()`
3. Adicione casos no switch de `finish()`
4. Inclua imagens correspondentes

## Compatibilidade

### Navegadores Suportados
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Recursos Necessários
- Suporte a CSS Grid/Flexbox
- JavaScript ES6 Modules
- Fetch API ou importação de módulos

## Desenvolvimento

### Estrutura de Arquivos
Mantenha a organização:
- CSS específico por página
- JavaScript modular
- Imagens otimizadas para web
- Nomenclatura consistente

### Boas Práticas Implementadas
- Código comentado e documentado
- Separação de responsabilidades
- Design responsivo
- Acessibilidade básica
- Performance otimizada