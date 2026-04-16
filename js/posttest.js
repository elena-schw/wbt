const quiz = {
    name: "Posttest",
    questions: [
        {
            id: "posttest_intro",
            type: "content",
            entered: ["gesehen"],
            content: `
                <div style="color:#35646b;">
                    <h2 style="color: rgb(56, 189, 207); margin-bottom: 16px;">
                        Posttest
                    </h2>

                    <p style="margin-bottom:16px;">
                        Dieser Test dient nicht zur Bewertung, sondern zur Einschätzung Ihres Wissensstands.
                        Bitte antworten Sie ehrlich und ohne zu raten. Wenn Sie unsicher sind, wählen Sie
                        <strong>„Das weiß ich nicht“</strong>.
                    </p>

                    <p style="margin-bottom:16px;">
                        Den gleichen Test haben Sie schon am Anfang bearbeitet. Er dient zur Überprüfung, ob sich Ihr Wissen
                        durch das WBT verändert hat. Er ist somit Teil der wissenschaftlichen Auswertung
                        und nicht Teil des Trainings.
                    </p>

                    <p>Klicken Sie auf <strong>Weiter</strong>, um die 9 Fragen nochmals zu beantworten.</p>
                </div>
            `
        },

        // HTML
        {
            id: "post_html_q1",
            domain: "html",
            type: "single",
            question: "Frage 1: Welches HTML-Element wird verwendet, um ein Video einzubinden?",
            answers: [
                "<media>",
                "<video>",
                "<movie>",
                "Das weiß ich nicht."
            ],
            correct: "B",
            entered: [],
            locked: false,
            attempts: 0
        },
        {
            id: "post_html_q2",
            domain: "html",
            type: "single",
            question: "Frage 2: Welches Attribut sorgt dafür, dass Bedienelemente (Play, Pause) angezeigt werden?",
            answers: [
                "poster",
                "controls",
                "autoplay",
                "Das weiß ich nicht."
            ],
            correct: "B",
            entered: [],
            locked: false,
            attempts: 0
        },
        {
            id: "post_html_q3",
            domain: "html",
            type: "single",
            question: "Frage 3: Welcher input-Typ eignet sich für die Eingabe einer Bestellmenge?",
            answers: [
                'type="text"',
                'type="select"',
                'type="number"',
                "Das weiß ich nicht."
            ],
            correct: "C",
            entered: [],
            locked: false,
            attempts: 0
        },

        // CSS
        {
            id: "post_css_q1",
            domain: "css",
            type: "single",
            question: "Frage 4: Was bewirkt padding bei einem Element?",
            answers: [
                "Es verändert die Textfarbe.",
                "Es erzeugt Abstand innerhalb des Elements.",
                "Es erzeugt Abstand außerhalb des Elements.",
                "Das weiß ich nicht."
            ],
            correct: "B",
            entered: [],
            locked: false,
            attempts: 0
        },
        {
            id: "post_css_q2",
            domain: "css",
            type: "single",
            question: "Frage 5: Wie wird eine CSS-Klasse namens container im Stylesheet angesprochen?",
            answers: [
                "#container",
                "container",
                ".container",
                "Das weiß ich nicht."
            ],
            correct: "C",
            entered: [],
            locked: false,
            attempts: 0
        },
        {
            id: "post_css_q3",
            domain: "css",
            type: "single",
            question: "Frage 6: Was bewirkt flex-direction: row; in einem Flex-Container?",
            answers: [
                "Die Elemente werden untereinander angeordnet.",
                "Die Elemente werden nebeneinander angeordnet.",
                "Die Elemente werden gleichmäßig eingefärbt.",
                "Das weiß ich nicht."
            ],
            correct: "B",
            entered: [],
            locked: false,
            attempts: 0
        },

        // JavaScript
        {
            id: "post_js_q1",
            domain: "js",
            type: "single",
            question: "Frage 7: Wofür wird das <script>-Tag in einer HTML-Datei verwendet?",
            answers: [
                "Zum Einfügen von CSS-Regeln",
                "Zum Definieren von Formularfeldern",
                "Zum Einbinden oder Schreiben von JavaScript-Code",
                "Das weiß ich nicht."
            ],
            correct: "C",
            entered: [],
            locked: false,
            attempts: 0
        },
        {
            id: "post_js_q2",
            domain: "js",
            type: "single",
            question: "Frage 8: Was macht innerHTML?",
            answers: [
                "Es erstellt ein neues Element",
                "Es verändert den Inhalt eines HTML-Elements",
                "Es lädt eine Datei",
                "Das weiß ich nicht."
            ],
            correct: "B",
            entered: [],
            locked: false,
            attempts: 0
        },
        {
            id: "post_js_q3",
            domain: "js",
            type: "single",
            question: "Frage 9: Wofür steht && in einer JavaScript-Bedingung?",
            answers: [
                "für „oder“",
                "für „gleich“",
                "für „und“",
                "Das weiß ich nicht."
            ],
            correct: "C",
            entered: [],
            locked: false,
            attempts: 0
        }
    ]
};

let currentQuestionIndex = 0;

/* -----------------------------
   Hilfsfunktionen
----------------------------- */

function removeAllChildren(parent) {
    document.getElementById(parent).innerHTML = "";
}

function uniq(a) {
    return Array.from(new Set(a));
}

function setQuizTitle() {
    var titleElement = document.querySelector(".quiz-name-text");
    if (titleElement) {
        titleElement.innerText = quiz.name;
    }
}

function getCurrentQuestion() {
    return quiz.questions[currentQuestionIndex];
}

function isRealQuestion(question) {
    return question.type === "single" || question.type === "multiple";
}

/* -----------------------------
   Initialisierung
----------------------------- */

function init() {
    setQuizTitle();
    createContinueButton();
    addQuestionIteration();
    loadQuestion(quiz.questions[0], true);
}

/* -----------------------------
   Laden der Seiten / Fragen
----------------------------- */

function loadQuestion(question, initLoad) {
    updateProgressBarStatus();

    if (question.type === "content") {
        loadContentPage(question);
    } else if (question.type === "single" || question.type === "multiple") {
        startTaskTimer();
        cr_QuizQuestionText(question.question);
        loadMultipleChoiceQuestion(question);
        loadPreviousEnteredChoice(question.entered);
    }

    if (!initLoad) {
        moveQuestionContainerMiddle();
    }

    showHideContinueButton(question);
}

function loadContentPage(question) {
    var quizQuestionTextDIV = document.getElementById("quiz-question-text-container");
    quizQuestionTextDIV.innerHTML = question.content;
}

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

function loadPreviousEnteredChoice(entered) {
    for (let i = 0; i < entered.length; i++) {
        selectAnswer(entered[i], true);
    }
}

function ed_QuizQuestionElements(type, press, numerator, container, text) {
    if (type === "single") {
        press.className = "press-key-label press-label-radio answer-key-numerator unselected-answer-button";
        numerator.className = "answer-key-numerator numerator-radio unselected-answer-button";
        container.classList.add("question-type-single");
    } else if (type === "multiple") {
        press.className = "press-key-label press-label-checkbox answer-key-numerator unselected-answer-button";
        numerator.className = "answer-key-numerator numerator-checkbox unselected-answer-button";
        container.classList.add("question-type-multiple");
    }

    text.className = "quiz-answer-text-item";
    press.innerText = "";
    press.style.display = "none";
}

function cr_QuizQuestionText(question) {
    let quizQuestionTextDIV = document.getElementById("quiz-question-text-container");
    let quizQuestionTextSPAN = document.createElement("span");

    quizQuestionTextSPAN.className = "quiz-question-text-item";
    quizQuestionTextSPAN.innerText = question;
    quizQuestionTextDIV.appendChild(quizQuestionTextSPAN);
}

/* -----------------------------
   Antworten
----------------------------- */

function selectAnswer(key, previous) {
    let currentQuestion = getCurrentQuestion();

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

    showHideContinueButton(currentQuestion);
}

function storeAnswers(add, key) {
    let currentQuestion = getCurrentQuestion();

    if (add) {
        if (currentQuestion.type === "single") {
            currentQuestion.entered.length = 0;
        }
        currentQuestion.entered.push(key);
    } else {
        currentQuestion.entered = currentQuestion.entered.filter(function(item) {
            return item !== key;
        });
    }

    currentQuestion.entered = uniq(currentQuestion.entered);
}

function indicateSelectedAnswer(answer) {
    let button = answer.querySelectorAll(".answer-key-numerator");

    for (let i = 0; i < button.length; i++) {
        button[i].classList.add("selected-answer-button");
        button[i].classList.remove("unselected-answer-button");
    }
}

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

function unselectAnswerButton(child) {
    for (let j = 0; j < child.length; j++) {
        let childButton = child[j];
        if (childButton && childButton.classList.contains("selected-answer-button")) {
            childButton.classList.add("unselected-answer-button");
            childButton.classList.remove("selected-answer-button");
        }
    }
}

function ad_QuizSelectAnswer(answer) {
    answer.onclick = function () {
        selectAnswer(answer.id);
    };
}

/* -----------------------------
   Weiter-Button / Navigation
----------------------------- */

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
        continueText.style.display = "none";

        for (let i = 0; i < show.length; i++) {
            if (show[i].classList.contains("selected-answer")) {
                buttonContainer.style.display = "initial";
                return;
            }
        }

        buttonContainer.style.display = "none";
        return;
    }

    buttonContainer.style.display = "initial";
    continueText.style.display = "none";
}

async function loadNewQuestion(adjustment) {
    var currentQuestion = getCurrentQuestion();

    if (adjustment === "next-question-load" && isRealQuestion(currentQuestion)) {
        if (!currentQuestion.entered || currentQuestion.entered.length === 0) {
            return;
        }

        if (!currentQuestion.locked) {
            var selected = currentQuestion.entered[0];
            var correctId = currentQuestion.correct.charCodeAt(0).toString();
            var isCorrect = selected === correctId;

            currentQuestion.attempts = 1;
            currentQuestion.locked = true;

            await trackEvent({
                event_type: "posttest_answer",
                page: "posttest",
                question_id: currentQuestion.id,
                is_correct: isCorrect,
                attempts: currentQuestion.attempts,
                duration_ms: getTaskDurationMs()
            });
        }
    }

    if (adjustment === "next-question-load" && currentQuestionIndex === quiz.questions.length - 1) {
        finalizePosttest();
        return;
    }

    if (canLoadNewQuestion(adjustment)) {
        removeAllChildren("quiz-answer-list");
        removeAllChildren("quiz-question-text-container");
        loadQuestion(quiz.questions[currentQuestionIndex], false);
    }
}

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

function moveQuestionContainerMiddle() {
    var parent = document.getElementById("quiz-question-container");
    parent.style.top = "0";
}

/* -----------------------------
   Progress
----------------------------- */

function updateProgressBarStatus() {
    var progress = document.getElementById("quiz-progress-bar");
    var text = document.getElementById("progress-bar-text");

    var answeredQuestions = 0;
    var totalQuestions = 0;

    for (var i = 0; i < quiz.questions.length; i++) {
        if (isRealQuestion(quiz.questions[i])) {
            totalQuestions++;
            if (quiz.questions[i].entered.length > 0) {
                answeredQuestions++;
            }
        }
    }

    var value = Math.floor((answeredQuestions / totalQuestions) * 100);

    progress.setAttribute("aria-valuenow", value);
    progress.style.width = value + "%";
    text.innerText = value + "% abgeschlossen";
}

/* -----------------------------
   Posttest-Auswertung
----------------------------- */

function countCorrectByDomain(domain) {
    var count = 0;

    for (var i = 0; i < quiz.questions.length; i++) {
        var q = quiz.questions[i];

        if (q.domain === domain && q.entered.length > 0) {
            var selected = q.entered[0];
            var correctId = q.correct.charCodeAt(0).toString();

            if (selected === correctId) {
                count++;
            }
        }
    }

    return count;
}

function getLevelFromScore(score) {
    if (score >= 2) {
        return "advanced";
    }
    return "basics";
}

async function finalizePosttest() {
    var htmlScore = countCorrectByDomain("html");
    var cssScore = countCorrectByDomain("css");
    var jsScore = countCorrectByDomain("js");

    var result = {
        html: {
            score: htmlScore,
            level: getLevelFromScore(htmlScore)
        },
        css: {
            score: cssScore,
            level: getLevelFromScore(cssScore)
        },
        js: {
            score: jsScore,
            level: getLevelFromScore(jsScore)
        }
    };

    localStorage.setItem("posttest_result", JSON.stringify(result));
    localStorage.setItem("posttest_html_score", htmlScore);
    localStorage.setItem("posttest_css_score", cssScore);
    localStorage.setItem("posttest_js_score", jsScore);

    localStorage.setItem("posttest_html_level", result.html.level);
    localStorage.setItem("posttest_css_level", result.css.level);
    localStorage.setItem("posttest_js_level", result.js.level);

    await trackEvent({
        event_type: "posttest_result",
        page: "posttest",
        question_id: "posttest_summary",
        is_correct: null,
        attempts: null,
        duration_ms: null
    });

    window.location.href = "../abschluss/abschluss.html";
}

/* -----------------------------
   Tastatursteuerung
----------------------------- */

document.onkeydown = function(evt) {
    evt = evt || window.event;

    if ((evt.keyCode >= 65 && evt.keyCode <= 90) || evt.keyCode === 8 || evt.keyCode === 46) {
        selectAnswer(evt.keyCode.toString());
    }

    if (evt.keyCode === 38) {
        loadNewQuestion("previous-question-load");
    }

    let type = getCurrentQuestion().type;
    if (evt.keyCode === 40 || ((type === "single" || type === "multiple") && evt.keyCode === 13)) {
        loadNewQuestion("next-question-load");
    }
};

init();