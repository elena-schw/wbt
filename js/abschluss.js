const quiz = {
    name: "Abschluss",
    questions: [
        {
            id: "abschluss_content",
            type: "content",
            entered: ["gesehen"],
            content: `
                <div style="color:#35646b;">
                    <h2 style="color: rgb(56, 189, 207); margin-bottom: 16px;">
                        Abschluss
                    </h2>

                    <p style="margin-bottom:16px;">
                        Sie haben das Training erfolgreich abgeschlossen! 🎉 Vielen Dank für Ihre Teilnahme!
                    </p>

                    <p style="margin-bottom:16px;">
                        Bitte geben Sie nun Feedback zum Training. Ihre Rückmeldungen sind ein wichtiger Bestandteil der Studie
                        und helfen dabei, das WBT sowie adaptive Lernangebote besser zu verstehen und weiterzuentwickeln.
                    </p>

                    <p style="margin-bottom:16px;">
                        Klicken Sie auf <strong>Weiter</strong>, um zum Fragebogen zu gelangen.
                    </p>
                </div>
            `
        }
    ]
};

function init() {
    setQuizTitle();
    createContinueButton();
    loadQuestion(quiz.questions[0]);
}

function setQuizTitle() {
    var titleElement = document.querySelector(".quiz-name-text");
    if (titleElement) {
        titleElement.innerText = quiz.name;
    }
}

function loadQuestion(question) {
    var container = document.getElementById("quiz-question-text-container");
    if (container) {
        container.innerHTML = question.content;
    }

    var progress = document.getElementById("quiz-progress-bar");
    var text = document.getElementById("progress-bar-text");

    if (progress) {
        progress.setAttribute("aria-valuenow", 100);
        progress.style.width = "100%";
    }

    if (text) {
        text.innerText = "100% abgeschlossen";
    }
}

function createContinueButton() {
    var continueDIV = document.createElement("div");
    var continueBUTTON = document.createElement("button");

    continueDIV.id = "quiz-continue-button-container";
    continueDIV.className = "quiz-continue-button-container";

    continueBUTTON.className = "quiz-continue-button";
    continueBUTTON.innerHTML = "Weiter";

    continueBUTTON.onclick = function () {
        redirectToSurvey();
    };

    continueDIV.appendChild(continueBUTTON);

    var container = document.getElementById("quiz-question-container");
    if (container) {
        container.appendChild(continueDIV);
    }
}

function redirectToSurvey() {
    var surveyUrl = "HIER_GOOGLE_FORMS_LINK";

    try {
        if (typeof trackEvent === "function") {
            trackEvent({
                event_type: "abschluss",
                page: "abschluss",
                question_id: "abschluss_page",
                is_correct: null,
                attempts: null,
                duration_ms: null
            }).catch(function(error) {
                console.error("Tracking fehlgeschlagen:", error);
            });
        }
    } catch (error) {
        console.error("Tracking-Aufruf fehlgeschlagen:", error);
    }

    window.location.href = surveyUrl;
}

init();