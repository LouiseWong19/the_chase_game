import {questions} from "./data.js";

const step = document.querySelectorAll(".step");
const optionA =document.querySelector(".optionA__btn");
const optionB =document.querySelector(".optionB__btn");
const optionC =document.querySelector(".optionC__btn");
const optionD =document.querySelector(".optionD__btn");
const questionDisplay = document.querySelector(".question-display");
const startbtn = document.querySelector(".start-btn");

let currentQuestion = [];


const startQuestion = () =>{
  currentQuestion = questions[Math.floor(Math.random()*questions.length)];
  questionDisplay.innerHTML = currentQuestion.question;
  optionA.innerHTML = currentQuestion.optionA;
  optionB.innerHTML = currentQuestion.optionB;
  optionC.innerHTML = currentQuestion.optionC;
  optionD.innerHTML = currentQuestion.optionD;
  console.log(currentQuestion)
}

startbtn.addEventListener("click",startQuestion);

let correctAnswer = []

for(let i = 0; i < questions.length; i++){
  correctAnswer.push(questions[i].correctOption)
}
console.log(correctAnswer)

// const isAnswer = () => {

// }

// const answer = answer_op.forEach((optionBtn) =>{
//   answer_op.addEventListener("click", () =>{
//     if(optionBtn === questions.correctOption){
//       alert("This is right!")
//   } else{
//     alert("WRONG")
//   }
// })
// })




// const isResult = answer_op.forEach() =>{
  
//   if (answer_op === questions.correctOption){
//     alert("This is right!")
//   } else{
//     alert("WRONG")
//   }
// }



