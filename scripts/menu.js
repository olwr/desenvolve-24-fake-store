// hamburger
const menuHamburger = document.querySelector('.hamburger-menu');
const menuBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-xmark');

menuBtn.addEventListener('click', () => {
    menuHamburger.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    menuHamburger.classList.remove('active');
})

// header icons
const userBtn = document.querySelector('.header-icons .fa-circle-user');
const menuAccount = document.querySelector('.account-menu');

const cepBtn = document.querySelector('.header-icons .fa-map-pin');
const cepMenu = document.querySelector('.cep-menu');

const shopBtn = document.querySelector('.header-icons .fa-bag-shopping');
const shopCart = document.querySelector('.shop-cart');

userBtn.addEventListener('click', () => {
    switch (menuAccount.className) {
        case 'account-menu active':
            menuAccount.classList.remove('active');
            break;
        case 'account-menu':
            menuAccount.classList.add('active');
            cepMenu.classList.remove('active');
            shopCart.classList.remove('active');
            break;
    }
});

cepBtn.addEventListener('click', () => {
    switch (cepMenu.className) {
        case 'cep-menu active':
            cepMenu.classList.remove('active');
            break;
        case 'cep-menu':
            cepMenu.classList.add('active');
            menuAccount.classList.remove('active');
            shopCart.classList.remove('active');
            break;
    }
});

shopBtn.addEventListener('click', () => {
    switch (shopCart.className) {
        case 'shop-cart active':
            shopCart.classList.remove('active');
            break;
        case 'shop-cart':
            shopCart.classList.add('active');
            menuAccount.classList.remove('active');
            cepMenu.classList.remove('active');
            break;
    }
});