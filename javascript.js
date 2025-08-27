

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



playGame();






