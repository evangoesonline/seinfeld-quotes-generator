//Define our variables
const headerTag = document.querySelector('h2');
const quoteTag = document.querySelector('.quote');
let characterImage = document.querySelector('.characterImage')

const characterImages = ["images/jerry-senfeld.png", "images/george-costanza.png", "images/elaine-benes.png", "images/cosmo-kramer.png"]
var x;
const getQuote = () => {
    fetch("https://seinfeld-quotes.herokuapp.com/quotes")
        .then(response => response.json())
        .then(jsonData => {
            quoteTag.innerHTML = jsonData.quotes[x].quote
            headerTag.innerHTML = jsonData.quotes[x].author
            getImage();
        })

}

// images function to go below:
const getImage = () => {

    if (headerTag.innerHTML == "Jerry") {
        characterImage.setAttribute("src", characterImages[0])
    } else if (headerTag.innerHTML == "George") {
        characterImage.setAttribute("src", characterImages[1])
    } else if (headerTag.innerHTML == "Elaine") {
        characterImage.setAttribute("src", characterImages[2])
    } else if (headerTag.innerHTML == "Kramer") {
        characterImage.setAttribute("src", characterImages[3])
    } else {
        characterImage.setAttribute("src", "images/placeholder-image.png")
    }
}

document.querySelector("button").addEventListener("click", function (event) {
    x = Math.floor(Math.random() * 422);
    getQuote();
})



