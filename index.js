let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");



const gencompchoice = () => {
  //rock paper scissors
  const options = ["rock","paper","scissors"];
   const randIdx = Math.floor(Math.random() *3);
   return options[randIdx];
}
const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "game was draw. play again";
      msg.style.backgroundColor = "black";
}
const showWinner = (userWin,userchoice,compChoice) => {
    if(userWin){
        userscore++;
        userscorePara.innerText = userscore; 
        msg.innerText = `you win! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorePara.innerText = compscore;
        msg.innerText = `you lost! ${compChoice} beats  your ${userchoice}`;
          msg.style.backgroundColor = "red";

    }
}
const playgame = (userchoice) => {
    console.log("user choice = ",userchoice);
    //computer choice
    const compChoice = gencompchoice();
      console.log("computer choice = ",compChoice);
 if(userchoice === compChoice){
    //draw game
    drawGame();
 }
 else{
    let userWin = true;
    if(userchoice === "rock"){
        //scissors, paper
        userWin = compChoice ==="paper" ? false : true;

    }
    else if(userchoice=== "paper"){
        //comp scissors , rock
        userWin = compChoice ==="scissors" ?false : true;
    }
    else{
        userWin = compChoice ==="rock"? false : true;
    }
    showWinner(userWin,userchoice,compChoice);
 }

};
choices.forEach((choice) => {
    
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        
        playgame(userchoice);
        
    });
});