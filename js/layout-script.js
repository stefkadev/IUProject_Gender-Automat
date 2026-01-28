/**
 * @file layout-script.js
 * @description Steuerung der kulturellen Layout-Anpassung (LTR/RTL)
 */

/* 3.2. Implementierung des responsiven Layouts und der Navigation */
document.addEventListener('DOMContentLoaded', () => {
    // Abrufen des Buttons zur Layout-Umschaltung
    const toggleButton = document.getElementById('toggle-layout-btn');
    
    // Abrufen des Hauptcontainers, der gespiegelt werden soll
    const mainContainer = document.querySelector('.layout-wrapper');

    if (toggleButton && mainContainer) {
        toggleButton.addEventListener('click', (event) => {
            event.preventDefault(); // Verhindert Standardverhalten bei Buttons

            // Schaltet die Klasse für die kulturelle Layout-Spiegelung (RTL) um
            const isRTL = mainContainer.classList.toggle('rtl-layout');
            
            // Visuelle Rückmeldung in der Konsole zur Validierung im Testing (Kap. 5)
            console.log("Kulturelle Adaption aktiviert:", isRTL ? "Rechts-nach-Links (RTL)" : "Links-nach-Rechts (LTR)");
            
            // Optional: Button-Text dynamisch anpassen
            toggleButton.textContent = isRTL ? "Wechsel zu LTR (Standard)" : "Layout spiegeln (RTL)";
        });
    } else {
        // Fehlerbehandlung für die Entwicklerkonsole
        console.error("Layout-Elemente nicht gefunden. Prüfe die ID 'toggle-layout-btn' und die Klasse '.layout-wrapper' im HTML.");
    }
});