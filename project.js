let userscore = 0
let compscore = 0

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score"); 
 
const genCompChoice = () => {
    const options = [ "rock" , "paper" , "scissors"];
     const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
   if(userWin){
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `you win! your ${userChoice} beats  ${compChoice}`
    msg.style.backgroundColor = "green";
   }else{
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText = `you lose! ${compChoice} beats your  ${userChoice}`
    msg.style.backgroundColor = "red";
    
   } 
};

const playGame = (userChoice) => {
    //Generate computer choice 
    const compChoice = genCompChoice();
    // console.log ("comp choice = ", compChoice);

    if (userChoice === compChoice){
       //Draw Game 
       drawGame();
    }else{
     let userWin = true;
     if(userChoice === "rock"){
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
    }else if(userWin === "paper"){
        //rock, scissors
        userWin = compChoice === "scissor" ? false : true;
    }else {
        //rock,paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice );
    }
    
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame (userChoice);   
    });

});

