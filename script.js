var timeLeft = document.getElementById("countdown")

var quizTimer = 75;
var questionNumber = 0;
var score = 0;


var questions =[
    {
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts","numbers"],
        answer: "alerts"

    },

    {
        question: "The condition in an if / else statement is enclosed within____.",
        options: ["quotes", "curly brackets", "parentheses","square brackets"],
        answer: "parentheses"
    },

    {
        question: "Arrays in Javascript can be used to store____.",
        options: ["numbers and strings", "other arrays", "booleans","all of the above"],
        answer: "all of the above"
    },

    {
        question: "String Values must be enclosed within ___ when being assigned variables.",
        options: ["commas", "curly brackets", "quotes","parentheses"],
        answer: "quotes" 
    },
     
    {
        question: "A very useful tool used during devlopment and debugging for printing content to the debugger is:",
        options: ["Javascript", "terminal", "for loops","console log"],
        answer: "console log" 
     },
]
countDown();

function countDown() {
    let interval = setInterval( ()=> {
        if (quizTimer <= 75 && quizTimer >= 10) {
            timeLeft.style.color = "green";
        }
        else if (quizTimer<=9 && quizTimer >= 0) {
            timeLeft.style.color = "red";


        }
        timeLeft.innerText=quizTimer;
        quizTimer-=1;

        if(quizTimer < 0) {
            clearInterval(interval);
            alert("Time is up try again!");

        }
    }, 1000);

}
