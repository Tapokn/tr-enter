// Бургер-меню
    document.addEventListener('DOMContentLoaded', function() {
        const burgerIcon = document.querySelector('.burger-icon');
        const offcanvasMenu = document.querySelector('.offcanvas-menu');
        const overlay = document.querySelector('.offcanvas-overlay');
        const closeBtn = document.querySelector('.offcanvas-close');
        const body = document.body;

        // Функция открытия меню
        function openMenu() {
            offcanvasMenu.classList.add('open');
            overlay.classList.add('active');
            body.classList.add('menu-open');
        }

        // Функция закрытия меню
        function closeMenu() {
            offcanvasMenu.classList.remove('open');
            overlay.classList.remove('active');
            body.classList.remove('menu-open');
        }

        // Открытие по клику на бургер
        burgerIcon.addEventListener('click', openMenu);

        // Закрытие по клику на крестик
        closeBtn.addEventListener('click', closeMenu);

        // Закрытие по клику на оверлей
        overlay.addEventListener('click', closeMenu);

        // Закрытие по нажатию ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && offcanvasMenu.classList.contains('open')) {
                closeMenu();
            }
        });
    });
