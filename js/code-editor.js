function initCodeTask() {
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

    runButton.onclick = function () {
        var code = codeInput.value;

        preview.srcdoc = code;

        var result = checkVideoTaskSolution(code);

        feedback.innerHTML = result.message;
        feedback.style.color = result.isCorrect ? "green" : "red";
    };
}

function checkVideoTaskSolution(code) {
    var lowerCode = code.toLowerCase();
    var errors = [];

    if (!lowerCode.includes("<video")) {
        errors.push("❌ Es wurde kein &lt;video&gt;-Tag gefunden.");
    }

    if (!lowerCode.includes('src="lager_rundgang.mp4"') && !lowerCode.includes("src='lager_rundgang.mp4'")) {
        errors.push("❌ Das Attribut src mit lager_rundgang.mp4 fehlt oder ist falsch.");
    }

    if (!lowerCode.includes("controls")) {
        errors.push("❌ Das Attribut controls fehlt.");
    }

    if (
        !lowerCode.includes('poster="vorschau_bild.jpg"') &&
        !lowerCode.includes("poster='vorschau_bild.jpg'")
    ) {
        errors.push("❌ Das poster-Attribut fehlt oder ist falsch. Verwenden Sie vorschau_bild.jpg.");
    }

    if (!lowerCode.includes("<body")) {
        errors.push("❌ Der &lt;body&gt;-Bereich fehlt.");
    }

    if (!lowerCode.includes("<head")) {
        errors.push("❌ Der &lt;head&gt;-Bereich fehlt.");
    }

    if (!lowerCode.includes("<title>logistik video</title>")) {
        errors.push("❌ Der Titel Logistik Video fehlt oder ist falsch.");
    }

    if (
        !lowerCode.includes('<meta name="viewport" content="width=device-width, initial-scale=1.0">') &&
        !lowerCode.includes("<meta name='viewport' content='width=device-width, initial-scale=1.0'>")
    ) {
        errors.push("❌ Das Viewport-Meta-Tag fehlt oder ist falsch.");
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