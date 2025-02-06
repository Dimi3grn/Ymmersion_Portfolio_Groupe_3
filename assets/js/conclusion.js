// Sélectionne l'image Nyan Cat par son ID
const nyanCat = document.getElementById('nyanCat');

// Écoute les mouvements de la souris pour déplacer Nyan Cat
document.addEventListener('mousemove', (event) => {
    const mouseX = event.pageX; // Utiliser pageX pour éviter les problèmes de défilement
    const mouseY = event.pageY;

    nyanCat.style.left = `${mouseX - nyanCat.width / 2}px`; 
    nyanCat.style.top = `${mouseY - nyanCat.height / 2}px`; 
});

// Détecte le clic pour afficher l'effet confetti
document.addEventListener('click', function (e) {
    const confettiImage = document.getElementById('confettiImage');
    
    const x = e.pageX;
    const y = e.pageY;

    confettiImage.style.left = `${x - confettiImage.width / 2}px`;  
    confettiImage.style.top = `${y - confettiImage.height / 2}px`;  
    confettiImage.style.display = 'block';

    setTimeout(() => {
        confettiImage.style.display = 'none';
    }, 2000);
});
