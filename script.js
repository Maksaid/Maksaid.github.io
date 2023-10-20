const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".carousel-container");
const track = document.querySelector(".track");
let width = carousel.offsetWidth;
let cardWidth = 20;
let cardPadding = 6;
let vwPixels = window.innerWidth / 100;
const remPixels = parseFloat(getComputedStyle(document.documentElement).fontSize);
let index = 0;
let cardAmount = document.querySelectorAll(' .card-container').length;
let initialCardsAmount = window.innerWidth / (20 * remPixels + 6 * vwPixels);

window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
    document.body.style.cssText += `--rotate: ${this.scrollY % 2 === 0 ? 7 : -7}deg`
})
