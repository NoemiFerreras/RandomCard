document.addEventListener("DOMContentLoaded",function() {

const number = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
const suits = ["♥", "♦", "♠", "♣"];

let button = document.getElementById("button")

function cartaAleatoria() {
    let randomNumber = Math.floor(Math.random()*number.length)
    let randomSuits = Math.floor(Math.random()*suits.length)
         console.log(number[randomNumber])
         console.log(suits[randomSuits])
    let suits1 = document.getElementById("suits1")
    let suits3 = document.getElementById("suits3")
    let number1 = document.getElementById("number1")
    let number2 = document.getElementById("number2")
    let number3 = document.getElementById("number3")

    suits1.textContent = suits[randomSuits]
    suits3.textContent = suits[randomSuits]
    number1.textContent = number[randomNumber]
    number2.textContent = number[randomNumber]
    number3.textContent = number[randomNumber]

    if (suits[randomSuits] == "♥" || suits[randomSuits] == "♦️"){
        suits1.style.color="red"
        suits3.style.color="red"
        number1.style.color="red"
        number2.style.color="red"
        number3.style.color="red"
    } else{
        suits1.style.color="black"
        suits3.style.color="black"
        number1.style.color="black"
        number2.style.color="black"
        number3.style.color="black"
    }
}

button.addEventListener("click", cartaAleatoria)

setTimeout(cartaAleatoria, 1000);
setInterval(cartaAleatoria, 5000);
})

