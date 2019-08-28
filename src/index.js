console.log('%c HI', 'color: firebrick')
// document.addEventListener("DOMContentLoaded", fetchAll);
document.addEventListener("DOMContentLoaded", fetchImage);



function fetchImage() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    return fetch(imgUrl)
    .then(response => response.json())
    .then(dogImgList => addImagesToPage(dogImgList));
    //"response" = promise keyword assignment by user
    //"dogImgList" = payload coming from filter of promise
    //both arbitrary and defined during .then statements

}

function addImagesToPage(dogImgList) {
    let dogImageContainer= document.getElementById("dog-image-container");
    // console.log(dogImgList)
    let dogAssignment = dogImgList.message.forEach(function(dogImg){
        //dogImg arbitrary name
        //message was within the dogImgList output
        let newDogImg= document.createElement("img")
        newDogImg.src = dogImg
        dogImageContainer.appendChild(newDogImg)
    })
    
}



function fetchAll() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    return fetch(breedUrl)
    .then(response => response.json())
    .then(breedList => addBreedListToPage(breedList));
}
fetchAll()

function addBreedListToPage(breedList){
    let breedListContainer = document.getElementById("dog-breeds");
    // console.log(Object.keys(breedList.message))

    let breedArray = Object.keys(breedList.message)
    let breedAssignment = breedArray.forEach(function(breedName){
        let newDogBreed= document.createElement("li")
        newDogBreed.innerHTML = breedName
        breedListContainer.appendChild(newDogBreed)
    
    })
} 

// function callAll(){
//     fetchImage();
//     fetchAll();
// }

document.addEventListener("click", changeColor)

function changeColor(e){
    e.target.style= "color:blue"
}

let breedDropDown = document.getElementById("breed-dropdown")
breedDropDown.onchange = (e) => {
    filterDog(e)
}

    
function filterDog(e){
    let breedParent = document.getElementById("dog-breeds")
    let filterList = document.getElementsByTagName("li")
    let i = 0
    while(i < filterList.length){
        let firstLetter = filterList[i].textContent[0]
        console.log(filterList[0].textContent[0])
        console.log(e.target.value)
        if (firstLetter != e.target.value){
            breedParent.removeChild(filterList[i])
         }
         else{
            i++
         }
         
        // console.log(filterList[i])
    }

}