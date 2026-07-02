let btn1=document.querySelector("#btn1");

// btn1.onclick=()=>
// {
//     console.log("button is clicked");
// };

const handler3=()=>{
    console.log("button is clicked-handler3");
}

btn1.addEventListener("click",()=>{
    console.log("button is clicked - handeler1");
})

btn1.addEventListener("click",()=>{
    console.log("button is clicked-handler2");
})

btn1.addEventListener("click",handler3);
btn1.removeEventListener("click",handler3);

btn1.addEventListener("click",()=>{
    console.log("button is clicked-handler4");
})