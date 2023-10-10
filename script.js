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

console.log(cardAmount + " " + initialCardsAmount)
window.addEventListener("resize", function () {
    width = carousel.offsetWidth;
});
next.addEventListener("click", function (e) {
    e.preventDefault();
    index = index + 1;
    prev.classList.add("show");
    track.style.transform = "translateX(" + index * -cardWidth + "rem)";
    track.style.transform += "translateX(" + index * -cardPadding + "vw)";
    console.log(index)
    if (index >= cardAmount - (initialCardsAmount) - 1) {
        next.classList.add("hide");
    }
});

prev.addEventListener("click", function () {
    index = index - 1;
    next.classList.remove("hide");
    if (index === 0) {
        prev.classList.remove("show");
    }
    track.style.transform = "translateX(" + index * -cardWidth + "rem)";
    track.style.transform += "translateX(" + index * -cardPadding + "vw)";

});

window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
    document.body.style.cssText += `--rotate: ${this.scrollY % 2 === 0 ? 7 : -7}deg`
})
