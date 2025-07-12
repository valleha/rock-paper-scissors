function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 30);
    if (computerChoice >= 1 && computerChoice <= 10) {
        return "Rock";}
        else if (computerChoice > 10 && computerChoice <= 20) {
            return "Paper"; }
            else {
                return "Scissors";
            }
}

console.log(getComputerChoice());