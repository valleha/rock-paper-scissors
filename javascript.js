

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

const computerChoice = getComputerChoice();

console.log("Computer chooses " + computerChoice);


function getUserChoice () {
    return prompt("Enter your choice");
     
}

const userChoice = getUserChoice();
console.log("Human chooses " + userChoice);


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

let userScore = 0;
let computerScore = 0;

function keepScore() {
    if (userChoice == "rock" && computerChoice == "paper") {
        computerScore ++;}
    else if (userChoice == "rock" && computerChoice == "scissors") {
        userScore ++;}
    else if (userChoice == "paper" && computerChoice == "scissors") {
        computerScore ++;}
    else if (userChoice == "paper" && computerChoice == "rock") {
        userScore ++;}
    else if (userChoice == "scissors" && computerChoice == "rock") {
        computerScore ++;}
    else if (userChoice == "scissors" && computerChoice == "paper") {
        userScore ++;}
    else {
        return "it's a tie";
    }
    
};
console.log(keepScore());

function tellScore() {
    return "The score is: human " + userScore + " : computer " + computerScore;
}

console.log(tellScore());

