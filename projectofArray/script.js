let Arr=[77,98,93,55,87,90,65]

let newarray=Arr.filter((val)=>{
    return val>90;
})
console.log(newarray);

//****************************************************** */

let n=prompt("enter the number");
Arr2=[];
for(let i=1;i<=n;i++)
{
    Arr2[i-1]=i;

}
console.log(Arr2);

let sum=Arr2.reduce((result,current)=>
{
    return result+current;
});
console.log(sum);

let factorial=Arr2.reduce((pre,curr)=>
{
return pre*curr;

});
console.log(factorial);