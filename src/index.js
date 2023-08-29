console.log('%c HI', 'color: firebrick')

const breedUrl = "https://dog.ceo/api/breeds/list/all";
const apiUrl = "https://dog.ceo/api/breeds/image/random/4";
const dogContainer = document.getElementById("dog-image-container")
const dogBreedCont = document.getElementById("dog-breeds");
const filterBreed = document.getElementById("breed-dropdown")

document.addEventListener("DOMContentLoaded", function() {
    fetch(apiUrl) 
        .then((resp) => resp.json())
        .then(data => {
            const imageArray = data.message;
            
            imageArray.forEach(function (imageUrl) {
                const imageElement = document.createElement("img");
                imageElement.src = imageUrl;
                imageElement.alt = "dog";
                dogContainer.appendChild(imageElement);
            })
        })
    fetch(breedUrl)
        .then((resp) => resp.json())
        .then(data => {
            const breedObject = data.message;
            const breedNames = Object.keys(breedObject);

            breedNames.forEach(function (breed) {
                const breedElement = document.createElement("li")
                breedElement.textContent = breed;

                breedElement.style.cursor = "pointer";
                breedElement.addEventListener("click", function() {
                    if (breedElement.style.color === "pink") {
                        breedElement.style.color =  "";
                    } else {
                        breedElement.style.color = "pink"
                    }
                })
                dogBreedCont.appendChild(breedElement);
            })
        })

        filterBreed.addEventListener("change", function() {
            const selectedLetter = filterBreed.value;
            const allBreedItems = document.querySelectorAll("#dog-breeds li");

            allBreedItems.forEach(function(breedItem) {
                if (breedItem.textContent[0] === (selectedLetter)) {
                    breedItem.style.display = "block";
                } else {
                    breedItem.style.display = "none";
                }
            });
        });
    });

