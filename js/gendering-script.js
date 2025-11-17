// 4.1 Definition der Gendering-Regeln (Wörterbuch)
// Die Map speichert die Regeln: Schlüssel (generisches Maskulinum) -> Wert (Gender-Doppelpunkt)
const GENDER_MAP = new Map([
    // Regeln, die auf die fiktiven Texte angewendet werden
    ["Programmierer", "Programmierer:in"],
    ["Benutzer", "Benutzer:in"],
    ["Kunde", "Kunde:in"],
    ["Entwickler", "Entwickler:in"],
    ["Teilnehmer", "Teilnehmer:in"],
    ["Mitarbeiter", "Mitarbeiter:in"],
    ["Leser", "Leser:in"],
    ["Administrator", "Administrator:in"],
    ["Techniker", "Techniker:in"],
    ["Ingenieur", "Ingenieur:in"],
    ["Verantwortlicher", "Verantwortliche:r"]
]);

// 4.2 Algorithmus und Implementierung des Scripts
// Hauptfunktion zur Suche und Ersetzung
function applyGendering() {
    // 💡 VERWENDET STRUKTUR AUS KAPITEL 3.2: Ziel-Element #content-area wird abgerufen
    const contentArea = document.getElementById('content-area'); 
    
    if (!contentArea) {
        console.error("Content-Bereich nicht gefunden.");
        return;
    }
    
    // Wir holen den gesamten Textinhalt des Ziel-Elements (inkl. HTML-Tags)
    let rawText = contentArea.innerHTML; 

    // Iteration über alle Regeln im Wörterbuch
    for (const [masculine, gendered] of GENDER_MAP.entries()) {
        
        // 4.2 Verwendung von Regulären Ausdrücken (RegEx)
        const regex = new RegExp(`\\b${masculine}\\b`, 'gi'); 
        
        // Ersetze alle Vorkommen im Text
        rawText = rawText.replace(regex, (match) => {
            
            // Logik zur Beibehaltung der Groß-/Kleinschreibung (z.B. bei Satzanfang)
            if (match.charAt(0) === match.charAt(0).toUpperCase() && match.length > 0) {
                return gendered.charAt(0).toUpperCase() + gendered.slice(1);
            }
            return gendered;
        });
    }

    // 4.3 Aktualisierung des Textes im Frontend
    contentArea.innerHTML = rawText; 
    console.log("Gendering-Prozess abgeschlossen und Frontend aktualisiert.");
}

// 4.3 Integration des Scripts: Event Listener an den Button binden
document.addEventListener('DOMContentLoaded', () => {
    // 💡 VERWENDET ELEMENT AUS KAPITEL 3.2: Button #toggle-button wird abgerufen
    const genderingButton = document.getElementById('toggle-button'); 
    
    if (genderingButton) {
        genderingButton.addEventListener('click', (event) => {
            event.preventDefault(); 
            
            // 💡 ÜBERSCHREIBT/ERSETZT KAPITEL 3.2 FUNKTIONALITÄT: 
            // Der Button löst jetzt die Gendering-Funktion aus (statt LTR/RTL-Toggle).
            applyGendering(); 
            
            // Nach der Ausführung: Button deaktivieren und Text aktualisieren
            genderingButton.textContent = "Gendering angewendet";
            genderingButton.disabled = true;
        });
    }
});