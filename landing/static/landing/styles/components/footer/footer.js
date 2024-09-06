document.addEventListener('DOMContentLoaded', () => {
    const spoiler = document.querySelector('.spoiler');
    const footerLogo = document.querySelector('.footer__inner')
    const checkMark = document.querySelector('.check-mark')
    spoiler.onclick = () => {
        footerLogo.classList.toggle('showed')
        checkMark.classList.toggle('check-mark_active')
    }
})