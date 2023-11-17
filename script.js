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

const logInButton = document.getElementById("log-in");

logInButton.addEventListener('click', function (){
    let random_id = Math.floor(Math.random() * 10 + 1)
    document.getElementById('data-container').style.display = 'block';
    document.getElementById('preloader').style.display = 'block';
    setTimeout(function (){
        fetch('https://jsonplaceholder.typicode.com/users/' + random_id)
            .then(response => response.json())
            .then(data => {
                updateContainer(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                document.getElementById('preloader').style.display = 'none';
            });
    },2000)

})


function updateContainer(data) {
    const container = document.getElementById('data-container');

    // Add content to the container
    container.innerHTML = `
    <button id="close-button" style="width: fit-content;align-self: end; color: red; z-index: 5002; display: block" onclick="closeContainer()">X</button>
    <h2>${data.name}</h2>
    <p>Email: ${data.email}</p>
    <p>Id: ${data.id}</p>
    <p>Username: ${data.username}</p>
    <p>Phone: ${data.phone}</p>
  `;

}

function closeContainer() {
    // Hide the container when the close button is clicked
    document.getElementById('data-container').style.display = 'none';
    closeButton.style.display = 'none';
    const container = document.getElementById('data-container');
    container.innerHTML = ''
}