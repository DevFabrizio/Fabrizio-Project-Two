/* jshint esversion: 6 */

 /** function to shift through materials, bricks, hours of work and final list
  * @param is set to respond to a click event */ 
 
function moveThroughSections(event) {
    // from line 6 col 35 to line 6 col 90 credit to https://www.codingem.com/
    let currentSection = document.querySelector("section:not([style*='display: none'])");
    let nextSection = currentSection.nextElementSibling;
    if (nextSection !== null){
        currentSection.style.display = 'none';
        nextSection.style.display = 'flex';
    }
}
 
let nextButton = document.getElementsByClassName ('next-button');
for (let buttons of nextButton) {
    buttons.addEventListener ('click', moveThroughSections);
}

/** function to navigate through the sections (previous page button)
 * @param is set to respond to a click event */ 

function backToPreviousPage(event) {
    // from line 23 col 35 to line 23 col 90 credit to https://www.codingem.com/
    let currentSection = document.querySelector("section:not([style*='display: none'])");
    let previousSection = currentSection.previousElementSibling;
    if (previousSection !== null){
        currentSection.style.display = 'none';
        previousSection.style.display = 'flex';
    }
}

let backButton = document.getElementsByClassName('previous-page');
for (let buttons of backButton){
    buttons.addEventListener ('click', backToPreviousPage);
}

/** function to display the alert that the data from the user has been input correctly
 * @param is set to respond to a submit event */ 

let submitForm = document.getElementById ('user-info');
function userDataAlert(event) {
    event.preventDefault ();
    alert ('The form has been submitted succesfully!');
    moveThroughSections();
    
}

submitForm.addEventListener ('submit', userDataAlert);
 
/** function to show the website instructions on all sections
 * @param is set to respond to a click event */ 

function information (event) {
    let bgImage = document.getElementById('interactive-section-bg');
    let bricksBgImage = document.getElementById('interactive-section-bg-brick');
    let infoBox = document.getElementById('info-box');
    if (infoBox.style.display === 'none'){
        infoBox.style.display = 'flex';
        bgImage.style.display = 'none';
        bricksBgImage.style.display = 'none';
    }else{
        infoBox.style.display = 'none';
        bgImage.style.display = 'block';
        bricksBgImage.style.display = 'block';
    }

}

let infoBox = document.getElementById('info-icon');
infoBox.addEventListener('click', information);

/** function to insert data in the list of items
 * @param is set to respond to a click event */ 

function displayNumber(event){
    
    let mortar = document.getElementById('mortar-quantity').value;
    let sand = document.getElementById('sand-quantity').value;
    let cement = document.getElementById('cement-quantity').value;
    let redBricks = document.getElementById('red-bricks-quantity').value;
    let stoneBricks = document.getElementById('stone-bricks-quantity').value;
    let concreteBricks = document.getElementById('concrete-bricks-quantity').value;
    let hoursOfWork = document.getElementById('total-hours').value;
    let price = document.getElementById('price');

    let listItem = `<li>${mortar} kg of mortar</li>
    <li>${sand} kg of sand</li>
    <li>${cement} kg of cement</li>
    <li>${redBricks} kg of red bricks</li>
    <li>${stoneBricks} kg of stone bricks</li>
    <li>${concreteBricks} kg of concrete bricks</li>
    <li>${hoursOfWork} hours of work</li>`;
        
    // retrieve the ul element from the DOM
        
    let ul = document.getElementsByTagName('ul')[0];
    ul.innerHTML = listItem;
        
    // insert the value provided by the user multiplied by their price to generate final price

    let addition = mortar * 0.90 +
                   sand * 0.10 +
                   cement * 0.20 +
                   redBricks * 1 +
                   stoneBricks * 1.50 +
                   concreteBricks * 0.90;

    price.textContent = addition.toFixed(1) + ' euros';
    moveThroughSections();
            
}
        
let submitButton = document.getElementsByClassName('submit')[0];
submitButton.addEventListener('click', displayNumber);
        
        
        