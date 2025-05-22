let currl='https://v6.exchangerate-api.com/v6/c0365f50424c8f0c3ab55dd0/latest';

let dropdown=document.querySelectorAll(".dropdown select");
let btn=document.querySelector("button");
let val=document.querySelector(".container input");

let fromCurr=document.querySelector(".from1 select");

let toCurr=document.querySelector(".from2 select");

let enter=document.querySelector(".entry");
let msg=document.querySelector("#msg");


for(let select of dropdown){
    for(code in countryList){
    let newoption=document.createElement("option");
    newoption.innerText=code;
    newoption.value=code;
    
    if(select.name==="from"&& code==="USD"){
        newoption.selected="selected";
    }else if(select.name==="to"&& code==="INR"){
        newoption.selected="selected";
    }
    select.append(newoption);   
}
select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    });
}

let updateflag=(element)=>{
    let currcode=element.value;
    let contrycode=countryList[currcode];
    let flag=`https://flagsapi.com/${contrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=flag;
};
btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount=val.value;
    // console.log(amount)
    if(amount===""||amount <1){
        amount=1;
        val.value="1";
    }
    let url= `${currl}/${fromCurr.value}`;
    let response=await fetch(url);
    let data=await response.json();
    // console.log(data.conversion_rates[toCurr.value])
    let a=enter.value;
    let b=fromCurr.value;
    let c=enter.value*data.conversion_rates[toCurr.value];
    let d=toCurr.value;
    msg.innerText=`${a}   ${b}   =   ${c}   ${d}`;
});
