function buildAdaptivePath() {
    var htmlLevel = localStorage.getItem("pretest_html_level");
    var cssLevel = localStorage.getItem("pretest_css_level");
    var jsLevel = localStorage.getItem("pretest_js_level");

    var path = [];

    if (htmlLevel === "advanced") {
        path.push("modul-b.html");
    } else {
        path.push("modul-a.html");
    }

    if (cssLevel === "advanced") {
        path.push("modul-d.html");
    } else {
        path.push("modul-c.html");
    }

    if (jsLevel === "advanced") {
        path.push("modul-f.html");
    } else {
        path.push("modul-e.html");
    }

    localStorage.setItem("adaptive_path", JSON.stringify(path));
    localStorage.setItem("adaptive_current_index", "0");

    window.location.href = path[0];
}

buildAdaptivePath();