let number = document.getElementById("count-el")
const increaseBtn = document.getElementById("increase-btn")
const resetBtn = document.getElementById("reset-btn")
const decreaseBtn = document.getElementById("decrease-btn")
let count = 0

function decrease(){
    count -= 1
    number.textContent = count
  
}

function increase(){
    count += 1
    number.textContent = count
}

function reset(){
    count = 0
    number.textContent = count 
}