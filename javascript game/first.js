let myscore=0;
let compscore=0;
const msg=document.querySelector("#msg");
const my=document.querySelector("#my");
const comp=document.querySelector("#comp");
let choices=document.querySelectorAll(".t");
const gencompchoice=(()=>{
    let option=["rock","paper","scissors"];
    let randix=Math.floor(Math.random()*3);
    return option[randix];
})
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        msg.innerText="You win! your "+userchoice+" beats "+compchoice;
        msg.style.backgroundColor="darkgreen";
        myscore++;
        my.innerText=myscore;
    }else{
        msg.innerText="Computer win! "+compchoice+" beats your "+userchoice;
        msg.style.backgroundColor="red";
        compscore++;
        comp.innerText=compscore;
    }
}
const drawgame=()=>{
    msg.innerText="Match draw play again>>";
    msg.style.backgroundColor=" rgb(0, 0, 45)";
}

let playgame=(userchoice)=>{
    let compchoice=gencompchoice();
    console.log("userchoice=",userchoice);
    console.log("compchoice=",compchoice);
    if (userchoice === compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice === "rock"){
            userwin = compchoice ==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin = compchoice ==="scissors"?false:true;
        }else if(userchoice==="scissors"){
            userwin = compchoice ==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}
