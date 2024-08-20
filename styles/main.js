document.addEventListener('DOMContentLoaded', () => {
    function colorBlackToWhite() {
        // whitePartSection4.style['background'] = 'linear-gradient(197deg, var(--color-background) 0%, var(--color-background) 40%, var(--color-background07) 70%, rgba(0, 0, 0, .1) 90%)';
        document.documentElement.style.setProperty('--color-background', 'rgba(255, 255, 255, 1)');
        document.documentElement.style.setProperty('--color-background07', 'rgba(255, 255, 255, .7)');
    }

    function colorWhiteToBlack() {
        // whitePartSection4.style['background'] = 'linear-gradient(197deg, var(--color-background-black) 0%, var(--color-background-black) 40%, var(--color-background07-black) 70%, rgba(0, 0, 0, .1) 90%)';
        document.documentElement.style.setProperty('--color-background', '#1f2122');
        document.documentElement.style.setProperty('--color-background07', '#1f2122c0');
    }

    function scrollCheck(elementID, function1, function2) {
        const targetBlock = document.getElementById(elementID);
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetOffset = targetBlock.offsetTop;

        if (scrollTop >= targetOffset) {
            function1()
        } else if (scrollTop < targetOffset) {
            function2();
        }
    }

    // Вызываем функцию при прокрутке страницы
    window.addEventListener('scroll', () => {
        scrollCheck('color-change', colorWhiteToBlack, colorBlackToWhite);
    });
});