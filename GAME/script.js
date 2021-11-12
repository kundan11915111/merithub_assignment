var player = window.prompt('please enter your name');
document.write(player);
var score=0;
function start(){
    generate();
    setTimeout(function(){ alert(player +" your score is "+ score); }, 60000);

}
function generate(){
 
    question=document.getElementById("question");
    answer=document.getElementById("answer");
     var num1 = Math.floor((Math.random()*100));
var num2 = Math.floor((Math.random()*100)+1);
var op=['+','-','*','/'];
var opnumber = Math.round(Math.random()*4); 
var ans;
switch (opnumber){
  case 0: ans=num1+num2; break;
  case 1: ans=num1-num2; break;
  case 2: ans=num1*num2; break;
  case 3: ans=num1/num2; break;
}
question.innerHTML=num1+op[opnumber]+num2;
answer.innerHTML=ans;

question1=document.getElementById("question1");
answer1=document.getElementById("answer1");
 var num1 = Math.floor((Math.random()*100));
var num2 = Math.floor((Math.random()*10)+1);
var op=['+','-','*','/'];
var opnumber = Math.round(Math.random()*4); 
var ans;
switch (opnumber){
case 0: ans=num1+num2; break;
case 1: ans=num1-num2; break;
case 2: ans=num1*num2; break;
case 3: ans=num1/num2; break;
}
question1.innerHTML=num1+op[opnumber]+num2;
answer1.innerHTML=ans;
question2=document.getElementById("question2");
answer2=document.getElementById("answer2");
 var num1 = Math.floor((Math.random()*10));
var num2 = Math.floor((Math.random()*100)+1);
var op=['+','-','*','/'];
var opnumber = Math.round(Math.random()*4); 
var ans;
switch (opnumber){
case 0: ans=num1+num2; break;
case 1: ans=num1-num2; break;
case 2: ans=num1*num2; break;
case 3: ans=num1/num2; break;
}
question2.innerHTML=num1+op[opnumber]+num2;
answer2.innerHTML=ans;
question3=document.getElementById("question3");
answer3=document.getElementById("answer3");
 var num1 = Math.floor((Math.random()*100));
var num2 = Math.floor((Math.random()*100)+1);
var op=['+','-','*','/'];
var opnumber = Math.round(Math.random()*4); 
var ans;
switch (opnumber){
case 0: ans=num1+num2; break;
case 1: ans=num1-num2; break;
case 2: ans=num1*num2; break;
case 3: ans=num1/num2; break;
}
question3.innerHTML=num1+op[opnumber]+num2;
answer3.innerHTML=ans;
question4=document.getElementById("question4");
answer4=document.getElementById("answer4");
 var num1 = Math.floor((Math.random()*100));
var num2 = Math.floor((Math.random()*100)+1);
var op=['+','-','*','/'];
var opnumber = Math.round(Math.random()*4); 
var ans;
switch (opnumber){
case 0: ans=num1+num2; break;
case 1: ans=num1-num2; break;
case 2: ans=num1*num2; break;
case 3: ans=num1/num2; break;
}
question4.innerHTML=num1+op[opnumber]+num2;
answer4.innerHTML=ans;
question5=document.getElementById("question5");
answer5=document.getElementById("answer5");
 var num1 = Math.floor((Math.random()*100));
var num2 = Math.floor((Math.random()*100)+1);
var op=['+','-','*','/'];
var opnumber = Math.round(Math.random()*4); 
var ans;
switch (opnumber){
case 0: ans=num1+num2; break;
case 1: ans=num1-num2; break;
case 2: ans=num1*num2; break;
case 3: ans=num1/num2; break;
}
question5.innerHTML=num1+op[opnumber]+num2;
answer5.innerHTML=ans;
}

    const answernew=document.querySelectorAll(".answer");
    answernew.forEach((answer)=>{
    answernew.addEventListner('dragstart',dragStart);
    answernew.addEventListner('dragend',()=>{

    });


});
    function dragStart(ev){

    
        ev.dataTransfer.setData('text/plain', ev.target.id);
        ev.target.classname += ' hold';
        ;
    }


        const questionnew = document.getElementById("question");


    questionnew.addEventListener('dragenter', dragEnter);
    questionnew.addEventListener('dragover', dragOver);
    questionnew.addEventListener('dragleave', dragLeave);
    questionnew.addEventListener('drop', drop);



function dragEnter(ev) {
    ev.preventDefault();
    ev.target.classList.add('drag-over');
}

function dragOver(ev) {
    ev.preventDefault();
    ev.target.classList.add('drag-over');
}

function dragLeave(ev) {
    ev.target.classList.remove('drag-over');
}

function drop(ev) {
    ev.target.classList.remove('drag-over');

    
    const id = ev.dataTransfer.getData('text/plain');
    if (id=='answer') {
        ev.target.classList.add('hide');
        score=score+10;
    }

  
 
}

const questionnew1 = document.getElementById(".question1");


questionnew1.addEventListener('dragenter', dragEnter);
questionnew1.addEventListener('dragover', dragOver);
questionnew1.addEventListener('dragleave', dragLeave);
questionnew1.addEventListener('drop', drop);



function dragEnter(ev) {
ev.preventDefault();
ev.target.classList.add('drag-over');
}

function dragOver(ev) {
ev.preventDefault();
ev.target.classList.add('drag-over');
}

function dragLeave(ev) {
ev.target.classList.remove('drag-over');
}

function drop(ev) {
ev.target.classList.remove('drag-over');


const id = ev.dataTransfer.getData('text/plain');
if (id=='answer1') {
    ev.target.classList.add('hide');
    score=score+10;
}



}

const questionnew2 = document.getElementById(".question2");


questionnew2.addEventListener('dragenter', dragEnter);
questionnew2.addEventListener('dragover', dragOver);
questionnew2.addEventListener('dragleave', dragLeave);
questionnew2.addEventListener('drop', drop);



function dragEnter(ev) {
ev.preventDefault();
ev.target.classList.add('drag-over');
}

function dragOver(ev) {
ev.preventDefault();
ev.target.classList.add('drag-over');
}

function dragLeave(ev) {
ev.target.classList.remove('drag-over');
}

function drop(ev) {
ev.target.classList.remove('drag-over');


const id = ev.dataTransfer.getData('text/plain');
if (id=='answer2') {
    ev.target.classList.add('hide');
    score=score+10;
}



}

const questionnew3 = document.getElementById(".question3");


questionnew3.addEventListener('dragenter', dragEnter);
questionnew3.addEventListener('dragover', dragOver);
questionnew3.addEventListener('dragleave', dragLeave);
questionnew3.addEventListener('drop', drop);



function dragEnter(ev) {
ev.preventDefault();
ev.target.classList.add('drag-over');
}

function dragOver(ev) {
ev.preventDefault();
ev.target.classList.add('drag-over');
}

function dragLeave(ev) {
ev.target.classList.remove('drag-over');
}

function drop(ev) {
ev.target.classList.remove('drag-over');


const id = ev.dataTransfer.getData('text/plain');
if (id=='answer3') {
    ev.target.classList.add('hide');
    score=score+10;
}



}

const questionnew4 = document.getElementById(".question4");


questionnew4.addEventListener('dragenter', dragEnter);
questionnew4.addEventListener('dragover', dragOver);
questionnew4.addEventListener('dragleave', dragLeave);
questionnew4.addEventListener('drop', drop);



function dragEnter(ev) {
ev.preventDefault();
ev.target.classList.add('drag-over');
}

function dragOver(ev) {
ev.preventDefault();
ev.target.classList.add('drag-over');
}

function dragLeave(ev) {
ev.target.classList.remove('drag-over');
}

function drop(ev) {
ev.target.classList.remove('drag-over');


const id = ev.dataTransfer.getData('text/plain');
if (id=='answer4') {
    ev.target.classList.add('hide');
    score=score+10;
}



}

const questionnew5 = document.getElementById(".question5");


questionnew5.addEventListener('dragenter', dragEnter);
questionnew5.addEventListener('dragover', dragOver);
questionnew5.addEventListener('dragleave', dragLeave);
questionnew5.addEventListener('drop', drop);



function dragEnter(ev) {
ev.preventDefault();
ev.target.classList.add('drag-over');
}

function dragOver(ev) {
ev.preventDefault();
ev.target.classList.add('drag-over');
}

function dragLeave(ev) {
ev.target.classList.remove('drag-over');
}

function drop(ev) {
ev.target.classList.remove('drag-over');


const id = ev.dataTransfer.getData('text/plain');
if (id=='answer5') {
    ev.target.classList.add('hide');
    score=score+10;
}



}
    
