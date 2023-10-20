


window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
    document.body.style.cssText += `--rotate: ${this.scrollY % 2 === 0 ? 7 : -7}deg`
})
