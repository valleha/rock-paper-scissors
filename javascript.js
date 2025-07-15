

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

function getUserChoice () {
    return prompt("Enter your choice").toLowerCase();
     
}


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

function playRound(userChoice, computerChoice) {
    if (userChoice == "rock" && computerChoice == "paper") {
        computerScore ++; 
        console.log("You lose! Paper beats rock!"); }
    else if (userChoice == "rock" && computerChoice == "scissors") {
        userScore ++;
        console.log("You win! rock beats scissors!")}
    else if (userChoice == "paper" && computerChoice == "scissors") {
        computerScore ++;
        console.log("You lose! scissors beats paper!")}
    else if (userChoice == "paper" && computerChoice == "rock") {
        userScore ++;
        console.log("You win! Paper beats rock!")}
    else if (userChoice == "scissors" && computerChoice == "rock") {
        computerScore ++;
        console.log("You lose! rock beats scissors!")}
    else if (userChoice == "scissors" && computerChoice == "paper") {
        userScore ++;
        console.log("You win! scissors beats paper!")}
    else {
        console.log("It's a draw!");

    }
    
};
const userSelection = getUserChoice();
const computerSelection = getComputerChoice();
console.log("You chose " + userSelection);
console.log("Computer chose " + computerSelection);
playRound(userSelection, computerSelection);


