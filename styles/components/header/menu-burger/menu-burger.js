document.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector(".burger");
    const burger__span1 = document.querySelector('.burger__span1');
    const burger__span2 = document.querySelector('.burger__span2');
    const burger__span3 = document.querySelector('.burger__span3');
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body')
    const footer = document.querySelector('footer')

    burger.onclick = () => {
        burger.classList.toggle('burger_active');
        burger__span1.classList.toggle('burger__span1_active');
        burger__span2.classList.toggle('burger__span2_active');
        burger__span3.classList.toggle('burger__span3_active');
        menu.classList.toggle('menu_active');
        body.classList.toggle('body_lock')
        footer.classList.toggle('footer_lock')
    }
})