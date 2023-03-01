// variables ready to be defined after content loading

 document.addEventListener("DOMContentLoaded", function() {

     let infoIcon = document.getElementById("info-icon");
     let mortarInput = document.getElementById("mortar");
     let sandInput = document.getElementById("sand");
     let cementInput = document.getElementById("cement");
     let mortarQty = document.getElementById("mortar-qty");
     let sandQty = document.getElementById("sand-qty");
     let cementQty = document.getElementById("cement-qty");
     let redBricksInput = document.getElementById("red-bricks");
     let stoneBricksInput = document.getElementById("stone-bricks");
     let concreteBricksInput = document.getElementById("concrete-bricks");
     let redBricksQty = document.getElementById("red-bricks-qty");
     let stoneBricksQty =document.getElementById("stone-bricks-qty") ;
     let concreteBricksQty =document.getElementById("concrete-bricks-qty") ;
     let hoursOfWorkInput = document.getElementById("hours-of-work");
     let totalCost = document.getElementById("total-cost");
     let nextButton = document.getElementsByClassName("next-button");
      
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

// functions to run the quote generator
// function to insert data into the list of items