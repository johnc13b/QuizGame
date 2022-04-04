var viewHighscores = document.querySelector("#view-highscores");
var secondsDisplay = document.querySelector("#seconds");
var timeLabel = document.querySelector(".time");
var container = document.querySelector(".container");
var headerDisplay = document.querySelector("#header");
var quizInstructions = document.querySelector("#quiz-instructions");
var startButton = document.querySelector("#start-quiz");

var interval;
var seconds = 30;
var quizQuestion;
var selectionOne;
var selectionTwo;
var selectionThree;
var selectionFour;
var line;
var answerCorrect;
var answerWrong;
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
    quizQuestion.innerHTML = "Which of the following should enclose an if/else statement?";
    selectionOne.innerHTML = "Parentheses";
    selectionTwo.innerHTML = "Curly Brackets";
    selectionThree.innerHTML = "Quotes";
    selectionFour.innerHTML = "Square Brackets";
    selectionOne.onclick = function(){
        secondQuestion();
        createLine();
        correctAns();
    }
    selectionTwo.onclick = function(){
        secondQuestion();
        subTime();
        createLine();
        wrongAns();
        subScore();
    }
    selectionThree.onclick = function(){
        secondQuestion();
        subTime();
        createLine();
        wrongAns();
        subScore();
    }
    selectionFour.onclick = function(){
        secondQuestion();
        subTime();
        createLine();
        wrongAns();
        subScore();
    }
}

function secondQuestion(){
    quizQuestion.innerHTML = "Which of the following is NOT a commonly used data type?";
    selectionOne.innerHTML = "Booleans";
    selectionTwo.innerHTML = "Strings";
    selectionThree.innerHTML = "Numbers";
    selectionFour.innerHTML = "Alerts";
    removeAns();
    selectionOne.onclick = function(){
        thirdQuestion();
        subTime();
        createLine();
        wrongAns();
        subScore();
    }
    selectionTwo.onclick = function(){
        thirdQuestion();
        subTime();
        createLine();
        wrongAns();
        subScore();
    }
    selectionThree.onclick = function(){
        thirdQuestion();
        subTime();
        createLine();
        wrongAns();
        subScore();
    }
    selectionFour.onclick = function(){
        thirdQuestion();
        createLine();
        correctAns();
    }
}

function thirdQuestion(){
    quizQuestion.innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is___.";
    selectionOne.innerHTML = "alerts";
    selectionTwo.innerHTML = "console.log";
    selectionThree.innerHTML = "Javascript";
    selectionFour.innerHTML = "Terminal/Bash";
    removeAns();
    selectionOne.onclick = function(){
        fourthQuestion();
        subTime();
        createLine();
        wrongAns();
        subScore();
    }
    selectionTwo.onclick = function(){
        fourthQuestion();
        createLine();
        correctAns();
    }
    selectionThree.onclick = function(){
        fourthQuestion();
        subTime();
        createLine();
        wrongAns();
        subScore();
    }
    selectionFour.onclick = function(){
        fourthQuestion();
        subTime();
        createLine();
        wrongAns();
        subScore();
    }
}

function fourthQuestion(){
    quizQuestion.innerHTML = "When was Javascript invented?";
    selectionOne.innerHTML = "2009";
    selectionTwo.innerHTML = "2000";
    selectionThree.innerHTML = "1997";
    selectionFour.innerHTML = "1995";
    removeAns();
    selectionOne.onclick = function(){
        fifthQuestion();
        subTime();
        createLine();
        wrongAns();
        subScore();
    }
    selectionTwo.onclick = function(){
        fifthQuestion();
        subTime();
        createLine();
        wrongAns();
        subScore();
    }
    selectionThree.onclick = function(){
        fifthQuestion();
        subTime();
        createLine();
        wrongAns();
        subScore();
    }
    selectionFour.onclick = function(){
        fifthQuestion();
        createLine();
        correctAns();
    }
}

function fifthQuestion(){
    quizQuestion.innerHTML = "Arrays in JavaScript can be used to store___.";
    selectionOne.innerHTML = "More arrays";
    selectionTwo.innerHTML = "Booleans";
    selectionThree.innerHTML = "Numbers & Strings";
    selectionFour.innerHTML = "all of the above";
    removeAns();
    selectionOne.onclick = function(){
        allDone();
        subTime();
        createLine();
        wrongAns();
        subScore();
    }
    selectionTwo.onclick = function(){
        allDone();
        subTime();
        createLine();
        wrongAns();
        subScore();
    }
    selectionThree.onclick = function(){
        allDone();
        subTime();
        createLine();
        wrongAns();
        subScore();
    }
    selectionFour.onclick = function(){
        allDone();
        createLine();
        correctAns();
    }
}

function allDone(){
    clearInterval(interval);
    removeQuizBtns();
    removeAns();
    createAllDoneElements();
    quizQuestion.innerHTML = "FINISHED!";
    scoreMessage.textContent = "Your final score is " + score;
    label.textContent = "Enter Initials: ";
    submitButton.innerHTML = "Submit";
    submitButton.onclick = function(){
        saveUser();
        highScores();
    }
}

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

function goBack(){
    removeHighscores();
    addInitialPage();
}

function removeQuizIntro(){
    headerDisplay.style.display = "none";
    quizInstructions.style.display = "none";
    startButton.style.display = "none";
}

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

function createLine(){
    line = document.createElement("hr");
    container.appendChild(line);
}

function removeAns(){ 
    setTimeout(() => {
        line.remove();
        answerCorrect.remove();
        answerWrong.remove();
    }, 500)
}

function correctAns(){
    answerCorrect = document.createElement("p");
    answerCorrect.textContent = "GREAT!";
    container.appendChild(answerCorrect);
}

function wrongAns(){
    answerWrong = document.createElement("p");
    answerWrong.textContent = "Incorrect!";
    container.appendChild(answerWrong);
}

function subTime(){
    seconds = seconds - 10;
}

function subScore(){
    score = score - 20;
}

function removeQuizBtns(){
    selectionOne.remove();
    selectionTwo.remove();
    selectionThree.remove();
    selectionFour.remove();
}

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

function saveUser(){
    user = input.value;
    localStorage.setItem("user", user);
    localStorage.setItem("score", score);
}

function hideNav(){
    viewHighscores.style.visibility = "hidden";
    secondsDisplay.style.visibility = "hidden";
    timeLabel.style.visibility = "hidden";
}

function removeAllDone(){
    scoreMessage.remove();
    label.remove();
    input.remove();
    submitButton.remove();
}

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

function removeHighscores(){
    quizQuestion.remove();
    highScoresList.remove();
    goBackBtn.remove();
    clearHsBtn.remove();
}

function addInitialPage(){
    seconds = 30;
    score = 100;
    secondsDisplay.textContent = seconds;
    viewHighscores.style.visibility = "visible";
    secondsDisplay.style.visibility = "visible";
    timeLabel.style.visibility = "visible";
    headerDisplay.style.display = "block";
    quizInstructions.style.display = "block";
    startButton.style.display = "block";
}

function viewHighscore(){
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
viewHighscores.addEventListener("click", viewHighscore);