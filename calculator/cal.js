let dis=document.querySelector(".ind");

let buttons=document.querySelectorAll(".buttons .ent")

let string="";

Array.from(buttons).forEach((button)=>{
    
    button.addEventListener("click",(b)=>{
        if(b.target.innerText==="="){
        string=eval(string);
        dis.innerText=string;
    }else if(b.target.innerText==="C"){
        string="";
        dis.innerText=string*0;
    } else{
        string=string+b.target.innerText;
        dis.innerText=string;
    }
    });
});


