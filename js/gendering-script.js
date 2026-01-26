/**
 * @file gendering-script.js
 * @client LUR-CH Fachverlag
 * @description Kernlogik zur automatisierten Textanpassung (jQuery-basiert)
 */

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
    // Abrufen des Ziel-Elements für die Textersetzung
    const contentArea = document.getElementById('content-area'); 
    
    if (!contentArea) {
        console.error("Content-Bereich nicht gefunden.");
        return;
    }
    
    let rawText = contentArea.innerHTML; 

    // 🛡️ SICHERHEITSSKRIPT (KAPITEL 5): Entfernen aller <script>-Tags, um Code-Injektion (XSS) zu verhindern.
    const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gim;
    rawText = rawText.replace(scriptRegex, '');
    console.log("Sicherheitscheck: Potentielle Skript-Tags wurden entfernt.");

    // Iteration über alle Regeln im Wörterbuch (4.2 Verwendung von Regulären Ausdrücken)
    for (const [masculine, gendered] of GENDER_MAP.entries()) {
        
        const regex = new RegExp(`\\b${masculine}\\b`, 'gi'); 
        
        // Ersetze alle Vorkommen im Text
        rawText = rawText.replace(regex, (match) => {
            
            // Logik zur Beibehaltung der Groß-/Kleinschreibung
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
    // Button #toggle-button (aus Kap. 3.2) wird abgerufen und für die Gendering-Funktion belegt.
    const genderingButton = document.getElementById('toggle-button'); 
    
    if (genderingButton) {
        genderingButton.addEventListener('click', (event) => {
            event.preventDefault(); 
            
            applyGendering(); 
            
            // Nach der Ausführung: Button deaktivieren und Text aktualisieren
            genderingButton.textContent = "Gendering angewendet";
            genderingButton.disabled = true;
        });
    }
});