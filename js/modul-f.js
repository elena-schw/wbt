const quiz = {
    name: "Modul F: JavaScript Logik",
    questions: [
        {
            type: "content",
            entered: ["gesehen"],
            content: `
                <div style="color:#35646b;">
                    <h2 style="color: rgb(56, 189, 207); margin-bottom: 16px;">
                        Modul F: JavaScript Logik
                    </h2>

                    <p style="font-size:16px; margin-bottom:22px;">
                        In diesem Modul lernen Sie, wie Entscheidungen und Wiederholungen in JavaScript umgesetzt werden.
                        Dadurch können Programme auf Eingaben reagieren und komplexere Aufgaben lösen.
                    </p>

                    <h3 style="color: rgb(56, 189, 207); margin-bottom: 12px;">
                        1. Theorie: Logik in JavaScript
                    </h3>

                    <h4 style="margin-bottom: 8px;">Eingaben verarbeiten</h4>

                    <p style="margin-bottom: 8px;">
                        JavaScript kann Werte aus Eingabefeldern auslesen und weiterverarbeiten.
                    </p>

                    <pre style="background:#ffffff; padding:12px; border-radius:6px; color:#2d6c75; overflow-x:auto; margin-bottom:16px;"><code>let wert = document.getElementById("eingabe").value;</code></pre>

                    <p style="margin-bottom: 16px;">
                        Damit wird der eingegebene Wert eines Feldes (mit der ID "eingabe") gelesen und in einer Variable gespeichert.
                    </p>

                    <h4 style="margin-bottom: 8px;">Bedingungen (if-Abfragen)</h4>

                    <p style="margin-bottom: 8px;">
                        Mit Bedingungen kann überprüft werden, ob bestimmte Anforderungen erfüllt sind.
                    </p>

                    <pre style="background:#ffffff; padding:12px; border-radius:6px; color:#2d6c75; overflow-x:auto; margin-bottom:16px;"><code>if (wert > 100) {
    alert("Wert zu groß");
}</code></pre>

                    <p style="margin-bottom: 16px;">
                        Eine if-Abfrage führt Code nur dann aus, wenn die Bedingung erfüllt ist.
                    </p>

                    <p style="margin-bottom: 8px;"><strong>Typische Vergleiche:</strong></p>

                    <ul style="margin-top:0; margin-bottom:16px; padding-left:22px;">
                        <li><strong>&gt;</strong> größer als</li>
                        <li><strong>&lt;</strong> kleiner als</li>
                        <li><strong>==</strong> gleich</li>
                    </ul>

                    <h4 style="margin-bottom: 8px;">Mehrere Fälle (if / else)</h4>

                    <p style="margin-bottom: 8px;">
                        Oft gibt es mehrere mögliche Ergebnisse:
                    </p>

                    <pre style="background:#ffffff; padding:12px; border-radius:6px; color:#2d6c75; overflow-x:auto; margin-bottom:16px;"><code>if (wert >= 1 && wert <= 100) {
    alert("Eingabe gültig");
} else {
    alert("Ungültige Eingabe");
}</code></pre>

                    <p style="margin-bottom: 16px;">
                        Damit kann zwischen gültigen und ungültigen Eingaben unterschieden werden.
                    </p>

                    <h4 style="margin-bottom: 8px;">Verknüpfung von Bedingungen</h4>

                    <p style="margin-bottom: 8px;">
                        Mehrere Bedingungen können miteinander kombiniert werden:
                    </p>

                    <ul style="margin-top:0; margin-bottom:16px; padding-left:22px;">
                        <li><strong>&&</strong> (UND) → beide Bedingungen müssen erfüllt sein</li>
                        <li><strong>||</strong> (ODER) → mindestens eine Bedingung muss erfüllt sein</li>
                    </ul>

                    <p style="margin-bottom: 8px;">Beispiel:</p>

                    <pre style="background:#ffffff; padding:12px; border-radius:6px; color:#2d6c75; overflow-x:auto; margin-bottom:16px;"><code>if (wert >= 1 && wert <= 100) {
    // gültiger Bereich
}</code></pre>

                    <p style="margin-bottom: 16px;">
                        Hier muss der Wert gleichzeitig größer oder gleich 1 und kleiner oder gleich 100 sein.
                    </p>

                    <p style="margin-bottom: 16px;">
                        <span class="tip-popup-wrapper">
                            <button type="button" class="tip-trigger" data-tip="Achten Sie darauf, dass beide Bedingungen richtig formuliert sind. Schon ein falscher Vergleichsoperator kann dazu führen, dass immer das gleiche Ergebnis ausgegeben wird.">
                                Mehr zu Bedingungen
                            </button>
                        </span>
                    </p>

                    <h4 style="margin-bottom: 8px;">Schleifen (while)</h4>

                    <p style="margin-bottom: 8px;">
                        Schleifen werden verwendet, um Code mehrfach auszuführen.
                    </p>

                    <pre style="background:#ffffff; padding:12px; border-radius:6px; color:#2d6c75; overflow-x:auto; margin-bottom:16px;"><code>let i = 0;

while (i < 3) {
    console.log("Wiederholung");
    i++;
}</code></pre>

                    <p style="margin-bottom: 16px;">
                        Die Schleife wird so lange ausgeführt, bis die Bedingung nicht mehr erfüllt ist.
                    </p>

                    <p style="margin-bottom: 16px;">
                        <span class="tip-popup-wrapper">
                            <button type="button" class="tip-trigger" data-tip="Wenn die Bedingung in der Schleife nie falsch wird, entsteht eine Endlosschleife. Das Programm bleibt dann hängen.">
                                Mehr zu while-Schleifen
                            </button>
                        </span>
                    </p>

                    <h4 style="margin-bottom: 8px;">Kombination von Logik und Ausgabe</h4>

                    <p>
                        Bedingungen und Schleifen können kombiniert werden, um Inhalte dynamisch zu erzeugen
                        oder Eingaben zu überprüfen.
                    </p>
                </div>
            `
        },
        {
            id: "modul_f_q1",
            type: "single",
            question: "Frage 1: Welche Bedingung prüft korrekt, ob ein Wert zwischen 1 und 100 liegt?",
            answers: [
                "wert > 1 || wert < 100",
                "wert >= 1 && wert <= 100",
                "wert = 1 && 100"
            ],
            entered: [],
            correct: "B",
            locked: false,
            attempts: 0
        },
        {
            id: "modul_f_q2",
            type: "single",
            question: "Frage 2: Was passiert im else-Block?",
            answers: [
                "Der Code wird immer ausgeführt",
                "Der Code wird vor der if-Bedingung ausgeführt",
                "Der Code wird nur ausgeführt, wenn die Bedingung nicht erfüllt ist"
            ],
            entered: [],
            correct: "C",
            locked: false,
            attempts: 0
        },
        {
            id: "modul_f_q3",
            type: "single",
            question: "Frage 3: Wie kann der Wert eines Eingabefeldes mit der ID „menge“ ausgelesen werden?",
            answers: [
                'document.getElementById("menge").value',
                'document.getElement("menge")',
                'getValue("menge")'
            ],
            entered: [],
            correct: "A",
            locked: false,
            attempts: 0
        },
        {
            id: "modul_f_code",
            page: "modul_f",
            taskType: "modul_f_logic",
            type: "content",
            entered: ["gesehen"],
            codeAttempts: 0,
            content: `
                <div style="color:#35646b;">
                    <h3 style="color: rgb(56, 189, 207); margin-bottom: 16px;">
                        2. Anwendungsaufgabe
                    </h3>

                    <p style="margin-bottom: 12px;">
                        <strong>Szenario:</strong>
                        Ein Logistikunternehmen möchte prüfen, ob eine eingegebene Bestellmenge gültig ist.
                    </p>

                    <p style="margin-bottom: 12px;">
                        Das HTML-Grundgerüst ist bereits vorgegeben. Um Ihren Code zu sehen und Feedback zu bekommen,
                        klicken Sie auf <strong>Testen</strong>.
                    </p>

                    <p style="margin-bottom: 12px;">
                        <strong>Ihre Aufgabe:</strong>
                    </p>

                    <p style="margin-bottom: 10px;">
                        Ergänzen Sie den JavaScript-Code mit der Funktion <strong>pruefen()</strong>, sodass:
                    </p>

                    <ul style="margin-top:0; margin-bottom:20px; padding-left:22px;">
                        <li>der Wert aus dem Eingabefeld gelesen und in einer Variable gespeichert wird, z. B. mit <strong>let wert</strong></li>
                        <li>überprüft wird, ob die Menge zwischen <strong>1</strong> und <strong>100</strong> liegt</li>
                        <li>wenn die Eingabe gültig ist, wird der Text <strong>„Bestellung möglich“</strong> im <strong>&lt;p&gt;</strong>-Element angezeigt</li>
                        <li>wenn die Eingabe ungültig ist, wird der Text <strong>„Ungültige Menge“</strong> im <strong>&lt;p&gt;</strong>-Element angezeigt</li>
                    </ul>

                    <div class="tip-toggle-wrapper" style="margin-bottom:16px;">
                        <button type="button" class="tip-toggle-button">
                            Tipps einblenden/ausblenden 💡
                        </button>

                        <div class="tip-toggle-content" style="display:none;">
                            <p style="margin-top:12px; margin-bottom:10px;">
                                Lesen Sie den Wert mit <strong>document.getElementById("menge").value</strong> aus
                                und speichern Sie ihn in einer Variable mit <strong>let</strong>
                                (z. B. <strong>let wert = ...</strong>).
                            </p>

                            <p style="margin-bottom:10px;">
                                Prüfen Sie mit einer <strong>if/else</strong>-Bedingung
                                (<strong>wert >= 1 && wert <= 100</strong>), ob die Eingabe gültig ist.
                            </p>

                            <p style="margin-bottom:0;">
                                Den Text schreiben Sie mit
                                <strong>document.getElementById("ausgabe").innerHTML</strong>
                                in das <strong>&lt;p&gt;</strong>-Element.
                            </p>
                        </div>
                    </div>

                    <div id="code-task-wrapper" style="display:flex; gap:20px; align-items:flex-start; margin-bottom:16px;">
                        <textarea id="code-input" style="width:50%; height:320px; padding:12px; font-family:monospace; font-size:14px; border:1px solid #ccc; border-radius:6px; resize:vertical;"></textarea>

                        <iframe id="preview" style="width:50%; height:320px; background:white; border:1px solid #ccc; border-radius:6px;"></iframe>
                    </div>

                    <button id="run-code" class="quiz-continue-button" style="margin-top: 0;">Testen</button>

                    <div id="feedback" style="margin-top:12px; font-weight:bold;"></div>

                    <div style="font-size:14px; color:#6b8c92; margin-top:10px;">
                    <strong>Hinweis</strong>: Beim Klick auf <strong>Weiter</strong> geht es zum nächsten Modul. Sie können dann nicht mehr zum jetzigen Modul zurückkehren.
                    </div>
                </div>
            `
        }
    ]
};

let currentQuestionIndex = 0;

let questionStartTime = null;

// Entfernt doppelte Einträge aus einem Array.
const uniq = (a) => {
    return Array.from(new Set(a));
}

// Leert den Inhalt eines DOM-Elements anhand seiner ID.
function removeAllChildren(parent) {
    document.getElementById(parent).innerHTML = "";
}

// Initialisiert das Modul und lädt die erste Seite.
function init() {
    setQuizTitle();
    createContinueButton();
    addQuestionIteration();
    loadQuestion(quiz.questions[0], true);
}

// Setzt den Modultitel im Header.
function setQuizTitle() {
    var titleElement = document.querySelector(".quiz-name-text");
    if (titleElement) {
        titleElement.innerText = quiz.name;
    }
}

// Lädt abhängig vom Seitentyp die passende Inhalts- oder Fragenseite.
function loadQuestion(question, initLoad) {
    questionStartTime = Date.now();

    updateProgressBarStatus();
    startTaskTimer();

    if (question.type === "content") {
        loadContentPage(question);
    } else if (question.type === "single" || question.type === "multiple") {
        cr_QuizQuestionText(question.question);
        loadMultipleChoiceQuestion(question);
        loadPreviousEnteredChoice(question.entered);
    }

    if (!initLoad) {
        moveQuestionContainerMiddle();
    }

    showHideContinueButton(question);
}

// Pop-Ups
function initTipPopups() {
    var triggers = document.querySelectorAll(".tip-trigger");

    function closeAllTips() {
        var existingTips = document.querySelectorAll(".custom-tip-popup");
        for (var i = 0; i < existingTips.length; i++) {
            existingTips[i].remove();
        }
    }

    for (var i = 0; i < triggers.length; i++) {
        triggers[i].onclick = function (event) {
            event.stopPropagation();

            var alreadyOpen = this.parentNode.querySelector(".custom-tip-popup");
            closeAllTips();

            if (alreadyOpen) {
                return;
            }

            var popup = document.createElement("div");
            popup.className = "custom-tip-popup";
            popup.textContent = this.getAttribute("data-tip");

            this.parentNode.appendChild(popup);
        };
    }

    document.addEventListener("click", function () {
        closeAllTips();
    });
}

// Tipps
function initTipToggles() {
    var buttons = document.querySelectorAll(".tip-toggle-button");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            var wrapper = this.parentNode;
            var content = wrapper.querySelector(".tip-toggle-content");

            if (!content) {
                return;
            }

            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        };
    }
}

// Rendert eine Inhaltsseite und initialisiert bei Bedarf die Code-Aufgabe.
function loadContentPage(question) {
    var quizQuestionTextDIV = document.getElementById("quiz-question-text-container");
    quizQuestionTextDIV.innerHTML = question.content;

    initTipPopups();
    initTipToggles();

    if (document.getElementById("run-code")) {
        initCodeTask(question);
    }
}

// Erzeugt die auswählbaren Antwortoptionen für eine Multiple-Choice-Frage.
function loadMultipleChoiceQuestion(question) {
    let quizAnswersUL = document.getElementById("quiz-answer-list");

    for (let i = 0; i < question.answers.length; i++) {
        let quizQuestionDIV = document.createElement("div");
        quizQuestionDIV.className = "quiz-answer-text-container-single unselected-answer";
        quizQuestionDIV.id = (i + 65).toString();
        ad_QuizSelectAnswer(quizQuestionDIV);

        let quizQuestionPress = document.createElement("li");
        let quizQuestionNumerator = document.createElement("li");
        let quizQuestionText = document.createElement("li");

        ed_QuizQuestionElements(question.type, quizQuestionPress, quizQuestionNumerator, quizQuestionDIV, quizQuestionText);

        quizQuestionNumerator.innerText = String.fromCharCode(i + 65);
        quizQuestionText.innerText = question.answers[i];

        quizQuestionDIV.append(quizQuestionPress, quizQuestionNumerator, quizQuestionText);
        quizAnswersUL.appendChild(quizQuestionDIV);
    }
}

// Stellt bereits ausgewählte Antworten beim erneuten Öffnen einer Frage wieder her.
function loadPreviousEnteredChoice(entered) {
    for (let i = 0; i < entered.length; i++) {
        selectAnswer(entered[i], true);
    }
}

// Vergibt die passenden CSS-Klassen für Antworttyp und Darstellung.
function ed_QuizQuestionElements(type, press, numerator, container, text) {
    if (type == "single") {
        press.className = "press-key-label press-label-radio answer-key-numerator unselected-answer-button";
        numerator.className = "answer-key-numerator numerator-radio unselected-answer-button";
        container.classList.add("question-type-single");
    } else if (type == "multiple") {
        press.className = "press-key-label press-label-checkbox answer-key-numerator unselected-answer-button";
        numerator.className = "answer-key-numerator numerator-checkbox unselected-answer-button";
        container.classList.add("question-type-multiple");
    }

    text.className = "quiz-answer-text-item";
    press.innerText = "";
    press.style.display = "none";
}

// Schreibt den Fragetext in den vorgesehenen Bereich der Seite.
function cr_QuizQuestionText(question) {
    let quizQuestionTextDIV = document.getElementById("quiz-question-text-container");
    let quizQuestionTextSPAN = document.createElement("span");

    quizQuestionTextSPAN.className = "quiz-question-text-item";
    quizQuestionTextSPAN.innerText = question;
    quizQuestionTextDIV.appendChild(quizQuestionTextSPAN);

    let hint = document.createElement("p");
    hint.innerText = "Hinweis: Diese Frage kann nur einmal beantwortet werden.";
    hint.style.fontSize = "13px";
    hint.style.color = "#6b8c92";
    hint.style.marginTop = "8px";

    quizQuestionTextDIV.appendChild(hint);
}

// Verarbeitet die Auswahl einer Antwort und aktualisiert Zustand sowie Anzeige.
function selectAnswer(key, previous) {
    let currentQuestion = quiz.questions[currentQuestionIndex];

    if (currentQuestion.locked) {
        return;
    }

    let answer = document.getElementById(key);

    if (answer) {
        if (answer.classList.contains("question-type-single")) {
            unselectAllAnswers(document.getElementById("quiz-answer-list"));
        }

        if (answer.classList.contains("unselected-answer")) {
            answer.classList.add("selected-answer");
            answer.classList.remove("unselected-answer");
            indicateSelectedAnswer(answer);

            if (!previous) {
                storeAnswers(true, key);
            }
        } else if (answer.classList.contains("selected-answer")) {
            answer.classList.add("unselected-answer");
            answer.classList.remove("selected-answer");
            unselectAnswerButton(answer.children);

            if (!previous) {
                storeAnswers(false, key);
            }
        }
    }

    showHideContinueButton(quiz.questions[currentQuestionIndex]);
}

// Speichert die ausgewählten Antworten im Datenobjekt der aktuellen Frage.
function storeAnswers(add, key) {
    if (add) {
        if (quiz.questions[currentQuestionIndex].type == "single") {
            quiz.questions[currentQuestionIndex].entered.length = 0;
        }
        quiz.questions[currentQuestionIndex].entered.push(key);
    } else {
        quiz.questions[currentQuestionIndex].entered =
            quiz.questions[currentQuestionIndex].entered.filter(item => item !== key);
    }

    quiz.questions[currentQuestionIndex].entered = uniq(quiz.questions[currentQuestionIndex].entered);
}

// Gibt unmittelbares Feedback darüber, ob die gewählte Antwort richtig oder falsch ist.
function showAnswerFeedback(question) {
    if (question.type !== "single") {
        return true;
    }

    if (!question.entered || question.entered.length === 0) {
        return false;
    }

    var selected = question.entered[0];
    var correctLetter = question.correct;
    var correctId = correctLetter.charCodeAt(0).toString();

    if (selected === correctId) {
        alert("Richtig!");
    } else {
        var correctIndex = correctLetter.charCodeAt(0) - 65;
        var correctText = question.answers[correctIndex];
        alert("Falsch.\nDie richtige Antwort ist: " + correctLetter + ") " + correctText);
    }

    return true;
}

// Hebt die aktuell ausgewählte Antwort visuell hervor.
function indicateSelectedAnswer(answer) {
    let button = answer.querySelectorAll(".answer-key-numerator");

    for (let i = 0; i < button.length; i++) {
        button[i].classList.add("selected-answer-button");
        button[i].classList.remove("unselected-answer-button");
    }
}

// Entfernt die Markierung aller Antworten einer Frage.
function unselectAllAnswers(answerList) {
    for (let i = 0; i < answerList.childElementCount; i++) {
        let child = answerList.children[i];

        if (child.classList.contains("selected-answer")) {
            child.classList.add("unselected-answer");
            child.classList.remove("selected-answer");
        }

        unselectAnswerButton(child.children);
    }
}

// Setzt die visuelle Hervorhebung einzelner Antwort-Buttons zurück.
function unselectAnswerButton(child) {
    for (let j = 0; j < child.length; j++) {
        let childButton = child[j];
        if (childButton && childButton.classList.contains("selected-answer-button")) {
            childButton.classList.add("unselected-answer-button");
            childButton.classList.remove("selected-answer-button");
        }
    }
}

// Verknüpft eine Antwortoption mit der Auswahlfunktion per Klick.
function ad_QuizSelectAnswer(answer) {
    answer.onclick = () => {
        selectAnswer(answer.id);
    };
}

// Erzeugt den Weiter-Button unter dem Fragenbereich.
function createContinueButton() {
    var continueDIV = document.createElement("div");
    var continueBUTTON = document.createElement("button");
    var continueSPAN = document.createElement("span");

    continueDIV.id = "quiz-continue-button-container";
    continueDIV.className = "quiz-continue-button-container";
    continueBUTTON.className = "quiz-continue-button";
    continueSPAN.className = "quiz-continue-text";
    continueSPAN.id = "quiz-continue-text";

    continueBUTTON.innerHTML = "Weiter";
    continueBUTTON.onclick = function () {
        loadNewQuestion("next-question-load");
    };

    continueSPAN.innerHTML = "";
    continueDIV.appendChild(continueBUTTON);
    continueDIV.appendChild(continueSPAN);

    document.getElementById("quiz-question-container").appendChild(continueDIV);
}

// Blendet den Weiter-Button abhängig vom Seitentyp und Bearbeitungsstand ein oder aus.
function showHideContinueButton(question) {
    var buttonContainer = document.getElementById("quiz-continue-button-container");
    var continueText = document.getElementById("quiz-continue-text");

    if (!buttonContainer || !continueText) {
        return;
    }

    if (question.type === "content") {
        buttonContainer.style.display = "initial";
        continueText.style.display = "none";
        return;
    }

    if (question.type === "single" || question.type === "multiple") {
        let show = document.getElementById("quiz-answer-list").children;
        continueText.style.display = "initial";

        for (let i = 0; i < show.length; i++) {
            if (show[i].classList.contains("selected-answer")) {
                buttonContainer.style.display = "initial";
                return;
            }
        }

        buttonContainer.style.display = "none";
    } else {
        buttonContainer.style.display = "initial";
        continueText.style.display = "none";
    }
}

// Wechselt zur nächsten oder vorherigen Seite und speichert bei Fragen das Tracking.
async function loadNewQuestion(adjustment) {
    var currentQuestion = quiz.questions[currentQuestionIndex];

    // Wenn auf der letzten Seite von Modul F auf "Weiter" geklickt wird,
    // direkt zum Posttest wechseln
    if (adjustment === "next-question-load" && currentQuestionIndex === quiz.questions.length - 1) {
        window.location.href = "../posttest/posttest.html?group=1";
        return;
    }

    if (adjustment === "next-question-load") {
        if (currentQuestion.type === "single") {
            if (!currentQuestion.entered || currentQuestion.entered.length === 0) {
                return;
            }

            if (!currentQuestion.locked) {
                var selected = currentQuestion.entered[0];
                var correctId = currentQuestion.correct.charCodeAt(0).toString();
                var isCorrect = selected === correctId;

                currentQuestion.attempts = 1;

                await trackEvent({
                    event_type: "quiz_answer",
                    page: "modul_f",
                    question_id: currentQuestion.id,
                    is_correct: isCorrect,
                    attempts: currentQuestion.attempts,
                    duration_ms: getTaskDurationMs()
                });

                showAnswerFeedback(currentQuestion);
                currentQuestion.locked = true;
            }
        }
    }

    if (canLoadNewQuestion(adjustment)) {
        removeAllChildren("quiz-answer-list");
        removeAllChildren("quiz-question-text-container");
        loadQuestion(quiz.questions[currentQuestionIndex], false);
    }
}

// Prüft, ob ein Seitenwechsel möglich ist, und aktualisiert den aktuellen Index.
function canLoadNewQuestion(adjustment) {
    if (adjustment === "next-question-load") {
        currentQuestionIndex++;
    } else {
        currentQuestionIndex--;
    }

    if (currentQuestionIndex > quiz.questions.length - 1) {
        currentQuestionIndex--;
        return false;
    }

    if (currentQuestionIndex < 0) {
        currentQuestionIndex++;
        return false;
    }

    return true;
}

// Verknüpft die Navigationspfeile mit der Seitenwechsel-Logik.
function addQuestionIteration() {
    var prev = document.getElementById("previous-question-load");
    var next = document.getElementById("next-question-load");

    prev.onclick = function () {
        loadNewQuestion("previous-question-load");
    };

    next.onclick = function () {
        loadNewQuestion("next-question-load");
    };
}

// Aktualisiert die Fortschrittsanzeige anhand der aktuellen Seitenposition.
function updateProgressBarStatus() {
    var progress = document.getElementById("quiz-progress-bar");
    var text = document.getElementById("progress-bar-text");
    var value = Math.floor(((currentQuestionIndex + 1) / quiz.questions.length) * 100);

    progress.setAttribute("aria-valuenow", value);
    progress.style.width = value + "%";
    text.innerText = value + "% abgeschlossen";
}

// Setzt den Fragencontainer wieder in seine Ausgangsposition zurück.
function moveQuestionContainerMiddle() {
    var parent = document.getElementById("quiz-question-container");
    parent.style.top = "0";
}

// Reagiert auf Tastatureingaben für Antwortauswahl und Navigation.
document.onkeydown = function(evt) {
    evt = evt || window.event;

    if ((evt.keyCode >= 65 && evt.keyCode < 90) || evt.keyCode == 8 || evt.keyCode == 46) {
        selectAnswer(evt.keyCode.toString());
    }

    if (evt.keyCode == 38) {
        loadNewQuestion("previous-question-load");
    }

    let type = quiz.questions[currentQuestionIndex].type;
    if (evt.keyCode == 40 || ((type == "single" || type == "multiple") && evt.keyCode == 13)) {
        loadNewQuestion("next-question-load");
    }
};

//Steuerung Adaptivität
/*function goToNextAdaptiveModule() {
    var path = JSON.parse(localStorage.getItem("adaptive_path") || "[]");
    var index = parseInt(localStorage.getItem("adaptive_current_index") || "0", 10);

    index++;

    if (index < path.length) {
        localStorage.setItem("adaptive_current_index", index.toString());
        window.location.href = path[index] + "?group=2";
    } else {
        window.location.href = "../posttest/posttest.html?group=2";
    }
} */

// Startet das Modul beim Laden der Datei.
init();