// Initialize score variable
// Initialize score variable
var score = 0;

// Flags to track whether each question has been answered correctly
var question1Answered = false;
var question2Answered = false;
var question3Answered = false;
var question4Answered = false;
var question5Answered = false;

function SubmitEvent() {
    if (question1Answered) return; // If already answered, return early
    
    var answer = document.getElementById("question").value.toLowerCase();
    var correctAnswer = ["december 13", "december 13, 1989", "dec 13, 1989"];
    var answerElement = document.getElementById("answer");
    
    var isCorrect = false;
    for (var i = 0; i < correctAnswer.length; i++) {
        if (answer === correctAnswer[i].toLowerCase()) {
            isCorrect = true;
            break;
        }
    }
    
    if (isCorrect) {
        answerElement.textContent = "Correct! \u{2728}";
        answerElement.classList.remove("incorrect"); // Remove incorrect class
        answerElement.classList.add("correct"); // Apply correct class
        score++;
        question1Answered = true; // Set the flag to true
    } else {
        answerElement.textContent = "Incorrect. Try again!";
        answerElement.classList.remove("correct"); // Remove correct class
        answerElement.classList.add("incorrect"); // Apply incorrect class
    }
    updateTotalScore();
    document.getElementById("question").disabled = true; // Disable input field
}
// Repeat similar changes for other SubmitEvent functions...

// Function to update total score display
function updateTotalScore() {
    var totalScoreElement = document.querySelector(".box-score h2");
    totalScoreElement.textContent = "Total Score: " + score;
}


function SubmitEvent2() {
    if (question2Answered) return; // If already answered, return early
    
    var answer2 = document.getElementById("question2").value.toLowerCase();
    var correctAnswer = "Andrea Swift";
    var answerElement = document.getElementById("answer2");
    
    if (answer2 === correctAnswer.toLowerCase()) {
        answerElement.textContent = "Correct! \u{2728}";
        answerElement.classList.remove("incorrect"); // Remove incorrect class
        answerElement.classList.add("correct"); // Apply correct class
        score++;
    } else {
        answerElement.textContent = "Incorrect. Try again!";
        answerElement.classList.remove("correct"); // Remove correct class
        answerElement.classList.add("incorrect"); // Apply incorrect class
    }
    updateTotalScore();
    document.getElementById("question2").disabled = true; // Disable input field
}

function SubmitEvent3() {
    var answer3 = document.getElementById("question3").value.toLowerCase();
    var correctAnswer = "Scott Kingsley Swift";
    var answerElement = document.getElementById("answer3");
    
    if (answer3 === correctAnswer.toLowerCase()) {
        answerElement.textContent = "Correct! \u{2728}";
        answerElement.classList.remove("incorrect"); // Remove incorrect class
        answerElement.classList.add("correct"); // Apply correct class
        score++;
    } else {
        answerElement.textContent = "Incorrect. Try again!";
        answerElement.classList.remove("correct"); // Remove correct class
        answerElement.classList.add("incorrect"); // Apply incorrect class
    }
    updateTotalScore();
    document.getElementById("question3").disabled = true;
}

function SubmitEvent4() {
    var answer4 = document.getElementById("question4").value.toLowerCase();
    var correctAnswer = "speak now";
    var answerElement = document.getElementById("answer4");
    
    if (answer4 === correctAnswer.toLowerCase()) {
        answerElement.textContent = "Correct! \u{2728}";
        answerElement.classList.remove("incorrect"); // Remove incorrect class
        answerElement.classList.add("correct"); // Apply correct class
        score++;
    } else {
        answerElement.textContent = "Incorrect. Try again!";
        answerElement.classList.remove("correct"); // Remove correct class
        answerElement.classList.add("incorrect"); // Apply incorrect class
    }
    updateTotalScore();
    document.getElementById("question4").disabled = true;
}

function SubmitEvent5() {
    var answer5 = document.getElementById("question5").value.toLowerCase();
    var correctAnswer = ["Scott Kingsley Swift", "scott swift"];
    var answerElement = document.getElementById("answer5");
    
    var isCorrect = false;
    for (var i = 0; i < correctAnswer.length; i++) {
        if (answer5 === correctAnswer[i].toLowerCase()) {
            isCorrect = true;
            break;
        }
    }

    if (isCorrect) { // corrected condition
        answerElement.textContent = "Correct! \u{2728}";
        answerElement.classList.remove("incorrect"); // Remove incorrect class
        answerElement.classList.add("correct"); // Apply correct class
        score++;
    } else {
        answerElement.textContent = "Incorrect. Try again!";
        answerElement.classList.remove("correct"); // Remove correct class
        answerElement.classList.add("incorrect"); // Apply incorrect class
    }
    updateTotalScore();
    document.getElementById("question5").disabled = true;
}


// Function to update total score display
function updateTotalScore() {
    var totalScoreElement = document.querySelector(".box-score h2");
    totalScoreElement.textContent = "Total Score: " + score;
}