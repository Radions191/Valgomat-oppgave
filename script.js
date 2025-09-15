const questions = [
  "Synes du små og mellomstore bedrifter bør få større skattefordeler?",
  "Synes du byråkratiet i offentlig sektor bør reduseres?",
  "Synes du Norge bør styrke forsvaret og øke forsvarsbudsjettet?",
  "Synes du straffen for voldskriminalitet bør bli strengere?",
  "Synes du Norge bør ta imot færre innvandrere enn i dag?",
  "Synes du veier, og infrastruktur i Norge bør forbedres?",
  "Synes du enkeltindivider bør ha mer makt enn staten i viktige beslutninger?",
  "Synes du skattene bør senkes for å fremme økonomisk vekst?",
  "Synes du det bør være større valgfrihet i utdanningssektoren?",
  "Synes du offentlige utgifter bør reduseres for å balansere budsjettet?"
];

const points = {
  "Helt uenig": 0,
  "Litt uenig": 25,
  "Nøytral": 50,
  "Litt enig": 75,
  "Helt enig": 100
};

let index = 0;           
let totalScore = 0;       
let answers = [];         

const questionText = document.getElementById("question-text");
const progress = document.getElementById("progress");
const resultBox = document.getElementById("result-container");
const scoreBox = document.getElementById("score");
const prevBtn = document.getElementById("prevButton");
const restartBtn = document.getElementById("restartButton");

function load() {
  
  if (index >= questions.length) {
    showResult();
    return;
  }

  questionText.textContent = questions[index];
  progress.textContent = `Spørsmål ${index + 1} av ${questions.length}`;

  document.querySelectorAll('input[name="answer"]').forEach(r => r.checked = false);
  
  if (answers[index]) {
    document.querySelector(`input[value="${answers[index]}"]`).checked = true;
  }

  prevBtn.style.display = index === 0 ? "none" : "inline-block";
}

document.getElementById("answer-form").addEventListener("submit", e => {
  e.preventDefault();
  let selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert("Velg et svar.");
    return;
  }
  
  if (answers[index]) {
    totalScore -= points[answers[index]];
  }

  answers[index] = selected.value;
  totalScore += points[selected.value];

  index++;
  load();
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    load();
  }
});

function showResult() {
  const percent = Math.round(totalScore / (questions.length * 100) * 100);
  resultBox.style.display = "block";
  scoreBox.textContent = percent + "%";
  document.getElementById("question-container").style.display = "none";
}

restartBtn.addEventListener("click", () => {
  index = 0;
  totalScore = 0;
  answers = [];
  document.getElementById("question-container").style.display = "block";
  resultBox.style.display = "none";
  load();
});

load();
