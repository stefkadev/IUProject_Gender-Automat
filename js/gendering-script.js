$(document).ready(function() {
    // Selektoren via jQuery ($)
    const $btnNeutral = $('#btn-neutral');
    const $btnMaskulin = $('#btn-maskulin');

    
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
     * Kernfunktion mit XSS-Schutz via jQuery .text()
     */
    function transformText(toNeutral) {
        // Findet den aktuell sichtbaren Artikel
        const $activeArticle = $('.guide-article:visible');
        if ($activeArticle.length === 0) return;

        // Gezielte Suche nach <strong> Tags innerhalb des Artikels
        $activeArticle.find('strong').each(function() {
            let $term = $(this);
            let currentText = $term.text();

            for (const [maskulin, neutral] of Object.entries(genderMap)) {
                if (toNeutral && currentText === maskulin) {
                    $term.text(neutral); 
                } else if (!toNeutral && currentText === neutral) {
                    $term.text(maskulin);
                }
            }
        });
    }

    // Event-Listener in jQuery-Syntax
    $btnNeutral.on('click', function() {
        transformText(true);
        updateButtonStyles('neutral');
    });

    $btnMaskulin.on('click', function() {
        transformText(false);
        updateButtonStyles('maskulin');
    });

    /**
     * Hilfsfunktion für Optik via jQuery .css()
     */
    function updateButtonStyles(active) {
        if (active === 'neutral') {
            $btnNeutral.css({ 'background-color': '#003366', 'color': 'white' });
            $btnMaskulin.css({ 'background-color': '#e0e0e0', 'color': '#333' });
        } else {
            $btnMaskulin.css({ 'background-color': '#003366', 'color': 'white' });
            $btnNeutral.css({ 'background-color': '#e0e0e0', 'color': '#333' });
        }
    }

    // Initialer Status
    updateButtonStyles('maskulin');
});