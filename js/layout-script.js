$(document).ready(function() {
    // Selektoren mit dem jQuery-Dollarzeichen
    const $toggleButton = $('#toggle-layout-btn');
    const $mainContainer = $('.layout-wrapper');

    // Prüfen, ob die Elemente auf der aktuellen Seite existieren
    if ($toggleButton.length && $mainContainer.length) {
        $toggleButton.on('click', function(e) {
            e.preventDefault();
            
            // Die Klasse 'rtl-layout' umschalten
            $mainContainer.toggleClass('rtl-layout');
            
            // Prüfen, welche Klasse jetzt aktiv ist, um den Button-Text zu ändern
            const isRTL = $mainContainer.hasClass('rtl-layout');
            const newText = isRTL ? "Schriftkultur links (LTR)" : "Schriftkultur rechts (RTL)";
            
            $toggleButton.text(newText);
            console.log("Layout via jQuery angepasst.");
        });
    }
});