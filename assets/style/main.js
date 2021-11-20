import {questions} from "./data.js";

// const step = document.querySelectorAll(".step");
const optionBtn = document.querySelectorAll(".option__btn");
const optionA =document.querySelector("#optionA__btn");
const optionB =document.querySelector("#optionB__btn");
const optionC =document.querySelector("#optionC__btn");
const optionD =document.querySelector("#optionD__btn");
const questionDisplay = document.querySelector(".question-display");
const startBtn = document.querySelector(".start-btn");
const nextBtn = document.querySelector(".next-btn");
const score = document.querySelector("#score");
const timer = document.querySelector(".timer");

let currentQuestion = [];
let questionNumber = 0;
let chosenAnswer = [];


// Timer
let time = timer.innerHTML;
const countDown = () =>{
  time --;
  timer.innerHTML = time;
  if (time <= 0){
    timer.innerHTML = "TIME'S UP!";
    clearInterval(countingDown);
  }
}


// Start button
const startQuestion = () =>{
  currentQuestion = questions[0];
  // document.getElementById("step-3").innerHTML = "£50,000";
  // document.getElementById("step-1").classList.add("player");
  questionDisplay.innerHTML = currentQuestion.question;
  optionA.innerHTML = currentQuestion.optionA;
  optionB.innerHTML = currentQuestion.optionB;
  optionC.innerHTML = currentQuestion.optionC;
  optionD.innerHTML = currentQuestion.optionD;
  console.log(currentQuestion)
}

// Reset button
const reset = () => {
  chosenAnswer = [];
  time = 61;
  playerScore = 0;
}

const countingDown = setInterval(countDown,1000);


// Score counter
let playerScore = score.innerHTML;
const recordScore = () =>{
  playerScore++;
  score.innerHTML = playerScore;
}

//Record answer
optionBtn.forEach((options) =>{
  options.addEventListener("click", () =>{
    chosenAnswer.push(options.value);
    if (chosenAnswer == currentQuestion.correctOption){
      playerScore++;
      score.innerHTML = playerScore;
    }
    nextQuestion()
    console.log(chosenAnswer)
})
})



// next question button
const nextQuestion = () =>{
  questionNumber++;
  chosenAnswer = [];
  currentQuestion = questions[questionNumber];
  questionDisplay.innerHTML = currentQuestion.question;
  optionA.innerHTML = currentQuestion.optionA;
  optionB.innerHTML = currentQuestion.optionB;
  optionC.innerHTML = currentQuestion.optionC;
  optionD.innerHTML = currentQuestion.optionD;
}

nextBtn.addEventListener("click",nextQuestion)
startBtn.addEventListener("click",startQuestion);
startBtn.addEventListener("click",reset);
startBtn.addEventListener("click", countDown);


