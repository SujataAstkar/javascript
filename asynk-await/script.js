function getData(dataid)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
        {
            console.log("data",dataid);
            resolve(200);
        },3000);
    });
}
// async function getWeatherData()
// {
//    await getData(1);
//    await getData(2);
//    await getData(3);
// }

(async function()
{
   await getData(1);
   await getData(2);
   await getData(3);
})();//iife funcion

console.log("helllo");
