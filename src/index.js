console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", fetchDogPic);
// document.addEventListener("load", fetchDogBreeds);


// function runAll() {
//     fetchDogPic
//     fetchDogBreeds
// }


function fetchDogPic() {
    const imgURL = "https://dog.ceo/api/breeds/image/random/4"
    return fetch(imgURL)
    .then(response => response.json())
    .then(json => addDogImages(json))
}

function addDogImages(images) {
    let imageHolder = document.querySelector("#dog-image-container")
    images.message.forEach(function(image) {
        let img = document.createElement("img")
        img.src = image
        imageHolder.appendChild(img)
    })
}

function fetchDogBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    return fetch(breedUrl)
    .then(response => response.json())
    .then(breedList => addBreedListToPage(breedList));
}

fetchDogBreeds()

function addBreedListToPage(breedList) {
    let breedListContainer = document.getElementById("dog-breeds");
    let breedArray = Object.keys(breedList.message)
    breedArray.forEach(function(breedName) {
      let newDogBreed = document.createElement("li");
      newDogBreed.textContent = breedName;
      breedListContainer.appendChild(newDogBreed);  
    })
}

document.addEventListener("click", changeColor)

function changeColor(e) {
    if (e.target.style.color == "blue") {
        e.target.style.color = "black"
    } else {
        e.target.style = "color: blue"
    }
}

let breedDropDown = document.getElementById("breed-dropdown")
breedDropDown.onchange = (e) => {
    filterDog(e)
}

function filterDog(e) {
    let ul = document.getElementById("dog-breeds")
    let listItems = document.getElementsByTagName("li")
    let i = 0;
    while ( i < listItems.length) {
        let firstLetter = listItems[i].textContent[0]
        if (listItems[i].style.display == "none") {
            listItems[i].style.display = "block"
        }
        if (firstLetter != e.target.value) {
            listItems[i].style.display = "none"
        } 
        i++
    }
}