// returns a random Rock, Paper or Scissors
function getComputerChoice() {
    // get a random number from 0 to 2
    const computerRandomChoice = Math.floor(Math.random() * 3);

    // if number is 0 then return Rock
    if (computerRandomChoice === 0) {
        return "Rock";
    }
    // else if number is 1 return Paper
    else if (computerRandomChoice === 1) {
        return "Paper";
    }
    // else return Scissors
    else {
        return "Scissors";
    }
}

// main game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const details = document.querySelector(".details");
    const scores = document.querySelector(".scores");
    const winner = document.querySelector(".winner");
    const resultsContainer = document.querySelector(".results-container");
    const buttons = document.querySelectorAll("button");

    function playRound(humanChoice, computerChoice) {
        details.textContent = `You played ${humanChoice} and Computer played ${computerChoice}`;
        // if player wins
        if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            // log winning status
            details.textContent += " .You win!";
            // increment player score
            humanScore += 1;
        }
        // else if computer wins
        else if (
            (computerChoice === "Rock" && humanChoice === "Scissors") ||
            (computerChoice === "Paper" && humanChoice === "Rock") ||
            (computerChoice === "Scissors" && humanChoice === "Paper")
        ) {
            // log losing status
            details.textContent += " .You lose!";

            // increment computer score
            computerScore += 1;
        }
        // else it's a tie
        else {
            details.textContent += " .It's a TIE!";
        }
    }

    function updateResults() {
        scores.textContent = `You: ${humanScore} points - Computer: ${computerScore} points`;
    }

    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        buttons.forEach((button) => (button.disabled = true));

        const resetButton = document.createElement("button");
        resultsContainer.appendChild(resetButton);
        resetButton.textContent = "Reset Game";
        resetButton.addEventListener("click", () => {
            scores.textContent = "";
            details.textContent = "";
            winner.textContent = "";
            buttons.forEach((button) => (button.disabled = false));
            resetButton.remove();
        });
    }

    function checkForWinner() {
        if (humanScore >= 5) {
            winner.textContent = "You WON!";
            resetGame();
        } else if (computerScore >= 5) {
            winner.textContent = "You LOST!";
            resetGame();
        }
    }

    // buttons
    buttons.forEach((button) =>
        button.addEventListener("click", () => {
            playRound(button.dataset.choice, getComputerChoice());
            updateResults();
            checkForWinner();
        })
    );

    updateResults();
}

playGame();
