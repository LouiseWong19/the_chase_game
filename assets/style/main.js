import {questions} from "./data.js";

// const step = document.querySelectorAll(".step");
const optionBtn = document.querySelectorAll(".option__btn");
const optionA =document.querySelector("#optionA__btn");
const optionB =document.querySelector("#optionB__btn");
const optionC =document.querySelector("#optionC__btn");
const optionD =document.querySelector("#optionD__btn");
const questionDisplay = document.querySelector(".question-display");
const startBtn = document.querySelector(".heading__start-btn");
const resetBtn = document.querySelector(".heading__reset-btn");
const score = document.querySelector("#score");
const timer = document.querySelector(".timer");

let currentQuestion = [];
let questionNumber = 0;
let chosenAnswer = [];
let time = 60;
let playerScore = 0;

// Timer
//let time = timer.innerHTML;
const countDown = () =>{
  time --;
  timer.innerHTML = time;
  if (time <= 0){
    timer.innerHTML = "TIME'S UP!"; 
    clearInterval(countingDown);
  }
}

const countingDown = () => {
  setInterval(countDown,1000);
}


// Start button
const startQuestion = (questionNumber) =>{
  currentQuestion = questions[questionNumber];
  questionDisplay.innerHTML = currentQuestion.question;
  optionA.innerHTML = currentQuestion.optionA;
  optionB.innerHTML = currentQuestion.optionB;
  optionC.innerHTML = currentQuestion.optionC;
  optionD.innerHTML = currentQuestion.optionD;
  console.log(currentQuestion)
}


// Score counter
//let playerScore = score.innerHTML;
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
    //console.log(chosenAnswer)
})
})


// Next question 
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

// Reset button
const reset = () => {
  chosenAnswer = [];
  time = 60;
  playerScore = 0;
  score.innerHTML = playerScore;
  questionNumber = 0;
  startQuestion(0);

}

// const reset = () => {
//   document.location.reload();
// }

startBtn.addEventListener("click",startQuestion(0));
resetBtn.addEventListener("click",reset);
startBtn.addEventListener("click", countingDown);


