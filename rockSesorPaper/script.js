let userscore=0;
let comscore=0;

const choices = document.querySelectorAll(".choice");
userScorePara=document.querySelector("#user-score");
compScorePara=document.querySelector("#com-score");


const genComchoice=()=>
{
  const option=["rock","sesor","paper"];
  const randomIdx=Math.floor(Math.random()*3);
  return option[randomIdx];

}
const playgame=(userchoice)=>
{
    console.log("user choice is",userchoice);
    const comchoice=genComchoice();
    console.log("computer choice is",comchoice);
  
    if(userchoice===comchoice)
    {
        console.log("game is draw")
    }
    else{
          let userwin=true;
        if(userchoice==="rock")  //sesor/papaer
        {
          userwin=comchoice==="paper"?false:true;
        }
        else if(userchoice==="sesor")  //paper/rock
        {
        userwin=comchoice==="rock"?false:true;
        }
        else{
            userwin=comchoice==="sesor"?false:true;
        }//sesor/rock
         if(userwin)
             {
            console.log("you win");
            userscore++;
            userScorePara.innerText=userscore;

             }
        else{
        console.log("you lose");
        comscore++;
        compScorePara.innerText=comscore;

     }
    
     }
    
}

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id");
    //   console.log("choice was clicked ",choiceID);
    playgame(userchoice);

    })

  })