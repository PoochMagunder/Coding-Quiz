let result = document.getElementById("result");
let start = document.getElementById("start-button");
let headerText = document.querySelector("h1");
let instructions = document.querySelector(".instructions");
instructions.textContent =
  "Once you click the start button you will have to answer as many of the provided questions as possible in the given time. Good Luck!";
headerText.textContent = "Code Quiz";
start.textContent = "Start Quiz";

//Question Variables
let question1 = {
  title: "What does Dom mean?",
  answerChoice: [
    "Don't offer meat",
    "Document Object Model",
    "Directory Option Maker",
    "Directive Offer Module",
  ],
  correctAnswer: 1,
};

let question2 = {
  title: "Where would i find a description of a webpage in a repository?",
  answerChoice: ["JavaScript", "LICENSE", "Index", "README"],
  correctAnswer: 3,
};

let question3 = {
  title: "What is var short for?",
  answerChoice: ["Varsity", "Variance", "Variable", "Variform"],
  correctAnswer: 2,
};

let question4 = {
  title: "Which of the following is NOT a primitive data type ?",
  answerChoice: ["String", "Cord", "Boolean", "Number"],
  correctAnswer: 2,
};

let question5 = {
  title: 'What is this an example of? "let expressHello = function()"',
  answerChoice: [
    "Function Expression",
    "Function Declaration",
    "Function Aspiration",
    "Function Deconstruction",
  ],
  correctAnswer: 1,
};

// Starts quiz
start.addEventListener("click", function () {
  showQuiz();
});


// Shows quiz on webpage
function showQuiz() {
  headerText.style.display = "none";
  instructions.style.display = "none";
  start.style.display = "none";
  let questions = document.querySelector(".title");
  questions.textContent = question1.title;

  let answers = document.querySelectorAll(".answerChoice");
  answers.forEach(function (element, index) {
    element.textContent = question1.answerChoice[index];
    element.addEventListener("click", function (event) {
      console.log(event.target.value);
      if (question1.correctAnswer == index) {
        result.textContent = "Correct!";
      } else question1.correctAnswer !== index, (result.textContent = "Wrong!");
    });
  });
}
