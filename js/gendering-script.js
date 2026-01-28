document.addEventListener('DOMContentLoaded', () => {
    const btnNeutral = document.getElementById('btn-neutral');
    const btnMaskulin = document.getElementById('btn-maskulin');

    // Wörterbuch für beide Richtungen
    const genderMap = {
        "Bergarbeiter": "Bergarbeitende",
        "Chef-Ingenieur": "Leitung der Ingenieurstechnik",
        "Auftraggeber": "Auftraggebende Person",
        "Mitarbeiter": "Mitarbeitende",
        "Pfleger": "Pflegefachkräfte",
        "Techniker": "Technik-Team",
        "Sicherheits-Beauftragte": "Sicherheits-Verantwortliche",
        "Administrator": "System-Administration"
    };

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

    // Funktion zum Ersetzen (funktioniert für beide Richtungen)
    function transformText(toNeutral) {
        const activeArticle = document.querySelector('.guide-article[style*="display: block"]');
        if (!activeArticle) return;

        let html = activeArticle.innerHTML;
        for (const [maskulin, neutral] of Object.entries(genderMap)) {
            if (toNeutral) {
                const regex = new RegExp(maskulin, 'g');
                html = html.replace(regex, neutral);
            } else {
                const regex = new RegExp(neutral, 'g');
                html = html.replace(regex, maskulin);
            }
        }
        activeArticle.innerHTML = html;
    }

    btnNeutral.addEventListener('click', () => {
        transformText(true);
        updateButtonStyles('neutral');
    });

    btnMaskulin.addEventListener('click', () => {
        transformText(false);
        updateButtonStyles('maskulin');
    });

    updateButtonStyles('maskulin');
});