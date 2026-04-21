// Inicializácia Bootstrap Toast pre tvoju stránku o hrách
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Inicializácia všetkých Toast elementov na stránke
    var toastElList = [].slice.call(document.querySelectorAll('.toast'));
    var toastList = toastElList.map(function(toastEl) {
        return new bootstrap.Toast(toastEl);
    });

    // 2. Event listener pre tvoje tlačidlo #btnToast
    const btnToast = document.getElementById('btnToast');
    if (btnToast) {
        btnToast.addEventListener('click', function() {
            // Zobraz toast notifikáciu
            const toastElement = document.getElementById('gameToast');
            const toast = new bootstrap.Toast(toastElement);
            toast.show();
            
            // Automaticky skry po 4 sekundách
            setTimeout(function() {
                toast.hide();
            }, 4000);
        });
    }

    // 3. BONUS: Event listeners pre všetky karty (game-card)
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(function(card) {
        card.addEventListener('click', function() {
            // Toast sa zobrazí aj pri kliknutí na kartu (modal sa otvorí automaticky)
            const toastElement = document.getElementById('gameToast');
            const toast = new bootstrap.Toast(toastElement);
            
            // Zmeň text toastu podľa karty (voliteľné)
            const toastBody = toastElement.querySelector('.toast-body');
            if (toastBody) {
                toastBody.textContent = '✅ Detail hry otvorený!';
            }
            
            toast.show();
        });
    });

    // 4. Smooth scroll pre navbar linky
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});
