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
// Détecter le clic sur la page
document.addEventListener('click', function(e) {
    var confettiImage = document.getElementById('confettiImage');

    // Positionner l'image là où le clic a eu lieu
    var x = e.pageX;
    var y = e.pageY;

    // Définir la position de l'image animée
    confettiImage.style.left = (x - confettiImage.width / 2) + 'px';  // Centrer l'image sur le clic
    confettiImage.style.top = (y - confettiImage.height / 2) + 'px';

    // Afficher l'image
    confettiImage.style.display = 'block';

    // Masquer l'image après un délai (par exemple 2 secondes)
    setTimeout(function() {
        confettiImage.style.display = 'none';
    }, 2000);  // L'image disparaît après 2 secondes
});
document.addEventListener('DOMContentLoaded', () => {
    const movingImage = document.getElementById('movingImage');

    function moveRandomly() {
        const maxX = window.innerWidth - movingImage.clientWidth;
        const maxY = window.innerHeight - movingImage.clientHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        movingImage.style.left = `${randomX}px`;
        movingImage.style.top = `${randomY}px`;
    }

    // Déplace l'image toutes les 2 secondes
    setInterval(moveRandomly, 2000);
});

