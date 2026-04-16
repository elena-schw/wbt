// Initialisiert die Code-Aufgabe (Editor + Vorschau + Button)
function initCodeTask(question) {

    // Zugriff auf die HTML-Elemente im DOM
    var codeInput = document.getElementById("code-input");
    var preview = document.getElementById("preview");
    var runButton = document.getElementById("run-code");
    var feedback = document.getElementById("feedback");

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
            event_type: "code_attempt",
            page: question.page || "unknown_module",
            question_id: question.id,
            is_correct: result.isCorrect,
            attempts: question.codeAttempts,
            duration_ms: getTaskDurationMs()
        });
    };
}

// -----------------------------
// Start-Templates
// -----------------------------

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

    if (question.taskType === "modul_c_css") {
        return `<!DOCTYPE html>
<html>
<head>
  <title>Logistik Seite</title>
  <style>

  /* Hier CSS einfügen */

  </style>
</head>
<body>

  <h1>Willkommen im Lager</h1>

  <div>
    <p>Hier befinden sich wichtige Informationen zum Versand.</p>
  </div>

</body>
</html>`;
    }

    if (question.taskType === "modul_d_flexbox") {
        return `<!DOCTYPE html>
<html>
<head>
  <title>Layout</title>
  <style>

  </style>
</head>
<body>

  <div class="container">
    <div id="b1">Bereich 1</div>
    <div id="b2">Bereich 2</div>
    <div id="b3">Bereich 3</div>
  </div>

</body>
</html>`;
    }

    if (question.taskType === "modul_e_js") {
        return `<!DOCTYPE html>
<html>
<head>
  <title>JavaScript</title>
</head>
<body>

  <button onclick="zeigeText()">Klick mich</button>

  <p id="ausgabe"></p>

  <script>

  //Hier JavaScript einfügen

  </script>

</body>
</html>`;
    }

    if (question.taskType === "modul_f_logic") {
        return `<!DOCTYPE html>
<html>
<head>
  <title>Bestellung pruefen</title>
</head>
<body>

  <input type="number" id="menge">
  <button onclick="pruefen()">Pruefen</button>

  <p id="ausgabe"></p>

  <script>

  </script>

</body>
</html>`;
    }

    // Standard = Modul A
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

// -----------------------------
// Auswahl der Prüflogik
// -----------------------------

function checkCodeTaskSolution(code, question) {
    if (question.taskType === "modul_b_form") {
        return checkModuleBFormSolution(code);
    }

    if (question.taskType === "modul_c_css") {
        return checkModuleCCssSolution(code);
    }

    if (question.taskType === "modul_d_flexbox") {
        return checkModuleDFlexboxSolution(code);
    }

    if (question.taskType === "modul_e_js") {
        return checkModuleEJsSolution(code);
    }

    if (question.taskType === "modul_f_logic") {
        return checkModuleFLogicSolution(code);
    }

    return checkModuleAVideoSolution(code);
}

// -----------------------------
// Modul A
// -----------------------------

function checkModuleAVideoSolution(code) {
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

// -----------------------------
// Modul B
// -----------------------------

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

// -----------------------------
// Modul C
// -----------------------------

function checkModuleCCssSolution(code) {
    var lowerCode = code.toLowerCase();
    var errors = [];

    var hasBody = lowerCode.includes("body");
    var hasBgColor =
        lowerCode.includes("background-color: #d3d3d3") ||
        lowerCode.includes("background-color:#d3d3d3");

    var hasH1 = lowerCode.includes("h1");
    var hasH1Color =
        lowerCode.includes("color: #0000ff") ||
        lowerCode.includes("color:#0000ff");
    var hasArial = lowerCode.includes("font-family: arial") || lowerCode.includes("font-family:arial");

    var hasP = lowerCode.includes("p");
    var hasFontSize =
        lowerCode.includes("font-size: 16px") ||
        lowerCode.includes("font-size:16px");

    var hasDiv = lowerCode.includes("div");
    var hasMargin =
        lowerCode.includes("margin: 20px") ||
        lowerCode.includes("margin:20px");
    var hasPadding =
        lowerCode.includes("padding: 10px") ||
        lowerCode.includes("padding:10px");

    if (!hasBody) {
        errors.push("❌ Es fehlt eine CSS-Regel für body.");
    }

    if (!hasBgColor) {
        errors.push("❌ Die Hintergrundfarbe #d3d3d3 fehlt oder ist falsch.");
    }

    if (!hasH1) {
        errors.push("❌ Es fehlt eine CSS-Regel für h1.");
    }

    if (!hasH1Color) {
        errors.push("❌ Die Schriftfarbe der Überschrift (#0000ff) fehlt oder ist falsch.");
    }

    if (!hasArial) {
        errors.push("❌ Die Schriftart Arial für h1 fehlt.");
    }

    if (!hasP) {
        errors.push("❌ Es fehlt eine CSS-Regel für p.");
    }

    if (!hasFontSize) {
        errors.push("❌ Die Schriftgröße 16px für p fehlt oder ist falsch.");
    }

    if (!hasDiv) {
        errors.push("❌ Es fehlt eine CSS-Regel für div.");
    }

    if (!hasMargin) {
        errors.push("❌ margin: 20px fehlt beim div-Container.");
    }

    if (!hasPadding) {
        errors.push("❌ padding: 10px fehlt beim div-Container.");
    }

    if (errors.length === 0) {
        return {
            isCorrect: true,
            message: "Richtig! Die CSS-Regeln wurden korrekt ergänzt."
        };
    }

    return {
        isCorrect: false,
        message: errors.join("<br>")
    };
}

// -----------------------------
// Modul D
// -----------------------------

function checkModuleDFlexboxSolution(code) {
    var lowerCode = code.toLowerCase();
    var errors = [];

    var hasContainerClass = lowerCode.includes(".container");
    var hasDisplayFlex =
        lowerCode.includes("display: flex") ||
        lowerCode.includes("display:flex");
    var hasJustify =
        lowerCode.includes("justify-content: space-between") ||
        lowerCode.includes("justify-content:space-between");

    var hasB1 = lowerCode.includes("#b1");
    var hasBrown = lowerCode.includes("color: brown") || lowerCode.includes("color:brown");

    var hasB2 = lowerCode.includes("#b2");
    var hasGreen = lowerCode.includes("color: green") || lowerCode.includes("color:green");

    var hasB3 = lowerCode.includes("#b3");
    var hasBlue = lowerCode.includes("color: blue") || lowerCode.includes("color:blue");

    if (!hasContainerClass) {
        errors.push("❌ Es fehlt eine CSS-Regel für .container.");
    }

    if (!hasDisplayFlex) {
        errors.push("❌ display: flex fehlt beim Container.");
    }

    if (!hasJustify) {
        errors.push("❌ justify-content: space-between fehlt beim Container.");
    }

    if (!hasB1 || !hasBrown) {
        errors.push("❌ Für #b1 fehlt die braune Schriftfarbe.");
    }

    if (!hasB2 || !hasGreen) {
        errors.push("❌ Für #b2 fehlt die grüne Schriftfarbe.");
    }

    if (!hasB3 || !hasBlue) {
        errors.push("❌ Für #b3 fehlt die blaue Schriftfarbe.");
    }

    if (errors.length === 0) {
        return {
            isCorrect: true,
            message: "Richtig! Das Flexbox-Layout wurde korrekt umgesetzt."
        };
    }

    return {
        isCorrect: false,
        message: errors.join("<br>")
    };
}

// -----------------------------
// Modul E
// -----------------------------

function checkModuleEJsSolution(code) {
    var lowerCode = code.toLowerCase();
    var errors = [];

    var hasFunction = lowerCode.includes("function zeigetext()");
    var hasGetElement =
        lowerCode.includes('document.getelementbyid("ausgabe")') ||
        lowerCode.includes("document.getelementbyid('ausgabe')");
    var hasInnerHTML = lowerCode.includes(".innerhtml");
    var hasCorrectText =
        lowerCode.includes('innerhtml = "willkommen im logistikzentrum!"') ||
        lowerCode.includes("innerhtml='willkommen im logistikzentrum!'") ||
        lowerCode.includes('innerhtml="willkommen im logistikzentrum!"') ||
        lowerCode.includes("innerhtml = 'willkommen im logistikzentrum!'");

    if (!hasFunction) {
        errors.push("❌ Die Funktion zeigeText() fehlt oder wurde falsch benannt.");
    }

    if (!hasGetElement) {
        errors.push("❌ Das p-Element mit der ID ausgabe wird nicht korrekt angesprochen.");
    }

    if (!hasInnerHTML) {
        errors.push("❌ innerHTML wird nicht verwendet.");
    }

    if (!hasCorrectText) {
        errors.push("❌ Der Text „Willkommen im Logistikzentrum!“ fehlt oder ist falsch.");
    }

    if (errors.length === 0) {
        return {
            isCorrect: true,
            message: "Richtig! Die JavaScript-Funktion wurde korrekt umgesetzt."
        };
    }

    return {
        isCorrect: false,
        message: errors.join("<br>")
    };
}

// -----------------------------
// Modul F
// -----------------------------

function checkModuleFLogicSolution(code) {
    var lowerCode = code.toLowerCase();
    var errors = [];

    var hasFunction = lowerCode.includes("function pruefen()");
    var hasLetWert = lowerCode.includes("let wert");
    var hasReadValue =
        lowerCode.includes('document.getelementbyid("menge").value') ||
        lowerCode.includes("document.getelementbyid('menge').value");

    var hasIf = lowerCode.includes("if (") || lowerCode.includes("if(");
    var hasRangeCheck =
        lowerCode.includes("wert >= 1 && wert <= 100") ||
        lowerCode.includes("wert>=1&&wert<=100");

    var hasElse = lowerCode.includes("else");

    var hasOutputValid =
        lowerCode.includes('document.getelementbyid("ausgabe").innerhtml = "bestellung moeglich"') ||
        lowerCode.includes("document.getelementbyid('ausgabe').innerhtml = 'bestellung moeglich'") ||
        lowerCode.includes('document.getelementbyid("ausgabe").innerhtml="bestellung moeglich"') ||
        lowerCode.includes("document.getelementbyid('ausgabe').innerhtml='bestellung moeglich'");

    var hasOutputInvalid =
        lowerCode.includes('document.getelementbyid("ausgabe").innerhtml = "ungueltige menge"') ||
        lowerCode.includes("document.getelementbyid('ausgabe').innerhtml = 'ungueltige menge'") ||
        lowerCode.includes('document.getelementbyid("ausgabe").innerhtml="ungueltige menge"') ||
        lowerCode.includes("document.getelementbyid('ausgabe').innerhtml='ungueltige menge'");

    if (!hasFunction) {
        errors.push("❌ Die Funktion pruefen() fehlt.");
    }

    if (!hasLetWert) {
        errors.push("❌ Der Wert sollte in einer Variable mit let gespeichert werden.");
    }

    if (!hasReadValue) {
        errors.push("❌ Der Wert aus dem Eingabefeld menge wird nicht korrekt mit .value ausgelesen.");
    }

    if (!hasIf) {
        errors.push("❌ Es fehlt eine if-Bedingung.");
    }

    if (!hasRangeCheck) {
        errors.push("❌ Der Wertebereich 1 bis 100 wird nicht korrekt geprüft.");
    }

    if (!hasElse) {
        errors.push("❌ Es fehlt ein else-Block für ungültige Eingaben.");
    }

    if (!hasOutputValid) {
        errors.push("❌ Die Ausgabe „Bestellung moeglich“ fehlt oder ist falsch.");
    }

    if (!hasOutputInvalid) {
        errors.push("❌ Die Ausgabe „Ungueltige Menge“ fehlt oder ist falsch.");
    }

    if (errors.length === 0) {
        return {
            isCorrect: true,
            message: "Richtig! Die Eingabeprüfung wurde korrekt umgesetzt."
        };
    }

    return {
        isCorrect: false,
        message: errors.join("<br>")
    };
}