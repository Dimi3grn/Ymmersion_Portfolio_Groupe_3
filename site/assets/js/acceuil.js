document.addEventListener("DOMContentLoaded", function () {
    let squares = document.querySelectorAll(".boom");

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let square = entry.target;
                
                // Vérifie si l'explosion a déjà eu lieu
                if (!square.dataset.exploded) {
                    let explosion = document.createElement("img");
                    explosion.src = "./assets/img/explosion.gif"; // Ton GIF ici
                    explosion.classList.add("explosion");

                    square.appendChild(explosion);

                    // Affiche le GIF
                    setTimeout(() => {
                        explosion.style.opacity = "1";
                    }, 400);

                    // Cache après 1.5s
                    setTimeout(() => {
                        explosion.style.opacity = "0";
                    }, 1200);

                    // Marque la div comme "explosée"
                    square.dataset.exploded = "true";
                }
            }
        });
    }, { threshold: 0.5 }); // Déclenche à 50% de visibilité

    squares.forEach(square => observer.observe(square));
});



document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
    const music = document.getElementById("bgMusic");
    if (music.paused) {
        music.play();
    }
}, 1000)
})