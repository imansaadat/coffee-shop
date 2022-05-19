const header = document.querySelector('.header')
const burger = document.querySelector('.burger');
const burgerIcon = document.querySelector('.fas');
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {

    if (window.scrollY) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
    navbar.classList.remove('showMenu')
    burgerIcon.classList.remove('fa-times')
})

burger.addEventListener('click',()=>{
    navbar.classList.toggle('showMenu')
    burgerIcon.classList.toggle('fa-times')
})