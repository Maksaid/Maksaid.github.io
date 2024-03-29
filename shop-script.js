const itemImgs = document.querySelectorAll(".item-img");
let time = window.performance.timing;
    // разобраться с таймингом
document.addEventListener("DOMContentLoaded", function () {
    // Array of image paths. Update these with the correct paths to your images.
    const imagePaths = [
        "hoodie-images/hoodie1.webp",
        "hoodie-images/hoodie2.jpg",
        "hoodie-images/hoodie3.webp",
        "hoodie-images/hoodie4.avif",
        "hoodie-images/hoodie5.webp",
        "hoodie-images/hoodie6.jfif",
        "hoodie-images/hoodie7.webp",
        "hoodie-images/hoodie8.webp",
        "hoodie-images/hoodie9.jfif"

        // Add more image paths here as needed
    ];


    for (let i = 0; i < itemImgs.length; i++) {
        // Check if there is an image path for the current item
        if (imagePaths[i]) {
            // Set the background image for the current item
            console.log(itemImgs[i])
            itemImgs[i].style.backgroundImage = `url(${imagePaths[i]})`;
        }
    }
});

const startTime = new Date().getTime();

// Add your script logic here

window.addEventListener('load', function() {
    const endTime = new Date().getTime();

    // Calculate the time taken for the page to load
    const loadTime = endTime - startTime;
    let podval = document.querySelector('.podval')
    podval.textContent = 'Page loaded in: ' + loadTime;
    console.log(loadTime, endTime)
    // Print the load time to the console
});





