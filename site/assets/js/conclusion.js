const nyanCat = document.getElementById('nyanCat');

if (nyanCat) {
    nyanCat.style.position = 'absolute';
    nyanCat.style.transition = 'transform 0.1s ease-out';

    document.addEventListener('mousemove', (event) => {
        const mouseX = event.pageX;
        const mouseY = event.pageY;

        nyanCat.style.transform = `translate(${mouseX - nyanCat.width / 2}px, ${mouseY - nyanCat.height / 2}px)`;
    });
}

document.addEventListener('click', (event) => {
    const confettiImage = document.createElement('img');
    confettiImage.src = 'assets/img/confettis-fun.gif';
    confettiImage.style.position = 'absolute';
    confettiImage.style.width = '100px';
    confettiImage.style.height = '100px';
    confettiImage.style.left = `${event.pageX - 50}px`;
    confettiImage.style.top = `${event.pageY - 50}px`;
    confettiImage.style.opacity = '1';
    confettiImage.style.transition = 'opacity 1s ease-out';
    confettiImage.style.pointerEvents = 'none';

    document.body.appendChild(confettiImage);

    setTimeout(() => {
        confettiImage.style.opacity = '0';
        setTimeout(() => confettiImage.remove(), 1000);
    }, 1000);
});
