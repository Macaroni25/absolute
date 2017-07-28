//variables
userName = "user";

startGame();

//newQuestion();

function enterAnswer() {
    x = document.getElementById("userBox").value;

    console.log(x + "was submitted by the user");
    document.getElementById("log").innerHTML += "<BR>" + userName + x;
}

function newQuestion() {
    gameLog = document.getElementById("log");
    gameLog.innerHTML = "Question";
}

function printQuestion(q) {
    document.getElementById("log").innerHTML += "<BR>" + q;
}

function getQuestion(type, num) {
    if (type == 0) {
        var json = require('defQuestions.json');
        obj = JSON.parse(json);
        x = obj.questions[num].text;
        console.log(x);
    }
}

function startGame() {
    gameLog = document.getElementById("log");
    getQuestion(0, 0);
}