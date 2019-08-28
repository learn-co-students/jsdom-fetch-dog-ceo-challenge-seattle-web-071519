
document.addEventListener("DOMContentLoaded", main)

function main(){
    fetchDogs()
    fetchBreeds()
    sortByBreed()
    selectBreedLetter()
}


function fetchDogs(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    let dogSpace = document.getElementById("dog-image-container")
    return fetch(imgUrl)
	.then( resp => resp.json())
	.then( function(json) {
        json.message.forEach(function(dogImg){
            let renderedImage = document.createElement("IMG");
            renderedImage.src = `${dogImg}`
            dogSpace.appendChild(renderedImage)
        }) 
        
    
})
}

function fetchBreeds(){
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    let breedSpace = document.getElementById("dog-breeds")
    return fetch(breedUrl)
	.then( resp => resp.json())
	.then( function(json) {
        (Object.keys(json.message)).forEach(function(breed){
            let renderedImage = document.createElement("li");
            renderedImage.innerText = `${breed}`
            renderedImage.onclick = e => {
                renderedImage.style.color = "burlywood"
            }

            breedSpace.appendChild(renderedImage)
        }) 
        
    
})
}

function selectBreedLetter(){
    let breedDropDown = document.getElementById("breed-dropdown")
    breedDropDown.onchange = e => {
        let letterToSortBy = document.getElementById("breed-dropdown").value
        sortByBreed(letterToSortBy)
    }
    

}

function sortByBreed(letter){
        let chosenBreeds = []
    let allBreeds = document.querySelectorAll("ul > li")
    allBreeds.forEach(function(breed){
        if (breed.textContent.charAt(0) == letter){
            chosenBreeds.push(breed)
        }
    })
    
    let newBreedList = document.getElementById("dog-breeds")
    newBreedList.innerHTML = ""
    chosenBreeds.forEach(function(sortedBreed){
        newBreedList.appendChild(sortedBreed)
    })

    
}


