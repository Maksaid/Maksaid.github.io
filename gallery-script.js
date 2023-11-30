window.addEventListener('DOMContentLoaded', async function (){
    const imageContainer = document.querySelector('.image-container')
    console.log(await getImages(8))

    async function getImages(images_count){
        await fetch(`https://api.pexels.com/v1/search?query=space&per_page=${images_count}&size=medium2&orientation=portrait`,{
            method: 'GET',
            headers: {
                'Authorization': '1S9ufDXzal35Ul5QjpKZUeNYUJiFxzahbUPSvYDAJr9EyQJ3Y0FQlvxc'
            }
        })
            .then(response => response.json())
            .then(response => addImagesToContainer(response, images_count))
            .catch(err => showErrorMessage(err));

    }



    function addImagesToContainer(response, images_count){
        console.log(response)
        for (let i = 0; i < images_count ; i+=2) {
            let url1 = response.photos[i].src.large2x
            let url2 = response.photos[i+1].src.large2x
            let firstImg = `<div class="gallery_image i1" style="background-image: url(${url1})"></div>`
            let secondImg = `<div class="gallery_image i2" style="background-image: url(${url2})"></div>`
            let imagePair = `<div class="image-pair" >${firstImg}${secondImg}</div>`
            imageContainer.innerHTML += imagePair
        }
    }
    function showErrorMessage(err){
        console.log(err)
    }

})
window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
    let mainHeight = document.querySelector('html').offsetHeight
    for(const image of document.getElementsByClassName('gallery_image')){
        console.log(`50% ${this.scrollY/mainHeight * 100}%`)
        image.style.backgroundPosition = `${this.scrollY/mainHeight * 100}% ${100 - this.scrollY/mainHeight * 120}%`
    }
})
