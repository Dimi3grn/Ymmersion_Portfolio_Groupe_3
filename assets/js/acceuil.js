document.addEventListener("DOMContentLoaded", function () {
    let squares = document.querySelectorAll(".boom");
    let TotalExplo = 0;
    let SoundActive = false;
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let square = entry.target;

                // Vérifie si l'explosion a déjà eu lieu
                if (!square.dataset.exploded) {

                    if (TotalExplo >= 3) {
                        return;
                    }

                    TotalExplo++;
                    setTimeout(() => { TotalExplo--; }, 1000);

                    let explosion = document.createElement("img");
                    explosion.src = "/static/img/explosion.gif"; // Ton GIF ici
                    explosion.classList.add("explosion");

                    square.appendChild(explosion);

                    let audio = new Audio("/static/music/boom.mp3");
                    audio.volume = 1;
                    if (audio.paused && !SoundActive) {
                        SoundActive = true;
                        audio.play();
                        setTimeout(() => { SoundActive = false; }, 2000);
                    }
                    // Affiche le GIF
                    setTimeout(() => {
                        explosion.style.opacity = "1";
                    }, 400);

                    // Cache après 1.5s
                    setTimeout(() => {
                        explosion.style.opacity = "0";
                    }, 1200);

                    // Marque la div comme "explosée"
                    //square.dataset.exploded = "true";
                }
            }
        });
    }, { threshold: 1 }); // Déclenche à 50% de visibilité

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

document.addEventListener("scroll", () => {
    const music = document.getElementById("bgMusic");
    if (music.paused) {
        music.play();
    }
})

function moveUnicorns() {
    let unicorns = document.querySelectorAll(".unicorn");

    let maxX = document.documentElement.scrollWidth;
    let maxY = document.documentElement.scrollHeight;

    unicorns.forEach(unicorn => {
        let randomX = Math.random() * (maxX - unicorn.clientWidth);
        let randomY = Math.random() * (maxY - unicorn.clientHeight);

        unicorn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
}

setInterval(moveUnicorns, 700);

let hasFallen = false;
let lastScrollY = window.scrollY; // Stocke la position précédente du scroll

window.addEventListener("scroll", () => {
    let currentScrollY = window.scrollY;
    let atBottom = window.innerHeight + currentScrollY >= document.body.offsetHeight;
    let scrollingUp = currentScrollY < lastScrollY; // Vrai si on remonte

    let images = document.querySelectorAll(".boom");

    if (atBottom && !hasFallen) {
        images.forEach(img => {
            img.classList.add("fall");
            const audio = new Audio("/static/music/death.mp3");
            if (audio.paused) {
                audio.play();
            }

            setTimeout(() => {
                img.style.display = "none";
            }, 900);
        });

        hasFallen = true;
    } 
    else if (scrollingUp && hasFallen) {
        images.forEach((img, index) => {
            setTimeout(() => {
                img.style.display = ""; 
                img.classList.remove("fall");
                img.classList.add("rise"); // Ajoute l’animation de remontée

                const audio = new Audio("/static/music/life.mp3");
                if (audio.paused) {
                    audio.play();
                }

                setTimeout(() => {
                    img.classList.remove("rise"); // Enlève la classe après l'animation
                }, 900);
            }, index * 200); // Décalage entre chaque image pour un effet progressif
        });

        hasFallen = false;
    }

    lastScrollY = currentScrollY; // Mise à jour de la position précédente
});

let isAtBottom = false;

window.addEventListener("scroll", () => {
    if (isAtBottom) return;

    const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (scrolledToBottom) {
        isAtBottom = true; // Prevent multiple triggers
        document.body.style.overflow = "hidden"; // Disable scrolling

        setTimeout(() => {
            document.body.style.overflow = ""; // Re-enable scrolling
            isAtBottom = false;
        }, 1200); // 1.5 seconds
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const conclusion = document.getElementById("conclusion");
    conclusion.addEventListener("click", () => {
        window.location.href = "/conclusion";
    });
});