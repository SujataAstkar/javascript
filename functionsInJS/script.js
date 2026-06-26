function myFunction()
{
    console.log("Hellow");
    console.log("welcomme ");
}
myFunction();
//******************************************** */
function myFunction2(msg)
{
console.log(msg);
}

myFunction2("i am student");
//******************************************* */

function add(x,y)
{
    console.log(x+y);
}
//******************************************* */
function add1(a,b)
{
    c=a+b;
    return c;
}
let val=add1(3,5)
console.log(val);
//******************************************** */

//ArrowFunction
const Arrowadd=(a,b)=>{
    console.log(a+b);
}

const Arrowmul=(a,b)=>{
    return a*b;
}
//  const i=Arrowmul();
//  console.log();