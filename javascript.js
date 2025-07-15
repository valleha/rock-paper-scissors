

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


function playGame (){
    
    let userScore = 0;
    let computerScore = 0;
    
    function playRound(userChoice, computerChoice) {
        if (userChoice == "rock" && computerChoice == "paper") {
            computerScore ++; 
            console.log("You chose rock. Computer choses paper." + 
                "\nYou lose! Paper beats rock!"); }
        else if (userChoice == "rock" && computerChoice == "scissors") {
            userScore ++;
             console.log("You chose rock. Computer choses scissors." + 
                "\nYou win! Rock beats scissors!"); }
        else if (userChoice == "paper" && computerChoice == "scissors") {
            computerScore ++;
             console.log("You chose paper. Computer choses scissors." + 
                "\nYou lose! Scissors beats paper!"); }
        else if (userChoice == "paper" && computerChoice == "rock") {
            userScore ++;
             console.log("You chose paper. Computer choses rock." + 
                "\nYou win! Paper beats rock!"); }
        else if (userChoice == "scissors" && computerChoice == "rock") {
            computerScore ++;
             console.log("You chose scissors. Computer choses rock." + 
                "\nYou lose! Rock beats scissors!"); }
        else if (userChoice == "scissors" && computerChoice == "paper") {
            userScore ++;
             console.log("You chose scissors. Computer choses paper." + 
                "\nYou win! Scissors beats paper!"); }
        else {
             console.log("You chose " + userChoice + ". Computer choses " + computerChoice + "." + 
                "\nIt's a draw!");  }
    
    };
   
    const firstUserSelection = getUserChoice();
    const firstComputerSelection = getComputerChoice(); 
    playRound(firstUserSelection, firstComputerSelection);

    const secondUserSelection = getUserChoice();
    const secondComputerSelection = getComputerChoice();
    playRound(secondUserSelection, secondComputerSelection);

    const thirdUserSelection = getUserChoice();
    const thirdComputerSelection = getComputerChoice();
    playRound(thirdUserSelection, thirdComputerSelection);

    const fourthUserSelection = getUserChoice();
    const fourthComputerSelection = getComputerChoice();
    playRound(fourthUserSelection, fourthComputerSelection);

    const fifthUserSelection = getUserChoice();
    const fifthComputerSelection = getComputerChoice();
    playRound(fifthUserSelection, fifthComputerSelection);

    function finalScore () {
        return "The final score is: human " + userScore + " : computer " + computerScore;   
    }

    console.log(finalScore());
}

playGame();






