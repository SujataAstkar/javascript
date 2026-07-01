// console.log("wellcome to our society");

let div=document.querySelector("div");
let id=div.getAttribute("id");
console.log(id);

let classname=document.querySelector("p");
console.log(classname.setAttribute("class","newclass"));

div.style.backgroundColor="yellow";
div.style.fontSize="25px";
div.innerText="wellcome";

