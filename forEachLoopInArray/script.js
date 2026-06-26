//  let arr=[2,4,7,9,6];
// arr.forEach(function printval(val)
// {
//     console.log(val);
// }
    
// );

//  let arr.forEach((val)=>{
//     console.log(val);
// })

 let array2=["delhi","pune","mumbai","calcata"]
array2.forEach((val,ind,array2)=>
{
    console.log(val,ind,array2);
})


let number=[1,2,3,,5,6];
let squreofnum=(num)=>{
    console.log(num*num);
}
number.forEach(squreofnum);