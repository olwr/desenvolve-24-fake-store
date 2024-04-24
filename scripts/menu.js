const menuHamburger = document.querySelector('.hamburger-menu');
const menuBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-xmark');

menuBtn.addEventListener('click', () => {
    menuHamburger.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    menuHamburger.classList.remove('active');
})