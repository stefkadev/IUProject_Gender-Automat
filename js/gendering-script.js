document.addEventListener('DOMContentLoaded', () => {
    const btnNeutral = document.getElementById('btn-neutral');
    const btnMaskulin = document.getElementById('btn-maskulin');

    const genderMap = {
        "Bergarbeiter": "Bergarbeitende",
        "Chef-Ingenieur": "Leitung der Ingenieurstechnik",
        "Mitarbeiter": "Mitarbeitende",
        "Pfleger": "Pflegefachkräfte",
        "Techniker": "Technik-Team",
        "Sicherheits-Beauftragte": "Sicherheits-Verantwortliche"
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

    btnNeutral.addEventListener('click', () => {
        // Sucht nur im aktuell SICHTBAREN Artikel
        const activeArticle = document.querySelector('.guide-article[style*="display: block"]');
        if (activeArticle) {
            let html = activeArticle.innerHTML;
            for (const [maskulin, neutral] of Object.entries(genderMap)) {
                const regex = new RegExp(maskulin, 'g');
                html = html.replace(regex, neutral);
            }
            activeArticle.innerHTML = html;
            updateButtonStyles('neutral');
        }
    });

    btnMaskulin.addEventListener('click', () => {
        // Einfachste Lösung für "Original": Artikel-Inhalt zurücksetzen oder Seite neu laden
        location.reload();
    });

    updateButtonStyles('maskulin');
});