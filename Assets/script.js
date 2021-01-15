
var questions = document.querySelector("#questions");
var buttonText = document.querySelector("#answers");

var startMessage = ["This is the quiz and stuff."];
var extraContent = ["Start"];

extraContent.forEach(myFunction);

function myFunction(item, index) { 
    buttonText.innerHTML += item;   
}

startMessage.forEach(myFunction1);

function myFunction1(item, index) {
    questions.innerHTML += item;
    
}

buttonText.onclick = function answerButtons() {
    var createButton = buttonText.createElement("<button>")
}
