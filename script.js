window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
    document.body.style.cssText += `--rotate: ${this.scrollY % 2 === 0 ? 7 : -7}deg`
})

const startTime = new Date().getTime();

// Add your script logic here

window.addEventListener('load', function() {
    const endTime = new Date().getTime();

    // Calculate the time taken for the page to load
    var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
    // Print the load time to the console
    console.log(loadTime)
});
