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
     
function nextPage(event){

    let materialsSection = document.getElementById('materials');
    materialsSection.style.display = 'none';
    
}

let nextButton = document.getElementsByClassName('next-button')[0];
nextButton.addEventListener("click", nextPage);