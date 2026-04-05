function initCodeTask(question) {
    var codeInput = document.getElementById("code-input");
    var preview = document.getElementById("preview");
    var runButton = document.getElementById("run-code");
    var feedback = document.getElementById("feedback");

    if (!codeInput || !preview || !runButton || !feedback) {
        return;
    }

    codeInput.value = `<!DOCTYPE html>
<html>
<head>
  <title>Logistik Video</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

  

</body>
</html>`;

    runButton.onclick = async function () {
        var code = codeInput.value;

        preview.srcdoc = code;

        var result = checkVideoTaskSolution(code);

        feedback.innerHTML = result.message;
        feedback.style.color = result.isCorrect ? "green" : "red";

        question.codeAttempts = (question.codeAttempts || 0) + 1;

        await trackEvent({
            event_type: "code_attempt",
            page: "modul_a",
            question_id: question.id,
            is_correct: result.isCorrect,
            attempts: question.codeAttempts,
            duration_ms: getTaskDurationMs()
        });
    };
}

function checkVideoTaskSolution(code) {
    var lowerCode = code.toLowerCase();
    var errors = [];

    var hasVideoTag = lowerCode.includes("<video");
    var hasValidSrc =
        lowerCode.includes('src="lager_rundgang.mp4"') ||
        lowerCode.includes("src='lager_rundgang.mp4'");
    var hasControls = lowerCode.includes("controls");
    var hasValidPoster =
        lowerCode.includes('poster="vorschau_bild.jpg"') ||
        lowerCode.includes("poster='vorschau_bild.jpg'");
    var hasWidth = lowerCode.includes("width=");

    if (!hasVideoTag) {
        errors.push("❌ Es wurde kein <video>-Tag gefunden.");
    }

    if (!hasValidSrc) {
        errors.push("❌ Das Attribut src mit lager_rundgang.mp4 fehlt oder ist falsch.");
    }

    if (!hasControls) {
        errors.push("❌ Das Attribut controls fehlt.");
    }

    if (!hasValidPoster) {
        errors.push("❌ Das poster-Attribut fehlt oder ist falsch.");
    }

    if (!hasWidth) {
        errors.push("❌ Hinweis: Das Video ist sehr groß. Verwenden Sie zusätzlich das Attribut width.");
    }

    if (errors.length === 0) {
        return {
            isCorrect: true,
            message: "Richtig! Das Video wurde korrekt eingebunden."
        };
    }

    return {
        isCorrect: false,
        message: errors.join("<br>")
    };
}