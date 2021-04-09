const target = document.querySelectorAll("[data-anime]");
const animationClass = 'animate';

function animeinitial() {
    target.forEach(function(elemento) {
            elemento.classList.add(animationClass);
    })
}

window.addEventListener("load", animeinitial)

function animeScroll() {
    const windowTope = window.pageYOffset + ((window.innerHeight * 3) / 4)
    target.forEach(function(elemento) {
        if((windowTope) > elemento.offsetTop) {
            elemento.classList.add(animationClass);
        } else {
            elemento.classList.remove(animationClass);
        }
    })
}

animeScroll();
window.addEventListener("scroll", function() {
    animeScroll();
})