document.addEventListener('DOMContentLoaded', () => {
    const btnNeutral = document.getElementById('btn-neutral');
    const btnMaskulin = document.getElementById('btn-maskulin');

    const genderMap = {
        "Bergarbeiter": "Bergarbeiter*innen",
        "Chef-Ingenieur": "Chef-Ingenieur*innen",
        "Auftraggeber": "Auftraggeber*innen",
        "Mitarbeiter": "Mitarbeiter*innen",
        "Pfleger": "Pfleger*innen",
        "Techniker": "Techniker*innen",
        "Administrator": "Administrator*innen",
        "Herausgeber": "Herausgeber*innen",
        "Archivar": "Archivar*innen",
        "Teilnehmer": "Teilnehmer*innen",
        "Experten": "Expert*innen",
        "Zuschauer": "Zuschauer*innen",
        "Leser": "Leser*innen",
        "Besucher": "Besucher*innen",
        "Ober-Lurch": "Ober-Lurch*in"
    };

    /**
     * XSS-Schutz 
     */
    function transformText(toNeutral) {
        const activeArticle = document.querySelector('.guide-article[style*="display: block"]');
        if (!activeArticle) return;

        const boldTerms = activeArticle.querySelectorAll('strong');

        boldTerms.forEach(term => {
            let currentText = term.textContent; 
            
            for (const [maskulin, neutral] of Object.entries(genderMap)) {
                if (toNeutral && currentText === maskulin) {
                    term.textContent = neutral; 
                } else if (!toNeutral && currentText === neutral) {
                    term.textContent = maskulin;
                }
            }
        });
    }

    // Event-Listener für die Buttons
    btnNeutral.addEventListener('click', () => {
        transformText(true);
        updateButtonStyles('neutral');
    });

    btnMaskulin.addEventListener('click', () => {
        transformText(false);
        updateButtonStyles('maskulin');
    });

    // Hilfsfunktion für Optik
    function updateButtonStyles(active) {
        if (active === 'neutral') {
            btnNeutral.style.backgroundColor = '#003366';
            btnNeutral.style.color = 'white';
            btnMaskulin.style.backgroundColor = '#e0e0e0';
            btnMaskulin.style.color = '#333';
        } else {
            btnMaskulin.style.backgroundColor = '#003366';
            btnMaskulin.style.color = 'white';
            btnNeutral.style.backgroundColor = '#e0e0e0';
            btnNeutral.style.color = '#333';
        }
    }

    // Initialer Status
    updateButtonStyles('maskulin');
});