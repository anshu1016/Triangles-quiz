const quizdata = document.querySelector('.quiz-form');
const submitBtn = document.querySelector("#submit-answer");
const showResult = document.querySelector("#result");
const showName = document.querySelector(".name");

let links = document.querySelectorAll(".pages a");
let bodyId = document.querySelector("body").id;
 
for(let link of links){
    if(link.dataset.active == bodyId){
        link.classList.add("active");
    }
}

const showHighScore = document.querySelector("#score");
const answers = ["Right","Equilateral","Scalene","Isosceles","180","360","90","90","180","180 and 270"];
const highScores = [
    {
        "name":"Ankit",
        "scored":10,
    },{
        "name":"Rahul",
        "scored":9, 
    },{
        "name":"Shyam",
        "scored":8,
    }
]
var getName = prompt("Hi, Please enter your good name..");
showIntro();
function showIntro(){
    
    if (getName === null || !isNaN(getName)){
        alert("Invalid name, Enter your name with only string not any numbers or special characters..");
      }else{12342314
        showName.innerText = "Hello "+ getName +" , Let's begin the quiz.\n Best of Luck..";
      }
}

submitBtn.addEventListener("click",validateOptions);

function validateOptions(){
    let index = 0;
    let score = 0;
    let formResult = new FormData(quizdata)
    for(let value of formResult.values() ){
        if(value === answers[index])
        {
            
            score=score+1;
            
        }
        else{
            
            score=score-1;
            
        }
        index = index+1;
    }
    validateScore(score);
}

function validateScore(marks){
    if(marks >= 5 && marks<=7)
    {
        showResult.innerText = "Good! You scored "+marks+" \n keep Learning..";
    }
    else if(marks>=8 && marks<=10)
    {
        showResult.innerText = "Great! You scored "+marks+" \n Highest Score..";
    }
    else{
        showResult.innerText = "Oh!Oh!, you scored"+ marks+ " Fail, Keep Studying";
    }
    
}
