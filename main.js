/*
 * This function will make the computer choose either rock, paper
 * or scissors randomly.
 */
function computerPlay() {
    let random_no = Math.random() * 3;
    random_no = Math.ceil(random_no);
    let computerResult;
    if (random_no == 1) {
        computerResult = "Rock";
    } else if(random_no == 2) {
        computerResult = "Paper";
    } else {
        computerResult = "Scissors";
    }
    return computerResult;
}

/*
 * this function will play through a single round of rock, paper,
 * scissors. 
 */
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let didPlayerWin = false;
    if(playerSelection=="rock" && computerSelection=="paper") {
        console.log("You lose! Paper beats Rock!");
    } else if(playerSelection=="rock" && computerSelection=="scissors") {
        console.log("You win! Rock beats Scissors!");
        didPlayerWin = true;
    } else if(playerSelection=="rock" && computerSelection=="rock") {
        console.log("DRAW!");
    } else if(playerSelection=="paper" && computerSelection=="scissors") {
        console.log("You Lose! Scissors beats Paper!");
    } else if(playerSelection=="paper" && computerSelection=="rock") {
        console.log("You win! Paper beats Rock!");
        didPlayerWin = true;
    } else if(playerSelection=="paper" && computerSelection=="paper") {
        console.log("DRAW!");
    } else if(playerSelection=="scissors" && computerSelection=="scissors") {
        console.log("DRAW!");
    } else if(playerSelection=="scissors" && computerSelection=="rock") {
        console.log("You Lose! Rock beats scissors");
    } else if(playerSelection=="scissors" && computerSelection=="paper") {
        console.log("You win! Scissors beats Paper!");
        didPlayerWin = true;
    } else {
        console.log("something is wrong!");
    }
    return didPlayerWin;
}

/*
 * this function will run other functions and will allow the user to play
 * five rounds of the game. Then will calculate the score and will decide
 * if you the player wins or loses.
 */
function game() {
    let scoresP = 0;
    let scoresC = 0;
    for(let i=0; i<5; i++) {
        let user_input = prompt("Enter your choice!");
        let computer_input = computerPlay();
        if(playRound(user_input, computer_input)) {
            scoresP++;
        }else{
            scoresC++;
        }
    }
    console.log("---------------");
    if(scoresP > scoresC) {
        console.log("You win!");
    } else if(scoresP < scoresC) {
        console.log("You Lose!");
    } else {
        console.log("DRAW!");
    }
}