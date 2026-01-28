/**
 * @file gendering-script.js
 * @description Steuert die interaktive Textumwandlung und das Button-Feedback
 */

document.addEventListener('DOMContentLoaded', () => {
    const btnNeutral = document.getElementById('btn-neutral');
    const btnMaskulin = document.getElementById('btn-maskulin');
    const contentArea = document.getElementById('content-area');

    // Wörterbuch für die Ersetzungen (Erweiterbar)
    const genderMap = {
        "Bergarbeiter": "Bergarbeitende",
        "Chef-Ingenieur": "Leitung der Ingenieurstechnik",
        "Auftraggeber": "Auftraggebende Person",
        "Zuschauer": "Publikum",
        "Leser": "Leserschaft",
        "Mitarbeiter": "Mitarbeitende",
        "Pfleger": "Pflegefachkräfte",
        "Ober-Lurch": "Lurch-Aufsicht",
        "Besucher": "Gäste",
        "Techniker": "Technik-Team",
        "Sicherheits-Beauftragte": "Sicherheits-Verantwortliche",
        "Administrator": "System-Administration",
        "Herausgeber": "Herausgebende",
        "Archivar": "Archiv-Fachkraft"
    };

    /**
     * Funktion zum Umschalten der Button-Farben (Visuelles Feedback)
     * @param {string} active - Welcher Modus aktiv ist ('neutral' oder 'maskulin')
     */
    function updateButtonStyles(active) {
        if (active === 'neutral') {
            btnNeutral.style.backgroundColor = '#003366'; // Dunkelblau (Aktiv)
            btnNeutral.style.color = 'white';
            btnMaskulin.style.backgroundColor = '#e0e0e0'; // Hellgrau (Inaktiv)
            btnMaskulin.style.color = '#333';
        } else {
            btnMaskulin.style.backgroundColor = '#003366';
            btnMaskulin.style.color = 'white';
            btnNeutral.style.backgroundColor = '#e0e0e0';
            btnNeutral.style.color = '#333';
        }
    }

    // Event-Listener für "Genderneutral"
    btnNeutral.addEventListener('click', () => {
        let html = contentArea.innerHTML;
        for (const [maskulin, neutral] of Object.entries(genderMap)) {
            const regex = new RegExp(maskulin, 'g');
            html = html.replace(regex, neutral);
        }
        contentArea.innerHTML = html;
        updateButtonStyles('neutral');
        console.log("Modus: Genderneutral aktiviert (QUELLE)");
    });

    // Event-Listener für "Maskulin (Original)"
    btnMaskulin.addEventListener('click', () => {
        // Seite neu laden, um den Originalzustand wiederherzustellen
        location.reload(); 
        console.log("Modus: Maskulin (Original) wiederhergestellt (QUELLE)");
    });
    
    // Initialer Status (beim Laden der Seite)
    updateButtonStyles('maskulin');
});