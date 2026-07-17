const URL="https://api.thecatapi.com/v1/images/0XYvRd7oD";
const getData= async()=>
{
    let responce=await fetch(URL);
    console.log(responce);
    const data=responce.json();
    console.log(data);
};