// bigginer than 0

// let dis=document.querySelector(".ind");

// let buttons=document.querySelectorAll(".buttons .ent")

// let string="";

// Array.from(buttons).forEach((button)=>{
    
//     button.addEventListener("click",(b)=>{
//         if(b.target.innerText==="="){
//         string=eval(string);
//         dis.innerText=string;
//     }else if(b.target.innerText==="C"){
//         string="";
//         dis.innerText=string*0;
//     } else{
//         string=string+b.target.innerText;
//         dis.innerText=string;
//     }
//     });
// });


// expert 


let dis = document.querySelector(".ind");
let buttons = document.querySelectorAll(".buttons .ent");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", e => {
        const value = e.target.innerText;

        if (value === "=") {
            try {
                expression = Function('"use strict";return (' + expression + ')')();
                dis.textContent = expression;
            } catch {
                dis.textContent = "Error";
                expression = "";
            }
        } else if (value === "C") {
            expression = "";
            dis.textContent = "0";
        } else {
            expression += value;
            dis.textContent = expression;
        }
    });
});
