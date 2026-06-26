// let fullName=prompt("enter your full name without spaces");
// let username="@"+fullName+fullName.length
// console.log("username=",username);

let marks=[44,54,56,66,77];
console.log(marks);
console.log(marks.length);

let name=["rahul","kavita","priya","duhita"];
console.log(name);
console.log(name.length);

//*************************for loop on array****************** */
for(let ind=0;ind<name.length;ind++)
{
console.log(name[ind]);

}
console.log("****************************************************");
//*************************for of loop on aaray**************** */

let cities=["pune","mumbai","delhi","bengluru"];
for(let city of cities)
{
    console.log(city);
}

//create average of marks of students usinf array and for loop

let StudentMarks=[55,54,77,34,87,67];
let sum=0;
for(let val of StudentMarks)
{
    sum+=val;  //sum=sum+val;
    ave=sum/StudentMarks.length
}
console.log(`average of marks is=${ave}`);
