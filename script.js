 //adding some code that calculates the score giving feedback in form of a percentage
 // code that fixes bug with percentage
 //this code is now validated and finished
var questions = [
    "1. Er du enig i at FrP ønsker å gi skattefordeler til små og mellomstore bedrifter?",
    "2. Er du enig i at FrP ønsker å redusere byråkratiet i offentlig sektor?",
    "3. Er du enig i at FrP ønsker å styrke forsvaret og øke forsvarsbudsjettet?",
    "4. Er du enig i at FrP ønsker å innføre strengere straffer for voldskriminalitet?",
    "5. Er du enig i at FrP ønsker å redusere innvandringen til Norge?",
    "6. Er du enig i at FrP ønsker å forbedre veier og infrastruktur i Norge?",
    "7. Er du enig i at FrP ønsker å gi mer makt til enkeltindivider fremfor staten?",
    "8. Er du enig i at FrP ønsker å fremme økonomisk vekst gjennom lavere skatter?",
    "9. Er du enig i at FrP ønsker å styrke valgfriheten i utdanningssektoren?",
    "10. Er du enig i at FrP ønsker å redusere offentlige utgifter for å balansere budsjettet?"
];
var answers = ["Helt uenig", "Litt uenig", "Nøytral", "Litt enig", "Helt enig"];

var scores = [1, 2, 3, 4, 5];

var currentQuestion = 0;
var totalScore = 0; 

var questionInput = document.getElementById("question");
var nextButton = document.getElementById("nextButton");