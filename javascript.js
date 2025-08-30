


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

// function getUserChoice () {
//     return prompt("Enter your choice").toLowerCase();
//      }
let computerChoice = "";
let computerScore = 0;
let userScore = 0;

// function playRound(userChoice, computerChoice) {
//     if (userChoice == "rock" && computerChoice == "paper") {
//         computerScore ++; 
//         console.log("You lose! Paper beats rock!"); }
//     else if (userChoice == "rock" && computerChoice == "scissors") {
//         userScore ++;
//         console.log("You win! rock beats scissors!")}
//     else if (userChoice == "paper" && computerChoice == "scissors") {
//         computerScore ++;
//         console.log("You lose! scissors beats paper!")}
//     else if (userChoice == "paper" && computerChoice == "rock") {
//         userScore ++;
//         console.log("You win! Paper beats rock!")}
//     else if (userChoice == "scissors" && computerChoice == "rock") {
//         computerScore ++;
//         console.log("You lose! rock beats scissors!")}
//     else if (userChoice == "scissors" && computerChoice == "paper") {
//         userScore ++;
//         console.log("You win! scissors beats paper!")}
//     else {
//         console.log("It's a draw!");

//     }
// };

const division = document.querySelector("div");
const rock = document.createElement("button");
const paper = document.createElement("button")
const scissors = document.createElement("button")
const callToAction = document.createElement("h1");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
callToAction.textContent = "Choose wisely!"

rock.addEventListener("click", () => { 
        computerChoice = "";
        computerChoice += getComputerChoice();
        console.log(computerChoice)

        if (computerChoice == "paper") {computerScore ++; 
            console.log("You lose! Paper beats rock!"); }
        else if (computerChoice == "scissors") {
        userScore ++;
        console.log("You win! rock beats scissors!")}
        else {console.log("It's a draw!")}
    }
                    )

paper.addEventListener("click", () => { 
        computerChoice = "";
        computerChoice += getComputerChoice();
        console.log(computerChoice)

        if (computerChoice == "scissors") {computerScore ++; 
            console.log("You lose! Scissors beats paper!"); }
        else if (computerChoice == "rock") {
        userScore ++;
        console.log("You win! Paper beats rock!")}
        else {console.log("It's a draw!")}
    }
                    )

scissors.addEventListener("click", () => { 
        computerChoice = "";
        computerChoice += getComputerChoice();
        console.log(computerChoice)

        if (computerChoice == "rock") {computerScore ++; 
            console.log("You lose! Rock beats scissors!"); }
        else if (computerChoice == "paper") {
        userScore ++;
        console.log("You win! Scissors beats paper!")}
        else {console.log("It's a draw!")}
    }
                    )


division.appendChild(callToAction);
division.appendChild(rock);
division.appendChild(paper);
division. appendChild(scissors);








