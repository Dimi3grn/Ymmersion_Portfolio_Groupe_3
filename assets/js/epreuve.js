document.addEventListener("DOMContentLoaded", () => {
    const codeCard = document.getElementById("codecard");

    // Ajoute un écouteur d'événement pour détecter les clics
    codeCard.addEventListener("click", () => {
        // Vérifie si le z-index est égal à 1
        const zIndex = window.getComputedStyle(codeCard).zIndex;

        if (zIndex === "1") {
            // Alterne la classe "expanded" pour agrandir ou réduire la fenêtre de code
            codeCard.classList.toggle("expanded");
        }
    });
});