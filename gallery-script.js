
window.addEventListener('DOMContentLoaded', async function () {
    const imageContainer = document.querySelector('.image-container')
    const preloader = document.querySelector('.preloader')
    const moreImagesButton = document.querySelector('.more-img-button')


    console.log(await getImages(8))
    startingImageOffset = document.querySelectorAll('.image-pair')[0].getBoundingClientRect().top


    async function getImages(images_count) {
        let random = Math.random() * 10;
        preloader.style.display = 'block';

        try {
            const response = await fetch(`https://api.pexels.com/v1/search?query=universe&per_page=${images_count}&size=medium2&orientation=landscape&page=${random}`, {
                method: 'GET',
                headers: {
                    'Authorization': '1S9ufDXzal35Ul5QjpKZUeNYUJiFxzahbUPSvYDAJr9EyQJ3Y0FQlvxc'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            addImagesToContainer(responseData, images_count);
        } catch (err) {
            showErrorMessage(err);
        }

        addParallax();

    }

    moreImagesButton.addEventListener('click', async function () {
        await getImages(4)
    })

    function addImagesToContainer(response, images_count) {
        showSuccess('Fetched successfully!')
        preloader.style.display = 'none'

        for (let i = 0; i < images_count; i++) {
            let url1 = response.photos[i].src.landscape
            let imagePair = `<img class="image-pair" src="${url1}" alt="img"><p></p>`
            imageContainer.innerHTML += imagePair
        }
    }

    function showErrorMessage(err) {
        Toastify({
            text: "Error!",
            duration: 2000, // Set the duration for how long the toast should be visible
            gravity: "top", // You can adjust the position (top, bottom, left, right)
            backgroundColor: "red", // Customize the background color
        }).showToast();
    }
    function addParallax(){
        const images = document.querySelectorAll('.image-pair');
        new simpleParallax(images);
    }
    function showSuccess(message) {
        Toastify({
            text: `${message}`,
            duration: 2000, // Set the duration for how long the toast should be visible
            gravity: "top", // You can adjust the position (top, bottom, left, right)
            backgroundColor: "green", // Customize the background color
        }).showToast();
    }

})
let startingImageOffset = 0

window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
    let height = window.innerHeight - startingImageOffset;
    console.log(scrollY)
    for (const image of document.getElementsByClassName('image-pair')) {
        let rect = image.getBoundingClientRect();
        image.style.objectPosition = `50% ${100 - Math.max(0, (rect.top) / height) * 100}%`
    }
})

