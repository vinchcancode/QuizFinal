// Initialize score variable
var score = 0;

function SubmitEvent() {
    var answer = document.getElementById("question").value.toLowerCase();
    var correctAnswer = "december 13";
    var answerElement = document.getElementById("answer");
    
    if (answer === correctAnswer.toLowerCase()) {
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
}

function SubmitEvent2() {
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
}

function SubmitEvent5() {
    var answer5 = document.getElementById("question5").value.toLowerCase();
    var correctAnswer = "Scott Kingsley Swift";
    var answerElement = document.getElementById("answer5");
    
    if (answer5 === correctAnswer.toLowerCase()) {
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
}

// Function to update total score display
function updateTotalScore() {
    var totalScoreElement = document.querySelector(".box-score h2");
    totalScoreElement.textContent = "Total Score: " + score;
}

