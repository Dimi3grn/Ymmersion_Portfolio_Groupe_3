document.addEventListener('DOMContentLoaded', function() {
    const epreuves = [
        document.getElementById('epreuve1'),
        document.getElementById('epreuve2'),
        document.getElementById('epreuve3'),
        document.getElementById('epreuve4'),
        document.getElementById('epreuve5'),
        document.getElementById('epreuve6')
    ];

    epreuves.forEach(epreuve => {
        if (epreuve) {
            epreuve.addEventListener('click', function() {
                const id = this.id.replace('epreuve', ''); 
                window.location.href = `epreuve?id=${id}`;
            });
        }
    });
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