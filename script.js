 //adding some code that calculates the score giving feedback in form of a percentage
 // code that fixes bug with percentage
 //this code is now validated and finished
var questions = [
    "1. Synes du små og mellomstore bedrifter bør få større skattefordeler?",
    "2. Synes du byråkratiet i offentlig sektor bør reduseres?",
    "3. Synes du Norge bør styrke forsvaret og øke forsvarsbudsjettet?",
    "4. Synes du straffen for voldskriminalitet bør bli strengere?",
    "5. Synes du Norge bør ta imot færre innvandrere enn i dag?",
    "6. Synes du veier, og infrastruktur i Norge bør forbedres?",
    "7. Synes du enkeltindivider bør ha mer makt enn staten i viktige beslutninger?",
    "8. Synes du skattene bør senkes for å fremme økonomisk vekst?",
    "9. Synes du det bør være større valgfrihet i utdanningssektoren?",
    "10.Synes du offentlige utgifter bør reduseres for å balansere budsjettet?"
];
var answers = ["Helt uenig", "Litt uenig", "Nøytral", "Litt enig", "Helt enig"];

var scores = [1, 2, 3, 4, 5];

var currentQuestion = 0;
var totalScore = 0; 
var questionInput = document.getElementById("questions");
var nextButton = document.getElementById("nextButton");
var optionsDiv = document.getElementById("options");
var resultDiv = document.getElementById("result");
var restartButton = document.getElementById("restartButton");
var progressDiv = document.getElementById("progress");

function showQusetion() {
    questionInput.textContent = questions[currentQuestion];

}