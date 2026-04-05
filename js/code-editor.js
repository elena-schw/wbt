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
    codeInput.value = `<!DOCTYPE html>
<html>
<head>
  <title>Logistik Video</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

  

</body>
</html>`;

    // Event: Klick auf "Testen"
    runButton.onclick = async function () {

        // Eingegebenen Code auslesen
        var code = codeInput.value;

        // Vorschau aktualisieren → Code wird im iframe gerendert
        preview.srcdoc = code;

        // Lösung überprüfen
        var result = checkVideoTaskSolution(code);

        // Feedback anzeigen (Text + Farbe)
        feedback.innerHTML = result.message;
        feedback.style.color = result.isCorrect ? "green" : "red";

        // Anzahl der Versuche zählen
        question.codeAttempts = (question.codeAttempts || 0) + 1;

        // Tracking an Supabase senden
        await trackEvent({
            event_type: "code_attempt",        // Art des Events
            page: "modul_a",                   // Modul
            question_id: question.id,          // Aufgabe
            is_correct: result.isCorrect,      // richtig/falsch
            attempts: question.codeAttempts,   // Anzahl Versuche
            duration_ms: getTaskDurationMs()   // Bearbeitungszeit
        });
    };
}

// Prüft, ob der eingegebene Code die Anforderungen erfüllt
function checkVideoTaskSolution(code) {

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