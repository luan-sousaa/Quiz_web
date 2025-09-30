# 🚀 Guia de Contribuição - Quiz de Super-Heróis

## 📋 Checklist para Colaboradores

### ✅ Antes de Começar
- [ ] Leia o README.md principal
- [ ] Entenda a estrutura de pastas
- [ ] Defina qual página/funcionalidade vai desenvolver

### ✅ Desenvolvendo sua Página
- [ ] Siga os padrões de nomenclatura
- [ ] Teste responsividade (desktop, tablet, mobile)
- [ ] Valide HTML/CSS
- [ ] Teste funcionalidades JavaScript

### ✅ Antes de Finalizar
- [ ] Verifique se não quebrou outras páginas
- [ ] Otimize imagens (< 500KB)
- [ ] Documente código complexo
- [ ] Teste navegação entre páginas

## 🎯 Páginas Prioritárias

### 1. Quiz Principal (`quiz.html`)
**Responsável:** [SEU NOME]
**Status:** 🔄 Em desenvolvimento / ⏳ Aguardando / ✅ Concluído

**Requisitos:**
- Múltiplas perguntas com opções A, B, C, D
- Sistema de pontuação
- Barra de progresso
- Navegação entre perguntas
- Salvar respostas no localStorage

**Arquivos necessários:**
- `pages/quiz.html`
- `assets/css/quiz-styles.css`
- `assets/js/quiz-script.js`

### 2. Página de Resultados (`resultado.html`)
**Responsável:** [SEU NOME]
**Status:** 🔄 Em desenvolvimento / ⏳ Aguardando / ✅ Concluído

**Requisitos:**
- Mostrar personagem correspondente
- Descrição do personagem
- Botão para compartilhar resultado
- Botão para refazer quiz
- Animação de revelação

### 3. Sobre o Quiz (`sobre.html`)
**Responsável:** [SEU NOME]
**Status:** 🔄 Em desenvolvimento / ⏳ Aguardando / ✅ Concluído

**Requisitos:**
- Explicação sobre o quiz
- Como funciona a pontuação
- Créditos da equipe
- Links úteis

## 🎨 Banco de Personagens Sugeridos

### DC Comics
- **Superman** - Liderança, justiça, esperança
- **Batman** - Estratégia, determinação, mistério
- **Wonder Woman** - Coragem, compaixão, força
- **Flash** - Velocidade, otimismo, energia
- **Aquaman** - Lealdade, honra, conexão com natureza

### Marvel
- **Homem de Ferro** - Inteligência, tecnologia, sarcasmo
- **Capitão América** - Liderança, valores, patriotismo
- **Thor** - Poder, honra, nobreza
- **Viúva Negra** - Agilidade, estratégia, mistério
- **Homem-Aranha** - Responsabilidade, humor, juventude

## 💡 Exemplos de Perguntas

### Formato Sugerido:
```javascript
{
    id: 1,
    pergunta: "Em uma situação de perigo, qual seria sua primeira reação?",
    opcoes: {
        A: "Analisar a situação antes de agir",
        B: "Agir imediatamente para proteger outros",
        C: "Buscar uma solução tecnológica",
        D: "Usar humor para aliviar a tensão"
    },
    pontuacao: {
        A: { batman: 3, aquaman: 1 },
        B: { superman: 3, wonderwoman: 2 },
        C: { ironman: 3, batman: 1 },
        D: { spiderman: 3, flash: 2 }
    }
}
```

## 🔧 Ferramentas Recomendadas

### Editores de Código
- **VS Code** (recomendado)
- **Sublime Text**
- **Atom**

### Extensões VS Code Úteis
- **Live Server** - Para preview em tempo real
- **Prettier** - Formatação automática
- **Auto Rename Tag** - Renomeia tags HTML
- **CSS Peek** - Navegação rápida no CSS

### Testes
- **Responsividade:** DevTools do navegador
- **Performance:** PageSpeed Insights
- **Validação:** W3C Validator

## 📁 Estrutura de Commits

### Formato:
```
tipo(escopo): descrição

feat(quiz): adiciona sistema de pontuação
fix(styles): corrige responsividade em mobile
docs(readme): atualiza guia de contribuição
style(css): melhora animações dos botões
```

### Tipos:
- **feat:** Nova funcionalidade
- **fix:** Correção de bug
- **docs:** Documentação
- **style:** Estilização
- **refactor:** Refatoração de código
- **test:** Testes

## 🐛 Reportando Problemas

### Template de Issue:
```markdown
## 🐛 Descrição do Bug
[Descreva o problema]

## 🔄 Passos para Reproduzir
1. Vá para...
2. Clique em...
3. Veja o erro...

## ✅ Comportamento Esperado
[O que deveria acontecer]

## 📱 Ambiente
- Navegador: [ex: Chrome 120]
- Dispositivo: [ex: iPhone 12]
- Tela: [ex: 1920x1080]
```

## 🎉 Dicas de Sucesso

1. **Comece pequeno** - Implemente uma funcionalidade por vez
2. **Teste sempre** - Em diferentes navegadores e dispositivos
3. **Documente** - Código bem documentado é código que perdura
4. **Peça ajuda** - Não hesite em perguntar se tiver dúvidas
5. **Seja criativo** - Adicione sua personalidade ao projeto!

## 📞 Contatos da Equipe

- **Líder do Projeto:** [NOME] - [EMAIL/GITHUB]
- **Design:** [NOME] - [EMAIL/GITHUB]
- **Frontend:** [NOME] - [EMAIL/GITHUB]
- **JavaScript:** [NOME] - [EMAIL/GITHUB]

---

**Happy Coding! 🦸‍♂️✨**
