//Map method
array=[1,2,3,4,5,6,7];
let newArray=array.map((val)=>{
return val*2;

})
console.log(newArray);
 
//filter method
let newArray2=array.filter((val)=>{
    return val%2===0;
})
console.log(newArray2);

//reduce mewthod 

const output=array.reduce((result,current)=>
{
    return result>current? result: current;
})
console.log(output);
