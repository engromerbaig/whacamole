let gridSelector=document.querySelectorAll('.grid');
let squareSelector=document.querySelectorAll('.square');
let scoreSelector=document.querySelector('#score');
let timeLeftSelector=document.querySelector('#timeLeft');
let points=0;
let targetId;
let currentTime=60;
let timerId=null;


function randomSquare(){
    //first clear the mole if exists in a square
    squareSelector.forEach((square)=>{
        square.classList.remove('mole')
    })

    //now add random mole on each refresh
    let randomPostion=squareSelector[Math.floor(Math.random()*9)];
    // console.log(randomPostion);
    randomPostion.classList.add('mole');
    targetId=randomPostion.id;

    //if mole is clicked points must be added
    squareSelector.forEach(square=>{
    square.addEventListener('click', ()=>{
    if(square.id==targetId)
    {points++
    // console.log(points);
    scoreSelector.textContent=points;
    targetId=null;
}} )})

}





//now move the mole with animation hence add timer
function moveMole(){
    timerId=setInterval(randomSquare,1000);
}

moveMole();

//countdown the timer
function countdownTimer(){
currentTime--;
timeLeftSelector.innerHTML=currentTime;

if(currentTime==0){
    clearInterval(countdownTime);
    clearInterval(timerId);
    alert("GAME OVER, YOUR SCORE IS: "+points)
}
}

var countdownTime=setInterval(countdownTimer,1000);