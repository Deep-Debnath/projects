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


const display = document.querySelector(".ind");
const buttons = document.querySelectorAll(".buttons .ent");

let expression = "";

const updateDisplay = (val) => {
    display.textContent = val || "0";
    display.scrollLeft = display.scrollWidth; // scroll if too long
};

const evaluateExpression = () => {
    try {
        // Optional: Replace % with /100
        const cleaned = expression.replace(/%/g, "/100");
        const result = Function(`"use strict"; return (${cleaned})`)();
        expression = result.toString();
        updateDisplay(expression);
    } catch {
        updateDisplay("Error");
        expression = "";
    }
};

const handleInput = (value) => {
    switch (value) {
        case "=": evaluateExpression(); break;
        case "C": expression = ""; updateDisplay(""); break;
        case "⌫": expression = expression.slice(0, -1); updateDisplay(expression); break;
        default: 
            expression += value;
            updateDisplay(expression);
    }
};

// Button clicks
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const val = btn.innerText.trim();
        handleInput(val);

        // Animate press
        btn.classList.add("pressed");
        setTimeout(() => btn.classList.remove("pressed"), 150);
    });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
    const keys = {
        Enter: "=",
        Backspace: "⌫",
        Escape: "C"
    };

    let key = keys[e.key] || e.key;

    // Allow numbers, operators, brackets, etc.
    if (/^[0-9+\-*/%.()=]$/.test(key) || Object.values(keys).includes(key)) {
        e.preventDefault();
        handleInput(key);
    }
});
