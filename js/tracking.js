const SUPABASE_URL = "https://hbusfmffwxomklstinpu.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_U-JjUYS5OCq1bhI1se6zUQ_1sZiYj8l";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function getParticipantId() {
    let participantId = localStorage.getItem("participant_id");

    if (!participantId) {
        participantId = crypto.randomUUID();
        localStorage.setItem("participant_id", participantId);
    }

    return participantId;
}

let currentTaskStartTime = null;

function startTaskTimer() {
    currentTaskStartTime = Date.now();
}

function getTaskDurationMs() {
    if (!currentTaskStartTime) {
        return 0;
    }
    return Date.now() - currentTaskStartTime;
}

async function trackEvent(eventData) {
    const endTime = Date.now();

    const payload = {
        participant_id: getParticipantId(),
        event_type: eventData.event_type,
        page: eventData.page,
        question_id: eventData.question_id,
        is_correct: eventData.is_correct,
        attempts: eventData.attempts,
        duration_ms: eventData.duration_ms,

        timestamp_start: new Date(currentTaskStartTime).toISOString(),
        timestamp_end: new Date(endTime).toISOString()
    };

    const { data, error } = await supabaseClient
        .from("tracking_events")
        .insert([payload]);

    console.log("TRACK DATA:", data);
    console.log("TRACK ERROR:", error);

    if (error) {
        console.error("Supabase Tracking Fehler:", error.message);
    }
}