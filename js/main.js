document.querySelector('button').addEventListener('click',flipCoin)

let headCount = document.querySelector('#headCount')
let tailsCount = document.querySelector('#tailsCount')
let resultText = document.querySelector('#flipResult')


if (resultText == 'HEADS'){

}

function flipCoin(){
    let flip = Math.random()
    let result
    if (flip < .5){
        result = 'HEADS'
    } else {
        result = 'TAILS'
    }
    resultText.innerText = result
}

