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

// function to give the proper values to the empty variables above 

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
    const redBricksQty = document.getElementById("red-bricks-quantity");
    const stoneBricksQty = document.getElementById("stone-bricks-quantity") ;
    const concreteBricksQty = document.getElementById("concrete-bricks-quantity") ;
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
    document.getElementById('form').style.display = 'flex';

}

let mainPageButton = document.getElementById('back');
mainPageButton.addEventListener('click', backToMainPage);

// function to show the website instructions on all sections

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



// function to insert data into the list of items


function displayNumber(event){
    
    
    let mortar = document.getElementById('mortar-quantity').value;
    let sand = document.getElementById('sand-quantity').value;
    let cement = document.getElementById('cement-quantity').value;
    let redBricks = document.getElementById('red-bricks-quantity').value;
    let stoneBricks = document.getElementById('stone-bricks-quantity').value;
    let concreteBricks = document.getElementById('concrete-bricks-quantity').value;
    let hoursOfWork = document.getElementById('total-hours').value;
    let price = document.getElementById('price');
    let inputArray = [mortar, sand, cement, redBricks, stoneBricks, concreteBricks];  
          
            let listItem = `<li>${mortar} kg of mortar</li>
            <li>${sand} kg of sand</li>
            <li>${cement} kg of cement</li>
            <li>${redBricks} kg of red bricks</li>
            <li>${stoneBricks} kg of stone bricks</li>
            <li>${concreteBricks} kg of concrete bricks</li>
            <li>${hoursOfWork} hours of work</li>`;
            
            // retrieve the ul element from the DOM
            
            let ul = document.getElementsByTagName('ul')[0];
            
            // insert the value provided by the user multiplied by their price to generate final price
            
            price.textContent = mortar * 0.70 +
            sand * 0.10 +
            cement * 0.80 +
            redBricks * 1 +
            stoneBricks * 1.50 +
            concreteBricks * 0.90 + ' euros';
            
            ul.innerHTML = listItem;
            
    
        
   
}

let submitButton = document.getElementsByClassName('submit')[0];
submitButton.addEventListener('click', displayNumber);
