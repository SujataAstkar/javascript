// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+" welcome";

let divs=document.querySelectorAll(".box");
// divs[0].innerText="new text 1";
// divs[1].innerText="new text 2";
// divs[2].innerText="new text 3";

let ind=1;
for(div of divs)
{
    div.innerText=` new vale is${ind}`;
    ind++;
}