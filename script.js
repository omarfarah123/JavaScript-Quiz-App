var statment  = document.querySelector("#statment");
var choices  = document.querySelector(".choices");
var startButton = document.querySelector("#startButton");
var answer = document.querySelector("#answer");
var time = document.querySelector("#timer");

let remainingSeconds = 100;
var num = 0;



var company = ["What company developoed JavaScript?", "1. Microsoft", "2. Google", "3. Intel", "4. NetScape"];
var thisKeyword = ["What is the this keyword?", "1. A keyword for creating new datatypes", "2. Used for adding more data to array", "3. Used for CSS flexbox", "4. Used to refer to the object from where it was called"];
var comment = ["What symbols are used for comments?", "1. / & /**/", "2. <!---->", "3. ()", "4. #"];
var pop = ["What is the pop() method used for?", "1. Used for breaking strings apart", "2. Used to add two numbers", "3. Used to duplicate array", "4. Used to remove last element in array"];
var erros = ["What type of errors are there in JavaScript?", "1. LoadTime", "2. Runtime", "3. Logical", "4. All of the above" ];
var alertBox = ['How do you write "Hello World" in an alert box?', 'alertBox("Hello World")', ' msg("Hello World")', ' alert("Hello World")', 'msgBox("Hello World")']
var writeArray = ["What is the correct way to write a JavaScript array?", 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', 'var colors = ["red", "green", "blue"]', 'var colors = "red", "green", "blue"', 'var colors = (1:"red", 2:"green", 3:"blue")']




var questions = [company, thisKeyword, comment, pop, erros]
var correctAnswers = ["4. NetScape", "4. Used to refer to the object from where it was called", "1. / & /**/", "4. Used to remove last element in array", "4. All of the above" ];
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const button4 = document.createElement("button");
const formBox = document.createElement("form");
const textBox = document.createElement("input")
const submitButton = document.createElement("input");

textBox.name = "initial";
textBox.type = "text"

submitButton.type = "submit";


button1.className = "choiceButtons";
button2.className = "choiceButtons";
button3.className = "choiceButtons";
button4.className = "choiceButtons";

var choiceButtons = document.querySelector(".choiceButtons")

startButton.onclick = function begin(){
    if(remainingSeconds > 0 || num < 7){
        setInterval(timer, 1000);
    }
    startButton.replaceWith(button1);
    choices.appendChild(button2);
    choices.appendChild(button3);
    choices.appendChild(button4);
    execute();
}

function execute(){
    var num = 0;
    answers(num)
    button1.addEventListener("click", function () {
        num++;
        answers(num)
        remainingSeconds -= 10;
        answer.innerHTML = "WRONG";
        answer.style.color = "red";
        button1.addEventListener("click", function () {
            num--;
            num++;
            answers(num)
            remainingSeconds -= 10;
            answer.innerHTML = "WRONG";
            answer.style.color = "red";
            button1.addEventListener("click", function () {
                num--;
                num++;
                answers(num)
                answer.innerHTML="CORRECT"
                answer.style.color = "green"
                button1.addEventListener("click", function () {
                    num--;
                    num++;
                    answers(num)
                    remainingSeconds -= 10;
                    answer.innerHTML = "WRONG";
                    answer.style.color = "red"
                        button1.addEventListener("click", function () {
                        num--;
                        answer.innerHTML = "WRONG";
                        answer.style.color = "red"
                        enterInitial()
                        })
                })
            })
        })
    })
    button2.addEventListener("click", function () {
        num++;
        answers(num)
        remainingSeconds -= 10;
        answer.innerHTML = "WRONG";
        answer.style.color = "red"
        button2.addEventListener("click", function () {
            num--;
            num++;
            answers(num)
            remainingSeconds -= 10;
            answer.innerHTML = "WRONG";
            answer.style.color = "red"
            button2.addEventListener("click", function () {
                num--;
                num++;
                answers(num)
                remainingSeconds -= 10;
                answer.innerHTML = "WRONG";
                answer.style.color = "red"
                button2.addEventListener("click", function () {
                    num--;
                    num++;
                    answers(num)
                    remainingSeconds -= 10;
                    answer.innerHTML = "WRONG";
                    answer.style.color = "red"
                        button2.addEventListener("click", function () {
                            num--;
                            answer.innerHTML = "WRONG";
                            answer.style.color = "red"
                            enterInitial()
                        })
                })
            })
        })
    })
    button3.addEventListener("click", function () {
        num++;
        answers(num)
        remainingSeconds -= 10;
        answer.innerHTML = "WRONG";
        answer.style.color = "red"
        button3.addEventListener("click", function () {
            num--;
            num++;
            answers(num)
            remainingSeconds -= 10;
            answer.innerHTML = "WRONG";
            answer.style.color = "red"
            button3.addEventListener("click", function () {
                num--;
                num++;
                answers(num)
                remainingSeconds -= 10;
                answer.innerHTML = "WRONG";
                answer.style.color = "red"
                button3.addEventListener("click", function () {
                    num--;
                    num++;
                    answers(num)
                    remainingSeconds -= 10;
                    answer.innerHTML = "WRONG";
                    answer.style.color = "red"
                    button3.addEventListener("click", function () {
                        num--;
                        answer.innerHTML = "WRONG";
                        answer.style.color = "red";
                        enterInitial()
                    })
                })
            })
        })
    })
    button4.addEventListener("click", function () {
        num++;
        answers(num)
        answer.innerHTML="CORRECT"
        answer.style.color = "green"
        button4.addEventListener("click", function () {
            num--;
            num++;
            answers(num)
            answer.innerHTML="CORRECT"
            answer.innerHTML.style.color = "green"
            button4.addEventListener("click", function () {
                num--;
                num++;
                answers(num)
                remainingSeconds -= 10;
                answer.innerHTML = "WRong";
                answer.style.color = "red";
                button4.addEventListener("click", function () {
                    num--;
                    num++;
                    answers(num)
                    answer.innerHTML="CORRECT"
                    answer.style.color = "green"
                    button4.addEventListener("click", function () {
                        num--;
                        answer.innerHTML="CORRECT"
                        answer.style.color = "green"
                        enterInitial()
                    })
                })
            })
        })
    })
}

function enterInitial(){
    let score = remainingSeconds;
    statment.children.innerHTML = "GAME OVER enter initials below";
    choices.children.replaceWith(textBox);
    choices.appendChild(submitButton);
}

function answers(i){
        statment.innerHTML = questions[i][0];
        button1.innerHTML = questions[i][1];
        button2.innerHTML = questions[i][2];
        button3.innerHTML = questions[i][3];
        button4.innerHTML = questions[i][4];       
}


function timer(){
    if(remainingSeconds > 0){
    remainingSeconds--;
    time.innerHTML = "Time: " + remainingSeconds; 
    }
}
begin()

