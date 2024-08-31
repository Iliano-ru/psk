document.addEventListener('DOMContentLoaded', () => {
    const shaft = document.querySelector('.black-part-section1__shaft-position');
    const pipes = document.querySelector('.black-part-section1__pipes-position');
    const darkSquare = document.querySelector('.black-part-section1__dark-square-position');
    const square = document.querySelector('.black-part-section1__square-position ')
    const whitePartSection4 = document.querySelector('.white-part-section-4')
    const blackPartSection1 = document.querySelector('.black-part-section1')
    const blackPartSection2 = document.querySelector('.black-part-section2')
    const backToTop = document.getElementById("back-to-top");

    function colorBlackToWhite() {
        whitePartSection4.classList.remove('white-part-section-4-color-change');
        blackPartSection1.classList.remove('black-part-section1-color-change')
        blackPartSection2.classList.remove('black-part-section1-color-change')
        // document.documentElement.style.setProperty('--color-background', 'rgba(255, 255, 255, 1)');
        // document.documentElement.style.setProperty('--color-background07', 'rgba(255, 255, 255, .7)');
    }

    function colorWhiteToBlack() {
        whitePartSection4.classList.add('white-part-section-4-color-change');
        blackPartSection1.classList.add('black-part-section1-color-change')
        blackPartSection2.classList.add('black-part-section1-color-change')
        // document.documentElement.style.setProperty('--color-background', '#1f2122');
        // document.documentElement.style.setProperty('--color-background07', '#1f2122c0');
    }

    function animationPlay() {
        square.classList.add('black-part-section1__square-position-final')
        shaft.classList.add('black-part-section1__shaft-position-final')
        pipes.classList.add('black-part-section1__pipes-position-final')
        darkSquare.classList.add('black-part-section1__dark-square-position-final')
    }

    function animationBack() {
        square.classList.remove('black-part-section1__square-position-final')
        shaft.classList.remove('black-part-section1__shaft-position-final')
        pipes.classList.remove('black-part-section1__pipes-position-final')
        darkSquare.classList.remove('black-part-section1__dark-square-position-final')

    }

    function backToTopHide() {
        // backToTop.style.display = 'none'
        backToTop.classList.remove('back-to-top_showed')

    }

    function backToTopShow() {
        // backToTop.style.display = 'block'
        backToTop.classList.add('back-to-top_showed')
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
        scrollCheck('image-animation-start', animationPlay, animationBack)
        scrollCheck('back-to-top__trigger', backToTopShow, backToTopHide)
    });
});