const step = document.querySelectorAll(".step");
const answer_op = document.querySelectorAll(".option__btn");
const questionDisplay = document.querySelector(".question-display");
const startbtn = document.querySelector(".start-btn");

const questions = [{question: "What colour shade was used by Nasa for its Space Shuttle suits?",
                    options: ["Worldwide White","Black Hole Blue", "International Orange", "Royal Blue"]},
    // question: "What colour shade was used by Nasa for its Space Shuttle suits?",
    // optionA: "Worldwide White",
    // optionB: "Black Hole Blue",
    // optionC: "International Orange",
    // optionD: "Royal Blue",
    // correctOption: "International Orange"},
  {
    question: "How long after the execution of Anne Boleyn did Henry VIII marry Jane Seymour?",
    options: ["11 days", "21 days", "11 months", "11 years"]},
    // optionA: "11 days",
    // optionB: "21 days",
    // optionC: "11 months",
    // optionD: "11 years"},
  {
    question: "British Summer Time begins on the last Sunday in which month?",
    options: ["February", "March", "April", "May"]},
    // optionA: "February",
    // optionB: "March",
    // optionC: "April",
    // optionD: "May"},
  {
    question: "What does the Welsh word 'sglodion' mean in English?",
    options: ["Chips", "Tea", "Cardigan", "Coins"]},
    // optionA: "Chips",
    // optionB: "Tea",
    // optionC: "Cardigan",
    // optionD: "Coins"},
  {
    question: "Street artist Banksy is originally associated with which British city?",
    options: ["London", "Sheffield", "Bristol", "Bath"]},
    // optionA: "London",
    // optionB: "Sheffield",
    // optionC: "Bristol",
    // optionD: "Bath"},
  {
    question: "What is the capital of New Zealand?",
    options: ["Auckland", "Hamilton", "Queenstown", "Wellington"]},
    // optionA: "Auckland",
    // optionB: "Hamilton",
    // optionC: "Queenstown",
    // optionD: "Wellington"},
  {
    question: "Which London Underground line has the most stations?",
    options: ["Northern Line", "Central Line", "Jubilee Line", "District Line"]},
    // optionA: "Northern Line",
    // optionB: "Central Line",
    // optionC: "Jubilee Line",
    // optionD: "District Line"}

]

let currentQuestion = [];
let optionA = [];
let optionB = [];
let optionC = [];
let optionD = [];

const startQuestion = () =>{
  currentQuestion = questions[Math.floor(Math.random()*questions.length)];
  questionDisplay.innerHTML = currentQuestion.question;

  for(i = 0; i < 4; i++){
    answer_op[i].innerHTML = currentQuestion.options[i]
  }

  console.log(currentQuestion)
}

startbtn.addEventListener("click",startQuestion);




// const displayQuestions = () => {
//   questionDisplay
// }
