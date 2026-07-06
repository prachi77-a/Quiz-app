const quiz = [
{
question:"Which language is used for web pages?",
answers:["Java","Python","HTML","C++"],
correct:2
},
{
question:"Which company developed Java?",
answers:["Microsoft","Sun Microsystems","Google","Apple"],
correct:1
},
{
question:"CSS stands for?",
answers:[
"Cascading Style Sheets",
"Creative Style System",
"Computer Style Sheet",
"Color Style Sheet"
],
correct:0
}
];

let current=0;
let score=0;

const question=document.getElementById("question");
const answers=document.getElementById("answers");
const next=document.getElementById("next");
const result=document.getElementById("score");

function loadQuestion(){

answers.innerHTML="";

question.innerText=quiz[current].question;

quiz[current].answers.forEach((answer,index)=>{

const btn=document.createElement("button");

btn.innerText=answer;

btn.classList.add("answer-btn");

btn.onclick=function(){

if(index===quiz[current].correct){
score++;
}

current++;

if(current<quiz.length){
loadQuestion();
}else{
showScore();
}

}

answers.appendChild(btn);

});

}

function showScore(){

question.innerHTML="Quiz Completed";

answers.innerHTML="";

next.style.display="none";

result.innerHTML="Your Score : "+score+" / "+quiz.length;

}

loadQuestion();