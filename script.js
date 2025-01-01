const stopButton = document.querySelector(".stop-button")
const startButton = document.querySelector(".start-button")
const resetButton = document.querySelector(".reset-button")

let number = 0
let cron
let h1 = document.querySelector("h1")

function buttonStart(){
    cron = setInterval(function () {
        number++
        h1.innerHTML = number  
    }, 1000);
}

function buttonStop(){
    clearInterval(cron)
}

function buttonReset(){
    clearInterval(cron)
    number = 0
    h1.innerHTML = number
}



startButton.addEventListener("click", buttonStart)
stopButton.addEventListener("click", buttonStop)
resetButton.addEventListener("click", buttonReset)