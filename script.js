//target
const increment = document.querySelector(".increasing");
const decrement = document.querySelector(".decreasing");
const reset = document.querySelector(".reset");



//callback function
function onIncrement(){
    let counter = document.querySelector('h1'); //select the tag to be changed
     counter.innerText = Number(counter.innerText) + 1;

}

function onDecrement(){
    let counter = document.querySelector('h1'); //select the tag to be changed
     counter.innerText = Number(counter.innerText) - 1;

}

function onReset(){
    let counter = document.querySelector('h1'); //select the tag to be changed
     counter.innerText  = 0;

}




//add event to target
increment.addEventListener('click',onIncrement);
decrement.addEventListener('click',onDecrement);
reset.addEventListener('click',onReset);
