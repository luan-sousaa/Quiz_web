console.log('🎮 Quiz script carregado!');

const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");
const heroResult = document.querySelector(".hero-result");
const heroImage = document.querySelector(".hero-image");

import quizDcHeroes from "./questoes.js";

console.log(' Questões carregadas:', quizDcHeroes.length, 'perguntas');

console.log(' Elementos encontrados:', {
  question: !!question,
  answers: !!answers,
  spnQtd: !!spnQtd,
  content: !!content,
  contentFinish: !!contentFinish
});

let currentIndex = 0;
let pontuacaoTotal = {
  superman: 0,
  batman: 0,
  mulherMaravilha: 0,
  flash: 0,
  aquaman: 0
};

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  pontuacaoTotal = {
    superman: 0,
    batman: 0,
    mulherMaravilha: 0,
    flash: 0,
    aquaman: 0
  };
  loadQuestion();
};

function nextQuestion(e) {
  const selectedOption = e.target.getAttribute("data-index");

  const currentQuestion = quizDcHeroes[currentIndex];

  const pontuacao = currentQuestion.opcoes[selectedOption].pontuacao;

  for (const heroi in pontuacao) {
    pontuacaoTotal[heroi] += pontuacao[heroi];
  }

  if (currentIndex < quizDcHeroes.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}


function determinarHeroiVencedor() {

  let heroiVencedor = "superman";
  let maiorPontuacao = pontuacaoTotal.superman;

  for (const heroi in pontuacaoTotal) {
    if (pontuacaoTotal[heroi] > maiorPontuacao) {
      maiorPontuacao = pontuacaoTotal[heroi];
      heroiVencedor = heroi;
    }
  }

  return {
    heroi: heroiVencedor,
    pontuacao: maiorPontuacao
  };
}

function finish() {
  const resultado = determinarHeroiVencedor();
  let nomeHeroi = "";

  switch (resultado.heroi) {
    case "superman":
      nomeHeroi = "Superman";
      break;
    case "batman":
      nomeHeroi = "Batman";
      break;
    case "mulherMaravilha":
      nomeHeroi = "Mulher-Maravilha";
      break;
    case "flash":
      nomeHeroi = "Flash";
      break;
    case "aquaman":
      nomeHeroi = "Aquaman";
      break;
  }

  textFinish.innerHTML = `Você se parece mais com: <strong>${nomeHeroi}</strong>!`;
  heroResult.textContent = `Sua personalidade combina com os traços de ${nomeHeroi}.`;
  heroImage.src = `../assets/images/${nomeHeroi}.jpg`
  content.style.display = "none";
  contentFinish.style.display = "flex";
}

function loadQuestion() {
  console.log(`📋 Carregando questão ${currentIndex + 1}/${quizDcHeroes.length}`);

  if (spnQtd) spnQtd.innerHTML = `${currentIndex + 1}/${quizDcHeroes.length}`;
  const item = quizDcHeroes[currentIndex];
  if (answers) answers.innerHTML = "";
  if (question) question.innerHTML = item.pergunta;

  console.log(' Pergunta:', item.pergunta);

  item.opcoes.forEach((opcao, index) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-index="${index}">
      ${opcao.texto}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();