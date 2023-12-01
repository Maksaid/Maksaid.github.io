window.addEventListener('DOMContentLoaded', async function (){
    const imageContainer = document.querySelector('.image-container')
    const preloader = document.querySelector('.preloader')
    const moreImagesButton = document.querySelector('.more-img-button')
    console.log(await getImages(8))
    startingImageOffset = document.querySelectorAll('.image-pair')[0].getBoundingClientRect().top
    async function getImages(images_count){
       let random = Math.random * 10
        preloader.style.display = 'block'
        await fetch(`https://api.pexels.com/v1/search?query=space&per_page=${images_count}&size=medium2&orientation=landscape&page=${random}`,{
            method: 'GET',
            headers: {
                'Authorization': '1S9ufDXzal35Ul5QjpKZUeNYUJiFxzahbUPSvYDAJr9EyQJ3Y0FQlvxc'
            }
        })
            .then(response => response.json())
            .then(response => addImagesToContainer(response, images_count))
            .catch(err => showErrorMessage(err));

    }

    moreImagesButton.addEventListener('click', async function (){
        await getImages(4)
    })

    function addImagesToContainer(response, images_count){
        console.log(response)
        preloader.style.display = 'none'

        for (let i = 0; i < images_count ; i++) {
            let url1 = response.photos[i].src.landscape
            let imagePair = `<div class="image-pair" style="background-image: url(${url1})"></div>`
            imageContainer.innerHTML += imagePair
        }
    }
    function showErrorMessage(err){
        console.log(err)
    }

})
let startingImageOffset = 0

window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
    let height = window.innerHeight - startingImageOffset;
    for(const image of document.getElementsByClassName('image-pair')){
        let rect = image.getBoundingClientRect();
        image.style.backgroundPosition = `50% ${100 - Math.max(0,(rect.top)/height) * 100}%`
    }
})
