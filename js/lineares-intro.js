const quiz = {
    name: "Einführung",
    questions: [
        {
            id: "linear_intro",
            type: "content",
            entered: ["gesehen"],
            content: `
                <div style="color:#35646b;">
                    <h2 style="color: rgb(56, 189, 207); margin-bottom: 16px;">
                        Einführung
                    </h2>

                    <p style="font-size:16px; margin-bottom:16px;">
                        Willkommen zum Web-Based Training (WBT) zu HTML, CSS und JavaScript.
                    </p>

                    <p style="margin-bottom:16px;">
                        Das Training besteht aus 6 Modulen. Vor und nach dem Training bearbeiten Sie einen kurzen Test.
                        Dieser dient nicht der Bewertung, sondern ausschließlich dazu, den Lernerfolg im Verlauf des Trainings zu messen.
                    </p>

                    <p style="margin-bottom:8px;"><strong>Jedes Modul enthält:</strong></p>
                    <ul style="margin-top:0; margin-bottom:16px; padding-left:22px;">
                        <li>einen <strong>Theorieteil</strong> zum Lesen</li>
                        <li><strong>3 anschließende Fragen</strong> dazu</li>
                        <li>eine <strong>Anwendungsaufgabe</strong> (muss nicht zwingend richtig gelöst werden, falls man nicht mehr weiter weiß)</li>
                    </ul>

                    <p style="margin-bottom:16px;">
                        Innerhalb eines Moduls können Sie vor und zurück navigieren, jedoch nicht zu vorherigen Modulen zurückkehren.
                    </p>

                    <p style="margin-bottom:16px;">
                        Die Fortschrittsanzeige („% abgeschlossen“) bezieht sich auf das aktuelle Modul, nicht auf das gesamte WBT.
                    </p>

                    <p style="margin-bottom:16px;">
                        Im Rahmen dieser Studie werden anonymisierte Nutzungsdaten (z. B. Bearbeitungszeit, Antworten) erhoben
                        und ausschließlich zu wissenschaftlichen Zwecken verwendet. Es werden keine personenbezogenen Daten gespeichert.
                        Mit Klick auf <strong>Start</strong> stimmen Sie der Teilnahme zu.
                    </p>
                </div>
            `
        }
    ]
};

let currentQuestionIndex = 0;

// Leert den Inhalt eines DOM-Elements anhand seiner ID.
function removeAllChildren(parent) {
    document.getElementById(parent).innerHTML = "";
}

// Initialisiert die Einführungsseite.
function init() {
    setQuizTitle();
    createStartButton();
    hideNavigationArrows();
    loadQuestion(quiz.questions[0], true);
}

// Setzt den Titel im Header.
function setQuizTitle() {
    var titleElement = document.querySelector(".quiz-name-text");
    if (titleElement) {
        titleElement.innerText = quiz.name;
    }
}

// Lädt die Inhaltsseite.
function loadQuestion(question) {
    updateProgressBarStatus();

    if (question.type === "content") {
        loadContentPage(question);
    }
}

// Rendert den Inhalt der Einführungsseite.
function loadContentPage(question) {
    var quizQuestionTextDIV = document.getElementById("quiz-question-text-container");
    quizQuestionTextDIV.innerHTML = question.content;
}

// Erstellt den Start-Button und leitet zum linearen Pre-Test weiter.
function createStartButton() {
    var continueDIV = document.createElement("div");
    var continueBUTTON = document.createElement("button");

    continueDIV.id = "quiz-continue-button-container";
    continueDIV.className = "quiz-continue-button-container";
    continueBUTTON.className = "quiz-continue-button";

    continueBUTTON.innerHTML = "Start";
    continueBUTTON.onclick = function () {
        window.location.href = "../pretest/pretest.html?group=1";
    };

    continueDIV.appendChild(continueBUTTON);
    document.getElementById("quiz-question-container").appendChild(continueDIV);
}

// Blendet die Navigationspfeile auf der Startseite aus.
function hideNavigationArrows() {
    var prev = document.getElementById("previous-question-load");
    var next = document.getElementById("next-question-load");

    if (prev) prev.style.display = "none";
    if (next) next.style.display = "none";
}

// Setzt die Progress-Bar für die Startseite auf 0 %.
function updateProgressBarStatus() {
    var progress = document.getElementById("quiz-progress-bar");
    var text = document.getElementById("progress-bar-text");

    progress.setAttribute("aria-valuenow", 0);
    progress.style.width = "0%";
    text.innerText = "0% abgeschlossen";
}

init();