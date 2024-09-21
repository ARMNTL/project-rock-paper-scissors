const l = console.log;

// STEP 2

// returns a random rock, paper or scissors
function getComputerChoice() {
    // get a random number from 0 to 2
    computerRandomChoice = Math.floor(Math.random() * 3);

    // if number is 0 then return rock
    if (computerRandomChoice === 0) {
        return "rock";
    }
    // else if number is 1 return paper
    else if (computerRandomChoice === 1) {
        return "paper";
    }
    // else return scissors
    else {
        return "scissors";
    }
}
// test
// l(`Computer's choice: ${getComputerChoice()}`);

// STEP 3

// get input from player
function getHumanChoice() {
    // prompt player to choose
    playerChoice = prompt(
        "Type in your choice: rock, paper or scissors"
    ).toLowerCase();

    // if choice is valid then return it
    if (
        playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissors"
    ) {
        return playerChoice;
    }
    // else ask the player to try again
    else {
        console.log("Invalid choice. Please try again.");
    }
}
// test
// l(getHumanChoice());

// STEP: 6

// play the game 5 rounds
function playGame() {
    // STEP 4

    let humanScore = 0;
    let computerScore = 0;

    // STEP 5

    // helper function to title case a word
    function titleCase(word) {
        return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
    }

    // play a round a set score accordingly
    function playRound(humanChoice, computerChoice) {
        // if player wins
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            // log winning status
            console.log(
                `You win! ${titleCase(humanChoice)} beats ${titleCase(
                    computerChoice
                )}`
            );
            // increment player score
            humanScore += 1;
        }
        // else if computer wins
        else if (
            (computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "paper" && humanChoice === "rock") ||
            (computerChoice === "scissors" && humanChoice === "paper")
        ) {
            // log losing status
            console.log(
                `You lose! ${titleCase(computerChoice)} beats ${titleCase(
                    humanChoice
                )}`
            );
            // increment computer score
            computerScore += 1;
        }
        // else it's a tie
        else {
            console.log("It's a tie!");
        }
    }

    // play 5 rounds
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    // log final results
    console.log(
        `Final Score: You: ${humanScore} points - Computer: ${computerScore} points`
    );

    // log winner
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game!");
    } else {
        console.log("Nobody won! It's a tie game!");
    }
}

playGame();
