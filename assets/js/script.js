var viewHighscores = document.querySelector("#view-highscores");
var secondsDisplay = document.querySelector("#seconds");
var timeLabel = document.querySelector(".time");
var container = document.querySelector(".container");
var headerDisplay = document.querySelector("#header");
var quizInstructions = document.querySelector("#quiz-instructions");
var startButton = document.querySelector("#start-quiz");

var interval;
var seconds = 75;
var quizQuestion;
var selectionOne;
var selectionTwo;
var selectionThree;
var selectionFour;
var line;
var correctAnswer;
var wrongAnswer;
var scoreMessage;
var label;
var input;
var submitButton;
var highScoresList;
var goBackBtn;
var clearHsBtn;
var score = 100;
var user;
var scoreItem; 

function startTimer(){
    firstQuestion();
    interval = setInterval(function() {
        seconds--;
        secondsDisplay.textContent = seconds;
        if(seconds == 0){
            clearInterval(interval);
        }
    }, 1000);
}

function firstQuestion(){
    removeQuizIntro();
    createQuestionElements();
    quizQuestion.innerHTML = "Where in the HTML file should a JavaScript link be placed?";
    selectionOne.innerHTML = "1. Top";
    selectionTwo.innerHTML = "2. Middle";
    selectionThree.innerHTML = "3. Bottom";
    selectionFour.innerHTML = "4. Right";
    selectionOne.onclick = function(){
        secondQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    selectionTwo.onclick = function(){
        secondQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    selectionThree.onclick = function(){
        secondQuestion();
        createLine();
        correctAns();
    }
    selectionFour.onclick = function(){
        secondQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
}

function secondQuestion(){
    quizQuestion.innerHTML = "What block of code used to perform a particular task called?";
    selectionOne.innerHTML = "1. Function";
    selectionTwo.innerHTML = "2. Array";
    selectionThree.innerHTML = "3. Element";
    selectionFour.innerHTML = "4. Button";
    removeAns();
    selectionOne.onclick = function(){
        thirdQuestion();
        createLine();
        correctAns();
    }
    selectionTwo.onclick = function(){
        thirdQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    selectionThree.onclick = function(){
        thirdQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    selectionFour.onclick = function(){
        thirdQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
}

// Function to generate third question and seek a user selection to the available answers.
function thirdQuestion(){
    quizQuestion.innerHTML = "In JavaScript, what is the correct method to share something with a user?";
    selectionOne.innerHTML = "1. Prompt";
    selectionTwo.innerHTML = "2. Alert";
    selectionThree.innerHTML = "3. Confirm";
    selectionFour.innerHTML = "4. Siren";
    removeAns();
    selectionOne.onclick = function(){
        fourthQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    selectionTwo.onclick = function(){
        fourthQuestion();
        createLine();
        correctAns();
    }
    selectionThree.onclick = function(){
        fourthQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    selectionFour.onclick = function(){
        fourthQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
}

// Function to generate fourth question and seek a user selection to the available answers.
function fourthQuestion(){
    quizQuestion.innerHTML = "How do you declare a variable in JavaScript?";
    selectionOne.innerHTML = "1. variable newVariable; ";
    selectionTwo.innerHTML = "2. va Newvariable; ";
    selectionThree.innerHTML = "3. v newVariable; ";
    selectionFour.innerHTML = "4. var newVariable; ";
    removeAns();
    selectionOne.onclick = function(){
        fifthQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    selectionTwo.onclick = function(){
        fifthQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    selectionThree.onclick = function(){
        fifthQuestion();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    selectionFour.onclick = function(){
        fifthQuestion();
        createLine();
        correctAns();
    }
}

// Function to generate first question and seek a user selection to the available answers.
function fifthQuestion(){
    quizQuestion.innerHTML = "In Javascript, how do you capture an event triggered by the user?";
    selectionOne.innerHTML = "1. Alert";
    selectionTwo.innerHTML = "2. For loop";
    selectionThree.innerHTML = "3. Event listener";
    selectionFour.innerHTML = "4. While loop";
    removeAns();
    selectionOne.onclick = function(){
        allDone();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    selectionTwo.onclick = function(){
        allDone();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
    selectionThree.onclick = function(){
        allDone();
        createLine();
        correctAns();
    }
    selectionFour.onclick = function(){
        allDone();
        deductTime();
        createLine();
        wrongAns();
        deductScore();
    }
}

// Function to let user know the quiz is done, to display the score, and ask for initials to save score.
function allDone(){
    clearInterval(interval);
    removeQuizBtns();
    removeAns();
    createAllDoneElements();
    quizQuestion.innerHTML = "All done!";
    scoreMessage.textContent = "Your final score is " + score;
    label.textContent = "Enter Initials: ";
    submitButton.innerHTML = "Submit";
    submitButton.onclick = function(){
        saveUser();
        highScores();
    }
}

// Function to display highscores to user.
function highScores(){
    hideNav();
    removeAllDone();
    createHighscoresElements(); 
    clearHsBtn.onclick = function(){
        localStorage.removeItem("user");
        localStorage.removeItem("score");
        highScoresList.remove();
    }
    goBackBtn.onclick = function(){
        goBack();
    }
}

// Function to take user back to initial page after clicking the go back button.
function goBack(){
    removeHighscores();
    addInitialPage();
}

// Function to remove initial page after start quiz button is clicked.
function removeQuizIntro(){
    headerDisplay.style.display = "none";
    quizInstructions.style.display = "none";
    startButton.style.display = "none";
}

// Function to create elements to display questions to user.
function createQuestionElements(){
    quizQuestion = document.createElement("h2");
    container.appendChild(quizQuestion);
    selectionOne = document.createElement("button");
    container.appendChild(selectionOne);
    selectionTwo = document.createElement("button");
    container.appendChild(selectionTwo);
    selectionThree = document.createElement("button");
    container.appendChild(selectionThree);
    selectionFour = document.createElement("button");
    container.appendChild(selectionFour);
}

// Function to create line to display below question after user selects a response.
function createLine(){
    line = document.createElement("hr");
    container.appendChild(line);
}

// Function to remove message to user about selection being right or wrong.
function removeAns(){ 
    setTimeout(() => {
        line.remove();
        correctAnswer.remove();
        wrongAnswer.remove();
    }, 500)
}

// Function to create message to user that selection was correct.
function correctAns(){
    correctAnswer = document.createElement("p");
    correctAnswer.textContent = "Correct!";
    container.appendChild(correctAnswer);
}

// Function to create message to user that selection was wrong.
function wrongAns(){
    wrongAnswer = document.createElement("p");
    wrongAnswer.textContent = "Wrong!";
    container.appendChild(wrongAnswer);
}

// Function to deduct time from timer when user selects wrong answer.
function deductTime(){
    seconds = seconds - 10;
}

// Function to deduct points from score when user selects wrong answer.
function deductScore(){
    score = score - 20;
}

// Function to remove quiz buttons after last question is shown to user.
function removeQuizBtns(){
    selectionOne.remove();
    selectionTwo.remove();
    selectionThree.remove();
    selectionFour.remove();
}

// Function to create elements to display to user after all quiz questions are answered.
function createAllDoneElements(){
    scoreMessage = document.createElement("p");
    container.appendChild(scoreMessage);
    label = document.createElement("label");
    container.appendChild(label);
    input = document.createElement("input");
    container.appendChild(input);
    submitButton = document.createElement("button");
    submitButton.style.display = "inline";
    submitButton.style.marginLeft = "5px";
    container.appendChild(submitButton);
}

// Function to save user initials and score to browser.
function saveUser(){
    user = input.value;
    localStorage.setItem("user", user);
    localStorage.setItem("score", score);
}

// Function to hide nav elements when users is shown highscores.
function hideNav(){
    viewHighscores.style.visibility = "hidden";
    secondsDisplay.style.visibility = "hidden";
    timeLabel.style.visibility = "hidden";
}

// Function to remove elements user sees after answering last question.
function removeAllDone(){
    scoreMessage.remove();
    label.remove();
    input.remove();
    submitButton.remove();
}

// Function to create elements displayed to user when looking at highscores.
function createHighscoresElements(){
    quizQuestion.innerHTML = "Highscores";
    highScoresList = document.createElement("ol");
    highScoresList.style.backgroundColor = "lightgray";
    container.appendChild(highScoresList);
    scoreItem = document.createElement("li");
    scoreItem.textContent = localStorage.getItem("user") + "-" + localStorage.getItem("score");
    highScoresList.appendChild(scoreItem);
    goBackBtn = document.createElement("button");
    goBackBtn.innerHTML = "Go Back";
    goBackBtn.style.display = "inline";
    goBackBtn.style.marginRight = "5px";
    container.appendChild(goBackBtn);
    clearHsBtn = document.createElement("button");
    clearHsBtn.innerHTML = "Clear Highscores";
    clearHsBtn.style.display = "inline";
    container.appendChild(clearHsBtn);
}

// Function to remove elements displayed to user when looking at highscores,
function removeHighscores(){
    quizQuestion.remove();
    highScoresList.remove();
    goBackBtn.remove();
    clearHsBtn.remove();
}

// Function to add initial page after user clicks button to go back.
function addInitialPage(){
    seconds = 75;
    score = 100;
    secondsDisplay.textContent = seconds;
    viewHighscores.style.visibility = "visible";
    secondsDisplay.style.visibility = "visible";
    timeLabel.style.visibility = "visible";
    headerDisplay.style.display = "block";
    quizInstructions.style.display = "block";
    startButton.style.display = "block";
}

function viewHighscores(){
    hideNav();
    removeQuizIntro();
    quizQuestion = document.createElement("h2");
    container.appendChild(quizQuestion);
    createHighscoresElements(); 
    clearHsBtn.onclick = function(){
        localStorage.removeItem("user");
        localStorage.removeItem("score");
        highScoresList.remove();
    }
    goBackBtn.onclick = function(){
        goBack();
    }
}

startButton.addEventListener("click", startTimer);
viewHighscores.addEventListener("click", viewHighscores);