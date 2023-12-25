const accessKey = 'FN-nXcFGBI8IE6FkK1tep9w34l44OMI41vNbRSrjsek'; // todo: use .env file for keys
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('.search-input');
const imagesContainer = document.querySelector('.images-container');

//Function to fetch images using Unsplash API
const fetchImages = async (query) => {
    imagesContainer.innerHTML = '';
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    // console.log(data);

    data.results.forEach(photo => {
        const imageElement = document.createElement('div');
        imageElement.classList.add('imageDiv');
        imageElement.innerHTML = `<img src="${photo.urls.regular}"/>`;

        //creating overlay
        const overlayElement = document.createElement('div');
        overlayElement.classList.add('overlay');

        imageElement.appendChild(overlayElement);
        
        imagesContainer.appendChild(imageElement);
    });
}


//adding Event Listner to search form
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputText = searchInput.value.trim();
    if(inputText !== ''){
        fetchImages(inputText);
    } else {
        imagesContainer.innerHTML = `<h2>Please enter a search query</h2>`
    }
});