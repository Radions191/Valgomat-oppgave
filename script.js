var questions = [
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

var points = {
  "Helt uenig": 0,
  "Litt uenig": 25,
  "Nøytral": 50,
  "Litt enig": 75,
  "Helt enig": 100
};

var index = 0;
var totalScore = 0;
var answers = [];

var questionText = document.getElementById("question-text");
var progress = document.getElementById("progress");
var resultBox = document.getElementById("result-container");
var scoreBox = document.getElementById("score");
var prevBtn = document.getElementById("prevButton");
var restartBtn = document.getElementById("restartButton");

function load() {
  if (index >= questions.length) {
    showResult();
    return;
  }

  questionText.textContent = questions[index];
  progress.textContent = "Spørsmål " + (index + 1) + " av " + questions.length;

  var radios = document.getElementsByName("answer");
  for (var i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }

  if (answers[index]) {
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].value === answers[index]) {
        radios[i].checked = true;
      }
    }
  }

  if (index === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline-block";
  }
}

var form = document.getElementById("answer-form");
form.onsubmit = function(e) {
  e.preventDefault();

  var selected = null;
  var radios = document.getElementsByName("answer");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selected = radios[i];
      break;
    }
  }

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
};

prevBtn.onclick = function() {
  if (index > 0) {
    index--;
    load();
  }
};

function showResult() {
  var percent = Math.round(totalScore / (questions.length * 100) * 100);
  resultBox.style.display = "block";
  scoreBox.textContent = percent + "%";
  document.getElementById("question-container").style.display = "none";
}

restartBtn.onclick = function() {
  index = 0;
  totalScore = 0;
  answers = [];
  document.getElementById("question-container").style.display = "block";
  resultBox.style.display = "none";
  load();
};
load();
