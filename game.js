// Iteration 2: Generate 2 random number and display it on the screen

let number1 = document.getElementById("number1")
let number2 = document.getElementById("number2")

function generateRandomNumber(){
    let num1 = Math.round(Math.random()*100)
    let num2 = Math.round(Math.random()*100)
    
    number1 .innerHTML = num1
    number2.innerHTML = num2
}
generateRandomNumber()

// Iteration 3: Make the options button functional

let score = 0;
const greaterThan = document.getElementById("greater-than")
const equalTo = document.getElementById("equal-to")
const lesserThan = document.getElementById("lesser-than")

greaterThan.addEventListener("click" , () =>{
    if (number1.innerHTML > number2.innerHTML){
        score ++;
        resetTimer(timerId)
    }else{
        location.href = "./gameover.html"
    }
    generateRandomNumber()
})

equalTo.addEventListener("click" , () =>{
    if (number1.innerHTML === number2.innerHTML){
        score ++
    }else{
        location.href = "./gameover.html"
    }
    generateRandomNumber()
    resetTimer(timerId)
})

lesserThan.addEventListener("click" , () =>{
    if (number1.innerHTML < number2.innerHTML){
        score ++
    }else{
        location.href = "./gameover.html"
    }
    generateRandomNumber()
    resetTimer(timerId)
})

// Iteration 4: Build a timer for the game

const timer = document.getElementById("timer")
var timerId;
var time = 5;

function startTimer(){
    let time = 5;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--
        if(time == 0){
            window.location.href ="./gameover.html";
        }
        timer.innerHTML = time;
    }, 1000);

// store the score 
localStorage.setItem("squad56",score);

}

function resetTimer(hello){
    clearInterval(hello)  // we are stopping the interval loop
    startTimer()

}

startTimer()

