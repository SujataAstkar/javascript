let btn1=document.querySelector("button");
let body= document.querySelector("body")
let currentmode="light";

btn1.addEventListener("click",()=>
{
    if(currentmode==="light")
    {
        currentmode="dark";
        body.style.backgroundcolor="black";
    
    }
    else
    {

        currentmode="light";
        body.style.backgroundColor="white";

    
    document.querySelector("body").style.backgroundcolor="white";

    }
    console.log(currentmode);

});