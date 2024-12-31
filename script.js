const stopButton = document.querySelector(".stop-button")
const startButton = document.querySelector(".start-button")

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

startButton.addEventListener("click", buttonStart)
stopButton.addEventListener("click", buttonStop)