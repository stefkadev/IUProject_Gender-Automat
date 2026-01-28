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
    ["Bergarbeiter", "Bergarbeiter*in"],
    ["Chef-Ingenieur", "Chef-Ingenieur*in"],
    ["Auftraggeber", "Auftraggeber*in"],
    ["Zuschauer", "Zuschauer*in"], 
    ["Pfleger", "Pfleger*in"],     
    ["Besucher", "Besucher*in"],     
    ["Ober-Lurch", "Ober-Lurch*in"]  
]);

let originalStateMap = new Map(); // Speichert Originaltexte pro ID

function applyGendering(elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;

    let text = container.innerHTML;
    for (const [masculine, gendered] of GENDER_MAP.entries()) {
        const regex = new RegExp(`\\b${masculine}\\b`, 'gi');
        text = text.replace(regex, (match) => {
            if (match.charAt(0) === match.charAt(0).toUpperCase()) {
                return gendered.charAt(0).toUpperCase() + gendered.slice(1);
            }
            return gendered.toLowerCase();
        });
    }
    container.innerHTML = text;
}

document.addEventListener('DOMContentLoaded', () => {
    const guides = document.querySelectorAll('.guide-content');
    
    // 1. Originalzustände sichern
    guides.forEach(guide => {
        originalStateMap.set(guide.id, guide.innerHTML);
    });

    // 2. Navigation
    const navLinks = document.querySelectorAll('#local-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            guides.forEach(g => g.classList.remove('active'));
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
        });
    });

    // 3. Gendering Buttons
    document.getElementById('btn-neutral').addEventListener('click', () => {
        const activeGuide = document.querySelector('.guide-content.active');
        if (activeGuide) applyGendering(activeGuide.id);
    });

    document.getElementById('btn-maskulin').addEventListener('click', () => {
        const activeGuide = document.querySelector('.guide-content.active');
        if (activeGuide) {
            activeGuide.innerHTML = originalStateMap.get(activeGuide.id);
        }
    });

    // Initialanzeige
    if (guides.length > 0) guides[0].classList.add('active');
});