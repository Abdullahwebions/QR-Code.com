const progressBar = document.querySelector(".progress-bar"),
    progressText = document.querySelector(".progress-text");

const progress = (value) => {
    const percentage = (value / time) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.innerHTML = `${value}`;
};

let questions = [],
    time = 30,
    score = 0,
    currentQuestion,
    timer;

    const startBtn = document.querySelector(".start"),
        numQuestions = document.querySelector("#num-questions"),
        category = document.querySelector("#category"),
        difficulty = document.querySelector("#difficulty"),
        timePerQuestion = document.querySelector("#time"),
        quiz = document.querySelector(".quiz"),
        startScreen = document.querySelector(".start-screen");

const startQuiz = () => {
    const num = numQuestions.value;
    cat = category.value;
    diff = difficulty.value;
    // api link
    const url = https://opentdb.com/api.php?amount-${num}
}