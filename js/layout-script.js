/**
 * @file layout-script.js
 * @description Steuerung der kulturellen Layout-Anpassung (LTR/RTL)
 */

//3.2. Implementierung des responsiven Layouts und der Navigation 
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-layout-btn');
    const mainContainer = document.querySelector('.layout-wrapper');

    if (toggleButton && mainContainer) {
        toggleButton.addEventListener('click', () => {
            // Schaltet die Klasse für die kulturelle Layout-Spiegelung um
            const isRTL = mainContainer.classList.toggle('rtl-layout');
            
            // Feedback für die Konsole
            console.log("Layout-Modus:", isRTL ? "Rechts-nach-Links (RTL)" : "Links-nach-Rechts (LTR)");
        });
    } else {
        console.warn("Layout-Elemente nicht gefunden. Prüfe die IDs 'toggle-layout-btn' und '.layout-wrapper'.");
    }
});