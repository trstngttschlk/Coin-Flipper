// event listener for click on flip button
document.querySelector('button').addEventListener('click',flipCoin)
// variables for elements in DOM
let headCount = document.querySelector('#headCount')
let tailsCount = document.querySelector('#tailsCount')
let resultText = document.querySelector('#flipResult')
// overview of each outcome
let headInt = 0
let tailsInt = 0
// displays results overview in DOM
headCount.innerText = headInt
tailsCount.innerText = tailsInt

// function to flip coin
function flipCoin(){
    let flip = Math.random()
    let result
    if (flip < .5){
        result = 'HEADS'
        headInt += 1
        headCount.innerText = headInt
    } else {
        result = 'TAILS'
        tailsInt += 1
        tailsCount.innerText = tailsInt
    }
    resultText.innerText = result
}