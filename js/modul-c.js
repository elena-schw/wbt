const quiz = {
    name: "Modul C: CSS Grundlagen",
    questions: [
        {
            type: "content",
            entered: ["gesehen"],
            content: `
                <div style="color:#35646b;">
                    <h2 style="color: rgb(56, 189, 207); margin-bottom: 16px;">
                        Modul C: CSS Grundlagen
                    </h2>

                    <p style="font-size:16px; margin-bottom:22px;">
                        In diesem Modul lernen Sie die grundlegenden Möglichkeiten von CSS kennen. Sie erfahren,
                        wie das Erscheinungsbild einer Webseite verändert werden kann, z. B. durch Farben,
                        Schriftarten und Abstände.
                    </p>

                    <h3 style="color: rgb(56, 189, 207); margin-bottom: 12px;">
                        1. Theorie: Grundlagen von CSS
                    </h3>

                    <h4 style="margin-bottom: 8px;">Trennung von Struktur und Gestaltung</h4>

                    <p style="margin-bottom: 14px;">
                        Während HTML die Struktur einer Webseite beschreibt, ist CSS
                        (Cascading Style Sheets) für das visuelle Erscheinungsbild zuständig.
                        CSS ermöglicht es, Inhalte zu gestalten, ohne die Struktur der HTML-Datei zu verändern.
                        Dadurch bleibt der Code übersichtlich und leichter wartbar.
                    </p>

                    <h4 style="margin-bottom: 8px;">Einbindung von CSS</h4>

                    <p style="margin-bottom: 8px;">
                        CSS kann direkt im HTML-Dokument oder in einer externen Datei eingebunden werden.
                    </p>

                    <p style="margin-bottom: 8px;">
                        Die häufigste Variante ist eine externe CSS-Datei:
                    </p>

                    <pre style="background:#ffffff; padding:12px; border-radius:6px; color:#2d6c75; overflow-x:auto; margin-bottom:16px;"><code>&lt;link rel="stylesheet" href="style.css"&gt;</code></pre>

                    <p style="margin-bottom: 16px;">
                        Diese wird im <strong>&lt;head&gt;</strong> der HTML-Datei eingebunden.
                    </p>

                    <h4 style="margin-bottom: 8px;">Grundaufbau von CSS-Regeln</h4>

                    <p style="margin-bottom: 8px;">
                        CSS besteht aus sogenannten Regeln. Eine Regel setzt sich aus einem Selektor und
                        Eigenschaften zusammen:
                    </p>

                    <pre style="background:#ffffff; padding:12px; border-radius:6px; color:#2d6c75; overflow-x:auto; margin-bottom:16px;"><code>p {
    color: red;
}</code></pre>

                    <ul style="margin-top:0; margin-bottom:16px; padding-left:22px;">
                        <li><strong>p</strong> → Selektor (wählt alle Absatz-Elemente aus)</li>
                        <li><strong>color</strong> → Eigenschaft</li>
                        <li><strong>red</strong> → Wert</li>
                    </ul>

                    <p style="margin-bottom: 16px;">
                        Diese Regel färbt alle Texte in <strong>&lt;p&gt;</strong>-Elementen rot.
                    </p>

                    <h4 style="margin-bottom: 8px;">Farben und Schriftgestaltung</h4>

                    <p style="margin-bottom: 8px;">
                        CSS bietet verschiedene Möglichkeiten zur Gestaltung von Texten.
                    </p>

                    <p style="margin-bottom: 8px;">
                        Beispiele:
                    </p>

                    <pre style="background:#ffffff; padding:12px; border-radius:6px; color:#2d6c75; overflow-x:auto; margin-bottom:16px;"><code>body {
    background-color: lightgray;
}

h1 {
    color: blue;
    font-family: Arial;
}

p {
    font-size: 16px;
}</code></pre>

                    <p style="margin-bottom: 8px;"><strong>Wichtige Eigenschaften:</strong></p>

                    <ul style="margin-top:0; margin-bottom:16px; padding-left:22px;">
                        <li><strong>color</strong> → Textfarbe. Farben können in CSS als englische Farbnamen oder als Hex-Code angegeben werden, z. B. hellgrau = lightgray oder #d3d3d3</li>
                        <li><strong>background-color</strong> → Hintergrundfarbe</li>
                        <li><strong>font-family</strong> → Schriftart</li>
                        <li><strong>font-size</strong> → Schriftgröße</li>
                    </ul>

                    <h4 style="margin-bottom: 8px;">Abstände und einfache Gestaltung</h4>

                    <p style="margin-bottom: 8px;">
                        Neben Farben und Schrift können auch Abstände definiert werden:
                    </p>

                    <pre style="background:#ffffff; padding:12px; border-radius:6px; color:#2d6c75; overflow-x:auto; margin-bottom:16px;"><code>div {
    margin: 20px;
    padding: 10px;
}</code></pre>

                    <ul style="margin-top:0; margin-bottom:16px; padding-left:22px;">
                        <li><strong>margin</strong> → Abstand nach außen</li>
                        <li><strong>padding</strong> → Abstand nach innen</li>
                    </ul>

                    <p>
                        Diese Eigenschaften helfen dabei, Inhalte übersichtlich darzustellen.
                    </p>
                </div>
            `
        },
        {
            id: "modul_c_q1",
            type: "single",
            question: "Frage 1: Wofür wird CSS verwendet?",
            answers: [
                "Für die Struktur einer Webseite",
                "Für die Datenverarbeitung",
                "Für das Design und Layout"
            ],
            entered: [],
            correct: "C",
            locked: false,
            attempts: 0
        },
        {
            id: "modul_c_q2",
            type: "single",
            question: "Frage 2: Was bewirkt die Eigenschaft color?",
            answers: [
                "Sie verändert den Hintergrund",
                "Sie verändert die Textfarbe",
                "Sie verändert die Schriftgröße"
            ],
            entered: [],
            correct: "B",
            locked: false,
            attempts: 0
        },
        {
            id: "modul_c_q3",
            type: "single",
            question: "Frage 3: Was macht margin?",
            answers: [
                "Abstand innerhalb eines Elements",
                "Schriftgröße ändern",
                "Abstand außerhalb eines Elements"
            ],
            entered: [],
            correct: "C",
            locked: false,
            attempts: 0
        },
        {
            id: "modul_c_code",
            type: "content",
            page: "modul_c",
            taskType: "modul_c_css",
            entered: ["gesehen"],
            codeAttempts: 0,
            content: `
                <div style="color:#35646b;">
                    <h3 style="color: rgb(56, 189, 207); margin-bottom: 16px;">
                        2. Anwendungsaufgabe
                    </h3>

                    <p style="margin-bottom: 12px;">
                        <strong>Szenario:</strong> Ein Logistikunternehmen möchte seine Webseite optisch verbessern,
                        damit Inhalte besser lesbar und strukturierter dargestellt werden.
                    </p>

                    <p style="margin-bottom: 12px;">
                        Das HTML-Grundgerüst ist bereits vorgegeben. Um Ihren Code zu sehen und Feedback zu bekommen,
                        klicken Sie auf <strong>Testen</strong>.
                    </p>

                    <p style="margin-bottom: 12px;">
                        Ihre Aufgabe:
                    </p>

                    <p style="margin-bottom: 12px;">
                        Fügen Sie die passenden CSS-Regeln im <strong>&lt;style&gt;</strong>-Block im
                        <strong>&lt;head&gt;</strong> hinzu, sodass folgende Anforderungen erfüllt werden:
                    </p>

                    <ul style="margin-top:0; margin-bottom:20px; padding-left:22px;">
                        <li>Die Hintergrundfarbe der Seite ist hellgrau (<strong>#d3d3d3</strong>)</li>
                        <li>Die Überschrift (<strong>&lt;h1&gt;</strong>) ist blau (<strong>#0000ff</strong>) und verwendet die Schriftart Arial</li>
                        <li>Der Text (<strong>&lt;p&gt;</strong>) hat eine Schriftgröße von <strong>16px</strong></li>
                        <li>Der <strong>&lt;div&gt;</strong>-Container besitzt einen äußeren Abstand von <strong>20px</strong> (margin)</li>
                        <li>Der <strong>&lt;div&gt;</strong>-Container besitzt einen inneren Abstand von <strong>10px</strong> (padding)</li>
                    </ul>

                    <div id="code-task-wrapper" style="display:flex; gap:20px; align-items:flex-start; margin-bottom:16px;">
                        <textarea id="code-input" style="width:50%; height:320px; padding:12px; font-family:monospace; font-size:14px; border:1px solid #ccc; border-radius:6px; resize:vertical;"></textarea>

                        <iframe id="preview" style="width:50%; height:320px; background:white; border:1px solid #ccc; border-radius:6px;"></iframe>
                    </div>

                    <button id="run-code" class="quiz-continue-button" style="margin-top: 0;">Testen</button>

                    <div id="feedback" style="margin-top:12px; font-weight:bold;"></div>

                    <div style="font-size:14px; color:#6b8c92; margin-top:10px;">
                        <strong>Hinweis</strong>: Beim Klick auf <strong>Weiter</strong> geht es zum nächsten Modul.
                        Sie können dann nicht mehr zum jetzigen Modul zurückkehren.
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

// Rendert eine Inhaltsseite und initialisiert bei Bedarf die Code-Aufgabe.
function loadContentPage(question) {
    var quizQuestionTextDIV = document.getElementById("quiz-question-text-container");
    quizQuestionTextDIV.innerHTML = question.content;

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

    // Hinweis
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

    // Wenn auf der letzten Seite von Modul C auf "Weiter" geklickt wird,
    // direkt zu Modul D wechseln
    if (adjustment === "next-question-load" && currentQuestionIndex === quiz.questions.length - 1) {
        window.location.href = "modul-d.html";
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
                    page: "modul_c",
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

// Startet das Modul beim Laden der Datei.
init();