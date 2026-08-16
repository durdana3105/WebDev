let gameseq=[];
let userseq=[]

let started=false
let level=0

let btns = ["red", "yellow", "blue", "pink"];

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game has started")
        started=true

        levelUp();
    }
})


function btnflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },1000)
}
function levelUp(){
    userseq=[]
    level++;
    h2.innerText=`Level ${level}`


    //random color choose
    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor=btns[randIdx]
    let randbtn=document.querySelector(`.${randColor}`)
    console.log(randColor)
    console.log(randIdx)
    console.log(randbtn)
    gameseq.push(randColor)
    btnflash(randbtn);
}

function checkbtn(idx){
    //console.log("curr level: ",level)
    
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        console.log("same value")
    }} else{
        h2.innerHTML=`game over! your score was <b>${level}</b> <br> press any key to start.`
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },150)
       reset();
    }
}

function btnpress() {
    console.log("btn was pressed");
    let btn=this;
    btnflash(btn);
    //for lnwing the color we got after button press
   let userColor = btn.classList[1];
userseq.push(userColor);

checkbtn(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnpress)
}
function reset(){
started=false
gameseq=[]
userseq=[]
level=0
}
