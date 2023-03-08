// variables ready to be defined after content loading

const infoIcon = ''
const mortarInput = '' 
const sandInput = ''
const cementInput = '' 
const mortarQty = ''
const sandQty = ''
const cementQty = '' 
const redBricksInput = ''
const stoneBricksInput = ''
const concreteBricksInput = ''
const redBricksQty = ''
const stoneBricksQty = ''
const concreteBricksQty = ''
const hoursOfWorkInput = ''
const totalCost = ''

 document.addEventListener("DOMContentLoaded", function() {

    const infoIcon = document.getElementById("info-icon");
    const mortarInput = document.getElementById("mortar");
    const sandInput = document.getElementById("sand");
    const cementInput = document.getElementById("cement");
    const mortarQty = document.getElementById("mortar-quantity");
    const sandQty = document.getElementById("sand-quantity");
    const cementQty = document.getElementById("cement-quantity");
    const redBricksInput = document.getElementById("red-bricks");
    const stoneBricksInput = document.getElementById("stone-bricks");
    const concreteBricksInput = document.getElementById("concrete-bricks");
    const redBricksQty = document.getElementById("red-bricks-qty");
    const stoneBricksQty =document.getElementById("stone-bricks-qty") ;
    const concreteBricksQty =document.getElementById("concrete-bricks-qty") ;
    const hoursOfWorkInput = document.getElementById("hours-of-work");
    const totalCost = document.getElementById("total-cost");
      
})

 // function to shift through materials, bricks, hours of work and final list
function moveThroughSections(event){
    let currentSection = document.querySelector("section:not([style*='display: none'])");
    nextSection = currentSection.nextElementSibling;
    if (nextSection !== null){
        currentSection.style.display = 'none'
        nextSection.style.display = 'flex';
    }
}

let nextButton = document.getElementsByClassName('next-button')
for (buttons of nextButton){
    buttons.addEventListener('click', moveThroughSections)
}
 
// function to return to the materials page

function backToMainPage(event){

    document.getElementById('total-cost').style.display = 'none';
    document.getElementById('materials').style.display = 'flex';

}

let mainPageButton = document.getElementById('back');
mainPageButton.addEventListener('click', backToMainPage);

// function to show the website instructions

function information(event){
    let bgImage = document.getElementById('interactive-section-bg');
    let infoBox = document.getElementById('info-box');
    if (infoBox.style.display === 'none'){
        infoBox.style.display = 'flex';
        bgImage.style.display = 'none'
    }else{
        infoBox.style.display = 'none'
        bgImage.style.display = 'block'
    }

}

let infoBox = document.getElementById('info-icon');
infoBox.addEventListener('click', information);


// functions to run the quote generator

// let listItem = document.createElement('li');
// listItem.textContent = mortarQty.
// document.querySelector('ul').appendChild(listItem)

// const mortarQty = document.getElementById('mortarQty');
// const list = document.getElementById('list');

// function addToList() {
//   let num1 = mortarQty.valueAsNumber;
//   let li = document.createElement('li');
//   li.textContent = num1;
//   list.appendChild(li);
// }
// mortarQty = document.getElementById('mortar-quantity');
// mortarQty.addEventListener('input', addToList);

function displayNumber(event){
    let number = document.getElementById('mortar-quantity').value;
    let listItem = document.createElement('li');
    listItem.innerHTML = number + 'kg of mortar';
    let ul = document.getElementsByTagName('ul')[0];
    ul.appendChild(listItem);
    
}
let number = document.getElementById('mortar-quantity');
number.addEventListener('keyup', displayNumber);

// function to insert data into the list of items