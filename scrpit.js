let userscore = 0;
let compscore =0;

const choices = document.querySelectorAll(".choice");
const title = document.querySelector(".choosetitle");
const quote = document.querySelector(".quote")
const userpoints = document.querySelector("#userscore");
const comppoints = document.querySelector("#compscore");
const winnerboard = document.querySelector(".winnerboard");

const gencompchoice = () =>{
    const options = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}
const showwinner = (userwin) => {
    if(userwin){
        userscore++;
        userpoints.innerText = userscore;
        title.innerText = "You Win!";
        title.style.color = "#2d7a5a";
        quote.innerText = "Brilliant move!";
        quote.style.color = "#2d7a5a";
        winnerboard.style.backgroundColor = "#bee8e8";   
    }
    else{
        compscore++;
        comppoints.innerText = compscore;
        title.innerText = "You Lose!";
        title.style.color = "#9b3a5a";
        quote.innerText = "Better luck next time!";
        quote.style.color = "#9b3a5a";
        winnerboard.style.backgroundColor = "#f1d2e7";
    }
}
const drawgame = () => {
    console.log("drawgame");
    title.innerText = "It's a Draw!";
    quote.innerText = "Great minds think alike!";
    winnerboard.style.backgroundColor = "#f2e2c4";

}
const playgame = (userchoice) => {
    const compchoice = gencompchoice();
    console.log(compchoice);
    if(userchoice === compchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "scissors"?true:false; 
        }else if(userchoice === "paper"){
            userwin = compchoice === "rock"?true:false;
        }else{
            userwin = compchoice === "paper"?true:false;
        }
        showwinner(userwin);

    }
    
}

choices.forEach((choice) => {
  choice.addEventListener("click",() =>{
    const userchoice = choice.getAttribute("id");
    console.log(userchoice);
    playgame(userchoice);
  });  
});