let userScore = 0;
let computerScore = 0;

// Function to play the game
function play(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a tie 😐";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        result = "You win 🎉";
    } else {
        computerScore++;
        result = "Computer wins 😈";
    }

    document.getElementById("user").textContent = userScore;
    document.getElementById("computer").textContent = computerScore;
    document.getElementById("result").textContent =
        `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
}

// Attach event listeners to buttons
const buttons = document.querySelectorAll(".choices button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.getAttribute("data-choice");
        play(userChoice);
    });
});