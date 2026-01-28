/**
 * @file gendering-script.js
 * @client LUR-CH Fachverlag
 * @description Kernlogik zur automatisierten Textanpassung mittels Gender-Stern (*)
 */

// 4.1 Definition der Gendering-Regeln (Wörterbuch)
// Die Map speichert die Regeln: Schlüssel (Maskulinum) -> Wert (Gender-Stern)
const GENDER_MAP = new Map([
    ["Programmierer", "Programmierer*in"],
    ["Benutzer", "Benutzer*in"],
    ["Kunde", "Kund*in"],
    ["Entwickler", "Entwickler*in"],
    ["Teilnehmer", "Teilnehmer*in"],
    ["Mitarbeiter", "Mitarbeiter*in"],
    ["Leser", "Leser*in"],
    ["Administrator", "Administrator*in"],
    ["Techniker", "Techniker*in"],
    ["Ingenieur", "Ingenieur*in"],
    ["Verantwortlicher", "Verantwortliche*r"],
    // Ergänzungen aus deinem Screenshot:
    ["Bergarbeiter", "Bergarbeiter*in"],
    ["Chef-Ingenieur", "Chef-Ingenieur*in"],
    ["Auftraggeber", "Auftraggeber*in"],
    ["Zuschauer", "Zuschauer*in"]
]);

// 4.2 Algorithmus und Implementierung des Scripts
function applyGendering() {
    const contentArea = document.getElementById('content-area'); 
    
    if (!contentArea) {
        console.error("Content-Bereich nicht gefunden.");
        return;
    }
    
    let rawText = contentArea.innerHTML; 

    // 🛡️ SICHERHEITSSKRIPT: Entfernen von <script>-Tags (XSS-Schutz)
    const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gim;
    rawText = rawText.replace(scriptRegex, '');

    // Iteration über alle Regeln im Wörterbuch
    for (const [masculine, gendered] of GENDER_MAP.entries()) {
        // \b sorgt dafür, dass nur ganze Wörter ersetzt werden (RegEx)
        const regex = new RegExp(`\\b${masculine}\\b`, 'gi'); 
        
        rawText = rawText.replace(regex, (match) => {
            // Beibehaltung der Groß-/Kleinschreibung (z.B. am Satzanfang)
            if (match.charAt(0) === match.charAt(0).toUpperCase()) {
                return gendered.charAt(0).toUpperCase() + gendered.slice(1);
            }
            return gendered.toLowerCase();
        });
    }

    // 4.3 Aktualisierung des Frontends
    contentArea.innerHTML = rawText; 
    console.log("Gendering mit Gender-Stern abgeschlossen.");
}

// Event Listener Integration
document.addEventListener('DOMContentLoaded', () => {
    const genderingButton = document.getElementById('toggle-button'); 
    
    if (genderingButton) {
        genderingButton.addEventListener('click', (e) => {
            e.preventDefault(); 
            applyGendering(); 
            genderingButton.textContent = "Gendering angewendet";
            genderingButton.disabled = true;
        });
    }
});