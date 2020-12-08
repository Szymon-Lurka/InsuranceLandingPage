M.AutoInit()

//Header button scroll
document.querySelector('.header__btn').addEventListener('click', () => {
    document.querySelector('.insurance').scrollIntoView({ behavior: "smooth" });
})

//Navigation

const desktopNavButtons = [...document.querySelectorAll('.right .nav-btn')];
const mobileNavButtons = [...document.querySelectorAll('.sidenav .nav-btn')];
const viewsToScroll = [document.querySelector('.faq'), document.querySelector('.insurance'), document.querySelector('.faq'), document.querySelector('.form')];

for (let i = 0; i < desktopNavButtons.length; i++) {
    desktopNavButtons[i].addEventListener('click', () => {
        viewsToScroll[i].scrollIntoView({ behavior: "smooth" });
    });
    mobileNavButtons[i].addEventListener('click', () => {
        viewsToScroll[i].scrollIntoView({ behavior: "smooth" });
    })
}


// Handle cards description in insurance section
const cards = [...document.querySelectorAll('.insurance__card')];
const cardsDescription = [...document.querySelectorAll('.insurance-description')];

for (i = 0; i <= cards.length - 1; i++) {
    let newArray = cardsDescription[i];
    let secondArray = cards[i];
    cards[i].addEventListener('click', () => {
        cardsDescription.forEach(card => card.classList.remove('active'));
        cards.forEach(card => card.classList.remove('active'));
        newArray.classList.toggle('active');
        secondArray.classList.toggle('active');
        newArray.scrollIntoView({ behavior: "smooth", block: "center" });
    })
}

//Faq color settings

const faq = [...document.querySelectorAll('.faq__container-header')];

faq.forEach(item => item.addEventListener('click', () => {
    faq.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
}))


// SLIDER INIT

$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,
    });
});