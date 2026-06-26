let name=["raj","sonal","sameer","priya"];
console.log(name);
name.push("kajal","vishu");//push method

let deleteditem=name.pop();//pop method
console.log("deleted item=",deleteditem);
console.log(name.toString());

 
let marks=[66,78,54,66,89];
console.log(marks.toString());

let fruits1=["banana","apple","kivi"];
let fruits2=["mango","grapes"];
let allfruits=fruits1.concat(fruits2);// concat method
console.log(allfruits);

allfruits.unshift("pear");

console.log(allfruits);
let itemdeleted=allfruits.shift();
console.log(itemdeleted);
console.log(allfruits);

let arr=[1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);
// console.log(arr);

// arr.splice(1,1,0);
// console.log(arr);

// let subArr=arr.slice(0,3)
// console.log(subArr);

arr.splice(4);
console.log(arr);
