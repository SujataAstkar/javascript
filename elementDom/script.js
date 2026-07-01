let btn=document.createElement("button");
btn.innerText="click me!";
console.log(btn);

let div=document.querySelector("div");
// div.append(btn);
div.prepend(btn);
// div.before(btn);
// div.after(btn);


let heading=document.createElement("h1");
heading.innerHTML="<b>welcome to our website</b>"
document.querySelector("body").after(heading);
heading.remove();


let para=document.querySelector("p");
