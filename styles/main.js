document.addEventListener('DOMContentLoaded', () => {

    // Функция для изменения цвета фона при прокрутке к целевому блоку
    function changeHeaderColor() {
        const targetBlock = document.getElementById('color-change');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetOffset = targetBlock.offsetTop;
        const whitePartSection4 = document.querySelector('.white-part-section-4')

        if (scrollTop >= targetOffset) {
            // whitePartSection4.style['background'] = 'linear-gradient(197deg, var(--color-background-black) 0%, var(--color-background-black) 40%, var(--color-background07-black) 70%, rgba(0, 0, 0, .1) 90%)';
            document.documentElement.style.setProperty('--color-background', '#1f2122');
            document.documentElement.style.setProperty('--color-background07', '#1f2122c0');
        } else if (scrollTop < targetOffset) {
            // whitePartSection4.style['background'] = 'linear-gradient(197deg, var(--color-background) 0%, var(--color-background) 40%, var(--color-background07) 70%, rgba(0, 0, 0, .1) 90%)';
            document.documentElement.style.setProperty('--color-background', 'rgba(255, 255, 255, 1)');
            document.documentElement.style.setProperty('--color-background07', 'rgba(255, 255, 255, .7)');
        }
    }

    // Вызываем функцию при прокрутке страницы
    window.addEventListener('scroll', changeHeaderColor);
});