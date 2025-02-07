document.addEventListener('DOMContentLoaded', function() {
    const epreuve = document.getElementById('epreuve');
    const classement = document.getElementById('classement');
    const acceuil = document.getElementById('acceuil');

    epreuve.addEventListener('click', function() {
        window.location.href = 'epreuve';
    });
    classement.addEventListener('click', function() {
        window.location.href = 'score';
    });
    acceuil.addEventListener('click', function() {
        window.location.href = '/';
    });
});