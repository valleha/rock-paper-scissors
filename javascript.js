


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 30);
    if (choice < 11) {
        return "rock";}
        else if (choice < 21) {
            return "paper"; }
            else {
                return "scissors";
            }
}


let computerChoice = "";
let computerScore = 0;
let userScore = 0;



const division = document.querySelector("div");
const rock = document.createElement("button");
const paper = document.createElement("button")
const scissors = document.createElement("button")
const callToAction = document.createElement("h1");
const scoreUser = document.createElement("p");
const scoreComputer = document.createElement("p");




rock.addEventListener("click", () => { 
        computerChoice = "";
        computerChoice += getComputerChoice();

        if (computerChoice == "paper") {computerScore ++; 
            console.log("You lose! Paper beats rock!"); }
        else if (computerChoice == "scissors") {
        userScore ++;
        console.log("You win! rock beats scissors!")}
        else {console.log("It's a draw!")}
});
        


paper.addEventListener("click", () => { 
        computerChoice = "";
        computerChoice += getComputerChoice();

        if (computerChoice == "scissors") {computerScore ++; 
            console.log("You lose! Scissors beats paper!"); }
        else if (computerChoice == "rock") {
        userScore ++;
        console.log("You win! Paper beats rock!")}
        else {console.log("It's a draw!")}
    }     );

scissors.addEventListener("click", () => { 
       
        computerChoice = getComputerChoice();
   
        if (computerChoice == "rock") {computerScore ++; 
            console.log("You lose! Rock beats scissors!"); }
        else if (computerChoice == "paper") {
        userScore ++;
        console.log("You win! Scissors beats paper!")}
        else {console.log("It's a draw!")}

        
    }
                    );

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
callToAction.textContent = "Choose wisely!";
scoreUser.textContent = "User score is : " + userScore;
scoreComputer.textContent = "Computer score is : " + computerScore;



division.appendChild(callToAction);
division.appendChild(rock);
division.appendChild(paper);
division.appendChild(scissors);
division.appendChild(scoreUser)
division.appendChild(scoreComputer);


const btns = document.querySelectorAll("button");//Currently not working as intended throws addEventListener not a function error.
btns.addEventListener("click",() => {
            if (computerScore >= 5) {scoreUser.textContent = "Your score is : " + userScore;
                                    scoreComputer.textContent = "Computer score is : " + computerScore;
                                    scoreUser.textContent = "Game Over! Computer wins!";}
            else if (userScore >= 5) {scoreUser.textContent = "Your score is : " + userScore;
                                    scoreComputer.textContent = "Computer score is : " + computerScore;
                                    scoreUser.textContent = "Congratulations! You won!"}
            else {scoreUser.textContent = "User score is : " + userScore;
                    scoreComputer.textContent = "Computer score is : " + computerScore;}
}
                 )







