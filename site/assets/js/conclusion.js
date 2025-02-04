// Sélectionne l'image par son ID
const nyanCat = document.getElementById('nyanCat');

// Écoute les mouvements de la souris
document.addEventListener('mousemove', (event) => {
    // Récupère les coordonnées X et Y de la souris
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Positionne l'image à ces coordonnées
    nyanCat.style.left = `${mouseX - nyanCat.width / 2}px`;  // Ajuste la position X
    nyanCat.style.top = `${mouseY - nyanCat.height / 2}px`;  // Ajuste la position Y
});
