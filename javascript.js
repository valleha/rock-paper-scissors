function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 30);
    if (computerChoice >= 1 && computerChoice <= 10) {
        return "rock";}
        else if (computerChoice > 10 && computerChoice <= 20) {
            return "paper"; }
            else {
                return "scissors";
            }
}

var computerChoice = getComputerChoice();

console.log("Computer chooses " + getComputerChoice());

function getUserChoice () {
    const userChoice = prompt("Enter your choice");
    return userChoice;
}

var userChoice = getUserChoice();
console.log("Human chooses " + getUserChoice());


/*Define variables humanScore and computerScore and set to 0
 Compare computer choice and human choice
    If choice equal its a tie no score forwarded
    If human choice rock and computer paper, output plus one to computerScore
    If human choice rock and computer scissors, output plus one to humanScore
    If human choice paper and computer scissors, output plus one to computerScores
    if human choice paper and computer rock, output plus one humanScore
    if human choice scissors and computer rock, output plus one to computerScore 
    if human choice scissors and computer paper, output plus one to humanScore
Return current score "The score is " + humanScore + " to " computerScore*/

let humanScore = 0;
let computerScore = 0;

function keepScore() {
    if (userChoice == "rock" && computerChoice == "paper") {
        computerScore ++;}
    else if (userChoice == "rock" && computerChoice == "scissors") {
        humanScore ++;}
    else if (userChoice == "rock" && computerChoice == "paper") {
        computerScore ++;}
    else if (userChoice == "paper" && computerChoice == "scissors") {
        computerScore ++;}
    else if (userChoice == "paper" && computerChoice == "rock") {
        humanScore ++;}
    else if (userChoice == "rock" && computerChoice == "paper") {
        computerScore ++;}
    else if (userChoice == "scissors" && computerChoice == "rock") {
        computerScore ++;}
    else if (userChoice == "scissors" && computerChoice == "paper") {
        humanScores ++;}
    else {
        return "it's a tie";
    }
    
};
console.log(keepScore());

function tellScore() {
    return "The score is " + humanScore + " for human to " + computerScore + " for computer";
}

console.log(tellScore());

