let player = 0;
let computer = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}



function playRound(playerSelection, computerSelection) {
    if (computerSelection == 'rock') {
        if (playerSelection == 'rock') {
            return "It's a tie!"
        }
        if (playerSelection == 'paper') {
            player++;
            return ("You won! paper beats rock!")
        }
        if (playerSelection == 'scissors') {
            computer++;
            return ("You lose! Rock beats Scissors")
        }
    }
    if (computerSelection == 'paper') {
        if (playerSelection == 'rock') {
            computer++;
            return "You Lose! paper beats rock!"
        }
        if (playerSelection == 'paper') {
            return ("It's a tie!")
        }
        if (playerSelection == 'scissors') {
            player++;
            return ("You Win! Scissors beats paper")
        }
    }
    if (computerSelection == 'scissors') {
        if (playerSelection == 'rock') {
            player++;
            return "You Win! Rock beats Scissors!"
        }
        if (playerSelection == 'paper') {
            computer++;
            return ("You Lose! Scissors beats paper")
        }
        if (playerSelection == 'scissors') {
            return ("It's a tie!")
        }
    }
}

function game() {

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        let playerSelection = window.prompt("Enter your choice: ").toLowerCase();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }

    if (player > computer) {
        return "You are the winner!"
    } else if (computer > player) {
        return "Computer is the winner!"
    } else {
        "It's a tie!"
    }
}

console.log(game());