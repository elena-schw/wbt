// Debug-Ausgabe → zeigt, ob die Datei korrekt geladen wurde
console.log("tracking.js wurde geladen");

// Supabase-Verbindungsdaten
// URL = dein Backend
// ANON_KEY = öffentlicher API-Key für Client-Zugriff
const SUPABASE_URL = "https://hbusfmffwxomklstinpu.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_U-JjUYS5OCq1bhI1se6zUQ_1sZiYj8l";

// Supabase-Client initialisieren → zentrale Schnittstelle zur Datenbank
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Funktion zur eindeutigen Identifikation eines Teilnehmers
function getParticipantId() {

    // Prüfen, ob bereits eine ID im Browser gespeichert ist
    let participantId = localStorage.getItem("participant_id");

    // Falls nicht → neue ID generieren
    if (!participantId) {
        participantId = crypto.randomUUID(); // zufällige eindeutige ID
        localStorage.setItem("participant_id", participantId); // im Browser speichern
    }

    // ID zurückgeben
    return participantId;
}

// Variable zur Speicherung des Startzeitpunkts einer Aufgabe
let currentTaskStartTime = null;

// Startet den Timer für eine Aufgabe
function startTaskTimer() {
    currentTaskStartTime = Date.now(); // aktueller Zeitpunkt in Millisekunden
}

// Berechnet die Bearbeitungsdauer
function getTaskDurationMs() {

    // Falls kein Startzeitpunkt gesetzt wurde → 0 zurückgeben
    if (!currentTaskStartTime) {
        return 0;
    }

    // Differenz zwischen jetzt und Startzeitpunkt
    return Date.now() - currentTaskStartTime;
}

// Hauptfunktion zum Speichern eines Events in Supabase
async function trackEvent(eventData) {

    // Zeitpunkt des Events (Ende der Aufgabe)
    const endTime = Date.now();

    // Datenobjekt, das in die Datenbank geschrieben wird
    const payload = {

        // Teilnehmer-ID (persistent im Browser)
        participant_id: getParticipantId(),

        // Art des Events (z. B. quiz_answer, code_attempt)
        event_type: eventData.event_type,

        // Seite/Modul (z. B. modul_a)
        page: eventData.page,

        // Frage oder Aufgabe (z. B. modul_a_q1)
        question_id: eventData.question_id,

        // Ergebnis (richtig/falsch)
        is_correct: eventData.is_correct,

        // Anzahl der Versuche
        attempts: eventData.attempts,

        // Bearbeitungsdauer in Millisekunden
        duration_ms: eventData.duration_ms,

        // Startzeitpunkt (ISO-Format für Analyse)
        timestamp_start: new Date(currentTaskStartTime).toISOString(),

        // Endzeitpunkt
        timestamp_end: new Date(endTime).toISOString()
    };

    // Daten in Supabase-Tabelle "tracking_events" einfügen
    const { data, error } = await supabaseClient
        .from("tracking_events")
        .insert([payload]);

    // Debug-Ausgabe → zeigt erfolgreiche Speicherung
    console.log("TRACK DATA:", data);

    // Debug-Ausgabe → zeigt Fehler
    console.log("TRACK ERROR:", error);

    // Fehlerbehandlung
    if (error) {
        console.error("Supabase Tracking Fehler:", error.message);
    }
}