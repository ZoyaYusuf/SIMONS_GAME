let gameSeq=[];
let usersSeq=[];

let btns = ["red","yellow","purple","green"];

let started= false;
let level = 0;
let userColor;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
if(started==false){
    // console.log("game has started");
    started=true;
    levelUp();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");        
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");        
    }, 250);
}

function levelUp( ){
    usersSeq=[];
    level++;
    h2.innerText= `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randIdx];
    let randombtn = document.querySelector(`.${randomColor}`);
    // console.log(randomColor,randIdx);
    gameSeq.push(randomColor);
    gameflash(randombtn);
}

function checkAns(index){
    if(usersSeq[index] == gameSeq[index]){
        if(usersSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your Score was <b>${level}</b><br>Press any key to restart.`;
        document.querySelector("body").style.backgroundcolor="red";
        setTimeout(function() {
        document.querySelector("body").style.backgroundcolor="white";
        }, 150);
        Reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    usersSeq.push(userColor);
    console.log(usersSeq);
    checkAns(usersSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (b of allBtns){
    b.addEventListener("click", btnPress);
}

function Reset(){
    started==false;
    gameSeq= [];
    usersSeq= [];
    level=0;
}

//track highest score