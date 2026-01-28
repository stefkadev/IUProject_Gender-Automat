document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-layout-btn');
    const mainContainer = document.querySelector('.layout-wrapper');

    if (toggleButton && mainContainer) {
        toggleButton.addEventListener('click', (e) => {
            e.preventDefault();
            const isRTL = mainContainer.classList.toggle('rtl-layout');
            toggleButton.textContent = isRTL ? "Schriftkultur rechts (RTL)" : "Schriftkultur links (LTL)";
            console.log("Layout-Modus geändert (QUELLE)");
        });
    }
});