const faq = document.querySelector('.faq');
const plusBtn = document.querySelector('.fa-plus');
const minusBtn = document.querySelector('.fa-minus');

plusBtn.addEventListener('click', () => {
    faq.classList.add('active');
})

minusBtn.addEventListener('click', () => {
    faq.classList.remove('active');
})