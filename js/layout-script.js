document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-layout-btn');
    const mainContainer = document.querySelector('.layout-wrapper');

    if (toggleButton && mainContainer) {
        toggleButton.addEventListener('click', (e) => {
            e.preventDefault();
            const isRTL = mainContainer.classList.toggle('rtl-layout');
            toggleButton.textContent = isRTL ? "Schriftkultur links (LTR)" : "Schriftkultur rechts (RTL)";
            console.log("Layout-Modus geändert");
        });
    }
});