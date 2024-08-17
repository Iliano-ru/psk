let burger = document.querySelector(".burger");
let burger__span = document.querySelector('.burger__span');
burger.onclick = () => {
    burger__span.classList.toggle('burger__span_active')
}