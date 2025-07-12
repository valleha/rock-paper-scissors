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

console.log(getComputerChoice());

function getUserChoice () {
    const userChoice = prompt("Enter your choice");
    return userChoice;
}
console.log(getUserChoice());