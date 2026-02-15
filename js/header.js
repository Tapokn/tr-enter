// Автоскрытие шапки 
(function() {
    const header = document.querySelector('.header'); // Класс тот же - .header
    if (!header) return;

    let lastY = window.scrollY;
    let ticking = false;
    let enabled = true; // Всегда включено


    function enable() {
        header.classList.add('header--fixed'); // Добавляем фиксацию
        // Добавляем отступ для body, чтобы контент не "прыгал"
        document.body.style.paddingTop = header.offsetHeight + 'px';
    }

    function disable() {
        header.classList.remove('header--fixed');
        header.classList.remove('header--hidden');
        header.classList.remove('header--visible');
        document.body.style.paddingTop = '';
    }

    function handleScroll() {
        const y = window.scrollY;
        const dy = y - lastY;

        // Игнорируем мелкие изменения
        if (Math.abs(dy) < 5) return;

        // Если меню открыто (проверяем по классу бургера) — держим шапку видимой
        const menuOpen = document.querySelector('.burger-icon')?.classList.contains('active');
        if (menuOpen) {
            header.classList.remove('header--hidden');
            lastY = y;
            return;
        }

        if (y <= 0) {
            // Вверху страницы — показываем
            header.classList.remove('header--hidden');
        } else if (dy > 0 && y > header.offsetHeight) {
            // Скролл вниз — скрываем
            header.classList.add('header--hidden');
        } else if (dy < 0) {
            // Скролл вверх — показываем
            header.classList.remove('header--hidden');
        }

        lastY = y;
    }

    // Подключаем обработчики
    window.addEventListener('scroll', () => {
        if (!enabled) return;
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    

    // Запускаем при загрузке
    if (enabled) enable();
})();