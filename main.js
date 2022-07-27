import './style.css'

const navButton = document.querySelector('#navButton');
const navMenu = document.querySelector('#navMenu');

navButton.addEventListener('click', () => {
    navMenu.classList.toggle("mobile-s:hidden")
})

navButton.addEventListener('click', () => {
    navMenu.classList.toggle("mobile-m:hidden")
})

navButton.addEventListener('click', () => {
    navMenu.classList.toggle("mobile-l:hidden")
})