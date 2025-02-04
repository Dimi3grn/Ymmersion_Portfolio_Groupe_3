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
document.addEventListener('click', () => {
    // Crée un élément img pour l'animation
    const confettiImage = document.createElement('img');
    confettiImage.src = 'assets/img/confettis-fun.gif';  // Chemin relatif vers l'image animée
    confettiImage.id = 'confettiImage';  // Ajoute un ID pour pouvoir le styliser

    // Ajoute l'image au body de la page
    document.body.appendChild(confettiImage);

    // Affiche l'image (elle est cachée par défaut avec display: none)
    confettiImage.style.display = 'block';

    // Facultatif : Supprimer l'image après un certain temps (ex. 5 secondes)
    setTimeout(() => {
        confettiImage.remove();
    }, 1000);  // L'image disparaît après 5 secondes
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

