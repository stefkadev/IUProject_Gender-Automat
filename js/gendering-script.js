// 3.2 Platzhalter-Funktion für die anpassbare Navigation
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    const body = document.body;

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            // Fügt die Klasse hinzu, falls sie fehlt, und entfernt sie, falls sie vorhanden ist (Toggle)
            body.classList.toggle('rtl-layout'); 

            // Platzhalter für zukünftige Speicherung der Präferenz (z.B. in localStorage)
            console.log("Navigationslayout umgeschaltet.");
        });
    }
});