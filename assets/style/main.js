import {questions} from "./data.js";

const step = document.querySelectorAll(".step");
const optionBtn = document.querySelectorAll(".option__btn");
const optionA =document.querySelector("#optionA__btn");
const optionB =document.querySelector("#optionB__btn");
const optionC =document.querySelector("#optionC__btn");
const optionD =document.querySelector("#optionD__btn");
const questionDisplay = document.querySelector(".question-display");
const startBtn = document.querySelector(".start-btn");
const nextBtn = document.querySelector(".next-btn");

let currentQuestion = [];
let questionNumber = 0;
let chosenAnswer = [];


// Start / Reset button
const startQuestion = () =>{
  currentQuestion = questions[0];
  questionDisplay.innerHTML = currentQuestion.question;
  optionA.innerHTML = currentQuestion.optionA;
  optionB.innerHTML = currentQuestion.optionB;
  optionC.innerHTML = currentQuestion.optionC;
  optionD.innerHTML = currentQuestion.optionD;
  console.log(currentQuestion)
}

startBtn.addEventListener("click",startQuestion);

// Check answer
optionBtn.forEach((options) =>{
  options.addEventListener("click", () =>{
    chosenAnswer.push(options.value);
    if (chosenAnswer == currentQuestion.correctOption){
      alert("RIGHT")
    } else{
      alert("WRONG")
    }
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



