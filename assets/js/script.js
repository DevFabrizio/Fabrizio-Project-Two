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
    const mortarQty = document.getElementById("mortar-qty");
    const sandQty = document.getElementById("sand-qty");
    const cementQty = document.getElementById("cement-qty");
    const redBricksInput = document.getElementById("red-bricks");
    const stoneBricksInput = document.getElementById("stone-bricks");
    const concreteBricksInput = document.getElementById("concrete-bricks");
    const redBricksQty = document.getElementById("red-bricks-qty");
    const stoneBricksQty =document.getElementById("stone-bricks-qty") ;
    const concreteBricksQty =document.getElementById("concrete-bricks-qty") ;
    const hoursOfWorkInput = document.getElementById("hours-of-work");
    const totalCost = document.getElementById("total-cost");
      
})

 // list of functions to shift through materials, bricks and hours of work
     
function brickPage(event){

    let materialsSection = document.getElementById('materials');
    materialsSection.style.display = 'none';
    let brickType = document.getElementById('brick-type');
    brickType.style.display = 'flex';
       
}

function hoursOfWorkPage(event){
    
    let brickType = document.getElementById('brick-type');
    brickType.style.display = 'none';
    let hoursOfWork = document.getElementById('hours-of-work');
    hoursOfWork.style.display = 'flex';
    
}

function totalCostList(event){

    let hoursOfWork = document.getElementById('hours-of-work');
    hoursOfWork.style.display = 'none';
    document.getElementById('total-cost').style.display = 'flex';
    document.getElementById('final-list').style.display = 'flex';

}

function backToMainPage(event){

    document.getElementById('total-cost').style.display = 'none';
    document.getElementById('final-list').style.display = 'none';
    document.getElementById('materials').style.display = 'flex';

}

let nextButton = document.getElementsByClassName('next-button')[0];
nextButton.addEventListener("click", brickPage);

let nextButton1 = document.getElementsByClassName('next-button')[1];
nextButton1.addEventListener('click', hoursOfWorkPage);

let nextButton2 = document.getElementsByClassName('next-button')[2];
nextButton2.addEventListener('click', totalCostList);

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
// function to insert data into the list of items