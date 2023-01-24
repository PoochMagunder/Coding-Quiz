let result = document.getElementById("result");
let start = document.getElementById("start-button");
let headerText = document.querySelector("h1");
let instructions = document.querySelector(".instructions");
let questions = document.querySelector(".title");
let timer = document.querySelector(".time");
instructions.textContent =
  "Once you click the start button you will have to answer as many of the provided questions as possible in the given time. Good Luck!";
headerText.textContent = "Code Quiz";
start.textContent = "Start Quiz";

//Question Variables
let question1 = {
  title1: "What does Dom mean?",
  answerChoice1: [
    "Don't offer meat",
    "Document Object Model",
    "Directory Option Maker",
    "Directive Offer Module",
  ],
  correctAnswer1: 1,
};

let question2 = {
  title2: "Where would i find a description of a webpage in a repository?",
  answerChoice2: ["JavaScript", "LICENSE", "Index", "README"],
  correctAnswer2: 3,
};

let question3 = {
  title3: "What is 'var' short for?",
  answerChoice3: ["Varsity", "Variance", "Variable", "Variform"],
  correctAnswer3: 2,
};

let question4 = {
  title4: "Which of the following is NOT a primitive data type ?",
  answerChoice4: ["String", "Cord", "Boolean", "Number"],
  correctAnswer4: 1,
};

let question5 = {
  title5: 'What is this an example of? "let expressHello = function()"',
  answerChoice5: [
    "Function Expression",
    "Function Declaration",
    "Function Aspiration",
    "Function Deconstruction",
  ],
  correctAnswer5: 0,
};

// Starts quiz
start.addEventListener("click", function () {
  showQuiz();
  setTime();
});

// Shows quiz on webpage
function showQuiz() {
 headerText.style.display = "none";
  instructions.style.display = "none";
  start.style.display = "none";

  questions.textContent = question1.title1;
  let answers = document.querySelectorAll(".answerChoice");
  answers.forEach(function (element, index) {
    element.textContent = question1.answerChoice1[index];
    element.addEventListener("click", function (event) {
      console.log(event.target.value);
      if (question1.correctAnswer1 == index) {
        result.textContent = "Correct!";
       
      } else if (question1.correctAnswer1 !== index) { 
        (result.textContent = "Wrong!");
      
      }
      showQuiz2();
    });
  });
}
function showQuiz2() {
  questions.textContent = question2.title2;
  answers = document.querySelectorAll(".answerChoice");
  answers.forEach(function (element, index) {
    element.textContent = question2.answerChoice2[index];
    element.addEventListener("click", function (event) {
      console.log(event.target.value);
      if (question2.correctAnswer2 == index) {
        result.textContent = "Correct!";
       
      } else if (question2.correctAnswer2 !== index) { 
        (result.textContent = "Wrong!");
    }
      showQuiz3();
    });
  });
}

function showQuiz3() {
  questions.textContent = question3.title3;
  answers = document.querySelectorAll(".answerChoice");
  answers.forEach(function (element, index) {
    element.textContent = question3.answerChoice3[index];
    element.addEventListener("click", function (event) {
      console.log(event.target.value);
      if (question3.correctAnswer3 == index) {
        result.textContent = "Correct!";
      } else question3.correctAnswer3 !== index, (result.textContent = "Wrong!");
      showQuiz4();
    });
  });
}

function showQuiz4() {
  questions.textContent = question4.title4;
  answers = document.querySelectorAll(".answerChoice");
  answers.forEach(function (element, index) {
    element.textContent = question4.answerChoice4[index];
    element.addEventListener("click", function (event) {
      console.log(event.target.value);
      if (question4.correctAnswer4 == index) {
        result.textContent = "Correct!";
      } else question4.correctAnswer4 !== index, (result.textContent = "Wrong!");
      showQuiz5();
    });
  });
}

function showQuiz5() {
  questions.textContent = question5.title5;
  answers = document.querySelectorAll(".answerChoice");
  answers.forEach(function (element, index) {
    element.textContent = question5.answerChoice5[index];
    element.addEventListener("click", function (event) {
      console.log(event.target.value);
      if (question5.correctAnswer5 == index) {
        result.textContent = "Correct!";
      } else question5.correctAnswer5 !== index, (result.textContent = "Wrong!");
      showResults();
    });
  });
}

let timeLeft = 50
function setTime() {
  var timerInterval = setInterval(function() {
    timeLeft--;
    timer.textContent = timeLeft;
    if(timeLeft === 0) {
      
      clearInterval(timerInterval);
      
      
    }

  }, 1000);
}

function showResults(){
questions.textContent = "Your Final Results";

result.textContent = "";
console.log(showResults);  
headerText.style.display = "initial";  
headerText.textContent = "All Done!";


}