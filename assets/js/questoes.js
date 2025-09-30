const quizDcHeroes = [
  {
    pergunta: "Como você geralmente resolve conflitos?",
    opcoes: [
      {
        texto: "Converso e tento inspirar a outra pessoa a fazer o certo",
        pontuacao: { superman: 10, batman: 2, mulherMaravilha: 5, flash: 6, aquaman: 2 }
      },
      {
        texto: "Planejo estrategicamente antes de agir e uso recursos disponíveis",
        pontuacao: { superman: 2, batman: 10, mulherMaravilha: 4, flash: 3, aquaman: 3 }
      },
      {
        texto: "Busco a verdade e tento ser justo com todos os envolvidos",
        pontuacao: { superman: 5, batman: 4, mulherMaravilha: 10, flash: 4, aquaman: 4 }
      },
      {
        texto: "Ajo rapidamente para resolver o problema antes que piore",
        pontuacao: { superman: 3, batman: 3, mulherMaravilha: 2, flash: 10, aquaman: 8 }
      }
    ]
  },
  {
    pergunta: "Qual seria seu maior poder ideal?",
    opcoes: [
      {
        texto: "Super força e capacidade de voar para ajudar a todos",
        pontuacao: { superman: 10, batman: 0, mulherMaravilha: 6, flash: 2, aquaman: 5 }
      },
      {
        texto: "Inteligência superior e recursos ilimitados",
        pontuacao: { superman: 2, batman: 10, mulherMaravilha: 3, flash: 5, aquaman: 2 }
      },
      {
        texto: "Força divina e capacidade de enxergar a verdade",
        pontuacao: { superman: 5, batman: 2, mulherMaravilha: 10, flash: 1, aquaman: 4 }
      },
      {
        texto: "Super velocidade para estar em todos os lugares rapidamente",
        pontuacao: { superman: 4, batman: 1, mulherMaravilha: 2, flash: 10, aquaman: 3 }
      }
    ]
  },
  {
    pergunta: "Quando enfrenta um desafio difícil, você:",
    opcoes: [
      {
        texto: "Confia em sua integridade e força para superar o obstáculo",
        pontuacao: { superman: 10, batman: 3, mulherMaravilha: 7, flash: 4, aquaman: 5 }
      },
      {
        texto: "Pesquisa, planeja e se prepara extensivamente",
        pontuacao: { superman: 2, batman: 10, mulherMaravilha: 4, flash: 5, aquaman: 1 }
      },
      {
        texto: "Busca diplomacia primeiro, mas está pronto para lutar se necessário",
        pontuacao: { superman: 6, batman: 4, mulherMaravilha: 10, flash: 3, aquaman: 4 }
      },
      {
        texto: "Tenta várias abordagens rapidamente até encontrar uma solução",
        pontuacao: { superman: 4, batman: 5, mulherMaravilha: 3, flash: 10, aquaman: 3 }
      }
    ]
  },
  {
    pergunta: "O que mais te motiva a ajudar os outros?",
    opcoes: [
      {
        texto: "O senso de responsabilidade e o desejo de inspirar esperança",
        pontuacao: { superman: 10, batman: 5, mulherMaravilha: 6, flash: 7, aquaman: 4 }
      },
      {
        texto: "O desejo de criar um mundo mais justo e menos corrompido",
        pontuacao: { superman: 5, batman: 10, mulherMaravilha: 6, flash: 4, aquaman: 3 }
      },
      {
        texto: "O compromisso com a verdade e compaixão pelos necessitados",
        pontuacao: { superman: 6, batman: 4, mulherMaravilha: 10, flash: 5, aquaman: 4 }
      },
      {
        texto: "O dever para com seu povo e legado",
        pontuacao: { superman: 5, batman: 3, mulherMaravilha: 5, flash: 4, aquaman: 10 }
      }
    ]
  },
  {
    pergunta: "Qual ambiente você prefere?",
    opcoes: [
      {
        texto: "Uma cidade ensolarada onde posso ver o horizonte",
        pontuacao: { superman: 10, batman: 1, mulherMaravilha: 5, flash: 7, aquaman: 3 }
      },
      {
        texto: "Uma metrópole agitada, especialmente à noite",
        pontuacao: { superman: 4, batman: 10, mulherMaravilha: 3, flash: 6, aquaman: 1 }
      },
      {
        texto: "Um local com rica história e cultura",
        pontuacao: { superman: 5, batman: 6, mulherMaravilha: 10, flash: 4, aquaman: 6 }
      },
      {
        texto: "Perto da água, como praias ou oceanos",
        pontuacao: { superman: 3, batman: 2, mulherMaravilha: 5, flash: 3, aquaman: 10 }
      }
    ]
  },
  {
    pergunta: "Como você lida com seus inimigos?",
    opcoes: [
      {
        texto: "Tento dar a eles uma chance de se redimir",
        pontuacao: { superman: 10, batman: 3, mulherMaravilha: 6, flash: 8, aquaman: 4 }
      },
      {
        texto: "Uso táticas de intimidação e estratégia",
        pontuacao: { superman: 2, batman: 10, mulherMaravilha: 3, flash: 1, aquaman: 6 }
      },
      {
        texto: "Busco a verdade e justiça, mas estou pronto para lutar se necessário",
        pontuacao: { superman: 7, batman: 6, mulherMaravilha: 10, flash: 4, aquaman: 5 }
      },
      {
        texto: "Confio no meu instinto e ajo com decisão",
        pontuacao: { superman: 4, batman: 5, mulherMaravilha: 4, flash: 6, aquaman: 10 }
      }
    ]
  },
  {
    pergunta: "Qual é sua maior fraqueza?",
    opcoes: [
      {
        texto: "Confio demais nas pessoas e às vezes sou ingênuo",
        pontuacao: { superman: 10, batman: 1, mulherMaravilha: 5, flash: 8, aquaman: 4 }
      },
      {
        texto: "Tenho dificuldade em confiar nos outros e trabalhar em equipe",
        pontuacao: { superman: 1, batman: 10, mulherMaravilha: 2, flash: 3, aquaman: 7 }
      },
      {
        texto: "Posso ser muito rígido(a) com meus princípios morais",
        pontuacao: { superman: 7, batman: 5, mulherMaravilha: 10, flash: 3, aquaman: 4 }
      },
      {
        texto: "Sou impulsivo(a) e às vezes ajo sem pensar nas consequências",
        pontuacao: { superman: 3, batman: 2, mulherMaravilha: 1, flash: 10, aquaman: 9 }
      }
    ]
  },
  {
    pergunta: "Em uma equipe, qual seria seu papel?",
    opcoes: [
      {
        texto: "Líder inspirador que motiva os outros pelo exemplo",
        pontuacao: { superman: 10, batman: 6, mulherMaravilha: 8, flash: 3, aquaman: 5 }
      },
      {
        texto: "Estrategista e financiador que trabalha nos bastidores",
        pontuacao: { superman: 2, batman: 10, mulherMaravilha: 3, flash: 4, aquaman: 2 }
      },
      {
        texto: "Embaixador(a) e mediador(a) de conflitos",
        pontuacao: { superman: 5, batman: 3, mulherMaravilha: 10, flash: 4, aquaman: 4 }
      },
      {
        texto: "O suporte rápido que resolve problemas imediatos",
        pontuacao: { superman: 3, batman: 4, mulherMaravilha: 2, flash: 10, aquaman: 3 }
      }
    ]
  },
  {
    pergunta: "Como você reage a uma crise inesperada?",
    opcoes: [
      {
        texto: "Mantenho a calma e tento ser um exemplo de esperança para os outros",
        pontuacao: { superman: 10, batman: 6, mulherMaravilha: 8, flash: 5, aquaman: 4 }
      },
      {
        texto: "Analiso a situação e preparo rapidamente um plano de contingência",
        pontuacao: { superman: 5, batman: 10, mulherMaravilha: 6, flash: 4, aquaman: 3 }
      },
      {
        texto: "Busco a verdade por trás da crise e lido com ela de forma direta",
        pontuacao: { superman: 6, batman: 5, mulherMaravilha: 10, flash: 3, aquaman: 5 }
      },
      {
        texto: "Ajo imediatamente para minimizar os danos o mais rápido possível",
        pontuacao: { superman: 4, batman: 3, mulherMaravilha: 2, flash: 10, aquaman: 6 }
      }
    ]
  },
  {
    pergunta: "O que você valoriza mais em um relacionamento?",
    opcoes: [
      {
        texto: "Lealdade e valores compartilhados",
        pontuacao: { superman: 10, batman: 7, mulherMaravilha: 8, flash: 6, aquaman: 5 }
      },
      {
        texto: "Independência e respeito mútuo",
        pontuacao: { superman: 5, batman: 10, mulherMaravilha: 6, flash: 5, aquaman: 4 }
      },
      {
        texto: "Honestidade absoluta e igualdade",
        pontuacao: { superman: 7, batman: 5, mulherMaravilha: 10, flash: 6, aquaman: 5 }
      },
      {
        texto: "Conexão profunda e entendimento das origens um do outro",
        pontuacao: { superman: 6, batman: 4, mulherMaravilha: 5, flash: 7, aquaman: 10 }
      }
    ]
  }
];

export default quizDcHeroes;