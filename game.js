// Initializing global variables
const gameButton = document.querySelector("#gameButton");
const log = document.querySelector("#log");
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice ="";

//The button will initiate the game of 5 rounds of rock, paper, scissors and determine the winner
gameButton.addEventListener("click", () => {
    for (i = 1; i <= 5; i ++) {
        getHumanChoice();
        playRound();
    }
    if (humanScore > computerScore) {
        console.log("Congratulations, you win!")
    } else if (computerScore > humanScore) {
        console.log("Computer wins! Try again next time!")
    } else {
        console.log("It's a tie! Try again next time!")
    }
});

// Function getComputerChoice selects rock, paper, or scissors at random. This will be the choice the computer will make against the player.
function getComputerChoice() {
    random = Math.random();
    
    if (random <= 0.33) {
        return "rock";
    } else if (random <=0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function getHumanChoice prompts the user to select an option of rock, paper, or scissors to fight against the computer.
function getHumanChoice() {
    let choice = prompt("What's your choice between rock, paper, and scissors?")
    // Convert input to lowercase for case-insensitive comparison
    choice = choice.toLowerCase();

    // Input choice into humanChoice variable for later comparison
    if (choice === "rock") {
        humanChoice = "rock";
        console.log("Ok, you selected rock. Good choice!");
    } else if (choice === "paper") {
        humanChoice = "paper";
        console.log("Ok, you selected paper. Good choice!");
    } else if (choice === "scissors") {
        humanChoice = "scissors";
        console.log("Ok, you selected scissors. Good choice!");
    } else {
        humanChoice = "";
        console.log("Please select rock, paper, or scissors!");
    }
}

// Function playRound takes the human and computer choices as arguments, and plays a single round of rock paper scissors. Then it will determine the winner and update the score.
function playRound() {
    computerChoice = getComputerChoice();
    if (((humanChoice === "rock") && (computerChoice === "scissors")) || ((humanChoice === "paper") && (computerChoice === "rock")) || ((humanChoice === "scissors") && (computerChoice === "paper"))) {
        console.log("You win!")
        humanScore ++;
    } else if (((computerChoice === "rock") && (humanChoice === "scissors")) || ((computerChoice === "paper") && (humanChoice === "rock")) || ((computerChoice === "scissors") && (humanChoice === "paper"))) {
        console.log("Computer wins!")
        computerScore ++;
    } else {
        console.log("It's a tie!")
    }
}