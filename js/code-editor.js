// Initialisiert die Code-Aufgabe (Editor + Vorschau + Button)
function initCodeTask(question) {

    // Zugriff auf die HTML-Elemente im DOM
    var codeInput = document.getElementById("code-input");   // Textfeld für Code
    var preview = document.getElementById("preview");        // iframe für Live-Vorschau
    var runButton = document.getElementById("run-code");     // "Testen"-Button
    var feedback = document.getElementById("feedback");      // Feedback-Anzeige

    // Falls eines der Elemente nicht existiert → Funktion abbrechen
    if (!codeInput || !preview || !runButton || !feedback) {
        return;
    }

    // Start-Code (Gerüst), das den Lernenden vorgegeben wird
    codeInput.value = getInitialCodeTemplate(question);

    // Event: Klick auf "Testen"
    runButton.onclick = async function () {

        // Eingegebenen Code auslesen
        var code = codeInput.value;

        // Vorschau aktualisieren → Code wird im iframe gerendert
        preview.srcdoc = code;

        // Lösung überprüfen
        var result = checkCodeTaskSolution(code, question);

        // Feedback anzeigen (Text + Farbe)
        feedback.innerHTML = result.message;
        feedback.style.color = result.isCorrect ? "green" : "red";

        // Anzahl der Versuche zählen
        question.codeAttempts = (question.codeAttempts || 0) + 1;

        // Tracking an Supabase senden
        await trackEvent({
            event_type: "code_attempt",                 // Art des Events
            page: question.page || "unknown_module",    // Modul
            question_id: question.id,                   // Aufgabe
            is_correct: result.isCorrect,               // richtig/falsch
            attempts: question.codeAttempts,            // Anzahl Versuche
            duration_ms: getTaskDurationMs()            // Bearbeitungszeit
        });
    };
}

// Prüft, ob der eingegebene Code in Modul A die Anforderungen erfüllt
function checkModuleAVideoSolution(code) {

    // Code in Kleinbuchstaben umwandeln → einfacher Vergleich
    var lowerCode = code.toLowerCase();

    // Array für Fehlermeldungen
    var errors = [];

    // Einzelne Anforderungen prüfen
    var hasVideoTag = lowerCode.includes("<video");

    var hasValidSrc =
        lowerCode.includes('src="lager_rundgang.mp4"') ||
        lowerCode.includes("src='lager_rundgang.mp4'");

    var hasControls = lowerCode.includes("controls");

    var hasValidPoster =
        lowerCode.includes('poster="vorschau_bild.jpg"') ||
        lowerCode.includes("poster='vorschau_bild.jpg'");

    var hasWidth = lowerCode.includes("width=");

    // Fehler sammeln (didaktisch wichtig!)
    if (!hasVideoTag) {
        errors.push("❌ Es wurde kein video-Tag gefunden.");
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

    // Wenn keine Fehler → richtige Lösung
    if (errors.length === 0) {
        return {
            isCorrect: true,
            message: "Richtig! Das Video wurde korrekt eingebunden."
        };
    }

    // Wenn Fehler → alle anzeigen
    return {
        isCorrect: false,
        message: errors.join("<br>") // mehrere Fehler untereinander anzeigen
    };
}

//Für das Starttemplate (Modul B)
function getInitialCodeTemplate(question) {
    if (question.taskType === "modul_b_form") {
        return `<!DOCTYPE html>
<html>
<head>
  <title>Bestellformular</title>
</head>
<body>

  

</body>
</html>`;
    }

    return `<!DOCTYPE html>
<html>
<head>
  <title>Logistik Video</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

  

</body>
</html>`;
}

//Funktion zur Auswahl der Prüflogik
function checkCodeTaskSolution(code, question) {
    if (question.taskType === "modul_b_form") {
        return checkModuleBFormSolution(code);
    }

    return checkModuleAVideoSolution(code);
}

// Prüft, ob der eingegebene Code in Modul B die Anforderungen erfüllt
function checkModuleBFormSolution(code) {
    var lowerCode = code.toLowerCase();
    var errors = [];

    var hasForm = lowerCode.includes("<form");
    var hasNumberInput =
        lowerCode.includes('<input type="number"') ||
        lowerCode.includes("<input type='number'");
    var hasRequired = lowerCode.includes("required");
    var hasMin =
        lowerCode.includes('min="1"') ||
        lowerCode.includes("min='1'");
    var hasMax =
        lowerCode.includes('max="100"') ||
        lowerCode.includes("max='100'");
    var hasPlaceholder =
        lowerCode.includes('placeholder="menge eingeben"') ||
        lowerCode.includes("placeholder='menge eingeben'");
    var hasSelect = lowerCode.includes("<select");
    var hasStandardOption = lowerCode.includes("<option>standard</option>");
    var hasExpressOption = lowerCode.includes("<option>express</option>");
    var hasButton = lowerCode.includes("<button");
    var labelCount = (lowerCode.match(/<label/g) || []).length;
    var hasEnoughLabels = labelCount >= 2;

    if (!hasForm) {
        errors.push("❌ Es wurde kein &lt;form&gt;-Element gefunden.");
    }

    if (!hasNumberInput) {
        errors.push("❌ Das Zahlenfeld fehlt oder ist nicht korrekt mit type=\"number\" definiert.");
    }

    if (!hasRequired) {
        errors.push("❌ Das Attribut required fehlt beim Mengenfeld.");
    }

    if (!hasMin) {
        errors.push("❌ Das Attribut min=\"1\" fehlt beim Mengenfeld.");
    }

    if (!hasMax) {
        errors.push("❌ Das Attribut max=\"100\" fehlt beim Mengenfeld.");
    }

    if (!hasPlaceholder) {
        errors.push("❌ Das Attribut placeholder=\"Menge eingeben\" fehlt oder ist falsch.");
    }

    if (!hasSelect) {
        errors.push("❌ Das Auswahlfeld &lt;select&gt; fehlt.");
    }

    if (!hasStandardOption || !hasExpressOption) {
        errors.push("❌ Im Dropdown müssen die Optionen Standard und Express vorhanden sein.");
    }

    if (!hasButton) {
        errors.push("❌ Ein Button zum Absenden fehlt.");
    }

    if (!hasEnoughLabels) {
        errors.push("❌ Bitte beschriften Sie alle Eingabefelder mit &lt;label&gt;.");
    }

    if (errors.length === 0) {
        return {
            isCorrect: true,
            message: "Richtig! Das Formular wurde korrekt erstellt."
        };
    }

    return {
        isCorrect: false,
        message: errors.join("<br>")
    };
}