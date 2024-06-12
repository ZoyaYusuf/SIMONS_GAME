let gameSeq=[];
let usersSeq=[];

let btns = ["red","yellow","purple","green"];

let started= false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
if(started==false){
    console.log("game has started");
    started=true;
    levelUp();
    }

});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");        
    }, 250);
}

function levelUp( ){
    level++;
    h2.innerText= `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randIdx];
    let randombtn = document.querySelector(`.${randomColor}`)
    console.log(randomColor,randIdx)
    btnflash(randombtn);
}


