


// function getComputerChoice() {
//     let choice = Math.floor(Math.random() * 30);
//     if (choice < 11) {
//         return "rock";}
//         else if (choice < 21) {
//             return "paper"; }
//             else {
//                 return "scissors";
//             }
// }
// function getUserChoice () {
//     return prompt("Enter your choice").toLowerCase();
     
//}

const division = document.querySelector("div");
const rock = document.createElement("button");
const paper = document.createElement("button")
const scissors = document.createElement("button")
const callToAction = document.createElement("h1");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
callToAction.textContent = "Choose wisely!"

division.appendChild(callToAction);
division.appendChild(rock);
division.appendChild(paper);
division. appendChild(scissors);







