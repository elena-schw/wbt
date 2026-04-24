const quiz = {
    name: "Modul B: Erweiterte HTML-Strukturen und Formulare",
    questions: [
        {
            type: "content",
            entered: ["gesehen"],
            content: `
                <div style="color:#35646b;">
                    <h2 style="color: rgb(56, 189, 207); margin-bottom: 16px;">
                        Modul B: Erweiterte HTML-Strukturen und Formulare
                    </h2>

                    <p style="font-size:16px; margin-bottom:22px;">
                        In diesem Modul vertiefen Sie Ihre HTML-Kenntnisse. Sie lernen, wie Formulare aufgebaut werden
                        und wie Eingaben bereits mit HTML überprüft werden können.
                    </p>

                    <h3 style="color: rgb(56, 189, 207); margin-bottom: 12px;">
                        1. Theorie: Erweiterte HTML-Konzepte
                    </h3>

                    <h4 style="margin-bottom: 8px;">Formulare und Eingabeelemente</h4>

                    <p style="margin-bottom: 14px;">
                        Formulare dienen dazu, Eingaben von Nutzern zu erfassen. Sie werden mit dem
                        <strong>&lt;form&gt;</strong>-Element definiert und enthalten verschiedene Eingabefelder.
                    </p>

                    <p style="margin-bottom: 8px;">
                        Wichtige Elemente sind:
                    </p>

                    <pre style="background:#ffffff; padding:12px; border-radius:6px; color:#2d6c75; overflow-x:auto; margin-bottom:8px;"><code>&lt;input type="text"&gt;
&lt;input type="number"&gt;
&lt;button&gt;Absenden&lt;/button&gt;</code></pre>

                    <p style="margin-bottom: 16px;">
                        <span class="tip-popup-wrapper">
                            <button type="button" class="tip-trigger" data-tip="Das Attribut type bestimmt, welche Art von Eingabe möglich ist, z. B. Text oder Zahlen.">
                                Mehr zum Attribut <strong>type</strong>
                            </button>
                        </span>
                    </p>

                    <p style="margin-bottom: 16px;">
                        Diese ermöglichen die Eingabe und Übermittlung von Daten.
                    </p>

                    <h4 style="margin-bottom: 8px;">Beschriftung von Eingabefeldern</h4>

                    <p style="margin-bottom: 8px;">
                        Damit Formulare verständlich sind, sollten Eingabefelder beschriftet werden.
                        Dafür wird das <strong>&lt;label&gt;</strong>-Element verwendet:
                    </p>

                    <pre style="background:#ffffff; padding:12px; border-radius:6px; color:#2d6c75; overflow-x:auto; margin-bottom:16px;"><code>&lt;label&gt;Menge:&lt;/label&gt;
&lt;input type="number"&gt;</code></pre>

                    <h4 style="margin-bottom: 8px;">Auswahlfelder (Dropdowns)</h4>

                    <p style="margin-bottom: 8px;">
                        Für vorgegebene Optionen wird das <strong>&lt;select&gt;</strong>-Element genutzt:
                    </p>

                    <pre style="background:#ffffff; padding:12px; border-radius:6px; color:#2d6c75; overflow-x:auto; margin-bottom:16px;"><code>&lt;select&gt;
  &lt;option&gt;Standard&lt;/option&gt;
  &lt;option&gt;Express&lt;/option&gt;
&lt;/select&gt;</code></pre>

                    <p style="margin-bottom: 16px;">
                        So kann der Nutzer gezielt aus festen Werten wählen.
                    </p>

                    <h4 style="margin-bottom: 8px;">Pflichtfelder und Validierung</h4>

                    <p style="margin-bottom: 8px;">
                        HTML ermöglicht einfache Eingabeprüfungen ohne JavaScript.
                    </p>

                    <p style="margin-bottom: 8px;">
                        Mit dem Attribut <strong>required</strong> wird ein Feld als Pflichtfeld definiert:
                    </p>

                    <pre style="background:#ffffff; padding:12px; border-radius:6px; color:#2d6c75; overflow-x:auto; margin-bottom:16px;"><code>&lt;input type="number" required&gt;</code></pre>

                    <p style="margin-bottom: 16px;">
                        Der Browser verhindert das Absenden des Formulars, solange das Feld leer ist.
                    </p>

                    <p style="margin-bottom: 8px;">
                        Zusätzlich können Eingaben eingeschränkt werden:
                    </p>

                    <ul style="margin-top:0; margin-bottom:16px; padding-left:22px;">
                        <li><strong>min / max</strong> → Wertebereich festlegen</li>
                        <li><strong>placeholder</strong> → Hinweistext anzeigen</li>
                    </ul>

                    <p style="margin-bottom: 8px;">
                        Beispiel:
                    </p>

                    <pre style="background:#ffffff; padding:12px; border-radius:6px; color:#2d6c75; overflow-x:auto; margin-bottom:16px;"><code>&lt;input type="number" max="100" placeholder="Menge eingeben"&gt;</code></pre>
                </div>
            `
        },
        {
            id: "modul_b_q1",
            type: "single",
            question: "Frage 1: Welches Attribut sorgt dafür, dass ein Eingabefeld ausgefüllt werden muss?",
            answers: [
                "placeholder",
                "required",
                "checked"
            ],
            entered: [],
            correct: "B",
            locked: false,
            attempts: 0
        },
        {
            id: "modul_b_q2",
            type: "single",
            question: "Frage 2: Was bewirkt das Attribut max=\"100\"?",
            answers: [
                "Es begrenzt den maximal erlaubten Wert",
                "Es löscht das Eingabefeld",
                "Es macht das Feld optional"
            ],
            entered: [],
            correct: "A",
            locked: false,
            attempts: 0
        },
        {
            id: "modul_b_q3",
            type: "single",
            question: "Frage 3: Welches Element wird für Auswahlmenüs verwendet?",
            answers: [
                "<input>",
                "<select>",
                "<div>"
            ],
            entered: [],
            correct: "B",
            locked: false,
            attempts: 0
        },
        {
            id: "modul_b_code",
            page: "modul_b",
            taskType: "modul_b_form",
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
                        Ein Logistikunternehmen möchte ein Bestellformular erstellen, in dem Nutzer eine Produktmenge eingeben
                        und eine Versandart auswählen können.
                    </p>

                    <p style="margin-bottom: 12px;">
                        Das HTML-Grundgerüst ist bereits vorgegeben. Um Ihren Code zu sehen und Feedback zu bekommen,
                        klicken Sie auf <strong>Testen</strong>.
                    </p>

                    <p style="margin-bottom: 12px;">
                        <strong>Ihre Aufgabe:</strong>
                    </p>

                    <p style="margin-bottom: 10px;">
                        Erstellen Sie ein HTML-Dokument mit einem Formular, das folgende Anforderungen erfüllt:
                    </p>

                    <ul style="margin-top:0; margin-bottom:20px; padding-left:22px;">
                        <li>ein Zahlenfeld für die Menge</li>
                        <li>ein Dropdown für die Versandart (Standard, Express)</li>
                        <li>ein Button zum Absenden</li>
                        <li>alle Eingabefelder sind beschriftet</li>
                    </ul>

                    <p style="margin-bottom: 10px;">Zusätzlich muss das Zahlenfeld:</p>

                    <ul style="margin-top:0; margin-bottom:20px; padding-left:22px;">
                        <li>ein Pflichtfeld sein</li>
                        <li>nur Werte zwischen 1 und 100 erlauben</li>
                        <li>einen Hinweistext enthalten</li>
                    </ul>

                    <div class="tip-toggle-wrapper" style="margin-bottom:16px;">

                    <button type="button" class="tip-toggle-button">
                        Tipps einblenden/ausblenden 💡
                    </button>

                    <div class="tip-toggle-content" style="display:none;">
                        <p style="margin-top:12px; margin-bottom:10px;">
                            Beginnen Sie das Formular mit dem <strong>&lt;form&gt;</strong>-Tag und fügen Sie die Eingabefelder Schritt für Schritt ein.
                        </p>

                        <p style="margin-bottom:10px;">
                            Ein Dropdown-Menü erstellen Sie mit <strong>&lt;select&gt;</strong> und <strong>&lt;option&gt;</strong>.
                        </p>

                        <p style="margin-bottom:10px;">
                            Ein Zahlenfeld wird mit <strong>&lt;input type="number"&gt;</strong> erstellt.
                        </p>

                        <p style="margin-bottom:10px;">
                            Beschriftungen fügen Sie mit <strong>&lt;label&gt;</strong> vor den Eingabefeldern hinzu.
                        </p>

                        <p style="margin-bottom:10px;">
                            Attribute wie <strong>required</strong>, <strong>min</strong>, <strong>max</strong> und <strong>placeholder</strong>
                            werden direkt im <strong>&lt;input&gt;</strong>-Tag ergänzt.
                        </p>

                        <p style="margin-bottom:0;">
                            Optional: Benutzen Sie im <strong>&lt;input&gt;</strong>-Tag
                            <strong>style="width: 150px;"</strong>, damit auch ein längerer Hinweistext im Mengenfeld lesbar ist.
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

//Pop-Ups
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

//Hints 
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

    // Wenn auf der letzten Seite von Modul B auf "Weiter" geklickt wird, direkt zu Modul C (LINEAR) oder adaptive Weiterleitung (group 2)
    if (adjustment === "next-question-load" && currentQuestionIndex === quiz.questions.length - 1) {
    var group = new URLSearchParams(window.location.search).get("group");

    if (group === "2") {
        goToNextAdaptiveModule();
    } else {
        window.location.href = "modul-c.html";
    }

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
                    page: "modul_b",
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
function goToNextAdaptiveModule() {
    var path = JSON.parse(localStorage.getItem("adaptive_path") || "[]");
    var index = parseInt(localStorage.getItem("adaptive_current_index") || "0", 10);

    index++;

    if (index < path.length) {
        localStorage.setItem("adaptive_current_index", index.toString());
        window.location.href = path[index] + "?group=2";
    } else {
        window.location.href = "../posttest/posttest.html?group=2";
    }
}

// Startet das Modul beim Laden der Datei.
init();