var statment  = document.querySelector("#statment");
var choices  = document.querySelector(".choices");
var startButton = document.querySelector("#startButton");
var answer = document.querySelector("#answer");
var time = document.querySelector("#timer");
var choiceButtons = document.querySelector(".choiceButtons")
var gameOver = document.querySelector("#gameOver")
var gameOverScore = document.querySelector("#gameOverScore")
var submitButton  = document.querySelector("#submitButton");
var initialsInput = document.querySelector("#initials")
var viewScores = document.querySelector("#scoreLink")
var highScores = document.querySelector("#highScores");
let reloadButton = document.querySelector("#reload");
let remainingSeconds = 100;


//Questions and answers
var company = ["What company developoed JavaScript?", "1. Microsoft", "2. Google", "3. Intel", "4. NetScape"];
var alertBox = ['How do you write "Hello World" in an alert box?', 'alertBox("Hello World")', ' msg("Hello World")', '3. alert("Hello World")', 'msgBox("Hello World")']
var comment = ["What symbols are used for comments?", "1. <!---->", "2. / & /**/", "3. ()", "4. #"];
var pop = ["What is the pop() method used for?", "1. Used for breaking strings apart", "2. Used to add two numbers", "3. Used to duplicate array", "4. Used to remove last element in array"];
var erros = ["What type of errors are there in JavaScript?", "1. LoadTime", "2. Runtime", "3. Logical", "4. All of the above" ];
var writeArray = ["What is the correct way to write a JavaScript array?", 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', 'var colors = ["red", "green", "blue"]', 'var colors = "red", "green", "blue"', 'var colors = (1:"red", 2:"green", 3:"blue")']



//Questions used in quiz
var questions = [company, alertBox, writeArray, pop, erros, "end"]
var correctAnswers = ["4. NetScape", "4. Used to refer to the object from where it was called", "1. / & /**/", "4. Used to remove last element in array", "4. All of the above" ];
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const button4 = document.createElement("button");




submitButton.type = "submit";
button1.id = "button1";
button2.id = "button2";
button3.id = "button3";
button4.id = "button4";

button1.classList = "choiceButtons";
button2.classList = "choiceButtons";
button3.classList = "choiceButtons";
button4.classList = "choiceButtons";
//Toggler for the high score page
function toggers(event) {
    if (highScores.style.display === "none") {
      highScores.style.display = "block";
    } else {
      highScores.style.display = "none";
    }
  }


startButton.onclick = function begin(){

    if(remainingSeconds > 0){
        setInterval(timer, 1000);
    }
    startButton.remove();
    choices.appendChild(button1)
    choices.appendChild(button2);
    choices.appendChild(button3);
    choices.appendChild(button4); 
    execute();

}

var num = 0;
//This function runs when quiz begins and goes through the array of questions
function execute(event){
    //First Question out of the array
    answers(num)
        if(event.target.innerHTML == "4. NetScape" || event.target.innerHTML == '3. alert("Hello World")' || event.target.innerHTML == 'var colors = ["red", "green", "blue"]' || event.target.innerHTML == "4. Used to remove last element in array" || event.target.innerHTML == "4. All of the above"){
                
                num++;
                if(remainingSeconds === 0){
                    num = 5
                }
                answers(num)
                answer.innerHTML = "CORRECT!";
                answer.style.color = "green";
        } else {
            
            num++;
            if(remainingSeconds === 0){
                num = 5
            }
            answers(num)
            remainingSeconds -= 10;
            answer.innerHTML = "WRONG!";
            answer.style.color = "red";
    }
    if(num > 4){
        enterInitial();
    }
    
}
 
var scoreArray = []
//This function changes over the the initia input form and enables the user to provide their initials
function enterInitial(){
    let score = remainingSeconds;
    if(score < 0){
        score = 0;
    }
    console.log(score)
    gameOver.style.display = "block";
    scoreArray.push(score);
    gameOverScore.innerHTML = `Game Over Your Score Is ${score} enter initials`;
    statment.remove();
    button1.remove();
    button2.remove();
    button3.remove();
    button4.remove();
    time.remove();
    //This function listens for the submission and then posts the score on the schreboard
     submitButton.addEventListener("click", function(event) { 
        if(initialsInput.value == ""){
            alert("Please enter initials")
        } else {
            submitButton.disabled = true;
            event.preventDefault();
            var scores = JSON.parse(localStorage.getItem("scores")) || [];
            console.log(scores);
           var submission = {
                initialsInput: initialsInput.value,
                score : score
            }
            scores.push(submission);
            console.log(scores)
            localStorage.setItem("scores", JSON.stringify(scores));
            renderData();
            function renderData(){
               var lastSubmission = JSON.parse(localStorage.getItem("scores"));
               console.log(lastSubmission)
               if(lastSubmission != null){
                   for(let i = 0; i < lastSubmission.length; i++){
                       let package = `${lastSubmission[i].initialsInput} - ${lastSubmission[i].score}`
                       let p = document.createElement("p")
                       highScores.append(package, p) 
                   }
               }
              }

        }
         })
         
         reloadButton.addEventListener("click", function(event) {
            window.location.reload();
         })
    
        }
//Function to iterate through array of questions and assign the options to the buttons
function answers(i){
        statment.innerHTML = questions[i][0];
        button1.innerHTML = questions[i][1];
        button2.innerHTML = questions[i][2];
        button3.innerHTML = questions[i][3];
        button4.innerHTML = questions[i][4];        
}

//Timer function used in game
function timer(){
    if(remainingSeconds > 0){
    remainingSeconds--;
    time.innerHTML = "Time: " + remainingSeconds; 
    }
    if(num > 4){
        return;
    }
}


