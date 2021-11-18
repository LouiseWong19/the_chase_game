import {questions} from "./data.js";

const step = document.querySelectorAll(".step");
const optionBtn = document.querySelectorAll(".option__btn");
const optionA =document.querySelector("#optionA__btn");
const optionB =document.querySelector("#optionB__btn");
const optionC =document.querySelector("#optionC__btn");
const optionD =document.querySelector("#optionD__btn");
const questionDisplay = document.querySelector(".question-display");
const startbtn = document.querySelector(".start-btn");

let currentQuestion = [];
let questionNumber = 0;
let chosenAnswer = [];


// Print the first Question as the start button has been pressed
const startQuestion = () =>{
  currentQuestion = questions[questionNumber];
  questionDisplay.innerHTML = currentQuestion.question;
  optionA.innerHTML = currentQuestion.optionA;
  optionB.innerHTML = currentQuestion.optionB;
  optionC.innerHTML = currentQuestion.optionC;
  optionD.innerHTML = currentQuestion.optionD;
  console.log(currentQuestion)
}

startbtn.addEventListener("click",startQuestion);

// let correctAnswer = []

// for(let i = 0; i < questions.length; i++){
//   correctAnswer.push(questions[i].correctOption)
// }
// console.log(correctAnswer)


// optionBtn.forEach((options) =>{
//   options.addEventListener("click", () =>{
//     chosenAnswer === options.value
//     if (chosenAnswer === currentQuestion.correctOption){
//       alert("RIGHT")
//     } else{
//       alert("WRONG")
//     }
//     console.log(chosenAnswer)
// })
// })

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


// const isAnswer = () => {
//   if(optionA === correctAnswer){
//     alert("RIGHT")
//   } else if(optionB === correctAnswer){
//     alert("RIGHT")
//   } else if(optionC === correctAnswer){
//     alert("RIGHT")
//   } else if(optionD === correctAnswer){
//     alert("RIGHT")
//   } else {
//     alert("WRONG")
//   }
// }

// optionBtn.forEach((options) =>{
//   options.addEventListener("click", () =>{
//     chosenAnswer.push(options.value);
//     console.log(chosenAnswer)
// })
// })


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



